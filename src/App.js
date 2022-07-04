import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Cryptocurrency from "./Components/Cryptocurrency/Cryptocurrency";
import logoTag from "./images/coin-tsunami-logo-crop.png";
import CryptoCurrencyDashboard from "./Pages/CryptoCurrencyDashboard";

function App() {
  // cryptocurrency api
  const [cryptoCurrencyData, setCryptoCurrencyData] = useState([]);
  const [metadata, setMeta] = useState([]);

  useEffect(() => {
    fetch("/marketdata/")
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
      .then((apiCryptoData) => setCryptoCurrencyData(apiCryptoData.data))
      .catch((error) => console.log(error));

    // fetch cryptocurrency metadata
    fetch("/metadata/")
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
      .then((metadata) => setMeta(metadata.data))
      .catch((error) => console.log(error));
  }, []);

  // Object.values(metadata).forEach((val) => console.log(val.logo));
  return (
    <>
      <div className={styles.App}>
        <img className={styles.logo} src={logoTag} alt='coin tsunami logo' />
        <div className={styles.cryptocurrencyRankingsContainer}>
          <div className={styles.header}>
            <header className={styles.rankHeader}>#</header>
            <header className={styles.nameHeader}>Name</header>
            <header className={styles.price}>Price</header>
            <header>24hr %</header>
            <header>Market Cap</header>
            <header>Volume (24h) </header>
            <header className={styles.circulatingSupply}>
              Circulating Supply
            </header>
          </div>
          {cryptoCurrencyData.map((crypto) => {
            return (
              <Cryptocurrency
                // pass metadata object
                metadata={metadata}
                id={crypto.id}
                rank={crypto.cmc_rank}
                name={crypto.name}
                symbol={crypto.symbol}
                price={crypto.quote.USD.price}
                percent_change_24h={crypto.quote.USD.percent_change_24h}
                volume_24h={crypto.quote.USD.volume_24h}
                market_cap={crypto.quote.USD.market_cap}
                total_supply={crypto.total_supply}
                max_supply={crypto.max_supply}
              />
            );
          })}
        </div>
      </div>
      <CryptoCurrencyDashboard
        cryptoCurrencyData={cryptoCurrencyData}
        metadata={metadata}
      />
    </>
  );
}

export default App;

/*

notes/resources:

layout left to right:

    // coincap api json
        { {cryptoCurrencyData.map((crypto) => (
          <Cryptocurrency
            key={crypto.rank}
            rank={crypto.rank}
            name={crypto.name}
            symbol={crypto.symbol}
            priceUsd={crypto.priceUsd}
            changePercent24Hr={crypto.changePercent24Hr}
            volumeUsd24Hr={crypto.volumeUsd24Hr}
            marketCapUsd={crypto.marketCapUsd}
            supply={crypto.supply}
          />
        ))} }

  create a function and ternary operator to grab data with useEffect below in the beginning then to update that data every 30 seconds OR when synchronize button is manually pressed

*/
