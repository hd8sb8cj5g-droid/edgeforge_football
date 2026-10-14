# EdgeForge 3.1 — iPhone Decision Lab + Football Intelligence Tracker

**Deploy as GitHub Pages. No GitHub Actions, Python, Streamlit, API keys or paid data required to view and use the manual interface.**

| File | Purpose |
|---|---|
| `index.html` | NFL + College Football Historical Tracker (homepage) |
| `decision_lab.html` | Mobile-first single-market/Combo value and forecast interface |
| `manifest.webmanifest` | App identity / Home Screen configuration |
| `edgeforge-icon-192.png` | Home Screen icon |
| `edgeforge-icon-512.png` | Larger app icon |
| `sw.js` | Caches the static app shell for optional offline access after first online visit |
| `football_tracker_template.csv` | Blank import template for historical predictions |
| `START_HERE.md` | iPhone upload and GitHub Pages walkthrough |
| `README.md` | This file |

## Publish

**GitHub → Settings → Pages → Deploy from a branch → main → /(root)**. Open the resulting URL in Safari.

The homepage is Historical Tracker. Decision Lab is linked from the homepage and can also be opened at `/decision_lab.html`. All navigation works with relative links, including when hosted under the repository's GitHub Pages subdirectory.

## Functionality and scope

- Both pages are complete standalone HTML documents; no frontend libraries, build or external scripts are required.
- The tracker evaluates calibration, Brier scores, ROI on recorded actual bets, closing-line value, NFL/CFB splits and model validation. Demo records are synthetic.
- Decision Lab checks entered contract price vs entered model probability, Kalshi fee and quote freshness, and lets you record/export forecasts.
- Combo estimates require **independent joint probabilities** for meaningful EV. Correlation can invalidate product-of-legs calculations.
- Records use browser localStorage: **not synced or published**. Export backup JSON regularly.
- No live API, predictive training, auto-settlement, automated wagering, or guaranteed profitable picks are included. This package is a manual analytics tool, not a Streamlit application. Don't add credentials to GitHub Pages files.

Read [START_HERE.md](START_HERE.md) for step-by-step iPhone instructions and limitations.
