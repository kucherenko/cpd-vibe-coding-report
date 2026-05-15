<script>
	let { data } = $props();
	import { readableNumber, severityClass, severityLabel, colorForPct } from '$lib/utils.js';

	function formatName(fmt) {
		return fmt ? fmt.charAt(0).toUpperCase() + fmt.slice(1) : '-' ;
	}

	const detail = $derived(data?.detail || null);
</script>

{#if detail}
<header>
	<div class="header-inner">
		<a href="/" class="back-btn">← Back to Leaderboard</a>
		<div class="header-title">
			<h1>{detail.project}</h1>
			<div class="subtitle">
				Owner: {detail.owner} · {detail.totalLines.toLocaleString()} lines · jscpd v4.2.1
				<span class="severity-pill {severityClass(detail.percentage)}" style="margin-left:12px">{severityLabel(detail.percentage)} — {detail.percentage?.toFixed(2)}%</span>
			</div>
		</div>
	</div>
</header>

<main class="main">
	<div class="metric-row">
		<div class="metric"><div class="val">{detail.totalClones}</div><div class="lbl">Total Clones</div></div>
		<div class="metric"><div class="val">{(detail.totalDuplicatedLines || 0).toLocaleString()}</div><div class="lbl">Duplicated Lines</div></div>
		<div class="metric"><div class="val" style="color:{colorForPct(detail.percentage)}">{detail.percentage?.toFixed(2)}%</div><div class="lbl">Duplication Rate</div></div>
		<div class="metric"><div class="val">{detail.totalLines.toLocaleString()}</div><div class="lbl">Total Lines</div></div>
	</div>

	<section class="card">
		<h2>Clone Distribution by Format</h2>
		{#if detail.formatStats && Object.keys(detail.formatStats).length > 0}
		<table class="leaderboard-table">
			<thead><tr><th>Format</th><th class="num">Count</th><th class="num">Lines</th></tr></thead>
			<tbody>
				{#each Object.entries(detail.formatStats).sort((a,b) => b[1].count - a[1].count) as [fmt, stats]}
				<tr><td>{formatName(fmt)}</td><td class="num">{stats.count}</td><td class="num">{stats.lines}</td></tr>
				{/each}
			</tbody>
		</table>
		{:else}
			<div style="text-align:center;padding:2rem;color:var(--text-tertiary)">No format data available.</div>
		{/if}
	</section>

	<section class="card">
		<h2>Clone Distribution by Type</h2>
		{#if detail.cloneTypeCounts && Object.keys(detail.cloneTypeCounts).length > 0}
		<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem">
			{#each Object.entries(detail.cloneTypeCounts).sort((a,b) => b[1] - a[1]) as [t, count]}
				<div style="background:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--radius-sm);padding:1rem;text-align:center">
					<div style="font-size:1.5rem;font-family:'JetBrains Mono',monospace;color:var(--text-primary);">{count}</div>
					<div style="font-size:.8rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.05em">{t}</div>
				</div>
			{/each}
		</div>
		{:else}
			<div style="text-align:center;padding:2rem;color:var(--text-tertiary)">No clone type data available.</div>
		{/if}
	</section>

	<section class="card">
		<h2>Clone Snippets</h2>
		{#if detail.jscpd?.duplicates?.length > 0}
			{#each detail.jscpd.duplicates as dup, i (i)}
				<div class="dup-card">
					<div class="dup-title">
						Clone #{i + 1} · {dup.format} · {dup.lines} lines · ~{dup.tokens} tokens
					</div>
					<div class="dup-files">
						<div>📄 {dup.firstFile}{#if dup.firstFileStart} (L{dup.firstFileStart.line}){/if} {#if dup.secondFile}↔ {dup.secondFile}{#if dup.secondFileStart} (L{dup.secondFileStart.line}){/if}{/if}</div>
					</div>
					<pre><code>{dup.fragment || '(no snippet)'}</code></pre>
				</div>
			{/each}
		{:else}
			<div style="text-align:center;padding:4rem 2rem">
				<div style="font-size:4rem;margin-bottom:1rem">🎉</div>
				<h3 style="font-family:'Playfair Display',serif;color:var(--text-primary);font-size:1.5rem;margin-bottom:.5rem">No Duplicates Found</h3>
				<p style="color:var(--text-tertiary)">This project is clean — no code clones were detected by jscpd.</p>
			</div>
		{/if}
	</section>
</main>
{:else}
<div style="display:flex;justify-content:center;align-items:center;min-height:100vh;background:var(--bg-base)">
	<div style="text-align:center">
		<div style="font-size:3rem;margin-bottom:1rem">⏳</div>
		<h2 style="font-family:'Playfair Display',serif;color:var(--text-primary);margin-bottom:1rem">Loading Project Report...</h2>
	</div>
</div>
{/if}
