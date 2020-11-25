import React from "react";
import Watch from "../Watch";
import "../styles/WatchAll.css";

export default function WatchAll({ watches }) {
  if (watches.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no watches matched your search</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {watches.map((item) => {
          return <Watch key={item.id} watch={item} />;
        })}
      </div>
    </section>
  );
}
