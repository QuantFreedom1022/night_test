import candles from "../data/candles.json";
class DataLoader {
  async load(callback) {
    callback({
      panes: [
        {
          overlays: [
            {
              name: "BTC Tether US Binance",
              type: "Candles",
              data: candles.map((x) => this.format(x)),
            },
          ],
        },
      ],
    });
  }

  format(x) {
    return [x[0], x[1], x[2], x[3], x[4]];
  }
}

export { DataLoader };
