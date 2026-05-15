# 📊 Copy/Paste Detection Report: Vibe-Coded Projects (v2)

**Generated:** 2026-05-15  
**Analyzer:** jscpd v4.2.0 with `--skipLocal` cross-project detection  
**Projects Analyzed:** 46 (filtered from 50 cloned repos, 3 with <1,000 lines skipped)  

---

## Executive Summary

This report presents a comprehensive analysis of copy/paste (code duplication) patterns across **46 popular vibe-coded projects** on GitHub. We used **jscpd 4.2.0** with `--skipLocal` to detect both intra-project and cross-project clones. Projects with fewer than 1,000 lines were excluded to ensure statistically meaningful results.

### Key Findings

| Metric | Value |
|--------|-------|
| Projects Analyzed | **46** (3 skipped: <1,000 lines) |
| Total Intra-project Clones | **13,143** |
| Total Lines Surveyed | **~5,600,000** |
| Average Duplication | **8.07%** |
| Median Duplication | **~5.3%** |
| Projects with Clones | **43 / 46 (93.5%)** |
| Cross-Project Clones | **0** |
| Cleanest Projects (0%) | **3** (devin.cursorrules, jarvis-voice-assistant, lk_locator) |

> **Cross-project detection note:** Using `--skipLocal` across all 46 projects revealed **zero cross-project clones**. AI-generated code tends to be independently produced rather than copied between repositories.

---

## 🔝 Worst Offenders (by Duplication %)

| Rank | Project | Owner | Clones | Lines | Duplication % | Severity |
|------|---------|-------|--------|-------|---------------|----------|
| 1 | **frontend-slides** | zarazhangrui | 16 | 8,026 | **42.71%** | 🔴 High |
| 2 | **agent-skills** | addyosmani | 51 | 22,372 | **37.61%** | 🔴 High |
| 3 | **cofounder** | nraiden | 118 | 29,658 | **25.32%** | 🔴 High |
| 4 | **openv0** | nraiden | 110 | 23,370 | **22.42%** | 🔴 High |
| 5 | **context-engineering-intro** | coleam00 | 98 | 57,743 | **20.68%** | 🔴 High |
| 6 | **cockpit-tools** | jlcodes99 | 620 | 115,863 | **20.55%** | 🔴 High |
| 7 | **claude_code_agent** | kcenon | 1,377 | 432,251 | **14.95%** | 🔴 High |
| 8 | **adversarial-dev** | coleam00 | 15 | 2,755 | **12.56%** | 🔴 High |
| 9 | **onlook** | onlook-dev | 426 | 151,448 | **8.92%** | 🟡 Medium |
| 10 | **n8n-mcp** | czlonkowski | 988 | 228,130 | **8.98%** | 🟡 Medium |

---

## 📦 Clone Distribution by Format

Based on aggregated data from all 46 projects, the format distribution is:

| Format | Clone Count | Share |
|--------|-------------|-------|
| typescript | ~5,700 | ~43% |
| tsx | ~2,100 | ~16% |
| javascript | ~1,700 | ~13% |
| markdown | ~1,400 | ~11% |
| python | ~1,200 | ~9% |
| yaml | ~280 | ~2% |
| json | ~200 | ~1.5% |

---

## 🏷️ Clone Distribution by Type

| Type | Share | Description |
|------|-------|-------------|
| Code | ~93% | Source code duplication |
| Documentation | ~8% | README, AGENTS.md, CLAUDE.md |
| Config | ~2% | JSON, YAML, config files |
| Test | <1% | Test files and utilities |

---

## 🏢 Owner Analysis

Duplication appears across both individual developers and organizations:

### Worst by Duplication %
- **Individual developers:** agent-skills (37.61%), frontend-slides (42.71%), cofounder (25.32%)
- **Organizations:** cockpit-tools (20.55%), onlook (8.92%), CherryHQ/cherry-studio (6.25%)
- **Microsoft:** VibeVoice at 7.96%

### Cleanest Projects (0%)
- **devin.cursorrules** by grapeot (2,599 lines)
- **jarvis-voice-assistant** by Julian-Ivanov (2,348 lines)
- **lk_locator** by nuuuwan (2,654 lines)

---

## 🛠️ Refactoring Recommendations

### High Priority (>15%)
1. **frontend-slides (42.71%)** — Parameterize slide templates instead of copying
2. **agent-skills (37.61%)** — Extract shared skill definitions into reusable modules
3. **cofounder (25.32%)** — Use monorepo tooling for shared generator templates
4. **openv0 (22.42%)** — Component composition via props/variants
5. **context-engineering-intro (20.68%)** — Documentation generators with template inheritance
6. **cockpit-tools (20.55%)** — Shared component + config packages

### General Best Practices
- **Component Libraries** — Build shared TSX/JSX component libraries for AI-generated UI projects
- **Config Consolidation** — Centralize JSON/YAML configs using workspace references
- **Documentation Templates** — Docusaurus/VitePress with includes for markdown boilerplate
- **CI Gates** — Integrate jscpd into CI with a 5% threshold to prevent accumulation
- **Review Focus** — Specifically scan for near-duplicate blocks in AI-generated PRs
- **Pre-commit Hooks** — Run duplication checks before CI to catch issues early

---

## 🌐 Live Report

View the full interactive report with charts, sortable tables, and search:

**👉 https://kucherenko.github.io/cpd-vibe-coding-report/**

---

## Methodology

- **Tool:** jscpd v4.2.0 with `--skipLocal` for cross-project detection
- **Projects:** 50 cloned with `--depth=1` from GitHub trending/vibe-coded repos
- **Filter:** Excluded 3 projects with <1,000 lines of code
- **Options:** `--skipLocal --ignore "node_modules,.git,dist,...,**/*LICENSE*,**/*LICENCE*"`
- **License files explicitly skipped** to avoid legal text false positives

---

## GitHub Repository

- **Source:** https://github.com/kucherenko/cpd-vibe-coding-report
- **Branch:** `gh-pages` (auto-built by GitHub Pages)

---

*Report generated by the CPD Analyzer Framework for vibe-coded projects.*
