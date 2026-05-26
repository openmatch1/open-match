
import React, { useMemo, useState, useEffect } from "react";
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

function Plan({ name, price, perks, hot }) {
  return <div className={"plan " + (hot ? "hot" : "")}>
    <h3>{name}</h3><strong>{price}</strong>
    {perks.map(p => <p key={p}>✓ {p}</p>)}
  <button
onClick={() => {
const link =
name === "Elite"
? "https://buy.stripe.com/test_fZueVd8cG0Q85Px7OqgYU03"
: name === "Plus"
? "https://buy.stripe.com/test_7sYcN550u0Q82Dl9WygYU04"
: "#";

if (link !== "#") window.open(link, "_blank");
}}
>
{name === "Free" ? "Current Plan" : hot ? "Start Plus" : "Choose"}
</button> 
  </div>
}

function AppShell({ user }) {
 const [screen, setScreen] = useState("onboarding");
const [profiles, setProfiles] = useState(seedProfiles);
  const [userPlan, setUserPlan] = useState("free");
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
distance: "5 miles away",
vibe: "Real user",
intent: "Relationship",
photos: p.photo && p.photo.startsWith("http")
? [p.photo]
: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"],
bio: p.bio || "",
prompts: [],
interests: Array.isArray(p.interests) ? p.interests : [],
openChemistry: 95,
sharedInterestScore: 50,
aiReason: "AI generated compatibility."
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

if (currentUser?.plan) {
setUserPlan(currentUser.plan);
}

setProfiles(filtered);
setProfile(filtered[0]);
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
const myEmail = user?.email || "anthony@test.com";

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

async function like(superLike=false) {

const shouldMatch =
superLike || profile.openChemistry > 90;

if (
shouldMatch &&
!matches.find((m) => m.id === profile.id)
) {
setMatches([profile, ...matches]);
}

const otherEmail = profile.name + "@openmatch.ai";
const myEmail = "anthony@test.com";

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

}


 function pass() {
 if (
userPlan === "free" &&
swipesToday >= FREE_SWIPE_LIMIT
) {
alert("Daily swipe limit reached. Upgrade to Plus.");
return;
}

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
sender_email: "anthony@test.com",
receiver_email: "mia@openmatch.ai",
message: chatText
}
]);

setChatText("");
}

  function generateCoach() {
    if (!coachText.trim()) return;
    setCoachAnswer("Say it confident and simple. Try: “I like your vibe. I’d rather actually meet than text forever — are you free this week for coffee or dinner?”");
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
        <div className="brand sideBrand"><div className="ring"></div><span>Open Match</span></div>
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
onboarding={onboarding}
setOnboarding={setOnboarding}
finish={() => setScreen("discover")}
/>
)}
        {screen === "discover" && <Discover profile={profile} like={like} pass={pass}/>}
       {screen === "matches" && (
<Matches
matches={matches}
 selectedMatch={selectedMatch} 
setSelectedMatch={setSelectedMatch}
openChat={() => setScreen("chat")}
/>
)}
 {screen === "likes" && <LikesScreen likes={likes} />}       
   {screen === "chat" && (
<Chat
messages={messages}
setMessages={setMessages}
text={chatText}
setText={setChatText}
user={user}
matches={matches}
  selectedMatch={selectedMatch} 
/>
)}
     
        {screen === "coach" && <Coach coachText={coachText} setCoachText={setCoachText} generateCoach={generateCoach} coachAnswer={coachAnswer}/>}
        {screen === "premium" && <Premium userPlan={userPlan} />}
        {screen === "profile" && <MyProfile user={user} />}
        {screen === "settings" && (
<SettingsScreen
filters={filters}
setFilters={setFilters}
/>
)}
      </main>
    </div>
  );
}
function Onboarding({ onboarding, setOnboarding, finish }) {
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
email: onboarding.name + "@openmatch.ai",
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

function Discover({ profile, like, pass }) {

if (!profile) {
return <section><h1>Loading profiles...</h1></section>;
}

const photo =
profile.photos?.[0] ||
"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80";
const [dragX, setDragX] = useState(0);
const handleDragStart = (e) => {
const startX = e.clientX || e.touches?.[0]?.clientX;

const move = (moveEvent) => {
const currentX =
moveEvent.clientX || moveEvent.touches?.[0]?.clientX;

setDragX(currentX - startX);
};

const end = () => {
if (dragX > 120) {
like(profile);
} else if (dragX < -120) {
pass();
}

setDragX(0);

window.removeEventListener("mousemove", move);
window.removeEventListener("mouseup", end);
window.removeEventListener("touchmove", move);
window.removeEventListener("touchend", end);
};

window.addEventListener("mousemove", move);
window.addEventListener("mouseup", end);
window.addEventListener("touchmove", move);
window.addEventListener("touchend", end);
};
  
return (
<section className="discover">

<div className="discoverTop">
<div>
<h1>Discover</h1>
<p>Open Chemistry mode: match beyond identical interests.</p>
</div>

<button className="filterBtn">
<Search/> Filters
</button>
</div>

<div className="swipeWrap">
<div
className="stackCard stackCardTwo"
style={{
transform: `scale(0.92) translateY(${40 - Math.abs(dragX) * 0.05}px) translateX(36px) rotate(6deg)`
}}
></div>

<div
className="stackCard stackCardOne"
style={{
transform: `scale(0.96) translateY(${20 - Math.abs(dragX) * 0.03}px) translateX(18px) rotate(3deg)`
}}
></div>
<div
className="swipeCard"
style={{
backgroundImage: `linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.15)), url(${photo})`,
backgroundSize: "cover",
backgroundPosition: "center",
height: "620px",
borderRadius: "24px",
overflow: "hidden",
position: "relative",
transform: `translateX(${dragX}px) rotate(${dragX / 20}deg)`,
transition: dragX === 0 ? "0.3s ease" : "none",
}}
onMouseDown={handleDragStart}
onTouchStart={handleDragStart}  
>

<div
className="swipeInfo"
style={{
position: "absolute",
bottom: 0,
left: 0,
right: 0,
padding: "24px"
}}
>
{dragX > 40 && (
<div
style={{
position: "absolute",
top: 30,
right: 30,
padding: "12px 24px",
border: "4px solid #5dff9b",
color: "#5dff9b",
fontWeight: 900,
fontSize: "32px",
borderRadius: "18px",
transform: "rotate(12deg)",
background: "rgba(0,0,0,0.45)"
}}
>
LIKE
</div>
)}

{dragX < -40 && (
<div
style={{
position: "absolute",
top: 30,
left: 30,
padding: "12px 24px",
border: "4px solid #ff5c5c",
color: "#ff5c5c",
fontWeight: 900,
fontSize: "32px",
borderRadius: "18px",
transform: "rotate(-12deg)",
background: "rgba(0,0,0,0.45)"
}}
>
NOPE
</div>
)}

<h2>{profile.name}, {profile.age}</h2>

<p>
<MapPin size={15}/> {profile.city} • {profile.distance}
</p>

<p className="bio">{profile.bio}</p>

<div className="tagRow">
<span>{profile.intent}</span>
<span>{profile.vibe}</span>

{profile.interests.map(i =>
<span key={i}>{i}</span>
)}
</div>

</div>

</div>

<div className="aiPanel">

<p className="pill">
<Brain size={16}/> AI Chemistry
</p>

<h3>{profile.openChemistry}% Open Chemistry</h3>

<div className="progress">
<div style={{width: profile.openChemistry + "%"}}></div>
</div>

<p>
<strong>Shared interest score:</strong>
{" "}
{profile.sharedInterestScore}%
</p>

<p>{profile.aiReason}</p>

<div className="promptBox">
<strong>AI opener:</strong>

<p>
{
profile.openChemistry > 90
? "You honestly seem refreshing compared to most people on here."
: profile.sharedInterestScore > 50
? "I feel like we'd either click instantly or debate for hours."
: "You seem like someone I'd actually remember after one conversation."
}
</p>
</div>

<div className="actions">
<button
className="no"
onClick={() => {
setDragX(-220);
setTimeout(() => {
pass();
setDragX(0);
}, 220);
}}
>
<X/>
</button>

<button
className="super"
onClick={() => {
setDragX(220);
setTimeout(() => {
like(true);
pass();
setDragX(0);
}, 220);
}}
>
<Star/>
</button>

<button
className="yes"
onClick={() => {
setDragX(220);

setTimeout(() => {
like(false);
pass();
setDragX(0);
}, 220);
}}
>

<Heart />
</button>
</div>

</div>

</div>

</section>
);
}
const currentUser = {
id: "00000000-0000-0000-0000-000000000001"
};

const handleLike = async (likedUser) => {
if (!likedUser?.id) {
alert("No profile selected");
return;
}

const { error } = await supabase.from("likes").insert({
liker_email: user?.email,
liked_email: likedUser.email || likedUser.id || likedUser.name
});

if (error) {
console.error("Like error:", error);
alert("Like did not save");
return;
}
const { data: existingLike } = await supabase
.from("likes")
.select("*")
.eq(
"liker_email",
likedUser.email || likedUser.id || likedUser.name
)
.eq("liked_email", user?.email)
.single();

if (existingLike) {
await supabase.from("matches").insert({
user1_id: user?.email,
user2_id: likedUser.email || likedUser.id || likedUser.name
});

alert("It's a match!");
}
alert("Like saved");
};
function LikesScreen({ likes }) {
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

function Chat({ messages, setMessages, text, setText, user, matches, selectedMatch }) {
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

function Premium({ userPlan }) {
  return <section>
    <h1>Premium</h1>
    <p>Your current plan: {userPlan}</p>
    <p>Monetization screen ready for Stripe connection.</p>
    <div className="priceGrid appPrices">
      <Plan name="Free" price="$0" perks={["Limited likes", "Basic profile", "Basic chat"]}/>
      <Plan name="Plus" price="$19/mo" perks={["Unlimited likes", "Rewind", "AI icebreakers", "Open Chemistry filters"]} hot/>
      <Plan name="Elite" price="$49/mo" perks={["Boost mode", "See who likes you", "Priority discovery", "Advanced AI coach"]}/>
    </div>
  </section>
}

function MyProfile({ user }) {
const [name, setName] = useState("Anthony")
const [age, setAge] = useState(27)
const [goal, setGoal] = useState("Serious relationship")
const [bio, setBio] = useState(
"Ambitious, loyal, building something real. Looking for chemistry, not a copy of myself."
)
const [avatar, setAvatar] = useState("")
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

async function saveProfile() {
const { error } = await supabase
.from("profiles")
.upsert([
{
name,
age,
bio,
photo: avatar,
city: "Orlando",
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

function SettingsScreen({ filters, setFilters }) {
  return <section>
    <h1>Settings & Safety</h1>
    <div className="settingsPanel">
      <label>Minimum Age</label>
<input
type="number"
value={filters.minAge}
onChange={(e) =>
setFilters({ ...filters, minAge: Number(e.target.value) })
}
/>

<label>Maximum Age</label>
<input
type="number"
value={filters.maxAge}
onChange={(e) =>
setFilters({ ...filters, maxAge: Number(e.target.value) })
}
/>

<label>City</label>
<input
value={filters.city}
onChange={(e) =>
setFilters({ ...filters, city: e.target.value })
}
/>
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
