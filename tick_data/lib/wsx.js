import ticks from "../data/ticks.json";
var last_event = Infinity;
var token = "";
var ws = null;
var _ontrades = () => {};
var _onquotes = () => {};
var _onready = () => {};
var _onrefine = () => {};
var reconnecting = false;
var ready = false;
var symbols = [];
var terminated = false;

function now() {
  return new Date().getTime();
}

async function init(syms) {
  if (ready) return;

  symbols = syms;
  start_hf(symbols);

  // If connection error, try again
  setTimeout(() => init(symbols), 10000);
}

function start_hf() {
  for (let i = 0; i < ticks.length; i++) {
    setTimeout(() => {
      let tick = ticks[0][i];
      _ontrades({
        price: tick[0],
        size: tick[1],
      });
    }, 500);
    break;
  }
}

export default {
  init,
  set ontrades(val) {
    _ontrades = val;
  },
};
