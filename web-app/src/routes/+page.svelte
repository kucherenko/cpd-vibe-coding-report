<script>
	import summaries from '$lib/data/summaries.json';
	import charts from '$lib/data/charts.json';
	import meta from '$lib/data/meta.json';
	import { readableNumber, severityClass, severityLabel, capitalize } from '$lib/utils.js';

	const topByPct = summaries.slice(0, 15);
	const maxCloneCount = Math.max(...charts.topCloneCount.map(d => d.clones), 1);
	const maxFormatCount = Math.max(...charts.formatDistribution.map(d => d.count), 1);

	function barColor(pct) {
		if (pct > 15) return 'chart-bar-red';
		if (pct > 5) return 'chart-bar-amber';
		return 'chart-bar-green';
	}
</script>

<header>
	<div class="header-inner">
		<div class="header-title">
			<h1>🔍 Copy/Paste Detection Report</h1>
			<div class="subtitle">Comprehensive Analysis of Vibe-Coded Projects on GitHub</div>
			<div class="meta" style="margin-top:.5rem; font-size:.8rem; color:var(--text-tertiary);">Generated on {meta.generated} | jscpd v{meta.jscpdVersion} | {meta.totalProjects} projects analyzed</div>
			</div>
		</div>
	</header>

	<main class="main">
		<div class="metric-row">
			<div class="metric">
				<div class="val">{meta.totalProjects}</div>
				<div class="lbl">Projects</div>
			</div>
			<div class="metric">
				<div class="val">{readableNumber(meta.totalLines)}</div>
				<div class="lbl">Total Lines</div>
			</div>
			<div class="metric">
				<div class="val">{meta.totalClones.toLocaleString()}</div>
				<div class="lbl">Total Clones</div>
			</div>
			<div class="metric">
				<div class="val" style="color:var(--accent-amber);">{meta.avgDuplication}%</div>
				<div class="lbl">Avg Duplication</div>
			</div>
			<div class="metric">
				<div class="val" style="color:var(--accent-green);">{meta.projectsWithClones}</div>
				<div class="lbl">With Clones</div>
			</div>
			<div class="metric">
				<div class="val" style="color:var(--accent-blue);">{meta.cleanProjects}</div>
				<div class="lbl">Clean</div>
			</div>
		</div>

		<div class="card">
			<h2>Top 15 Projects by Duplication %</h2>
			<div class="table-wrap" style="overflow-x:auto">
				<table class="leaderboard-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Project</th>
							<th class="num">Clones</th>
							<th class="num">Lines</th>
							<th class="num">Duplication %</th>
							<th>Report</th>
							<th>Severity</th>
						</tr>
					</thead>
					<tbody>
						{#each topByPct as p, i}
							<tr>
								<td>{i + 1}</td>
								<td>{p.project}</td>
								<td class="num">{p.totalClones}</td>
								<td class="num">{readableNumber(p.totalLines)}</td>
								<td class="pct">{p.percentage.toFixed(2)}%</td>
								<td><a href="/detail/{p.project}/"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Open</a></td>
								<td><span class="badge {severityClass(p.percentage)}">{severityLabel(p.percentage)}</span></td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<div class="card">
			<h2>Top 15 Projects by Clone Count</h2>
			<div style="display:flex;flex-direction:column;gap:.5rem">
				{#each charts.topCloneCount as p}
					<div style="display:flex;align-items:center;gap:1rem">
						<div style="width:140px;font-size:.85rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{p.project}</div>
						<div style="flex:1;background:var(--bg-deep);border-radius:4px;height:24px;display:flex;align-items:center;overflow:hidden">
							<div class="chart-bar {barColor(p.percentage)}" style="width:{(p.clones / maxCloneCount * 100)}%;height:100%;display:flex;align-items:center;padding-left:8px">
								<span style="font-size:.75rem;font-family:'JetBrains Mono',monospace;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.5)">{p.clones}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="card">
			<h2>Clone Distribution by Format</h2>
			<div style="display:flex;flex-direction:column;gap:.5rem">
				{#each charts.formatDistribution as f}
					<div style="display:flex;align-items:center;gap:1rem">
						<div style="width:100px;font-size:.85rem">{f.format}</div>
						<div style="flex:1;background:var(--bg-deep);border-radius:4px;height:20px;overflow:hidden">
							<div class="chart-bar" style="width:{(f.count / maxFormatCount * 100)}%;height:100%"></div>
						</div>
						<div style="width:80px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:.8rem">{f.count.toLocaleString()}</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="card">
			<h2>Clone Distribution by Type</h2>
			<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem">
				{#each charts.typeDistribution as t}
					<div style="background:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--radius-sm);padding:1rem;text-align:center">
						<div style="font-size:1.5rem;font-family:'JetBrains Mono',monospace;color:var(--text-primary);">{t.count.toLocaleString()}</div>
						<div style="font-size:.8rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.05em">{t.type}</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="card">
			<h2>Complete Project Summary</h2>
			<div class="table-wrap" style="overflow-x:auto">
				<table class="leaderboard-table">
					<thead>
						<tr>
							<th>Project</th>
							<th class="num">Clones</th>
							<th class="num">Lines</th>
							<th class="num">Dup. Lines</th>
							<th class="num">Dup. %</th>
							<th>Report</th>
							<th>Top Format</th>
							<th>Top Type</th>
						</tr>
					</thead>
					<tbody>
						{#each summaries as p}
							<tr>
								<td>{p.project}</td>
								<td class="num">{p.totalClones}</td>
								<td class="num">{readableNumber(p.totalLines)}</td>
								<td class="num">{readableNumber(p.totalDuplicatedLines)}</td>
								<td class="pct">{p.percentage.toFixed(2)}%</td>
									<td><a href="/detail/{p.project}/"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Open</a></td>
									<td>{p.formatStats && Object.keys(p.formatStats).length > 0 ? capitalize(Object.entries(p.formatStats).sort((a,b) => b[1].count - a[1].count)[0][0]) : '-'}</td>
									<td>{p.cloneTypeCounts && Object.keys(p.cloneTypeCounts).length > 0 ? capitalize(Object.entries(p.cloneTypeCounts).sort((a,b) => b[1] - a[1])[0][0]) : '-'}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</main>

	<footer style="text-align:center;padding:2rem;border-top:1px solid var(--border);color:var(--text-tertiary);font-size:.8rem">
		<p>Report generated by jscpd analysis framework for vibe-coded projects</p>
		<p>{meta.totalProjects} projects analyzed | Total code surveyed: {meta.totalLines.toLocaleString()} lines</p>
	</footer>

<style>
	:global(body) { font-family: 'DM Sans', sans-serif; background: var(--bg-base); color: var(--text-secondary); }
</style>
