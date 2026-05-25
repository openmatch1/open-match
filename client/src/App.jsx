
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Heart, X, MessageCircle, Sparkles, Crown, ShieldCheck, Search,
  MapPin, Star, Zap, User, Settings, Send, Flame, Eye, Brain, Lock
} from "lucide-react";
import "./styles.css";
import { createClient } from '@supabase/supabase-js'
const API_URL = "http://localhost:5050";
const supabase = createClient(
import.meta.env.VITE_SUPABASE_URL,
import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)
const seedProfiles = [
  {
    id: "p1",
    name: "Ariana",
    age: 27,
    city: "Orlando, FL",
    distance: "8 miles away",
    vibe: "Bold, funny, loyal",
    intent: "Long-term",
    photos: ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"],
    bio: "I like ambition, deep talks, good food, and people who actually know what they want.",
    prompts: ["Best Sunday: beach, brunch, and no drama.", "Green flag: consistency."],
    interests: ["Business", "Fitness", "Travel"],
    openChemistry: 97,
    sharedInterestScore: 21,
    aiReason: "Not a clone of your interests — high contrast chemistry. Your drive balances her creative confidence."
  },
  {
    id: "p2",
    name: "Mia",
    age: 25,
    city: "Tampa, FL",
    distance: "42 miles away",
    vibe: "Sweet, adventurous, confident",
    intent: "Serious relationship",
    photos: ["https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80"],
    bio: "I’m into spontaneous trips, family, music, and building a peaceful life.",
    prompts: ["My simple pleasure: night drives.", "Date idea: sushi and arcade."],
    interests: ["Music", "Family", "Adventure"],
    openChemistry: 92,
    sharedInterestScore: 34,
    aiReason: "Different interests, same emotional direction. Strong lifestyle curiosity match."
  },
  {
    id: "p3",
    name: "Natalia",
    age: 29,
    city: "Miami, FL",
    distance: "190 miles away",
    vibe: "Elegant, driven, direct",
    intent: "Marriage-minded",
    photos: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"],
    bio: "I love high standards, travel, fitness, and people with vision.",
    prompts: ["I’m impressed by: discipline.", "Don’t match if: you hate honesty."],
    interests: ["Luxury travel", "Fitness", "Real estate"],
    openChemistry: 89,
    sharedInterestScore: 67,
    aiReason: "High ambition match with enough difference to keep curiosity alive."
  },
  {
    id: "p4",
    name: "Sophia",
    age: 24,
    city: "Ocala, FL",
    distance: "14 miles away",
    vibe: "Creative, soft, spiritual",
    intent: "Friendship first",
    photos: ["https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=80"],
    bio: "Painter, dog mom, slow mornings, coffee, and old movies.",
    prompts: ["Random skill: I can paint anything.", "Ideal date: farmers market."],
    interests: ["Art", "Dogs", "Coffee"],
    openChemistry: 95,
    sharedInterestScore: 8,
    aiReason: "Opposite-world chemistry. The system thinks curiosity could beat common interests here."
  }
];

const fakeMessages = [
  { from: "them", text: "Hey, your profile actually feels real 😂" },
  { from: "me", text: "That might be the best compliment on a dating app." },
  { from: "them", text: "So what’s your ideal first date?" }
];

function Landing({ enter }) {
  return (
    <main className="landing">
      <nav className="topnav">
        <div className="brand"><div className="ring"></div><span>Open Match</span></div>
        <div className="navlinks">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <button onClick={enter}>Launch App</button>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="pill"><Sparkles size={16}/> AI dating without the boring clone-matching</p>
          <h1>Stop matching with copies of yourself.</h1>
          <p className="lead">
            Open Match is a dating platform built around open chemistry. You can match with people who are different from you,
            because attraction is not always about liking the same movies, gyms, or restaurants.
          </p>
          <div className="heroActions">
            <button className="primary" onClick={enter}>Enter Open Match</button>
            <button className="ghost">View Demo</button>
          </div>
          <div className="metrics">
            <div><strong>Open Match</strong><span>Different interests allowed</span></div>
            <div><strong>AI Coach</strong><span>Texts, dates, profile help</span></div>
            <div><strong>Real Intent</strong><span>Filter by relationship goal</span></div>
          </div>
        </div>

        <div className="heroStack">
          <div className="glassCard profilePreview">
            <img src={seedProfiles[0].photos[0]} />
            <div className="profileOverlay">
              <h2>Ariana, 27</h2>
              <p><MapPin size={14}/> Orlando • Open Chemistry 97%</p>
            </div>
          </div>
          <div className="floating aiFloat">
            <Brain/> AI says: “You do not share many interests — that may be the point.”
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Everything a serious dating app needs</h2>
        <div className="featureGrid">
          <Feature icon={<Flame/>} title="Swipe Discovery" text="Like, pass, superlike, rewind, and discover profiles." />
          <Feature icon={<MessageCircle/>} title="Match + Chat" text="Mutual likes unlock a chat screen with AI icebreakers." />
          <Feature icon={<Brain/>} title="Open Chemistry AI" text="Ranks chemistry even when interests do not match." />
          <Feature icon={<ShieldCheck/>} title="Safety Layer" text="Report, block, verification placeholders, and moderation-ready backend." />
          <Feature icon={<Crown/>} title="Premium Plans" text="Subscription screen for boosts, superlikes, and premium filters." />
          <Feature icon={<Zap/>} title="Boost Mode" text="Demo visibility boosts and profile spotlight positioning." />
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Memberships</h2>
        <div className="priceGrid">
          <Plan name="Free" price="$0" perks={["Swipe profiles", "Limited likes", "Basic chat"]}/>
          <Plan name="Plus" price="$19/mo" perks={["Unlimited likes", "AI icebreakers", "Rewind", "More filters"]} hot/>
          <Plan name="Elite" price="$49/mo" perks={["Boosts", "Top placement", "Advanced AI coach", "Priority matching"]}/>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return <div className="feature"><div className="featureIcon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}

function Plan({ name, price, perks, hot }) {
  return <div className={"plan " + (hot ? "hot" : "")}>
    <h3>{name}</h3><strong>{price}</strong>
    {perks.map(p => <p key={p}>✓ {p}</p>)}
    <button>{hot ? "Start Plus" : "Choose"}</button>
  </div>
}

function AppShell() {
  const [screen, setScreen] = useState("discover");
  const [profiles, setProfiles] = useState(seedProfiles);
  const [current, setCurrent] = useState(0);
  const [matches, setMatches] = useState([seedProfiles[1]]);
  const [chatText, setChatText] = useState("");
  const [messages, setMessages] = useState(fakeMessages);
  const [coachText, setCoachText] = useState("");
  const [coachAnswer, setCoachAnswer] = useState("");

  const profile = profiles[current % profiles.length];

async function like(superLike=false) {

const shouldMatch =
superLike || profile.openChemistry > 90;

if (
shouldMatch &&
!matches.find((m) => m.id === profile.id)
) {
setMatches([profile, ...matches]);
}
const { data: existingLike } = await supabase
.from("likes")
.select("*")
.eq("liker_email", profile.name + "@openmatch.ai")
.eq("liked_email", "anthony@test.com")
.single();

if (existingLike) {

await supabase.from("matches").insert([
{
user_one: "anthony@test.com",
user_two: profile.name + "@openmatch.ai"
}
]);

alert("It's a match!");
}
await supabase.from("likes").insert([
{
liker_email: "anthony@test.com",
liked_email: profile.name + "@openmatch.ai"
}
]);

setCurrent(current + 1);
} 

  function pass() {
    setCurrent(current + 1);
  }

  function sendMessage() {
    if (!chatText.trim()) return;
    setMessages([...messages, { from: "me", text: chatText }]);
    setChatText("");
  }

  function generateCoach() {
    if (!coachText.trim()) return;
    setCoachAnswer("Say it confident and simple. Try: “I like your vibe. I’d rather actually meet than text forever — are you free this week for coffee or dinner?”");
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand sideBrand"><div className="ring"></div><span>Open Match</span></div>
        <SideBtn active={screen==="discover"} onClick={()=>setScreen("discover")} icon={<Flame/>} label="Discover"/>
        <SideBtn active={screen==="matches"} onClick={()=>setScreen("matches")} icon={<Heart/>} label="Matches"/>
        <SideBtn active={screen==="chat"} onClick={()=>setScreen("chat")} icon={<MessageCircle/>} label="Chat"/>
        <SideBtn active={screen==="coach"} onClick={()=>setScreen("coach")} icon={<Brain/>} label="AI Coach"/>
        <SideBtn active={screen==="premium"} onClick={()=>setScreen("premium")} icon={<Crown/>} label="Premium"/>
        <SideBtn active={screen==="profile"} onClick={()=>setScreen("profile")} icon={<User/>} label="My Profile"/>
        <SideBtn active={screen==="settings"} onClick={()=>setScreen("settings")} icon={<Settings/>} label="Settings"/>
      </aside>

      <main className="appMain">
        {screen === "discover" && <Discover profile={profile} like={like} pass={pass}/>}
        {screen === "matches" && <Matches matches={matches} openChat={()=>setScreen("chat")}/>}
        {screen === "chat" && <Chat messages={messages} text={chatText} setText={setChatText} send={sendMessage}/>}
        {screen === "coach" && <Coach coachText={coachText} setCoachText={setCoachText} generateCoach={generateCoach} coachAnswer={coachAnswer}/>}
        {screen === "premium" && <Premium/>}
        {screen === "profile" && <MyProfile/>}
        {screen === "settings" && <SettingsScreen/>}
      </main>
    </div>
  );
}

function SideBtn({ active, onClick, icon, label }) {
  return <button className={"sideBtn " + (active ? "active" : "")} onClick={onClick}>{icon}<span>{label}</span></button>
}

function Discover({ profile, like, pass }) {
  return <section className="discover">
    <div className="discoverTop">
      <div>
        <h1>Discover</h1>
        <p>Open Chemistry mode: match beyond identical interests.</p>
      </div>
      <button className="filterBtn"><Search/> Filters</button>
    </div>

    <div className="swipeWrap">
      <div className="swipeCard">
        <img src={profile.photos[0]} />
        <div className="swipeInfo">
          <h2>{profile.name}, {profile.age}</h2>
          <p><MapPin size={15}/> {profile.city} • {profile.distance}</p>
          <p className="bio">{profile.bio}</p>
          <div className="tagRow">
            <span>{profile.intent}</span>
            <span>{profile.vibe}</span>
            {profile.interests.map(i => <span key={i}>{i}</span>)}
          </div>
        </div>
      </div>

      <div className="aiPanel">
        <p className="pill"><Brain size={16}/> AI Chemistry</p>
        <h3>{profile.openChemistry}% Open Chemistry</h3>
        <div className="progress"><div style={{width: profile.openChemistry + "%"}}></div></div>
        <p><strong>Shared interest score:</strong> {profile.sharedInterestScore}%</p>
        <p>{profile.aiReason}</p>
        <div className="promptBox">
          <strong>AI opener:</strong>
          <p>“You seem different from what I usually go for — and that’s actually interesting. What’s something people misunderstand about you?”</p>
        </div>
        <div className="actions">
          <button className="no" onClick={pass}><X/></button>
          <button className="super" onClick={()=>like(true)}><Star/></button>
          <button className="yes" onClick={()=>like(false)}><Heart/></button>
        </div>
      </div>
    </div>
  </section>
}

function Matches({ matches, openChat }) {
  return <section>
    <h1>Your Matches</h1>
    <p>People who matched with your vibe, not just your hobbies.</p>
    <div className="matchGrid">
      {matches.map(m => <div className="matchCard" key={m.id}>
        <img src={m.photos[0]} />
        <h3>{m.name}, {m.age}</h3>
        <p>{m.city}</p>
        <p>{m.openChemistry}% Open Chemistry</p>
        <button onClick={openChat}>Message</button>
      </div>)}
    </div>
  </section>
}

function Chat({ messages, text, setText, send }) {
  return <section className="chatScreen">
    <h1>Messages</h1>
    <div className="chatBox">
      {messages.map((m,i)=><div key={i} className={"bubble " + m.from}>{m.text}</div>)}
    </div>
    <div className="composer">
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Write a message..." />
      <button onClick={send}><Send/></button>
    </div>
    <div className="promptBox">
      <strong>AI Icebreaker:</strong> Ask something emotionally specific, not boring. Example:
      “What kind of relationship makes you feel safe but still excited?”
    </div>
  </section>
}

function Coach({ coachText, setCoachText, generateCoach, coachAnswer }) {
  return <section>
    <h1>AI Dating Coach</h1>
    <p>Get help with texting, profiles, red flags, date ideas, and confidence.</p>
    <textarea value={coachText} onChange={e=>setCoachText(e.target.value)} placeholder="Example: What should I say after matching with someone who seems very different from me?" />
    <button className="primary" onClick={generateCoach}>Generate Advice</button>
    {coachAnswer && <div className="coachAnswer">{coachAnswer}</div>}
  </section>
}

function Premium() {
  return <section>
    <h1>Premium</h1>
    <p>Monetization screen ready for Stripe connection.</p>
    <div className="priceGrid appPrices">
      <Plan name="Free" price="$0" perks={["Limited likes", "Basic profile", "Basic chat"]}/>
      <Plan name="Plus" price="$19/mo" perks={["Unlimited likes", "Rewind", "AI icebreakers", "Open Chemistry filters"]} hot/>
      <Plan name="Elite" price="$49/mo" perks={["Boost mode", "See who likes you", "Priority discovery", "Advanced AI coach"]}/>
    </div>
  </section>
}

function MyProfile() {
const [name, setName] = useState("Anthony")
const [age, setAge] = useState(27)
const [goal, setGoal] = useState("Serious relationship")
const [bio, setBio] = useState(
"Ambitious, loyal, building something real. Looking for chemistry, not a copy of myself."
)

async function saveProfile() {
const { error } = await supabase
.from("profiles")
.upsert([
{
name,
age,
bio,
city: "Orlando",
email: "anthony@test.com",
interests: ["business", "fitness", "travel"]
}
], { onConflict: "email" })

if (error) {
alert(error.message)
} else {
alert("Profile saved successfully")
}
}

return (
<section>
<h1>My Profile</h1>

<div className="settingsPanel">

<label>Name</label>
<input
value={name}
onChange={(e) => setName(e.target.value)}
/>

<label>Age</label>
<input
value={age}
onChange={(e) => setAge(e.target.value)}
/>

<label>Relationship Goal</label>
<select
value={goal}
onChange={(e) => setGoal(e.target.value)}
>
<option>Serious relationship</option>
<option>Marriage-minded</option>
<option>Casual dating</option>
</select>

<label>Bio</label>
<textarea
value={bio}
onChange={(e) => setBio(e.target.value)}
/>

<button
className="primary"
onClick={saveProfile}
>
Save Profile
</button>

</div>
</section>
)
}

function SettingsScreen() {
  return <section>
    <h1>Settings & Safety</h1>
    <div className="settingsPanel">
      <p><ShieldCheck/> Photo verification placeholder</p>
      <p><Lock/> Privacy controls placeholder</p>
      <p><Eye/> Visibility and boost settings placeholder</p>
      <button>Block List</button>
      <button>Report a User</button>
      <button>Delete Account</button>
    </div>
  </section>
}
function AuthScreen({ setUser }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function signUp() {
const { data, error } = await supabase.auth.signUp({
email,
password
});

if (error) {
alert(error.message);
} else {
alert("Account created successfully");
setUser(data.user);
}
}

async function signIn() {
const { data, error } = await supabase.auth.signInWithPassword({
email,
password
});

if (error) {
alert(error.message);
} else {
alert("Logged in successfully");
setUser(data.user);
}
}

return (
<section>
<h1>Login / Sign Up</h1>

<div className="settingsPanel">

<label>Email</label>
<input
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<label>Password</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>

<button
className="primary"
onClick={signIn}
>
Login
</button>

<button onClick={signUp}>
Create Account
</button>

</div>
</section>
);
}

function Root() {
const [entered, setEntered] = useState(false);
const [user, setUser] = useState(null);

if (!entered) {
return <Landing enter={() => setEntered(true)} />;
}

if (!user) {
return <AuthScreen setUser={setUser} />;
}

return <AppShell />;
}

createRoot(document.getElementById("root")).render(<Root />);
