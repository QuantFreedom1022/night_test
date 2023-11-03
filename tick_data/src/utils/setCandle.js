import { getCount, getTime } from '~utils';

const defVolPerCandle = Math.pow(10, 6);

export function setCandle(
  candles,
  footprint,
  trade,
  volPerCandle = defVolPerCandle
) {
  const lastCandle = candles.at(-1);
  const lastFootprint = footprint.at(-1);

  if (!lastCandle && !lastFootprint) {
    return false;
  }

  const { price, volume, timestamp } = trade;
  const duration = (timestamp - lastCandle.at(0)) / 1000;

  if (lastCandle.at(5) > volPerCandle) {
    const nc = [timestamp, price, price, price, price, volume];
    const nf = [timestamp, duration, volume];

    candles.push(nc);
    footprint.push(nf);

    return true;
  }

  lastCandle[2] = Math.max(price, lastCandle.at(2));
  lastCandle[3] = Math.min(price, lastCandle.at(3));
  lastCandle[4] = price;
  lastCandle[5] += volume;
  lastFootprint[2] = getCount(lastCandle.at(5));
  lastFootprint[1] = getTime(duration);

  return false;
}
