import { NightVision } from 'night-vision';
import data from '~data/candles.json';
import FootStatsTable from '~navy/footStats.navy';
import './style.css';
import { setIntervalTicks } from '~utils';

document.querySelector('#app').innerHTML = `<div id='chart-container'></div>`;

let chart = new NightVision('chart-container', {
  data,
  autoResize: true,
  colors: { back: '#111113', grid: '#2e2f3055' },
  scripts: [FootStatsTable],
  config: { CANDLEW: 0 },
});

window.chart = chart;

setIntervalTicks();
