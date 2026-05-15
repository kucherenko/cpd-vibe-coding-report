# 🔍 CPD Report: Vibe-Coded Projects

Interactive report analyzing code duplication (copy/paste) across **46 trending AI-assisted open-source projects** on GitHub.

## 📊 Live Report

👉 **https://kucherenko.github.io/cpd-vibe-coding-report/**

## Key Findings

| Metric | Value |
|--------|-------|
| Projects Analyzed | 46 |
| Total Clones Found | 11,079 |
| Average Duplication | **6.78%** |
| Projects with Duplication | 41 / 46 (89.1%) |
| Total Code Surveyed | 3,514,071 lines |

### Worst Offenders

| Project | Duplication % | Clones |
|---------|---|---|
| [frontend-slides](https://github.com/zarazhangrui/frontend-slides) | **42.71%** | 16 |
| [cofounder](https://github.com/nraiden/cofounder) | **25.32%** | 118 |
| [openv0](https://github.com/nraiden/openv0) | **22.42%** | 110 |
| [context-engineering-intro](https://github.com/coleam00/context-engineering-intro) | **20.68%** | 98 |
| [cockpit-tools](https://github.com/jlcodes99/cockpit-tools) | **20.55%** | 620 |

## Report Contents

The live report includes:

- **Metrics Dashboard** — Overview cards with key statistics
- **8 Interactive Charts** — Format/type distribution, scatter plot, histogram, stacked bars
- **Sortable Data Table** — Search and sort all 46 projects by name, clone count, or duplication rate
- **Key Insights** — Five data-driven observations about AI-assisted code duplication
- **Refactoring Recommendations** — Six actionable strategies for reducing duplication

## Methodology

- **Tool:** [jscpd](https://github.com/kucherenko/jscpd) v4.0.9 (JavaScript/TypeScript copy/paste detector)
- **Source:** 46 projects identified via GitHub search for "vibe coding", "built with Cursor/Claude", "AI generated"
- **Analysis:** jscpd with 50-token minimum, ignoring `node_modules`, `.git`, build artifacts
- **Classification:** Code vs. Config vs. Test vs. Documentation based on file extensions and paths

## Files

- `index.html` — Main interactive report
- `charts/` — Standalone PNG chart images (8 charts)
- `CPD_FINAL_REPORT.md` — Complete Markdown report
- `reports/all-summaries.json` — Raw aggregated data (JSON)
- `analysis-scripts/` — Python/Node.js scripts used for analysis

## License

MIT
