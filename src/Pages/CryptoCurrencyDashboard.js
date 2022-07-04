import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function CryptoCurrencyDashboard(props) {
  const { cryptoCurrencyData, metadata } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>Price&nbsp;USD</TableCell>
            <TableCell align='left'>24hr Change</TableCell>
            <TableCell align='center'>Marketcap</TableCell>
            <TableCell align='right'>Volume&nbsp;(24hr)</TableCell>
            <TableCell align='right'>Circulating&nbsp;Supply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoCurrencyData.map((crypto, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='crypto'>
                {crypto.cmc_rank}
              </TableCell>
              <TableCell align='left'>{crypto.name}</TableCell>
              <TableCell align='left'>
                {formatCurrency.format(crypto.quote.USD.price)}
              </TableCell>
              <TableCell align='left'>
                {crypto.quote.USD.percent_change_24h.toFixed(2)}
              </TableCell>
              <TableCell align='center'>
                {formatCurrency.format(crypto.quote.USD.market_cap)}
              </TableCell>
              <TableCell align='right'>
                {formatCurrency.format(crypto.quote.USD.volume_24h)}
              </TableCell>
              <TableCell align='right'>{crypto.total_supply}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// 1. rank - number
// 2. Coin Name and symbol eg "Bitcoin BTC"
// 3. Price in USD
// 4. 24hr % change
// 5. 7 day % change
// 6. Market Cap
// 7. 24hour Volume
// 8. Circulating Supply
// 9. Last 7 day changes
