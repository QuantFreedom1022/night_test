const MIN = 60;
const M = Math.pow(10, 6);
const K = Math.pow(10, 3);

export function getTime(time) {
  if (time > MIN) {
    return `${(time / MIN).toFixed(2)}m`;
  }

  return `${time.toFixed(2)}s`;
}

export function getCount(count) {
  if (count > M) {
    return `${(count / M).toFixed(2)}M`;
  }

  if (count > K) {
    return `${(count / K).toFixed(0)}K`;
  }

  return count.toFixed(0);
}
