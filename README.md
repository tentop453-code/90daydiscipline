# 90 Day Discipline

A premium, mobile-first React + TypeScript PWA starter for a 90-day fitness, learning, prayer-tracking and digital-detox challenge.

## Features
- English/Bengali UI toggle
- 90-day challenge timeline and daily checklist
- Five prayer check-ins
- Fitness and sleep log
- Forex education roadmap (education only; no trading execution)
- Professional skill learning log
- Social media detox log and urge-management steps
- Weekly progress summaries
- Local-first storage, JSON backup export/import
- Responsive glassmorphism UI
- Optional, user-initiated third-party ad loading
- PWA manifest and service worker shell caching

## Requirements
Node.js 20+ recommended.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
Upload the generated `dist/` folder to a static hosting provider that supports HTTPS.

## Install
Open the deployed site in a supported Android browser and use its Install App / Add to Home Screen menu. Installability depends on the browser and deployment configuration.

## Data and privacy
Core tracking data is stored in this browser's localStorage. Export a JSON backup before clearing browser data. This starter does not synchronize across devices and does not require an account.

## Ads
Third-party advertising is disabled until the user presses “Load ad”. Ad provider behavior, consent requirements, policies, and availability must be verified before public release. A script being inserted does not prove an ad loaded or generated revenue. Social Bar and Popunder are intentionally not automatically executed. Test every ad format in a deployed HTTPS environment, with browser console inspection and provider guidance.

Some ad providers may not work reliably inside a React SPA or preview iframe. They may require their own global configuration, a particular script-loading order, a dedicated container, or a top-level page integration. Verify the provider's official integration instructions before enabling more formats.

## Important limitations
- A PWA cannot force-block other Android apps.
- Browser notifications are not guaranteed to fire at exact times when the app is closed.
- Prayer times are not calculated automatically; use a local timetable.
- The 90-day configuration is read-only in the UI, not tamper-proof against source-code modification.
- Forex content is educational and is not financial advice.
- Exercise guidance is general and is not medical advice.
- The service worker caches the app shell; full offline support depends on successfully caching the built assets.

## Before public release
1. Test on real Android devices.
2. Verify build and console output.
3. Review third-party ad scripts and privacy/consent requirements.
4. Test with ads blocked and network disconnected.
5. Add app icons and screenshots.
6. Publish a privacy policy appropriate to your deployment.
