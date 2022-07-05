import styles from "./App.module.css";
import { useState, useEffect } from "react";
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

  return (
    <>
      <div className={styles.App}>
        <img className={styles.logo} src={logoTag} alt='coin tsunami logo' />
        <CryptoCurrencyDashboard
          cryptoCurrencyData={cryptoCurrencyData}
          metadata={metadata}
        />
      </div>
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
