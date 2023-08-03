import TradingViewWidget, { Themes } from "react-tradingview-widget";
import React from "react";

const TradingViewChart = () => {

    return (
      <div style={{ float: "left", width: "100%", height: "50vh" }}>
        <TradingViewWidget
          symbol="BINANCE:BTCUSDT"
          interval="15"
          timezone="Etc/UTC"
          theme={Themes.DARK}
          locale="en"
          autosize
        />
      </div>
    )
}
export default TradingViewChart;

//       autosize: true,
//       symbol: "BINANCE:DOGEUSDT",
//       interval: "15",
//       timezone: "Etc/UTC",
//       theme: "dark",
//
//       locale: "pl",
//       toolbar_bg: "#f1f3f6",
//       enable_publishing: false,
//       allow_symbol_change: true,
