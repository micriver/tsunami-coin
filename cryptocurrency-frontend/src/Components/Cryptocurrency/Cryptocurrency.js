import React from "react";
import styles from "./Cryptocurrency.module.css";

function Cryptocurrency(coins) {
  const {
    // key,
    rank,
    name,
    symbol,
    price,
    percent_change_24h,
    volume_24h,
    market_cap,
    total_supply,
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
      <section className='price-usd'>{price}</section>
      <section className='24hour-change'>{percent_change_24h}</section>
      {/* <section className='7day-change'>^2.78%</section> */}
      <section className='market-cap'>{market_cap}</section>
      <section className='24hour-volume'>{volume_24h}</section>
      <section className='circulating-supply'>{total_supply}</section>
      {/* <section className='last-7days'>Chart goes here</section> */}
    </div>
  );
}

export default Cryptocurrency;
