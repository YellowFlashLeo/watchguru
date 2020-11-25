import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { Link } from "react-router-dom";
import { WatchContext } from "../main";
import defaultBcg from "../components/img/HomeScreen.jpg";
import "../components/styles/SingleWatch.css";

export default class SingleWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = WatchContext;
  render() {
    const { getItem } = this.context;
    let watch = getItem(this.state.slug);

    // maybe required room by the slug being passed by url doesnt exist then let user navigate back
    if (!watch) {
      return (
        <div className="error">
          <h3>no such watch could be found</h3>
          <Link to="/watches" className="btn-primary">
            back to Home page
          </Link>
        </div>
      );
    }
    const { title, info, company, price, img } = watch;

    //const [mainImg, ...defaultImg] = images;
    // we are using StyledHero because we want to display image of the room we are clicking on
    return (
      <>
        <StyledHero img={img || this.state.defaultBcg}>
          <Banner title={`${title} Watch`}>
            <Link to="/watches" className="btn-primary">
              back to Home page
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images"> {img}</div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{info}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>company: {company}</h6>
            </article>
          </div>
        </section>
      </>
    );
  }
}
