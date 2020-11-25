import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import Error from "./pages/ErrorPage";
import SingleWatch from "./pages/SingleWatch";
import WatchList from "./pages/WatchList";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/watches" component={WatchList} />
        <Route exact path="/watches/:slug" component={SingleWatch} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
