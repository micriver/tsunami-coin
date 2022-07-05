import styles from "./App.module.css";
import { useState, useEffect } from "react";
import logoTag from "./images/coin-tsunami-logo-crop.png";
import CryptoCurrencyDashboard from "./Pages/CryptoCurrencyDashboard";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";

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
      <ResponsiveAppBar />
      <div className={styles.App}>
        {/* <img className={styles.logo} src={logoTag} alt='coin tsunami logo' /> */}
        <CryptoCurrencyDashboard
          cryptoCurrencyData={cryptoCurrencyData}
          metadata={metadata}
        />
      </div>
    </>
  );
}

export default App;
