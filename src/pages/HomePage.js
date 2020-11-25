import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Featured from "../components/Featured";

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="luxurius watches"
          subtitle="deluxe watches starting at $299.0"
        >
          <Link to="/watches" className="btn-primary">
            our watches
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Featured />
    </React.Fragment>
  );
}
