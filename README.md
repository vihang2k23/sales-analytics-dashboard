# Sales Analytics Dashboard

Vue 3 dashboard for monthly sales by product category — filters, summary cards, and Chart.js charts.

- **Repo:** https://github.com/vihang2k23/sales-analytics-dashboard

## Stack

- Vue 3 + Composition API (`<script setup>`) + TypeScript
- Pinia (setup store)
- vue-chartjs / Chart.js
- Tailwind CSS v4
- Vite

## Setup

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

```bash
npm run build    # typecheck + production build
npm run preview  # serve the dist folder locally
```

## What it does

- Mock data: 12 months × 3 categories (Electronics, Clothing, Furniture)
- Filters: All year / Q1–Q4 / custom month range + category toggles
- Summary cards: total revenue, units sold, return rate
- Charts: line (trend), grouped bar (monthly), doughnut (share)
- Click a bar to highlight that month on the line + bar charts

## Folder structure

```
src/
  components/     UI pieces (filters, cards, charts)
  layouts/        AppNavbar, AppFooter, AppLayout
  composables/    useChartData — store → chart datasets
  constants/      UI_TEXT — labels / titles in one file
  data/           salesData.json
  stores/         Pinia sales store
  types/          shared types + month/category constants
  utils/          pure helpers (filters, chart builders, formatters)
  views/          DashboardView
```

| Piece | Role |
|-------|------|
| `salesStore` | raw data, filters, highlight, derived filtered rows + summary |
| `salesFilters` | pure filter / summary math (no Vue) |
| `useChartData` | builds line / bar / pie datasets from the store |
| `FilterBar` | date + category controls |
| `SummaryCards` | three stats above the charts |
| `LineChart` / `BarChart` / `PieChart` | vue-chartjs wrappers |

Leaf UI uses props/emits (`SummaryCard`, `CategoryChip`, `SelectField`, `ChartPanel`). Filters/charts talk to Pinia directly so filter logic isn’t copied into every template.

No router — single dashboard page is enough for this task.

## AI Tools Used

I used **Cursor** while building this. Below is what I actually asked for and what I kept or changed.

### 1. Project scaffold + Tailwind

- **What I asked:** Set up Vite + Vue 3 + TS, Pinia, vue-chartjs, and Tailwind v4.
- **What I got:** Standard Vite layout, Pinia in `main.ts`, `@tailwindcss/vite` plugin, empty shell components.
- **Why / what I changed:** Kept the stack. Dropped the Vite starter UI and unused assets. Went with Tailwind because the brief allows it and it’s faster than hand-rolling every layout class. Theme tokens are slate + teal on purpose (not the usual purple gradient look).

### 2. Mock data

- **What I asked:** 12 months × 3 categories with revenue, units, returns.
- **What I got:** A full JSON set with a clear Nov/Dec bump.
- **Why / what I changed:** Tuned a few numbers so Electronics peaks harder in Q4 and Furniture isn’t flat all year — charts need some shape or they look fake.

### 3. Pinia store + filter helpers

- **What I asked:** Store shape for raw data, filters, and derived filtered data.
- **What I got:** First version used options-style `state` / `getters` / `actions`.
- **Why / what I changed:** Rewrote as a **setup store** (`ref` / `computed`) to match Composition API. Moved filter math into `utils/salesFilters.ts` so the store stays thin and the logic is easy to reason about. Also fixed custom range so From/To still works if someone picks them backwards.

### 4. `useChartData` + charts

- **What I asked:** Composable that turns filtered rows into Chart.js datasets; line first, then bar + doughnut; bar click highlights a month.
- **What I got:** Working builders and vue-chartjs components. Early draft put too much in one place.
- **Why / what I changed:** Pure builders live in `utils/buildChartData.ts`; the composable only wires the store. Shared `CATEGORY_COLORS` so line/bar/pie don’t drift. Highlight fades non-selected bars and bumps line points. Empty filters show an empty state instead of a broken chart.

### 5. Navbar logo

- **What I asked:** Generate a simple sales-analytics chart icon for the navbar.
- **What I got:** A flat blue bar-chart + trend-arrow icon PNG.
- **Why / what I changed:** Kept the icon only (no baked-in text). Navbar shows the icon next to “Sales Analytics” so it stays readable at small sizes.

### 6. README / structure notes

- **What I asked:** Help draft the README sections the brief asks for.
- **What I got:** Outline with setup, structure, AI section, trade-offs.
- **Why / what I changed:** Rewrote in my own words. The AI section above is what I actually did — not a generic “AI helped me code” blurb.

## Trade-offs / what I’d do with more time

- Unit tests for `salesFilters` and the chart builders (they’re pure, so easy wins)
- Sync filters to the URL (`?q=Q3&categories=Electronics`) so a view is shareable
- Slightly better mobile chart legends (Chart.js legend gets cramped on small screens)
- Real API later — store already isolates data, so swapping JSON for `fetch` wouldn’t touch the charts much
- Accessibility pass on the custom selects / chips (keyboard + aria)

I stopped at a working, readable dashboard rather than polishing UI forever — that matched the brief.

## Deploy (Netlify)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Build settings (also in `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy, then put the live URL at the top of this README next to the repo link.

```bash
npm run build
# or: netlify deploy --prod
```

## License

Take-home submission for Frontend Engineer — Vue.js.
