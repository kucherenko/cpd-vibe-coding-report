export function readableNumber(n) {
	if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
	if (n >= 1_000) return (n / 1_000).toFixed(1) + 'k';
	return String(n);
}

export function severityClass(pct) {
	if (pct > 15) return 'badge-high';
	if (pct > 5) return 'badge-medium';
	if (pct > 0) return 'badge-low';
	return 'badge-none';
}

export function severityLabel(pct) {
	if (pct > 15) return 'High';
	if (pct > 5) return 'Medium';
	if (pct > 0) return 'Low';
	return 'None';
}

export function colorForPct(pct) {
	if (pct > 15) return '#ef4444';
	if (pct > 5) return '#f59e0b';
	if (pct > 0) return '#10b981';
	return '#64748b';
}

export function capitalize(str) {
	if (!str || typeof str !== 'string') return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}
