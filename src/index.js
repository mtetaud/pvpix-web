import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const appId = "e5zi7uwJqdOhKb5Y1qoiOm40fe7Qa8ZXzhYHUKHJ";
const serverUrl = "https://sby07olkn1pg.moralishost.com:2053/server";

ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </MoralisProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
