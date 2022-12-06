import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";

function App() {
  const [coins, setCoins] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => setCoins(resp.data))
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/Cryptocurrency App/"
          element={<Coins coins={coins} />}
        />
        <Route path="/Cryptocurrency App/coin" element={<Coin />}>
          <Route path="/Cryptocurrency App/coin:coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
