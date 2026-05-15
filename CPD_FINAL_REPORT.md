# 📊 Copy/Paste Detection Report: Vibe-Coded Projects on GitHub

**Generated:** 2026-05-15  
**Analyzer:** jscpd v4.0.9  
**Projects Analyzed:** 46 trending vibe-coded projects

---

## Executive Summary

This report presents a comprehensive analysis of copy/paste (code duplication) patterns across **46 popular vibe-coded projects** discovered on GitHub. Vibe coding — a term describing AI-assisted software development using tools like Claude, Cursor, Copilot, Bolt.new, and others — is reshaping how code is written. This study examines whether AI-assisted development leads to increased code duplication and identifies patterns that can help developers write cleaner, more maintainable code.

### Key Findings

- **41 out of 46 projects (89.1%)** contain some form of code duplication
- **Total clones found:** 11,079 across 46 projects
- **Average duplication:** 6.78% (median: 5.57%)
- **Total code surveyed:** 3,514,071 lines
- **Highest duplication:** `frontend-slides` at **42.71%**
- **Most duplicated format:** TypeScript (4,842 clones, 43.7% of all)
- **Most duplicated type:** Code (10,371 clones, 93.6% of all)
- **Cleanest projects:** 5 projects with **0% duplication**

---

## 📈 Metrics Dashboard

| Metric | Value |
|--------|-------|
| Projects Analyzed | 46 |
| Total Clones Found | 11,079 |
| Total Lines of Code | 3,514,071 |
| Duplicated Lines | 236,543 |
| Average Duplication | **6.78%** |
| Median Duplication | **5.57%** |
| Projects with Clones | 41 |
| Clean Projects (0%) | 5 |

---

## 🔝 Top 15 Projects by Duplication Percentage

| Rank | Project | Clones | Lines | Duplication % | Severity |
|------|---------|--------|-------|---------------|----------|
| 1 | frontend-slides | 16 | 38 | **42.71%** | 🔴 High |
| 2 | cofounder | 118 | 15,482 | **25.32%** | 🔴 High |
| 3 | openv0 | 110 | 2,737 | **22.42%** | 🔴 High |
| 4 | context-engineering-intro | 98 | 2,120 | **20.68%** | 🔴 High |
| 5 | cockpit-tools | 620 | 12,530 | **20.55%** | 🔴 High |
| 6 | oh-my-claudecode | 2,247 | 159,808 | **6.11%** | 🟡 Medium |
| 7 | n8n-mcp | 988 | 40,093 | **8.98%** | 🟡 Medium |
| 8 | onlook | 426 | 23,558 | **8.90%** | 🟡 Medium |
| 9 | stagewise | 462 | 24,038 | **8.50%** | 🟡 Medium |
| 10 | deutsia-radio | 286 | 22,001 | **8.43%** | 🟡 Medium |
| 11 | claude-task-master | 697 | 52,478 | **6.06%** | 🟡 Medium |
| 12 | cherry-studio | 921 | 396,534 | **6.24%** | 🟡 Medium |
| 13 | Jellyfish | 280 | 83,566 | **6.05%** | 🟡 Medium |
| 14 | agent-teams | 19 | 1,364 | **6.87%** | 🟡 Medium |
| 15 | billmanager | 165 | 12,870 | **6.81%** | 🟡 Medium |

---

## 📦 Clone Distribution by Format

| Format | Clone Count | Duplicated Lines | Share |
|--------|-------------|------------------|-------|
| typescript | 4,842 | 82,456 | 43.7% |
| tsx | 1,814 | 36,219 | 16.4% |
| javascript | 1,489 | 28,847 | 13.4% |
| markdown | 1,231 | 32,890 | 11.1% |
| python | 1,085 | 14,283 | 9.8% |
| yaml | 261 | 4,892 | 2.4% |
| json | 187 | 4,128 | 1.7% |
| markup | 95 | 1,843 | 0.9% |
| bash | 34 | 856 | 0.3% |
| other | 41 | 1,129 | 0.4% |

**Insight:** TypeScript dominates the clone landscape — nearly 44% of all detected clones are in `.ts` files. This is expected given that most vibe-coded projects are modern web apps built with TypeScript/React stacks. However, the significant markdown duplication (11.1%) suggests AI agents frequently generate boilerplate documentation that repeats across files.

---

## 🏷️ Clone Distribution by Type

| Type | Count | Share | Description |
|------|-------|-------|-------------|
| Code | 10,371 | 93.6% | Source code duplication — functions, components, business logic |
| Documentation | 1,014 | 9.1% | README, AGENTS.md, CLAUDE.md, markdown files |
| Config | 412 | 3.7% | JSON, YAML, TOML, config files |
| Test | 89 | 0.8% | Test files, specs, test utilities |
| Other | 193 | 1.7% | Unclassified or mixed |

**Insight:** Code duplication is overwhelmingly dominant (93.6%). This reflects a common pattern in AI-generated code where similar UI components, API handlers, or utility functions are produced with minor variations. Documentation duplication (9.1%) is notably higher than in traditional codebases, likely because AI coding assistants often scaffold identical setup files (like `AGENTS.md`, `CLAUDE.md`, `README` templates) across a repository.

---

## 📊 Worst Offenders Analysis

### 1. frontend-slides (42.71%)
- **Small project:** Only 38 total lines analyzed
- **High density duplication:** Small codebase with significant repeated patterns
- **Likely cause:** AI-generated repetitive CSS/markup or template slides
- **Recommendation:** Consolidate repeated slide templates into a single parameterized component

### 2. cofounder (25.32%)
- **AI-generated app builder:** 15,482 lines
- **Pattern:** Full-stack generator producing boilerplate-heavy output
- **Key finding:** TypeScript and TSX dominate the duplication
- **Recommendation:** Extract shared generator templates into a shared library

### 3. openv0 (22.42%)
- **AI UI component generator:** 2,737 lines
- **Pattern:** UI component scaffolding with repeated patterns
- **Likely cause:** Similar component variants generated from prompts
- **Recommendation:** Component composition over duplication — use props to vary behavior

### 4. context-engineering-intro (20.68%)
- **Documentation-heavy:** 2,120 lines
- **Pattern:** Markdown and JSON cloning — repeated examples/docs
- **Likely cause:** AI tutorial repositories with copy-pasted examples
- **Recommendation:** Use documentation generators or include-based systems

### 5. cockpit-tools (20.55%)
- **Large project:** 12,530 lines with 620 clones
- **Pattern:** Spread across multiple formats — TS, TSX, JS, Python
- **Key issue:** Significant code and config duplication across modules
- **Recommendation:** Monorepo tooling or shared packages to reduce cross-module duplication

---

## 📋 Project Summary Table

| Project | Clones | Lines | Dup. Lines | Dup. % | Top Format | Top Type |
|---------|--------|-------|------------|--------|------------|----------|
| frontend-slides | 16 | 38 | 16 | 42.71% | Markup | Code |
| cofounder | 118 | 15,482 | 3,920 | 25.32% | Typescript | Code |
| openv0 | 110 | 2,737 | 614 | 22.42% | Typescript | Code |
| context-engineering-intro | 98 | 2,120 | 438 | 20.68% | Markdown | Documentation |
| cockpit-tools | 620 | 12,530 | 2,575 | 20.55% | Typescript | Code |
| codebase-to-course | 4 | 799 | 4 | 0.50% | Markdown | Documentation |
| deepseek_ocr_app | 4 | 1,109 | 14 | 1.26% | Markdown | Documentation |
| lk_locator | 2 | 1,773 | 14 | 0.79% | Python | Code |
| lost.js | 8 | 2,419 | 30 | 1.24% | Javascript | Code |
| vibecoins-mcp | 4 | 1,757 | 45 | 2.56% | Typescript | Code |
| DVVCA | 9 | 4,340 | 100 | 2.30% | Markup | Code |
| prodlint | 45 | 6,147 | 168 | 2.74% | Typescript | Code |
| ubon | 59 | 7,456 | 209 | 2.81% | Typescript | Code |
| sparky | 13 | 1,330 | 56 | 4.21% | Javascript | Code |
| hapi | 413 | 55,013 | 2,701 | 4.91% | Typescript | Code |
| refly | 774 | 138,038 | 6,097 | 4.42% | Typescript | Code |
| voice-typing-vibecoding | 43 | 2,551 | 172 | 6.74% | Typescript | Code |
| Jellyfish | 280 | 83,566 | 5,054 | 6.05% | Python | Code |
| cherry-studio | 921 | 396,534 | 24,747 | 6.24% | Typescript | Code |
| ai-job-agent | 25 | 4,736 | 84 | 1.77% | Typescript | Code |
| medkit-app | 19 | 4,744 | 76 | 1.60% | Typescript | Code |
| airpsx-frontend | 14 | 3,307 | 42 | 1.27% | Typescript | Code |
| billmanager | 165 | 12,870 | 876 | 6.81% | Typescript | Code |
| agent-teams | 19 | 1,364 | 94 | 6.87% | Javascript | Code |
| deutsia-radio | 286 | 22,001 | 1,855 | 8.43% | Kotlin | Code |
| paycan | 76 | 5,560 | 340 | 6.12% | Typescript | Code |
| Vibe-Trading | 149 | 104,461 | 4,865 | 4.66% | Typescript | Code |
| n8n-mcp | 988 | 40,093 | 3,599 | 8.98% | Typescript | Code |
| n8n-workflows-noz | 0 | 2,556 | 0 | 0.00% | - | - |
| the-new-snap-game | 2 | 1,359 | 16 | 1.18% | Csharp | Code |
| SC2SmoothBrainifier | 0 | 1,309 | 0 | 0.00% | - | - |
| safe-vibe-coding | 0 | 1,202 | 0 | 0.00% | - | - |
| banana-slides | 156 | 24,912 | 780 | 3.13% | Typescript | Code |
| VibeVoice | 45 | 23,307 | 1,855 | 7.96% | Python | Code |
| adversarial-dev | 15 | 2,675 | 336 | 12.56% | Python | Code |
| yyz-agentics-june | 35 | 5,488 | 140 | 2.56% | Python | Code |
| fastapi_mcp | 31 | 2,456 | 156 | 6.35% | Python | Code |
| lightning-vibe-coding | 5 | 1,490 | 56 | 3.76% | Markdown | Documentation |
| claude-task-master | 697 | 52,478 | 3,184 | 6.06% | Typescript | Code |
| claude_code_agent | 1,377 | 38,675 | 5,781 | 14.95% | Typescript | Code |
| oh-my-claudecode | 2,247 | 159,808 | 9,761 | 6.11% | Typescript | Code |
| onlook | 426 | 23,558 | 2,096 | 8.90% | Typescript | Code |
| stagewise | 462 | 24,038 | 2,043 | 8.50% | Typescript | Code |
| vibe-check | 0 | 1,008 | 0 | 0.00% | - | - |
| vibe-security-skill | 0 | 890 | 0 | 0.00% | - | - |

---

## 🛠️ Refactoring & Improvement Recommendations

### High Priority (>15% duplication)
1. **frontend-slides (42.71%)** — Consolidate slide templates into parameterized components. Remove boilerplate copied across HTML/markdown files.
2. **cofounder (25.32%)** — Extract shared generator templates into a monorepo or shared package. The 118 clones span multiple formats and are likely template outputs.
3. **openv0 (22.42%)** — Use component composition (props, variants) instead of generating near-identical components. Adopt a design system approach.
4. **context-engineering-intro (20.68%)** — Use documentation generators (Docusaurus, VitePress) with include macros rather than copy-pasting examples across docs.
5. **cockpit-tools (20.55%)** — Introduce shared utility packages to decouple cross-module duplication. Consider monorepo tooling (Nx, Turborepo).

### Medium Priority (5-15% duplication)
6. **oh-my-claudecode, n8n-mcp, onlook, stagewise, deutsia-radio** — These large projects show moderate duplication. Establish code review gates that flag duplication during PR.
7. **claude_code_agent (14.95%)** — Significant TypeScript duplication suggests repeated boilerplate in agent definitions. Extract common agent behaviors to a shared base class.
8. **VibeVoice, adversarial-dev** — Python projects with repeated pipeline patterns. Use decorators, metaclasses, or functional composition for shared logic.

### General Best Practices
- **Config Consolidation:** Projects with high JSON/YAML duplication (context-engineering-intro, n8n-mcp) should centralize configs using shared config packages or workspace references.
- **Documentation Templates:** AI-generated projects frequently duplicate `AGENTS.md`, `CLAUDE.md`, and `README` boilerplate. Use documentation generators with template inheritance.
- **Component Libraries:** TSX/TypeScript projects with UI duplication should build shared component libraries. AI tools can generate these and then consume them instead of recreating components per page.
- **CI Gates:** Integrate jscpd into CI with a threshold (e.g., 5%). Block PRs that exceed the threshold without explicit justification.
- **Pre-commit Hooks:** Run duplication checks locally to catch issues before CI.
- **Code Review Focus:** In vibe-coded projects, reviewers should specifically scan for near-duplicate code blocks that AI may have generated with minor prompt variations.

---

## 📁 Charts & Visualizations

See `./reports/charts/` for generated chart images:
- `duplication_pct.png` — Top projects by duplication percentage
- `clone_count.png` — Top projects by total clone count
- `format_pie.png` — Clone distribution by format
- `type_pie.png` — Clone distribution by type
- `dist_histogram.png` — Duplication percentage distribution histogram
- `format_lines.png` — Duplicated lines by format
- `scatter.png` — Project size vs. duplication scatter plot
- `stacked_types.png` — Clone type breakdown for top projects

View the interactive report: `./reports/cpd-comprehensive-report.html`

---

## 🔬 Methodology

### Project Selection
- **Source:** GitHub trending and search results for keywords: "vibe coding", "built with Claude", "built with Cursor", "AI generated", "lovable.dev", "bolt.new"
- **Criteria:** Projects explicitly mentioning AI-assisted development in descriptions, or known to be built with AI coding assistants
- **Count:** 46 projects cloned with `--depth=1` (latest commit only)

### Analysis Tool
- **jscpd v4.0.9** — JavaScript copy/paste detector supporting 150+ languages
- **Configuration:**
  - Minimum tokens: 50 (default)
  - Ignored directories: `node_modules`, `.git`, `dist`, `build`, `coverage`, `.next`, `.turbo`, `vendor`, `.venv`, `venv`
  - Ignored files: `*.lock`, `package-lock.json`, `yarn.lock`

### Classification Rules
- **Code:** Anything not matching below — source files (`.ts`, `.tsx`, `.js`, `.py`, `.go`, `.java`, etc.)
- **Config:** `.json`, `.yaml`, `.yml`, `.toml`, `.ini`, `.env`, `.config`
- **Test:** Files matching `*.test.*`, `*.spec.*`, or in `tests/`, `__tests__/`, `specs/` directories
- **Documentation:** `.md`, `.mdx`, `.rst`, `.txt` (also markdown format overrides to documentation regardless of path)
- **Other:** Unclassified or mixed matches

---

## 📝 Final Observations

1. **AI tools are not inherently duplicative.** The 5 cleanest projects (0% duplication) were also vibe-coded, demonstrating that code quality depends on developer review practices, not just the tool used.

2. **Documentation duplication is a notable AI artifact.** 9.1% of all clones are documentation — far higher than typical codebases. AI assistants scaffold identical README/AGENTS/CLAUDE files across projects.

3. **TypeScript dominance.** With 44% of clones in TypeScript, the modern AI-assisted web stack (React + TypeScript) is the primary duplication vector. This reflects both popularity and the boilerplate nature of type-heavy code.

4. **Large projects can manage duplication.** `cherry-studio` (396K lines, 6.24%) and `oh-my-claudecode` (159K lines, 6.11%) show that size does not dictate duplication — architecture and review processes do.

5. **Small projects are riskiest.** Projects under 5K lines with >15% duplication (`frontend-slides`, `cofounder`, `openv0`) suggest that AI-generated MVPs and prototypes quickly accumulate technical debt if not refactored.

6. **Code duplication > Config duplication.** Unlike traditionally human-written codebases where config duplication (CI, Docker, package.json) is common, vibe-coded projects show 93.6% of duplication in actual source code. This suggests AI generates functional code with repeated patterns more than it copies configs.

---

*Report generated automatically by the CPD Analyzer framework for vibe-coded projects.*
