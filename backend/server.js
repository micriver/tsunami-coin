const fetch = require("node-fetch");

// import express
const { response } = require("express");
const express = require("express");
const { reset } = require("nodemon");
// create an instance of express
const app = express();

const rp = require("request-promise");

app.get("/api/", (req, res) => {
  const requestOptions = {
    method: "GET",
    uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    // query string parameters
    qs: {
      start: "1",
      limit: "10",
      convert: "USD",
    },
    headers: {
      "X-CMC_PRO_API_KEY": "43cca0b6-9de8-499a-9018-c984c79e5600",
    },
    json: true,
    gzip: true,
  };

  rp(requestOptions)
    .then((response) => {
      console.log("API call response:", response);
      // return the response as a JSON object
      res.json(response);
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
});

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


// test get request using local json file
// const data = require("./CMC.json");
// console.log(data);

// app.get("/api/", (req, res) => {
//   res.json(data);
//   // fetch("./CoinCap-response.json")
//   //   .then((response) => {
//   //     return response.json();
//   //   })
//   //   .then((data) => console.log(data))
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });
// });

*/
