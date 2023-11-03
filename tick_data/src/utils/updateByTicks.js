import ticks from '~data/ticks.json';
import { setCandle } from '~utils';

let count = 0;

export function updateByTicks() {
  const candleData = chart.hub.mainOv.data;
  const footData = chart.data.panes.at(1).overlays.at(0).data;
  const tick = ticks.at(count);

  const trade = {
    price: tick.at(1),
    volume: tick.at(1) * tick.at(2),
    timestamp: tick.at(0),
  };

  if (setCandle(candleData, footData, trade)) {
    chart.scroll();
  }

  chart.update('data');
  count++;
}

export function setIntervalTicks(intervalName) {
  intervalName = setInterval(function () {
    updateByTicks();
    if (count === ticks.length) {
      clearInterval(intervalName);
      console.log('Interval was cleared');
    }
  }, 20);
}
