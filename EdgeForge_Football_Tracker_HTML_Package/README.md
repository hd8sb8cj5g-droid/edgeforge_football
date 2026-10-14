# EdgeForge Football Audit — NFL + College Football

A self-contained HTML dashboard for recording **NFL and college football** model predictions, validating them against outcomes, and tracking *realized* return on actually placed wagers. Uses the Quiet Slate theme; no odds subscription, Python, GitHub Actions or external JavaScript library is needed.

## Open it

- **Quick preview:** Open `index.html` in a modern desktop or mobile browser. Some iPhone file viewers and private-browsing modes restrict browser storage; use a hosted URL if records aren't retained.
- **Recommended iPhone setup:** Upload **only** `index.html` to the root of a *public* GitHub Pages repository (can be separate from your private Streamlit app repo). In the repo, open **Settings → Pages → Deploy from a branch → main → / (root)**. After publishing, use the Pages URL in Safari → Share → Add to Home Screen. Do **not** upload API keys, sportsbook credentials, or personal backups to a public repo. GitHub Pages access may vary by plan and repository visibility.
- **Existing Streamlit:** Your Python `app.py` and its Main file path are unchanged. `index.html` is a standalone tracker; GitHub Pages serves it separately. If your existing repo is private, avoid changing visibility simply to host the tracker.

## What's different from the 4-sport tracker

1. **NFL and College Football only** in data views, forms and imports; non-football legacy records remain in the old browser store and JSON backups but are hidden from football calculations.
2. New **Football splits** page for NFL/CFB cards, market-level Brier/ROI/average model-implied EV/CLV, last 50 vs prior 50 and evidence coverage.
3. Dedicated league toggles, **season** and **validation cohort** filters, and richer football prop markets (passing/rushing/receiving, anytime TD, etc.).
4. Revised **model audit** requires the same sport and market plus a selected model version before any review gate can pass.
5. Closing-line values require valid pre-kickoff prediction and closing timestamps; malformed pairs don't contribute.
6. CSV imports reject unsupported sports and skip duplicates; original probability remains locked on edits.
7. A saved personal football ledger opens automatically, while demonstration mode is clearly identified as **synthetic**.

## Daily workflow

1. Use **My data → + Prediction** *before kickoff*; choose NFL or College Football, the exact contract (including threshold), model version and model probability. Optionally record a pre-declared benchmark.
2. If you actually placed the bet, enable the bet toggle and enter American entry odds and stake. Otherwise keep it forecast-only; it still helps calibration.
3. At close, enter the **same contract's closing price** and timestamp, no later than kickoff.
4. After the game, use **Prediction ledger → Settle / edit** to record win, loss, push or void and the settlement time.
5. Use the **Football splits**, **Calibration**, **ROI**, **Closing-line value**, and **Model audit** views. Filter to a specific league, market, season, cohort and version for meaningful comparisons.
6. Frequently use **Data center → Backup JSON**. The data are stored in that browser; there is no cloud sync.

## Interpretation of the metrics

- **Brier score**: average `(predicted_probability - actual_outcome)^2` over win/loss forecasts. Lower is better. Pushes, voids and pending outcomes are excluded.
- **ECE**: average absolute calibration gap across ten probability buckets. It is unstable for small samples.
- **Realized ROI**: sum of net return divided by total stake for actually placed, settled wagers. Pushes contribute zero profit and return their stake; voids and pending bets are excluded.
- **Model EV (average)**: a *prediction*, calculated from recorded model probabilities and prices on settled placed bets; not achieved profit.
- **CLV**: `(decimal_entry_odds / decimal_closing_odds) - 1` for the same selection and line with timestamps between prediction and kickoff. A favorable closing-price change is not a guarantee of profitable betting.
- **95% Wilson interval**: approximate binomial interval around win rate, useful for showing sample uncertainty. It does not account for dependence between bets or errors in model specifications.
- **Model audit**: deliberately stringent screening criteria. Passing means *eligible for independent review*, **not** proven profitable or permission to bet. Avoid hindsight bias and record every forecast, not only chosen winners.

## Import and data format

Download `football_tracker_template.csv` for example headers, or use the built-in **Data center → Download CSV template**. Columns: `sport,event,market,selection,prob,predicted_at,event_start,model,book,entry_odds,closing_odds,closing_at,bet_placed,stake,result,settled_at,benchmark_prob,validation_type,notes`.

The probability can be `0.55`, `55`, or `55%`; imported records lacking timestamps can be analyzed but **cannot qualify** as valid prospective or closing-line evidence. `validation_type` may be `prospective`, `walk-forward` or `retrospective`. Imports reject unsupported sports, and duplicate predictions with the same sport/event/market/selection/model/prediction time/start time are skipped.

## Limitations

- Entirely offline, and **does not pull fixtures, injury reports, statistical forecasts, sportsbook odds or actual final scores automatically**. Those have to be entered or imported. No guarantee that imported data were actually recorded before kickoff.
- Sample data are synthetic and should not be interpreted as real edges or performance.
- Predictions for correlated outcomes may make confidence intervals overly narrow. Book-to-book differences, pushes, and line discrepancies can compromise CLV comparisons unless the exact contract is used.
- This is a historical measurement tool, **not a source of verified winning picks or financial returns**.
