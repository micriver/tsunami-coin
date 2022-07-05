import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Container } from "@mui/material";

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const buildGroupMeta = (cryptoCurrencyData, metadata) => {
  let cryptoObj = {};
  const results = [];
  const meta = Object.values(metadata);

  for (const crypto of cryptoCurrencyData) {
    cryptoObj = {
      rank: crypto.cmc_rank,
      name: crypto.name,
      price: formatCurrency.format(crypto.quote.USD.price),
      twentyFourHrChange: crypto.quote.USD.percent_change_24h.toFixed(2),
      marketCap: formatCurrency.format(crypto.quote.USD.market_cap),
      volume: formatCurrency.format(crypto.quote.USD.volume_24h),
      totalSupply: crypto.total_supply,
    };
    for (const metaValue of meta) {
      if (metaValue.id === crypto.id) {
        cryptoObj.logo = metaValue.logo;
        cryptoObj.symbol = metaValue.symbol;
      }
    }
    results.push(cryptoObj);
  }
  return results;
};

export default function CryptoCurrencyDashboard(props) {
  const { cryptoCurrencyData, metadata } = props;

  return (
    <Container sx={{ my: 7 }}>
      <TableContainer sx={{ backgroundColor: "#5da6d8eb" }} component={Paper}>
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
            {buildGroupMeta(cryptoCurrencyData, metadata).map(
              (crypto, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component='th' scope='crypto'>
                    {crypto.rank}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    align='left'
                  >
                    {crypto.name}&nbsp;
                    {crypto.symbol}
                    <Avatar
                      alt='Remy Sharp'
                      src={crypto.logo}
                      sx={{ height: "35px", width: "35px", margin: 1 }}
                    />
                  </TableCell>
                  <TableCell align='left'>{crypto.price}</TableCell>
                  <TableCell align='left'>
                    {crypto.twentyFourHrChange}
                  </TableCell>
                  <TableCell align='center'>{crypto.marketCap}</TableCell>
                  <TableCell align='right'>{crypto.volume}</TableCell>
                  <TableCell align='right'>{crypto.totalSupply}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
