import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WatchProvider } from "./main";

ReactDOM.render(
  <WatchProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WatchProvider>,

  document.getElementById("root")
);
