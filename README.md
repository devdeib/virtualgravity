# Virtual Gravity — Website

Marketing homepage for Virtual Gravity, rebuilt in **Next.js 15 + TypeScript + Tailwind**
to replace the paid Framer site. Hosts free on Vercel.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push this repo to GitHub.
2. On vercel.com → New Project → import `devdeib/virtualgravity`.
3. Framework preset: **Next.js** (auto-detected). No env vars needed. Deploy.

## Structure
- `src/app/page.tsx` — the full homepage
- `src/app/globals.css` — all styles (exact palette + section gradients)
- `src/components/SmokeCanvas.tsx` — WebGL hero/footer smoke (client)
- `src/components/Enhancers.tsx` — mobile menu + projects parallax (client)

## TODO before fully leaving Framer
1. **Self-host fonts.** Clash Display currently loads from the Fontshare CDN
   (`<link>` in `layout.tsx`). Download the family from fontshare.com, drop the
   `.woff2` files in `public/fonts/`, and replace the CDN link with `@font-face`
   rules in `globals.css`.
