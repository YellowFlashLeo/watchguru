import React, { Component } from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive, MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GiEarthAmerica />,
        title: "Over 100 Destinations",
        info: "Will be delivered to any point on the planet earth",
      },
      {
        icon: <MdAirplanemodeActive />,
        title: "1 Million Deliveries Made",
        info: "Over 1 Million watches were delivered last year",
      },
      {
        icon: <MdTimer />,
        title: "Fastest Support",
        info: "Access our Support team 24/7",
      },
      {
        icon: <FaMoneyCheck />,
        title: "Best Deals",
        info: "We offer the best prices",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
