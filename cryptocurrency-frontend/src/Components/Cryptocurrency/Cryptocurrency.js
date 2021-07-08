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

  // Number formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  // keep numbers to 2 decimal places
  const numberFormat = (val, decimals) => {
    val = parseFloat(val);
    return val.toFixed(decimals);
  };

  return (
    <div className={styles.crypto}>
      <section className={styles.rank}>{rank}</section>
      <section className={styles.nameSymbol}>
        {name}&nbsp;
        {symbol}
      </section>
      <section className={styles.price}>{formatter.format(price)}</section>
      <section className='24hour-change'>
        {numberFormat(percent_change_24h, 2)}%
      </section>
      {/* <section className='7day-change'>^2.78%</section> */}
      <section className='market-cap'>{formatter.format(market_cap)}</section>
      <section className='24hour-volume'>
        {formatter.format(volume_24h)}
      </section>
      <section className={styles.circulatingSupply}>
        {total_supply}&nbsp;
        {symbol}
      </section>
      {/* <section className='last-7days'>Chart goes here</section> */}
    </div>
  );
}

export default Cryptocurrency;

/*

notes/resources:

number formating:
https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings

*/
