import "./App.css";
import Cryptocurrency from "./Cryptocurrency/Cryptocurrency";
import logoTag from "./images/coin-tsunami-logo-crop.png";
// import useFetch from "react-fetch-hook";
// const axios = require("axios").default;

function App() {
  // cryptocurrency api

  return (
    <div className='App'>
      <img className='logo' src={logoTag} alt='coin tsunami logo' />
      {/* cryptocurrencies */}
      <div className='cryptocurrency-rankings-container'>
        <Cryptocurrency />
      </div>
    </div>
  );
}

export default App;

// const { isLoading, error, data } = useFetch("https://randomuser.me/api");
// if (isLoading) return "Loading...";
// if (error) return "Error!";
//     <>
//       <img src={data.results[0].picture.medium} alt='random user' />
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </>

// fetch("https://reqres.in/api/users/1")
//   .then((res) => {
//     if (res.ok) {
//       res = res.json();
//       console.log("success");
//     } else {
//       console.log("failure");
//     }
//   })
//   .then((data) => console.log(data));
