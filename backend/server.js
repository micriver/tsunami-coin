const fetch = require("node-fetch");

const { response } = require("express");
const express = require("express");
const { reset } = require("nodemon");

const app = express();

const marketData = require("./CMC.json");
const metadata = require("./CMC-metadata.json");

app.get("/metadata/", (req, res) => {
  res.json(metadata);
});
app.get("/marketdata/", (req, res) => {
  res.json(marketData);
});

const API_KEY = "57b60e4f-fbc9-40c0-98d8-48a0ff732ffd"; // new API Key, internet sucks though

// 7/4/2022
// let response = null;
// new Promise(async (resolve, reject) => {
//   try {
//     response = await axios.get(
//       "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//       {
//         headers: {
//           "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
//         },
//       }
//     );
//   } catch (ex) {
//     response = null;
//     // error
//     console.log(ex);
//     reject(ex);
//   }
//   if (response) {
//     // success
//     const json = response.data;
//     console.log(json);
//     resolve(json);
//   }
// });
// app.get("/marketdata/", (req, res) => {
// res.json(marketData);
// fetch("./CoinCap-response.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });
// });
// const rp = require("request-promise");
// app.get("/marketdata/", (req, res) => {
//   const requestOptions = {
//     method: "GET",
//     uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//     qs: {
//       start: "1",
//       limit: "10",
//       convert: "USD",
//     },
//     headers: {
//       "X-CMC_PRO_API_KEY": API_KEY,
//     },
//     json: true,
//     gzip: true,
//   };

//   rp(requestOptions)
//     .then((response) => {
//       console.log("API call response:", response);
//       res.json(response);
//     })
//     .catch((err) => {
//       console.log("API call error:", err.message);
//     });
// });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Check it out @ http://localhost:${PORT}`);
});
/*

integrate node.js backend with react frontend:
https://youtu.be/19CcxzZHwuI?t=183

https://rapidapi.com/blog/create-react-app-express/

run the command: "node server" to start the server
"Cannot GET /" means it cannot get a route handle/endpoint for the "/"

When you want to go to a webpage, that's a GET request

// using the below method doesn't scale for large websites 
app.get("/", (req, res) => {
  // response object has a method called send that will just send something to the browser
  //   res.send("<h1>Hello Michael! XD</h1>");
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



*/
