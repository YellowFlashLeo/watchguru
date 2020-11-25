import React, { Component } from "react";
import { WatchContext } from "../main";
import Watch from "./Watch";
import Title from "./Title";
import "./styles/Featured.css";

export default class Featured extends Component {
  static contextType = WatchContext;
  render() {
    let { featuredWatches: watches } = this.context;
    watches = watches.map((watch) => {
      return <Watch key={watch.id} watch={watch} />;
    });
    return (
      <section className="featured-watches">
        <Title title="featured watches" />
        <div className="featured-watches-center">{watches}</div>
      </section>
    );
  }
}
