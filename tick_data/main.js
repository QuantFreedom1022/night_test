import "./style.css";
import { NightVision } from "night-vision";
import sampler from "./ohlcvSampler.js";
import ticks from "./data/ticks.json";
import data from "./data/candles.json";
import FootprintsTable from "./navy_files/footprint.navy";

document.querySelector("#app").innerHTML = `
<style>
body {
    background-color: #0c0d0e;
}
</style>
<div id="chart-container"></div>
`;
let chart = new NightVision("chart-container", {
  data,
  autoResize: true,
  colors: { back: "#111113", grid: "#2e2f3055" },
  scripts: [FootprintsTable],
  // config: { CANDLEW: 1 },
});

let count = 0;
function updatebyticks() {
  let data = chart.hub.mainOv.data;
  let tick = ticks[count];
  let trade = {
    price: tick[1],
    volume: tick[1] * tick[2],
    timestamp: tick[0],
  };
  if (sampler(data, trade)) {
    chart.scroll(); // Scroll forward
  }
  chart.update("data"); // New candle
  count++;
}

const intervalID = setInterval(function () {
  updatebyticks();
  if (count == ticks.length) {
    clearInterval(intervalID);
    console.log("Interval was cleared");
  }
}, 20);

window.chart = chart;
