# EdgeForge 3.1 — Start here (new GitHub repository)

This ZIP is a **complete standalone HTML application** for your iPhone, with the Football Intelligence historical tracker and the Decision Lab. It is made for **GitHub Pages**. You **do not need Streamlit, Python, GitHub.dev, a paid odds API, or API secrets** to publish it.

## Step 1 — Create the new GitHub repository

1. In Safari, sign into [github.com](https://github.com).
2. Choose **New repository**. Example name: `edgeforge-football`.
3. Choose **Public** if you want GitHub Pages to work without plan-dependent private repository limitations. **The app files contain no personal betting records or API keys**.
4. Choose **Create repository**. A README checkbox is optional.

## Step 2 — Upload the files (not the ZIP itself)

1. Download the ZIP to your iPhone, then tap it in **Files** to extract.
2. Open the repository in Safari, select **Add file → Upload files** and upload **all files extracted from the ZIP** into the **top level / root**, not inside another folder. `index.html` must be at the repository root.
3. If GitHub's mobile site hides Add file, use **Request Desktop Website**.
4. Commit files to the `main` branch.

Your repository root should contain:

```
index.html
decision_lab.html
manifest.webmanifest
edgeforge-icon-192.png
edgeforge-icon-512.png
sw.js
football_tracker_template.csv
README.md
START_HERE.md
```

The spacing above is visual only: **all nine files belong in the same directory**, including `index.html` and `decision_lab.html`.

## Step 3 — Publish on GitHub Pages

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Branch: **main**; Folder: **/(root)**. Select **Save**.
4. Wait for the Pages deployment. GitHub will show your published URL. It will usually resemble `https://YOUR-USERNAME.github.io/edgeforge-football/`.
5. Open that URL in Safari. The homepage (`index.html`) is **Historical Football Tracker**; tap **Open EdgeForge Decision Lab** to enter the new decision screen.
6. For direct Decision Lab access, use `https://YOUR-USERNAME.github.io/edgeforge-football/decision_lab.html`.

## Step 4 — Add to iPhone Home Screen

In Safari open **decision_lab.html** → **Share → Add to Home Screen**. The provided manifest and icons support a dedicated Home Screen experience. After the app loads successfully once, basic pages can also be cached for offline access; availability depends on Safari's storage policies.

## Use the analytics

- **Decision Lab**: enter a real Kalshi YES price, fee, quote timestamp, model-estimated probability, and data-quality checks. This calculates conditional value from the supplied inputs; it is NOT itself a football forecast model.
- **Combo Lab**: enter exact legs, live Combo YES price, full fee, and (if available) an independently estimated **joint** probability. Same-game outcomes may be correlated, so leg products are only an illustrative benchmark.
- **Prediction Queue**: record a forecast before kickoff; export CSV.
- **Historical Football Tracker**: switch to **My data → Data Center → Import CSV**. Add actual results and entered closing prices to compute calibration, realized ROI (for bets that were placed) and CLV.
- **Backup**: export the tracker JSON backup and the Decision Lab's JSON export regularly. Data is stored in your device/browser, not in GitHub or a shared cloud database.

## Important limitations

- This ZIP does **not** contain a Streamlit Python backend, live sports feeds, trained NFL/CFB models, automated line monitoring, or Kalshi authentication. GitHub Pages cannot run Python server processes.
- Opening these static pages does not automatically fill real-time odds, injuries, weather or projections. Those require approved data feeds / a backend in a future version.
- No API keys should be added to this public repository. Streamlit `Secrets` are irrelevant for this HTML-only deployment.
- Kalshi contract and transaction fees must be entered accurately, and its market settlement rules should be checked. Enter 0 fee only when confirmed.
- The historical tracker currently expects American-odds format; Decision Lab exports equivalent odds and notes any entered fees, but **it does not automatically provide accurate fee-adjusted Kalshi trade P&L**. For trades, record true cost, payouts, and fees separately.
- For prospective model testing, **record predictions before kickoff**; do not backfill predictions after you know the result.
- No model or combination is guaranteed profitable. An attractive displayed payout is not evidence of positive expected value.

## Help with common deployment problems

- **GitHub Pages says 404**: Make sure `index.html` is at the repository root, Pages is set to `main` / `/(root)`, and the build is finished.
- **Decision Lab link fails**: Make sure `decision_lab.html` is at the same level as `index.html`, with lowercase filenames.
- **Home Screen icon absent**: Open `decision_lab.html` in Safari directly before adding to Home Screen, and ensure the icons and manifest are at the root.
- **Old version remains after update**: Refresh Safari. If necessary, close the Home Screen app and reopen it while online.
- **I expected Streamlit**: This is an HTML / GitHub Pages app, not Streamlit. Keep your separate Python dashboard if you still want a model server.
