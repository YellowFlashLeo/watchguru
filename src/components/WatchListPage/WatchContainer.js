import React from "react";
import WatchFilter from "./WatchFilter";
import WatchAll from "./WatchAll";
import { withWatchConsumer } from "../../main";

function WatchContainer({ context }) {
  const { sortedWatches, watches } = context;
  return (
    <>
      <WatchFilter watches={watches} />
      <WatchAll watches={sortedWatches} />
    </>
  );
}

export default withWatchConsumer(WatchContainer);
