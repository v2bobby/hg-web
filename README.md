# HiredeyGo

**Data-Driven Meritocracy in Recruitment**

> The trust infrastructure that replaces resumes with verified skill and ends candidate ghosting.

[![Coming Q3 2026](https://img.shields.io/badge/Status-Pre--MVP%20•%20Q3%202026-blue?style=flat-square)](https://hiredygo.xyz)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

---

## Overview

HiredeyGo is a premium landing page for an upcoming recruitment technology platform that brings **meritocracy** to hiring.

Instead of relying on formatted resumes and silent applications, HiredeyGo introduces a mandatory, role-specific assessment layer at the point of application. Candidates are ranked in real time by verified skill, and every applicant receives transparent status updates — eliminating the “CV black hole” and ghosting that plague modern recruitment.

This repository contains the **public-facing website** designed to build anticipation, communicate the vision, and capture early interest ahead of the Q3 2026 launch.

---

## Tech Stack

- **HTML5** + **Tailwind CSS** (via CDN) + **Vanilla JavaScript**
- Fully responsive, mobile-first design
- Dark, minimalist, futuristic aesthetic
- Zero build step — pure static files
- Production-ready security headers & caching via `vercel.json`

---

## Getting Started

### Local Development

No installation required. Simply open the project in any modern browser:

```bash
# Option 1: Direct open
open index.html

# Option 2: Using a local server (recommended)
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

### Project Structure

```
.
├── index.html          # Main landing page (hero, problem, solution, vision, roadmap, founder, waitlist)
├── style.css           # Premium custom styles & micro-interactions
├── script.js           # Interactions, form handling, modals, scrollspy
├── logo.svg            # Custom modern wordmark + merit icon
├── vercel.json         # Production deployment config + security headers
├── README.md           # This file
└── HiredeyGo_Strategic_Blueprint_v2.1.md   # Internal strategy document
```

---

## Deployment

This site is optimized for **Vercel**.

### One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/hiredeygo-landing)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The included `vercel.json` provides:
- SPA-style fallback routing
- Strong security headers (X-Frame-Options, CSP-ready, Referrer-Policy, etc.)
- Optimal caching (1-year immutable for assets, fresh HTML)

---

## Design Philosophy

HiredeyGo’s visual identity reflects its mission:

- **Dark theme** — Serious, focused, modern
- **Electric blue accent** (`#3B82F6`) — Trust + forward momentum
- **Generous whitespace** + refined typography — Clarity and confidence
- **Subtle micro-interactions** — Premium feel without distraction
- **Conceptual product mockups** — Give visitors a tangible sense of the future experience

The site avoids template aesthetics and instead feels like a high-end venture-backed product.

---

## Key Sections

| Section          | Purpose                              |
|------------------|--------------------------------------|
| Hero             | Bold vision + emotional hook         |
| Problem          | The three core pains in recruitment  |
| Solution         | Value proposition for both sides     |
| Architecture     | Skill-First system explained         |
| **Vision**       | Conceptual product mockups           |
| Roadmap          | Clear path to AI-augmented meritocracy |
| Founder          | Credibility & contact                |
| Waitlist         | High-conversion email capture        |

---

## Status

**Pre-MVP** — Launching Q3 2026 (Nigeria tech & service sectors first)

This website is the primary vehicle for building the founding community and generating early signal before the platform goes live.

---

## Contact

**Prosper Nkemelu**  
Founder  
[prosper.n@hiredygo.xyz](mailto:prosper.n@hiredygo.xyz)  
[LinkedIn](https://www.linkedin.com/in/prosper-nkemelu-29b48437a/)

---

## License

© 2026 HiredeyGo Technologies. All rights reserved.

*This is a private, pre-launch asset. Do not distribute without permission.*

---

**Built with clarity. Designed for impact.**

*Ready to make merit visible.*