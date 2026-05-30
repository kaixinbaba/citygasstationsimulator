# City Gas Station Simulator — Post-Launch Operations Handbook

> Generated 2026-05-30. Complete each section in order.
> Each step includes exact URLs, what to paste, and expected results.

---

## 1. Cloudflare Pages — Custom Domain

**Prerequisite**: Domain purchased and in Cloudflare DNS (nameservers: `*.ns.cloudflare.com`)

1. Go to https://dash.cloudflare.com/ → Workers & Pages → Pages → `citygasstationsimulator`
2. Click **Custom domains** tab → **Set up a custom domain**
3. Enter: `citygasstationsimulator.com`
4. Click **Continue** → **Activate Domain**
5. Wait 2-5 minutes. Visit `https://citygasstationsimulator.com` — should show the game site.
6. Verify: `https://citygasstationsimulator.com/robots.txt` returns content.

## 2. Google Search Console — Verify + Submit Sitemap

**Prerequisite**: Gmail/Google account

1. Go to https://search.google.com/search-console
2. Click **Add property** → **URL prefix**
3. Enter: `https://citygasstationsimulator.com`
4. Verification: choose **Domain name provider** (auto-detected if on Cloudflare) or **HTML tag** method:
   - If HTML tag: copy the `content` value from the meta tag, paste it in CF Pages → Settings → Custom headers, or add it to `index.html` and redeploy
5. Once verified, go to **Sitemaps** (left sidebar)
6. Enter: `https://citygasstationsimulator.com/sitemap.xml` → **Submit**
7. Status should show "Success" within minutes. Indexing takes days to weeks.

## 3. Bing Webmaster Tools — Verify + Submit Sitemap

1. Go to https://www.bing.com/webmasters
2. Sign in with Microsoft/Google account
3. Click **Add a site** → Enter: `https://citygasstationsimulator.com`
4. If you already verified GSC, click **Import from Google Search Console** (instant)
5. Go to **Sitemaps** → Submit: `https://citygasstationsimulator.com/sitemap.xml`
6. Done. Bing powers Yahoo + DuckDuckGo, so all three are covered.

## 4. ahrefs — Add Project (Optional but Recommended)

1. Go to https://app.ahrefs.com (free account OK for basic monitoring)
2. **Add project** → Domain: `citygasstationsimulator.com`
3. Let it crawl. Check back weekly for:
   - Domain Rating (DR) changes
   - New backlinks
   - Keyword rankings
   - Site audit issues

## 5. Backlink Building — Priority List

### Today (free, immediate)
- [ ] **Reddit**: Post in `/r/WebGames`, `/r/freegames`, `/r/html5games`. Share a screenshot + link. Title: "City Gas Station Simulator - free browser game"
- [ ] **Pinterest**: Create a pin with the game image, link to `https://citygasstationsimulator.com`
- [ ] **Twitter/X**: Tweet with game screenshot + link. Hashtags: #html5game #freegames #simulationgame

### This week (directory submissions)
- [ ] **CrazyGames**: https://developer.crazygames.com/submit — submit your game
- [ ] **Poki**: https://poki.com/developers — submit
- [ ] **Y8**: https://www.y8.com/developers — submit
- [ ] **KBH Games**: Email/contact form submission
- [ ] **GameDistribution**: Contact them for backlink/canonical from your game detail page at https://gamedistribution.com/games/city-gas-station-simulator/

### Ongoing
- [ ] **YouTube**: Record 1-2 minute gameplay → upload → description link to `https://citygasstationsimulator.com`
- [ ] **Game review blogs**: Search "free browser games", find 10 sites, email for link exchange
- [ ] **Link directories**: Submit to relevant game/entertainment directories

## 6. Weekly Checklist (First Month)
- [ ] Check GSC for indexing status and any crawl errors
- [ ] Check GA dashboard for visitor count and source
- [ ] Check ahrefs for DR and new backlinks
- [ ] Post one social media update (Reddit/Pinterest/Twitter rotation)

## 7. Quick Reference Card

| What | URL |
|------|-----|
| Live site | `https://citygasstationsimulator.com` |
| GitHub | https://github.com/kaixinbaba/citygasstationsimulator |
| CF Pages | Cloudflare Dash → Pages → `citygasstationsimulator` |
| GSC | https://search.google.com/search-console → `citygasstationsimulator.com` |
| GA | https://analytics.google.com → GA4 `G-JH5QR15NMS` |
| Bing | https://www.bing.com/webmasters → `citygasstationsimulator.com` |
| ahrefs | https://app.ahrefs.com → `citygasstationsimulator.com` |
| Game CDN | https://html5.gamedistribution.com/47ae55f0a59a41ed871cd94c93083b01/ |
| Sitemap | `https://citygasstationsimulator.com/sitemap.xml` |
| Robots | `https://citygasstationsimulator.com/robots.txt` |
