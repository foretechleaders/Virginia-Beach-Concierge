
# Virginia Beach Concierge (v2)

React (Vite) + Tailwind with:
- Global sand dune background
- Inline Google Maps embed on Home
- Eventbrite events fetch on /events
- Netlify Forms for contact, reviews, newsletter
- Favorites using localStorage
- New branding/colors

## Quick Start
```bash
npm install
npm run dev
```

## Build & Deploy (Netlify)
- Push to GitHub
- Connect repo in Netlify
- Env vars:
  - VITE_GOOGLE_MAPS_KEY=<your key>
  - VITE_EVENTBRITE_TOKEN=<your token>
- Build: `npm run build`
- Publish: `dist`

## Environment
Copy `.env.example` to `.env` and add your keys.
