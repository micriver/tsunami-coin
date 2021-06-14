import React from "react";
import styles from "./Cryptocurrency.module.css";

function Cryptocurrency() {
  return (
    <div className={styles.crypto}>
      <section className='rank'>1</section>
      <section className='name-symbol'>Bitcoin BTC</section>
      <section className='price-usd'>$35,886.82</section>
      <section className='24hour-change'>^2.78%</section>
      <section className='7day-change'>^2.78%</section>
      <section className='market-cap'>$674,133,129,446</section>
      <section className='24hour-volume'>$39,638,654,183</section>
      <section className='circulating-supply'>18,733,325 BTC</section>
      <section className='last-7days'>Chart goes here</section>
    </div>
  );
}

export default Cryptocurrency;

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
