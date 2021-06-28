import "./App.css";
import { useState, useEffect } from "react";
import Cryptocurrency from "./Components/Cryptocurrency/Cryptocurrency";
import logoTag from "./images/coin-tsunami-logo-crop.png";

function App() {
  // cryptocurrency api
  const [text, setText] = useState([]);

  /*

  create a function and ternary operator to grab data in the beginning then to update that data every 30 seconds OR when synchronize button is manually pressed

  */
  // interact with our Express backend
  useEffect(() => {
    fetch("/api/")
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
      // you need to make sure that map is able to loop through an array of objects: https://stackoverflow.com/questions/30142361/react-js-uncaught-typeerror-this-props-data-map-is-not-a-function
      .then((apiText) => setText(apiText.data))
      .catch((error) => console.log(error));
  }, []);

  // console.log(text);
  // console.log("Text is an: ", typeof text);
  return (
    <div className='App'>
      <img className='logo' src={logoTag} alt='coin tsunami logo' />
      <div className='cryptocurrency-rankings-container'>
        {text.map((cryptoCurrency) => {
          return (
            <Cryptocurrency
              key={cryptoCurrency.id}
              rank={cryptoCurrency.cmc_rank}
              name={cryptoCurrency.name}
              symbol={cryptoCurrency.symbol}
              price={cryptoCurrency.quote.USD.price}
              percent_change_24h={cryptoCurrency.percent_change_24h}
              volume_24h={cryptoCurrency.volume_24h}
              market_cap={cryptoCurrency.market_cap}
              total_supply={cryptoCurrency.total_supply}
            />
          );
        })}
        {/* {text.map((cryptoCurrency) => (
          <Cryptocurrency
            key={cryptoCurrency.rank}
            rank={cryptoCurrency.rank}
            name={cryptoCurrency.name}
            symbol={cryptoCurrency.symbol}
            priceUsd={cryptoCurrency.priceUsd}
            changePercent24Hr={cryptoCurrency.changePercent24Hr}
            volumeUsd24Hr={cryptoCurrency.volumeUsd24Hr}
            marketCapUsd={cryptoCurrency.marketCapUsd}
            supply={cryptoCurrency.supply}
          />
        ))} */}
      </div>
    </div>
  );
}

export default App;

/*
layout left to right:

1. rank - number
2. Coin Name and symbol eg "Bitcoin BTC"
3. Price in USD
4. 24hr % change
5. 7 day % change
6. Market Cap
7. 24hour Volume
8. Circulating Supply
9. Last 7 day changes

*/
