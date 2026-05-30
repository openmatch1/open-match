
import React, { useMemo, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  Heart, X, MessageCircle, Sparkles, Crown, ShieldCheck, Search,
  MapPin, Star, Zap, User, Settings, Send, Flame, Eye, Brain, Lock
} from "lucide-react";
import "./styles.css";
import { createClient } from '@supabase/supabase-js'
const API_URL = "https://open-match-backend.onrender.com";
const supabase = createClient(
import.meta.env.VITE_SUPABASE_URL,
import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)
const seedProfiles = [
{
id: "p1",
name: "Emma",
age: 26,
city: "Orlando, FL",
distance: "8 miles away",
vibe: "Adventurous, funny, loyal",
intent: "Long-term",
photos: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330"],
bio: "Coffee addict and beach lover looking for something real.",
interests: ["Travel", "Fitness", "Food"],
openChemistry: 91,
sharedInterestScore: 78,
aiReason: "Strong compatibility through lifestyle and relationship goals."
},
{
id: "p2",
name: "Sophia",
age: 24,
city: "Tampa, FL",
distance: "15 miles away",
vibe: "Creative, caring, ambitious",
intent: "Relationship",
photos: ["https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"],
bio: "Always planning my next adventure and looking for a genuine connection.",
interests: ["Art", "Travel", "Dogs"],
openChemistry: 88,
sharedInterestScore: 73,
aiReason: "Shared interests and compatible communication styles."
},
{
id: "p3",
name: "Noah",
age: 28,
city: "Jacksonville, FL",
distance: "12 miles away",
vibe: "Driven, outgoing, funny",
intent: "Long-term",
photos: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e"],
bio: "Business owner who loves fitness and meeting new people.",
interests: ["Business", "Gym", "Travel"],
openChemistry: 86,
sharedInterestScore: 69,
aiReason: "Strong personality match and similar ambitions."
},
{
id: "p4",
name: "Ava",
age: 25,
city: "Miami, FL",
distance: "20 miles away",
vibe: "Energetic, social, adventurous",
intent: "Dating",
photos: ["https://images.unsplash.com/photo-1517841905240-472988babdf9"],
bio: "Looking for someone who can keep up with my energy.",
interests: ["Travel", "Music", "Fitness"],
openChemistry: 90,
sharedInterestScore: 75,
aiReason: "High compatibility in lifestyle and interests."
},
{
id: "p5",
name: "Liam",
age: 29,
city: "Ocala, FL",
distance: "6 miles away",
vibe: "Relaxed, confident, loyal",
intent: "Relationship",
photos: ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"],
bio: "Enjoys fishing, traveling, and spending time outdoors.",
interests: ["Fishing", "Outdoors", "Travel"],
openChemistry: 84,
sharedInterestScore: 67,
aiReason: "Compatible values and shared outdoor interests."
},
{
id: "p6",
name: "Olivia",
age: 27,
city: "Fort Lauderdale, FL",
distance: "18 miles away",
vibe: "Elegant, funny, ambitious",
intent: "Long-term",
photos: ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80"],
bio: "Love good food, good conversations, and good people.",
interests: ["Food", "Travel", "Business"],
openChemistry: 92,
sharedInterestScore: 81,
aiReason: "Exceptional compatibility across multiple categories."
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
     <div className="brand">
<img
src="/openmatch-logo.png"
alt="Open Match"
className="brandLogo"
style={{ width: "80px" }}
/>
</div>  
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
            <button className="primary" onClick={enter}>
Create Profile
</button>
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

function Plan({ name, price, perks, hot, userPlan }) {
const rank = { Free: 0, Plus: 1, Elite: 2 };
const currentRank = rank[userPlan?.charAt(0).toUpperCase() + userPlan?.slice(1)] ?? 0;
const planRank = rank[name];

const buttonText =
currentRank === planRank ? "Current Plan" :
currentRank > planRank ? "Included" :
"Upgrade";

return (
<div className={"plan " + (hot ? "hot" : "")}>
<h3>{name}</h3>
<strong>{price}</strong>
{perks.map(p => <p key={p}>✓ {p}</p>)}

<button
onClick={() => {
const link =
name === "Elite"
? "https://buy.stripe.com/4gM7sMei0eCBc0NfHv9IQ03"
: name === "Plus"
? "https://buy.stripe.com/9B66oIei03XXgh37aZ9IQ04"
: "#";

if (buttonText === "Upgrade" && link !== "#") {
window.open(link, "_blank");
}
}}
>
{buttonText}
</button>
</div>
);
}


function AppShell({ user }) {
 const [screen, setScreen] = useState("discover");
const [profiles, setProfiles] = useState(seedProfiles);
  const [userPlan, setUserPlan] = useState("free");
  console.log("USER OBJECT:", user);
  useEffect(() => {
async function loadUserPlan() {
if (!user?.email) return;

const { data, error } = await supabase
.from("profiles")
.select("plan")
.eq("email", user.email)
.single();

if (!error && data?.plan) {
setUserPlan(data.plan);
}
}

loadUserPlan();
}, [user]);
  const [messages, setMessages] = useState([]);
  const [profileIndex, setProfileIndex] = useState(0);
  const [swipesToday, setSwipesToday] = useState(0);
const FREE_SWIPE_LIMIT = 10;
const [profile, setProfile] = useState(null);
const [showMatch, setShowMatch] = useState(false);
  const [filters, setFilters] = useState({
minAge: 18,
maxAge: 99,
city: ""
});

  const [onboarding, setOnboarding] = useState({
name: "",
age: "",
city: "",
bio: "",
interests: "",
photo: ""
});
  useEffect(() => {
async function loadMessages() {
const { data } = await supabase
.from("messages")
.select("*")
.order("created_at", { ascending: true });

if (data) {
const formatted = data.map((m) => ({
from:
m.sender_email === user?.email
? "me"
: "them",
text: m.message
}));

setMessages(formatted);
}
}
async function loadProfiles() {

const { data } = await supabase
.from("profiles")
.select("*");

if (data) {

const formatted = data.map((p, index) => ({
id: "real-" + index,
name: p.name || "Unknown",
age: p.age || 18,
city: p.city || "Unknown",
distance: "",
vibe: "Real user",
intent: p.intent || "Relationship",
photos: p.avatar && p.avatar.startsWith("http")
? [p.avatar]
: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"],
bio: p.bio || "",
prompts: [],
interests: Array.isArray(p.interests) ? p.interests : [],
openChemistry: 95,
sharedInterestScore: 50,
aiReason: "AI generated compatibility.",
}));
const filtered = formatted.filter((p) => {
return (
p.age >= filters.minAge &&
p.age <= filters.maxAge &&
(filters.city === "" ||
p.city?.toLowerCase().includes(filters.city.toLowerCase()))
);
});
const currentUser = formatted.find(
(p) => p.email === user?.email
);

if (currentUser) {
setScreen("discover");
setProfile(currentUser);
}

if (currentUser?.plan) {
setUserPlan(currentUser.plan);
}


const allProfiles = [...filtered, ...seedProfiles];

setProfiles(allProfiles);
setProfile(allProfiles[0]);
}
}

loadProfiles();
loadMessages();

}, [filters]);

  const [current, setCurrent] = useState(0);
  const [matches, setMatches] = useState([]);
  const [likes, setLikes] = useState([]);
  const [chatText, setChatText] = useState("");
  const [selectedMatch, setSelectedMatch] = useState(null);
useEffect(() => {
async function loadMatches() {
const myEmail = user?.email;

const { data } = await supabase
.from("matches")
.select("*")
.or(`user_one.eq.${myEmail},user_two.eq.${myEmail}`);

if (data) {
setMatches(data);
}
}
 async function loadLikes() {
const { data } = await supabase
.from("likes")
.select("*")
.eq("liked_email", user?.email);

if (data) {
setLikes(data);
}
} 
async function loadMessages() {
if (!selectedMatch) {
setMessages([]);
return;
}
const { data } = await supabase
.from("messages")
.select("*")
.or(
`and(sender_email.eq.${user?.email},receiver_email.eq.${selectedMatch?.user_two}),and(sender_email.eq.${selectedMatch?.user_two},receiver_email.eq.${user?.email})`
)
.order("created_at", { ascending: true });

if (data) {

const formatted = data.map((msg) => ({
from:
msg.sender_email === user?.email
? "me"
: "them",

text: msg.message
}));

setMessages(formatted);
}
}

loadMessages();
const channel = supabase
.channel("messages-live")
.on(
"postgres_changes",
{
event: "INSERT",
schema: "public",
table: "messages"
},
(payload) => {
const msg = payload.new;

setMessages((current) => [
...current,
{
from:
msg.sender_email === user?.email
? "me"
: "them",
text: msg.message
}
]);
}
)
.subscribe();

return () => {
supabase.removeChannel(channel);
};

}, [selectedMatch, user?.email]);
  const [coachText, setCoachText] = useState("");
  const [coachAnswer, setCoachAnswer] = useState("");
  const [lastProfileIndex, setLastProfileIndex] = useState(null);

async function like(superLike=false) {
if (
userPlan === "free" &&
swipesToday >= FREE_SWIPE_LIMIT
) {
alert("Daily swipe limit reached. Upgrade to Plus.");
setScreen("premium");
return;
}
const shouldMatch =
superLike || profile.openChemistry > 90;

if (
shouldMatch &&
!matches.find((m) => m.id === profile.id)
) {
setMatches([profile, ...matches]);
}

const otherEmail = profile.name + "@openmatch.ai";
const myEmail = user?.email;

const { data: existingLikes, error: checkError } =
await supabase
.from("likes")
.select("*")
.eq("liker_email", otherEmail)
.eq("liked_email", myEmail);

if (checkError) {
alert(checkError.message);
return;
}

const existingLike =
existingLikes && existingLikes.length > 0;

if (existingLike) {

await supabase.from("matches").insert([
{
user_one: myEmail,
user_two: otherEmail
}
]);

alert("It's a match!");
 setShowMatch(true);

setTimeout(() => {
setShowMatch(false);
}, 2500); 
}

await supabase.from("likes").insert([
{
liker_email: myEmail,
liked_email: otherEmail
}
]);
setLastProfileIndex(profileIndex);
setSwipesToday((s) => s + 1);
  
setProfileIndex((current) => {
const next = current + 1 >= profiles.length ? 0 : current + 1;
setProfile(profiles[next]);
return next;
});
}

 function pass() {
if (
userPlan === "free" &&
swipesToday >= FREE_SWIPE_LIMIT
) {
alert("Daily swipe limit reached. Upgrade to Plus.");
setScreen("premium");
return;
}
setLastProfileIndex(profileIndex);
setSwipesToday((s) => s + 1);
setProfileIndex((current) => {
const next =
current + 1 >= profiles.length
? 0
: current + 1;

setProfile(profiles[next]);

return next;
});
}
  async function sendMessage() {

if (!chatText.trim()) return;

const newMessage = {
from: "me",
text: chatText
};

setMessages([...messages, newMessage]);

await supabase.from("messages").insert([
{
sender_email: user?.email,
receiver_email: selectedMatch?.user_two,
message: chatText
}
]);

setChatText("");
}
function rewind() {
if (userPlan !== "plus" && userPlan !== "elite") {
alert("Rewind is only available for Plus and Elite members.");
setScreen("premium");
return;
}

if (lastProfileIndex === null) {
alert("No profile to rewind.");
return;
}

setProfileIndex(lastProfileIndex);
setProfile(profiles[lastProfileIndex]);
setLastProfileIndex(null);
}
async function generateCoach() {
if (!coachText.trim()) return;

setCoachAnswer("Thinking...");

try {
const res = await fetch(`${API_URL}/api/coach`, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
message: coachText,
userEmail: user?.email
})
});

const data = await res.json();

setCoachAnswer(data.reply || "I couldn't generate a response.");
} catch (err) {
console.error(err);
setCoachAnswer("AI Coach is not connected yet. Check the backend.");
}
}  

  return (
    <div className="app">
      {showMatch && (
<div className="matchPopup">
<h1>💖 It’s a Match!</h1>
<p>You and {profile.name} liked each other.</p>
</div>
)}
      <aside className="sidebar">
        <div className="brand sideBrand">
<img src="/openmatch-logo.png" alt="Open Match" className="sideLogo" />
</div>
        <SideBtn active={screen==="discover"} onClick={()=>setScreen("discover")} icon={<Flame/>} label="Discover"/>
        <SideBtn active={screen==="matches"} onClick={()=>setScreen("matches")} icon={<Heart/>} label="Matches"/>
        <SideBtn
active={screen==="likes"}
onClick={() => setScreen("likes")}
icon={<Heart/>}
label="Likes You"
/>
        <SideBtn active={screen==="chat"} onClick={()=>setScreen("chat")} icon={<MessageCircle/>} label="Chat"/>
        <SideBtn active={screen==="coach"} onClick={()=>setScreen("coach")} icon={<Brain/>} label="AI Coach"/>
        <SideBtn active={screen==="premium"} onClick={()=>setScreen("premium")} icon={<Crown/>} label="Premium"/>
        <SideBtn active={screen==="profile"} onClick={()=>setScreen("profile")} icon={<User/>} label="My Profile"/>
        <SideBtn active={screen==="settings"} onClick={()=>setScreen("settings")} icon={<Settings/>} label="Settings"/>
      </aside>

      <main className="appMain">
        {screen === "onboarding" && (
<Onboarding
user={user}
onboarding={onboarding}
setOnboarding={setOnboarding}
finish={() => setScreen("discover")}
/>
)}
  {screen === "discover" && (
<Discover
profile={profile}
like={like}
pass={pass}
rewind={rewind}
userPlan={userPlan}
/>
)}     
       {screen === "matches" && (
<Matches
matches={matches}
 selectedMatch={selectedMatch} 
setSelectedMatch={setSelectedMatch}
openChat={() => setScreen("chat")}
/>
)}
  {screen === "likes" && (
<LikesScreen
likes={likes}
userPlan={userPlan}
setPage={setScreen}
/>
)}     
   {screen === "chat" && (
<Chat
messages={messages}
setMessages={setMessages}
text={chatText}
setText={setChatText}
user={user}
matches={matches}
  selectedMatch={selectedMatch}
  userPlan={userPlan}
/>
)}
     
        {screen === "coach" && <Coach coachText={coachText} setCoachText={setCoachText} generateCoach={generateCoach} coachAnswer={coachAnswer} userPlan={userPlan} setPage={setScreen}/>}
        {screen === "premium" && <Premium userPlan={userPlan} user={user} />}
        {screen === "profile" && <MyProfile user={user} />}
        {screen === "settings" && (
<SettingsScreen
filters={filters}
setFilters={setFilters}
userPlan={userPlan}
setScreen={setScreen}
/>
)}
 {screen === "privacy" && <PrivacyPolicy setScreen={setScreen} />}

{screen === "terms" && <TermsPage setScreen={setScreen} />}

<div className="bottom-tabs">
<button className={screen === "discover" ? "active" : ""} onClick={() => setScreen("discover")}>
<span className="tab-icon">🔥</span>
<span>Discover</span>
</button>

<button className={screen === "matches" ? "active" : ""} onClick={() => setScreen("matches")}>
<span className="tab-icon">❤️</span>
<span>Matches</span>
</button>

<button className={screen === "chat" ? "active" : ""} onClick={() => setScreen("chat")}>
<span className="tab-icon">💬</span>
<span>Chat</span>
</button>

<button className={screen === "coach" ? "active" : ""} onClick={() => setScreen("coach")}>
<span className="tab-icon">🧠</span>
<span>Coach</span>
</button>

<button className={screen === "premium" ? "active" : ""} onClick={() => setScreen("premium")}>
<span className="tab-icon">👑</span>
<span>Premium</span>
</button>

<button className={screen === "profile" ? "active" : ""} onClick={() => setScreen("profile")}>
<span className="tab-icon">👤</span>
<span>Profile</span>
</button>

<button className={screen === "settings" ? "active" : ""} onClick={() => setScreen("settings")}>
<span className="tab-icon">⚙️</span>
<span>Settings</span>
</button>
</div>

</main>
      

  );
}
function Onboarding({ user, onboarding, setOnboarding, finish }) {
return (
<section className="onboarding">
<div className="glassCard onboardingCard">

<h1>Create Your Profile</h1>

<input
placeholder="Name"
value={onboarding.name}
onChange={(e) =>
setOnboarding({
...onboarding,
name: e.target.value
})
}
/>

<input
placeholder="Age"
value={onboarding.age}
onChange={(e) =>
setOnboarding({
...onboarding,
age: e.target.value
})
}
/>

<input
placeholder="City"
value={onboarding.city}
onChange={(e) =>
setOnboarding({
...onboarding,
city: e.target.value
})
}
/>

<textarea
placeholder="Bio"
value={onboarding.bio}
onChange={(e) =>
setOnboarding({
...onboarding,
bio: e.target.value
})
}
/>

<input
placeholder="Interests (comma separated)"
value={onboarding.interests}
onChange={(e) =>
setOnboarding({
...onboarding,
interests: e.target.value
})
}
/>


<input
type="file"
accept="image/*"
onChange={(e) =>
setOnboarding({
...onboarding,
photo: e.target.files[0]
})
}
/>

<button
className="primary"
onClick={async () => {
const fileName = Date.now() + "-" + onboarding.photo.name;

await supabase.storage
.from("profile-photos")
.upload(fileName, onboarding.photo);

const photoUrl =
supabase.storage
.from("profile-photos")
.getPublicUrl(fileName)
.data.publicUrl;
await supabase.from("profiles").insert([
{
email: user?.email,
plan: "free", 
name: onboarding.name,
age: Number(onboarding.age),
city: onboarding.city,
bio: onboarding.bio,
 photo: photoUrl, 
interests: onboarding.interests
.split(",")
.map(i => i.trim())
}
]);

finish();
}}
>
Launch Open Match
</button>


</div>
</section>
);
}

function SideBtn({ active, onClick, icon, label }) {
  return <button className={"sideBtn " + (active ? "active" : "")} onClick={onClick}>{icon}<span>{label}</span></button>
}

function Discover({ profile, like, pass, rewind, userPlan, canRewind }) {
if (!profile) {
return <section><h1>Loading profiles...</h1></section>;
}

const photo =
profile.photos?.[0] ||
"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80";

const canUseRewind = userPlan === "plus" || userPlan === "elite";

return (
<section className="discover">
<h1>Discover</h1>

<div className="profileCard">
<img src={photo} alt={profile.name} />

<div className="profileInfo">
<h2>{profile.name}, {profile.age}</h2>
<p>{profile.bio}</p>
<p>{profile.city}</p>
<p>Open Chemistry: {profile.openChemistry}%</p>
</div>
</div>

<div className="actionRow">
<button
onClick={() => {
if (!canUseRewind) {
alert("Rewind is for Plus and Elite members.");
return;
}
rewind();
}}
>
↩ Rewind
</button>

<button onClick={pass}>
✕ Pass
</button>

<button onClick={() => like(profile)}>
♥ Like
</button>
</div>
</section>
);
}


function LikesScreen({ likes, userPlan, setPage }) {
const isElite = userPlan === "elite";

if (!isElite) {
return (
<section>
<h1>People Who Like You</h1>
<div className="lockedCard">
<Lock />
<h2>Elite Only</h2>
<p>See who likes you is only available for Elite members.</p>
<button className="primary" onClick={() => setPage("premium")}>
Upgrade to Elite
</button>
</div>
</section>
);
}
  return (
<section>
<h1>People Who Like You</h1>

<div className="matchGrid">
{likes.map((like, index) => (
<div className="matchCard" key={index}>
<h3>{like.liker_email}</h3>
<p>Interested in your profile</p>
</div>
))}
</div>
</section>
);
}

function Matches({ matches, setSelectedMatch, openChat }) {
  return <section>
    <h1>Your Matches</h1>
    <p>People who matched with your vibe, not just your hobbies.</p>
    <div className="matchGrid">
{matches.map((m) => (
<div className="matchCard" key={m.id}>
<h3>{m.user_two}</h3>
<p>Matched user</p>
<p>Open Chemistry connection</p>
<button
onClick={() => {
setSelectedMatch(m);
openChat();
}}
>
Message
</button>
</div>
))}
    </div>
  </section>
}

function Chat({ messages, setMessages, text, setText, user, matches, selectedMatch, userPlan }) {
  const sendMessage = async () => {
if (!text.trim()) return;

const { error } = await supabase
.from("messages")
.insert({
sender_email: user?.email,
receiver_email: selectedMatch?.user_two || matches[0]?.user_two || "no-match",
message: text
});

if (error) {
console.log(error);
alert("Message failed");
return;
}

alert("Message sent");
setMessages((prev) => [
...prev,
{
from: "me",
text: text
}
]);    
setText("");
};
  return <section className="chatScreen">
    <h1>Messages</h1>
    <div className="chatBox">
      {messages.map((m,i)=><div key={i} className={"bubble " + m.from}>{m.text}</div>)}
    </div>
    <div className="composer">
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Write a message..." />
      <button onClick={sendMessage}><Send/></button>
    </div>
    {(userPlan === "plus" || userPlan === "elite") ? (
<div className="promptBox">
<strong>AI Icebreaker:</strong> Ask something emotionally specific, not boring. Example: “What kind of relationship makes you feel safe but still excited?”
</div>
) : (
<div className="promptBox lockedCard">
<strong>AI Icebreaker Locked</strong>
<p>Upgrade to Plus to unlock AI icebreaker suggestions.</p>
</div>
)}
  </section>
}

function Coach({ coachText, setCoachText, generateCoach, coachAnswer, userPlan, setPage }) {
const isElite = userPlan === "elite";

if (!isElite) {
return (
<section>
<h1>AI Dating Coach</h1>
<div className="lockedCard">
<Lock />
<h2>Elite Only</h2>
<p>Advanced AI Coach is only available for Elite members.</p>
<button className="primary" onClick={() => setPage("premium")}>
Upgrade to Elite
</button>
</div>
</section>
);
}
  return (
    <section>
    <h1>AI Dating Coach</h1>
    <p>Get help with texting, profiles, red flags, date ideas, and confidence.</p>
    <textarea value={coachText} onChange={e=>setCoachText(e.target.value)} placeholder="Example: What should I say after matching with someone who seems very different from me?" />
    <button className="primary" onClick={generateCoach}>Generate Advice</button>
    {coachAnswer && <div className="coachAnswer">{coachAnswer}</div>}
  </section>
);
}


function Premium({ userPlan, user }) {
async function manageSubscription() {
const res = await fetch(`${API_URL}/create-portal-session`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ email: user?.email }),
});

const data = await res.json();

if (data.url) {
window.location.href = data.url;
} else {
alert(data.error || "Could not open subscription portal");
}
}
async function activateBoost() {
if (userPlan !== "elite") {
alert("Boost Mode is only for Elite members.");
return;
}

const boostUntil = new Date(Date.now() + 30 * 60 * 1000).toISOString();

const { error } = await supabase
.from("profiles")
.update({ boost_until: boostUntil })
.eq("email", user.email);

if (error) {
alert("Could not activate boost.");
} else {
alert("Boost activated for 30 minutes!");
}
}
return (
<section>
<h1>Premium</h1>
<p>Your current plan: {userPlan}</p>
<p>Monetization screen ready for Stripe connection.</p>

<div className="priceGrid appPrices">
<Plan name="Free" price="$0" perks={["Limited likes", "Basic profile", "Basic chat"]} userPlan={userPlan} />

<Plan name="Plus" price="$19/mo" perks={["Unlimited likes", "Rewind", "AI icebreakers", "Open Chemistry filters"]} hot userPlan={userPlan} />

<Plan name="Elite" price="$49/mo" perks={["Boost mode", "See who likes you", "Priority discovery", "Advanced AI coach"]} userPlan={userPlan} />
</div>
{userPlan === "elite" && (
<button className="primary" onClick={activateBoost}>
Activate Boost Mode
</button>
)}
{userPlan !== "free" && (
<button onClick={manageSubscription}>
Manage Subscription
</button>
)}
</section>
);
}


function MyProfile({ user }) {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [goal, setGoal] = useState("Serious relationship")
const [bio, setBio] = useState("")
const [avatar, setAvatar] = useState("")
const [city, setCity] = useState("") 
 useEffect(() => {
async function loadProfile() {
if (!user?.email) return;

const { data, error } = await supabase
.from("profiles")
.select("*")
.eq("email", user.email)
.single();

if (error) {
console.log("No profile found yet:", error.message);
return;
}

setName(data.name || "");
setCity(data.city || ""); 
setAge(data.age || "");
setGoal(data.intent || "Serious relationship");
setBio(data.bio || "");
setAvatar(data.avatar || data.photo || "");
}

loadProfile();
}, [user]); 
const uploadPhoto = async (e) => {
const file = e.target.files[0];

if (!file) return;

const fileName = `${Date.now()}-${file.name}`;

const { error } = await supabase.storage
.from("profile-photos")
.upload(fileName, file);

if (error) {
console.log(error);
alert("Upload failed");
return;
}

const { data } = supabase.storage
.from("profile-photos")
.getPublicUrl(fileName);

setAvatar(data.publicUrl);

alert("Photo uploaded");
};
console.log("USER EMAIL:", user?.email);
console.log("FULL USER:", JSON.stringify(user, null, 2));
async function saveProfile() {
const { error } = await supabase
.from("profiles")
.upsert([
{
name,
age,
bio,
avatar,
city,
email: user?.email,
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
<label>Profile Photo</label>

<input
type="file"
accept="image/*"
onChange={uploadPhoto}
/>

{avatar && (
<img
src={avatar}
alt="Profile"
style={{
width: "160px",
borderRadius: "20px",
marginTop: "15px"
}}
/>
)}

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
<label>City / State</label>
<input
value={city}
onChange={(e) => setCity(e.target.value)}
placeholder="City, State"
/>
<label>Relationship Goal</label>
<select
value={goal}
onChange={(e) => setGoal(e.target.value)}
>
<option>Relationship</option>
<option>Marriage-minded</option>
<option>Casual dating</option>
<option>Hook-up</option>
<option>Friendship</option>
<option>Business networking</option>
<option>Partner</option>
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

function SettingsScreen({ filters, setFilters, userPlan, setScreen }) {
  const isPremium = userPlan === "plus" || userPlan === "elite";
  return <section>
    <h1>Settings & Safety</h1>
    <div className="settingsPanel">
      <label>Minimum Age</label>
<input
type="number"
value={filters.minAge}
  disabled={!isPremium}
onChange={(e) =>
setFilters({ ...filters, minAge: Number(e.target.value) })
}
/>

<label>Maximum Age</label>
<input
type="number"
value={filters.maxAge}
 disabled={!isPremium} 
onChange={(e) =>
setFilters({ ...filters, maxAge: Number(e.target.value) })
}
/>

<label>City</label>
<input
value={filters.city}
 disabled={!isPremium} 
onChange={(e) =>
setFilters({ ...filters, city: e.target.value })
}
/>
<button onClick={() => setScreen("privacy")}>
Privacy Policy
</button>

<button onClick={() => setScreen("terms")}>
Terms of Service
</button>      
    </div>
  </section>
}
function PrivacyPolicy({ setScreen }) {
return (
<section>
<h1>Privacy Policy</h1>

<p>Open Match respects your privacy.</p>

<p>
We collect account information, profile information,
photos, messages, and subscription information in order
to provide the Open Match service.
</p>

<p>
We do not sell your personal information.
</p>

<p>
You may request account deletion at any time.
</p>

<button onClick={() => setScreen("settings")}>
Back to Settings
</button>
</section>
);
}
function TermsPage({ setScreen }) {
return (
<section>
<h1>Terms of Service</h1>

<p>
You must be at least 18 years old to use Open Match.
</p>

<p>
Users are responsible for their profile content,
messages, and behavior.
</p>

<p>
Harassment, spam, fraud, and illegal activity are
prohibited.
</p>

<p>
Open Match may suspend or terminate accounts that
violate these terms.
</p>

<button onClick={() => setScreen("settings")}>
Back to Settings
</button>
</section>
);
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
useEffect(() => {
supabase.auth.getUser().then(({ data }) => {
setUser(data.user);
});

const { data: listener } = supabase.auth.onAuthStateChange(
(_event, session) => {
setUser(session?.user || null);
}
);

return () => {
listener.subscription.unsubscribe();
};
}, []);
if (!entered) {
return <Landing enter={() => {
setEntered(true);
}} />;
}
if (!user) {
return <AuthScreen setUser={setUser} />;
}

return <AppShell user={user} />;
}

createRoot(document.getElementById("root")).render(<Root />);
