
# Open Match — Full AI Dating Platform

This is a much bigger starter platform for a real AI dating site.

## What is included

### Frontend
- Premium landing page
- Swipe/discovery page
- Profile cards
- Like / pass / superlike UI
- Matches page
- Chat page
- AI dating coach page
- Premium/subscription page
- Profile editor
- Safety/settings screen
- Mobile responsive layout

### Backend
- Express API
- Register/login routes
- JWT authentication
- Profile routes
- Discovery route
- Like/match route
- Message route
- AI coach endpoint placeholder
- Safety report endpoint
- Stripe/OpenAI placeholders

## The big difference from Tinder

Most dating apps over-match people based on shared interests.

Open Match uses **Open Chemistry Matching**:
- You can match with people who are different from you.
- The score rewards curiosity, emotional direction, attraction contrast, communication style, and relationship intent.
- Shared interests help, but they are not required.

## How to run it

### 1. Run the frontend
```bash
cd client
npm install
npm run dev
```

### 2. Run the backend
```bash
cd server
npm install
npm run dev
```

Frontend:
```text
http://localhost:5173
```

Backend:
```text
http://localhost:5050
```

## What you still need for a true live dating app

To make this production-ready, connect:

- Database: Supabase, PostgreSQL, or Firebase
- Photo uploads: Cloudinary or S3
- Payments: Stripe
- AI: OpenAI API
- Maps/location: Google Maps API
- Identity verification: Persona, Stripe Identity, or similar
- Real-time chat: Socket.io, Firebase, or Supabase Realtime
- Moderation: image moderation + text moderation
- Admin dashboard
- App Store / Google Play mobile apps

## Important safety features to add before launch

A real dating app needs:
- Age gate: 18+ only
- Report/block tools
- Harassment moderation
- Photo verification
- Fake profile detection
- Location privacy controls
- Consent-based messaging
- Terms of service and privacy policy
