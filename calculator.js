/** Return shift duration in hours; an end at or before start means next day. */
export function durationHours(start, end) {
  const toMinutes = value => {
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) throw new Error('Ungültige Uhrzeit');
    const [h, m] = value.split(':').map(Number);
    return h * 60 + m;
  };
  const first = toMinutes(start);
  let last = toMinutes(end);
  if (last <= first) last += 24 * 60;
  return (last - first) / 60;
}

export function weightedHours(start, end, factor) {
  if (!Number.isFinite(factor) || factor <= 0 || factor > 5) throw new Error('Ungültiger Faktor');
  return durationHours(start, end) * factor;
}
