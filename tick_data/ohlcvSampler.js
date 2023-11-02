const M = 1000000;
const K = 1000;
const min = 60;

function getCountSize(count) {
  if (count > M) {
    return `${(count / M).toFixed(2)}M`;
  } else if (count > K) {
    return `${(count / K).toFixed(0)}K`;
  } else {
    return count.toFixed(0);
  }
}

function getTime(count) {
  if (count > min) {
    return `${(count / min).toFixed(2)}m`;
  } else {
    return `${count.toFixed(2)}s`;
  }
}

export default function sample(candles, foot, trade, vol_per_candle = 1000000) {
  const last_candle = candles[candles.length - 1];
  const last_foot = foot[candles.length - 1];
  if (!last_candle && !last_foot) return;
  const tick = trade["price"];
  const volume = trade["volume"] || 0;
  const timestamp = trade["timestamp"];
  const duration = ((timestamp - last_candle[0]) / 1000);

  if (last_candle[5] > vol_per_candle) {
    // i want to go over volume then print new candle
    // And new zero-height candle
    const nc = [timestamp, tick, tick, tick, tick, volume];
    const nf = [timestamp, duration, volume];
    //callback('candle-close', symbol)
    candles.push(nc);
    foot.push(nf);
    return true; // Make update('range')
  } else {
    last_candle[2] = Math.max(tick, last_candle[2]);
    last_candle[3] = Math.min(tick, last_candle[3]);
    last_candle[4] = tick;
    last_candle[5] += volume;
    last_foot[2] = getCountSize(last_candle[5]);
    last_foot[1] = getTime(duration);
    return false; // Make regular('update')
  }
}
