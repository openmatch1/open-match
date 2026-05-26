
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use("/stripe-webhook", express.raw({ type: "application/json" }));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5050;
const JWT_SECRET = process.env.JWT_SECRET || "change-this-secret";

// Demo in-memory data. Replace with PostgreSQL/Supabase/Firebase for production.
const users = [];
const profiles = [];
const likes = [];
const matches = [];
const messages = [];

function auth(req, res, next) {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Missing token" });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

function openChemistryScore(a, b) {
  // Different from normal dating apps:
  // does NOT require same interests. It rewards emotional direction + curiosity gap.
  const sameGoal = a.intent === b.intent ? 25 : 12;
  const distanceCuriosity = Math.abs((a.energy || 5) - (b.energy || 5)) >= 2 ? 25 : 10;
  const shared = (a.interests || []).filter(x => (b.interests || []).includes(x)).length * 5;
  const differenceBonus = Math.max(0, 30 - shared);
  const communication = a.communication === b.communication ? 20 : 10;
  return Math.min(99, sameGoal + distanceCuriosity + differenceBonus + communication);
}

app.get("/", (req, res) => res.json({ status: "Open Match API running" }));

app.post("/auth/register", async (req, res) => {
  const { email, password, name, age } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: "Missing fields" });
  if (users.find(u => u.email === email)) return res.status(409).json({ error: "Email already exists" });

  const id = uuid();
  const passwordHash = await bcrypt.hash(password, 10);
  users.push({ id, email, passwordHash });
  profiles.push({
    id,
    name,
    age,
    city: "",
    bio: "",
    intent: "Serious relationship",
    interests: [],
    energy: 5,
    communication: "Direct",
    photos: []
  });

  const token = jwt.sign({ id, email }, JWT_SECRET);
  res.json({ token });
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: "Invalid login" });
  }
  const token = jwt.sign({ id: user.id, email }, JWT_SECRET);
  res.json({ token });
});

app.get("/profiles/me", auth, (req, res) => {
  res.json(profiles.find(p => p.id === req.user.id));
});

app.put("/profiles/me", auth, (req, res) => {
  const index = profiles.findIndex(p => p.id === req.user.id);
  profiles[index] = { ...profiles[index], ...req.body, id: req.user.id };
  res.json(profiles[index]);
});

app.get("/discover", auth, (req, res) => {
  const me = profiles.find(p => p.id === req.user.id);
  const candidates = profiles
    .filter(p => p.id !== req.user.id)
    .map(p => ({ ...p, openChemistry: openChemistryScore(me, p) }))
    .sort((a, b) => b.openChemistry - a.openChemistry);

  res.json(candidates);
});

app.post("/likes", auth, (req, res) => {
  const { likedUserId, superLike } = req.body;
  likes.push({ id: uuid(), from: req.user.id, to: likedUserId, superLike: !!superLike });

  const reciprocal = likes.find(l => l.from === likedUserId && l.to === req.user.id);
  if (reciprocal || superLike) {
    const match = { id: uuid(), users: [req.user.id, likedUserId], createdAt: new Date().toISOString() };
    matches.push(match);
    return res.json({ matched: true, match });
  }
  res.json({ matched: false });
});

app.get("/matches", auth, (req, res) => {
  const myMatches = matches.filter(m => m.users.includes(req.user.id));
  res.json(myMatches);
});

app.get("/messages/:matchId", auth, (req, res) => {
  res.json(messages.filter(m => m.matchId === req.params.matchId));
});

app.post("/messages/:matchId", auth, (req, res) => {
  const msg = { id: uuid(), matchId: req.params.matchId, from: req.user.id, text: req.body.text, createdAt: new Date().toISOString() };
  messages.push(msg);
  res.json(msg);
});

app.post("/ai/coach", auth, async (req, res) => {
  // Production: connect OpenAI here on the server only.
  // Never expose API keys in frontend code.
  const { situation } = req.body;
  res.json({
    answer: `Keep it confident, respectful, and simple. Based on: "${situation}", send a message that shows interest without chasing.`
  });
});

app.post("/safety/report", auth, (req, res) => {
  res.json({ received: true, message: "Report received. Add admin moderation dashboard in production." });
});
app.post("/stripe-webhook", (req, res) => {
const sig = req.headers["stripe-signature"];

let event;

try {
event = stripe.webhooks.constructEvent(
req.body,
sig,
process.env.STRIPE_WEBHOOK_SECRET
);
} catch (err) {
console.log("Webhook signature failed:", err.message);
return res.status(400).send(`Webhook Error: ${err.message}`);
}

if (event.type === "checkout.session.completed") {
const session = event.data.object;

console.log("Payment successful!");
console.log(session);

// TODO:
// Upgrade user subscription here
}

if (event.type === "customer.subscription.deleted") {
console.log("Subscription cancelled");
}

res.json({ received: true });
});

app.listen(PORT, () => console.log(`Open Match API running on port ${PORT}`));

