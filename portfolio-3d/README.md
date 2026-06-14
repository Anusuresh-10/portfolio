# My 3D Dev World — Portfolio

A game-like, 3D, navigable portfolio built with **React + Three.js (react-three-fiber + drei)**.
You explore floating "zones" (Home, About, Skills, Projects, Contact) — click a zone or use
the top nav, and your avatar flies there while the camera follows.

---

## 1. Run it locally

You need **Node.js 18+** installed.

```bash
# 1. unzip this project, then open a terminal inside the folder
cd portfolio-3d

# 2. install dependencies
npm install

# 3. start the dev server
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser.

To build a production-ready version (used for deploying):

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

---

## 2. Edit your content (no 3D knowledge needed)

**Everything you need to personalize lives in one file:**

```
src/data/portfolio.js
```

Open it and fill in the `TODO` comments:

| Section          | What to update                                                            |
| ---------------- | -------------------------------------------------------------------------- |
| `profile`        | Your name, role/tagline, photo path, resume path                          |
| `socials`        | GitHub, LinkedIn, email, LeetCode links                                   |
| `about`          | Your bio paragraphs + highlight facts (college, program, etc.)            |
| `skillTree`      | Skill categories + proficiency levels (0–100)                            |
| `projects`       | Your projects — first one (`featured: true`) gets a highlighted card     |
| `contact`        | Heading + short message on the contact zone                              |

### Adding your photo & resume
Drop your files into the `public/` folder:
- `public/me.jpg` → your photo (referenced by `profile.photo` — currently unused in the UI,
  but you can drop an `<img>` into `HomePanel` in `src/ui/InfoPanel.jsx` if you want it shown)
- `public/resume.pdf` → your resume (linked from the Home panel's "Download Resume" button)

### Adding more projects
Copy one of the objects inside the `projects` array in `src/data/portfolio.js` and edit it.
Only the **first project with `featured: true`** gets the gold highlight styling.

---

## 3. Customize the 3D world (optional)

| File                            | What it controls                                              |
| -------------------------------- | -------------------------------------------------------------- |
| `src/data/portfolio.js`         | Zone positions, colors, labels (the `zones` array)            |
| `src/scene/Platform.jsx`        | The floating island/platform mesh + glow ring                 |
| `src/scene/ZoneIcon.jsx`        | The little 3D icon that floats above each platform            |
| `src/scene/Avatar.jsx`          | The traveling orb (your "player") and its flight animation    |
| `src/scene/ConnectionPaths.jsx` | The glowing lines connecting zones                             |
| `src/scene/CameraRig.jsx`       | How the camera frames each zone when you travel there         |
| `src/scene/Experience.jsx`      | Lighting, starfield, fog — overall scene setup                |
| `src/index.css`                 | Color palette & fonts (CSS variables at the top)               |
| `src/ui/ui.css`                 | All HUD / panel styling                                        |

To **reposition zones**, edit the `position: [x, y, z]` values in the `zones` array
(`src/data/portfolio.js`) — moving them further apart spreads out the world.

To **change colors**, edit the CSS variables at the top of `src/index.css`
(`--accent-cyan`, `--accent-violet`, etc.) and the `color` field on each zone.

---

## 4. Deploy it for free

The easiest options:

### Vercel
1. Push this project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → "New Project" → import your repo.
3. Framework preset: **Vite**. Click Deploy. Done.

### Netlify
1. Push this project to a GitHub repo.
2. Go to [netlify.com](https://netlify.com) → "Add new site" → import your repo.
3. Build command: `npm run build`, Publish directory: `dist`. Click Deploy.

### GitHub Pages
1. `npm run build` to generate `/dist`.
2. Use a tool like `gh-pages` (`npm install -D gh-pages`) or push the `dist` folder
   to a `gh-pages` branch and enable Pages in your repo settings.

---

## 5. Controls (for visitors)

- **Click** a floating platform, or use the **top nav bar**, to travel to that zone.
- The camera auto-frames the active zone; move your mouse for a subtle parallax look-around.
- Content for the active zone appears in the panel at the bottom-right (bottom on mobile).

---

## Tech stack

- [Vite](https://vitejs.dev/) + React 19
- [Three.js](https://threejs.org/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) — React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) — helpers (Stars, Float, Trail, Text, Line, Sparkles)

---

## Troubleshooting

- **Blank screen** → open your browser console (F12) and check for errors; most often it's
  a typo in `src/data/portfolio.js` (e.g. a missing comma).
- **Fonts look different** → the page loads "Space Grotesk", "Inter", and "JetBrains Mono"
  from Google Fonts, so you need an internet connection the first time.
- **Slow on your laptop** → in `src/App.jsx`, lower `dpr={[1, 1.5]}` to `dpr={[1, 1]}`,
  and in `src/scene/Experience.jsx` reduce the `Stars` `count` (e.g. from 2500 to 1200).
