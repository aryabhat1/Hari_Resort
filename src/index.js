import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { MoralisProvider, Moralis } from "react-moralis";
import { NotificationProvider } from "web3uikit";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const web3Instance = await Moralis.enableWeb3({
//   provider: "walletconnect",
//   chainId: 56,
// });
// const userAddress = web3Instance.givenProvider.selectAddress;
// const userAddress = web3Instance._provider.accounts[0];
// localStorage.userAddress = userAddress;

ReactDOM.render(
  <MoralisProvider
    appId="a9vpG3VBxBerKxxCC2OPvcIkmFwIkTsbNRL3qgky"
    serverUrl="https://s0pxbzmon9k2.usemoralis.com:2053/server"
  >
    <NotificationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotificationProvider>
  </MoralisProvider>,
  document.getElementById("root")
);
