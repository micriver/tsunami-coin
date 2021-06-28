import React from "react";
import styles from "./Cryptocurrency.module.css";

function Cryptocurrency(coins) {
  const {
    rank,
    name,
    symbol,
    priceUsd,
    changePercent24Hr,
    volumeUsd24Hr,
    marketCapUsd,
    supply,
  } = coins;

  const number_format = (val, decimals) => {
    val = parseFloat(val);
    return val.toFixed(decimals);
  };

  return (
    <div className={styles.crypto}>
      <section className='rank'>{rank}</section>
      <section className='name-symbol'>
        {name}&nbsp;
        {symbol}
      </section>
      <section className='price-usd'>{number_format(priceUsd, 2)}</section>
      <section className='24hour-change'>
        {number_format(changePercent24Hr, 2)}
      </section>
      {/* <section className='7day-change'>^2.78%</section> */}
      <section className='market-cap'>{number_format(marketCapUsd, 2)}</section>
      <section className='24hour-volume'>
        {number_format(volumeUsd24Hr, 2)}
      </section>
      <section className='circulating-supply'>
        {number_format(supply, 2)}
      </section>
      {/* <section className='last-7days'>Chart goes here</section> */}
    </div>
  );
}

export default Cryptocurrency;
