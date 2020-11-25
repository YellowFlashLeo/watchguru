import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import WatchContainer from "../components/WatchListPage/WatchContainer";

export default function WatchList() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our watch collection">
          <Link to="/" className="btn-primary">
            return to Home page
          </Link>
        </Banner>
      </Hero>
      <WatchContainer />
    </>
  );
}
