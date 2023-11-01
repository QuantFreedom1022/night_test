export default function sample(ohlcv, trade, vol_per_candle = 1000000) {
  let last = ohlcv[ohlcv.length - 1];
  if (!last) return;
  let tick = trade["price"];
  let volume = trade["volume"] || 0;
  let timestamp = trade["timestamp"];

  if (last[5] > vol_per_candle) { // i want to go over volume then print new candle
    // And new zero-height candle
    let nc = [timestamp, tick, tick, tick, tick, volume];
    //callback('candle-close', symbol)
    ohlcv.push(nc);
    return true; // Make update('range')
  } else {
    last[2] = Math.max(tick, last[2]);
    last[3] = Math.min(tick, last[3]);
    last[4] = tick;
    last[5] += volume;
    return false; // Make regular('update')
  }
}