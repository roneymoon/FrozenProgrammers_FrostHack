import React from 'react';

const TradingViewWidget:React.FC = () => {
    const CDD = `
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
      <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js" async>
      {
      "symbols": [
        [
          "Apple",
          "AAPL|1D"
        ],
        [
          "Google",
          "GOOGL|1D"
        ],
        [
          "Microsoft",
          "MSFT|1D"
        ],
        [
          "OANDA:XAUUSD|1D"
        ],
        [
          "NSE:RELIANCE|1D"
        ],
        [
          "BSE:SENSEX|1D"
        ],
        [
          "NSE:TATAMOTORS|1D"
        ],
        [
          "NSE:WIPRO|1D"
        ],
        [
          "NASDAQ:META|1D"
        ],
        [
          "BINANCE:BTCUSDT.P|1D"
        ],
        [
          "ECONOMICS:BRINTR|1D"
        ],
        [
          "ECONOMICS:INGDP|1D"
        ],
        [
          "AMEX:SPY|1D"
        ]
      ],
      "chartOnly": false,
      "width": 1000,
      "height": 500,
      "locale": "in",
      "colorTheme": "light",
      "autosize": false,
      "showVolume": false,
      "showMA": false,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "fontSize": "10",
      "noTimeScale": false,
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "chartType": "area",
      "maLineColor": "#2962FF",
      "maLineWidth": 1,
      "maLength": 9,
      "lineWidth": 2,
      "lineType": 0,
      "dateRanges": [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M"
      ]
    }
      </script>
    </div>
    <!-- TradingView Widget END -->
    `
  return (
    <div className=' absolute top-0 scale-50'>
        <iframe className='  h-[600px] w-[1000px] bg-red-200' srcDoc={CDD}
        ></iframe>
    </div>
  );
}

export default TradingViewWidget;
