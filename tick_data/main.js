import "./style.css";
import { NightVision } from "night-vision";
import { DataLoader } from "./lib/dataLoader.js";
import sampler from "./lib/ohlcvSampler.js";
import ticks from "./data/ticks.json";

document.querySelector("#app").innerHTML = `
<style>
body {
    background-color: #0c0d0e;
}
</style>
<div id="chart-container"></div>
`;
let chart = new NightVision("chart-container", {
  // data,
  autoResize: true,
  colors: { back: "#111113", grid: "#2e2f3055" },
  config: {},
});
let dl = new DataLoader();

// // Load the first piece of the data
dl.load((data) => {
  chart.data = data; // Set the initial data
  chart.fullReset(); // Reset tre time-range
  chart.se.uploadAndExec(); // Upload & exec scripts
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
