// Number formatter
const curFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

fetch("./CMC-metadata.json")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    // console.log(data.data);
    let crypto = data.data;
    // console.log(crypto[1027].urls);
    console.log(crypto[1]);
    // for (let i = 0; i < crypto.length; i++) {
    //   // console.log(crypto[i].urls);
    //   console.log(crypto[i]);
    // }
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
