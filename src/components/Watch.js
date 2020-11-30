import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { Button } from "./Button";
import styled from "styled-components";
import { WatchConsumer } from "../main";
import PropTypes from "prop-types";
import "./styles/Watch.css";

export default class Watch extends Component {
  render() {
    const { title, slug, img, price, id } = this.props.watch;

    return (
      <WatchConsumer>
        {(provider) => (
          <article className="room">
            <div
              className="img-container"
              onClick={() => provider.handleDetail(id)}
            >
              <img src={img} alt="single room" />
              <Link to="/details" className="btn-primary room-link">
                Features
              </Link>
            </div>
            <p className="room-info">{title}</p>
          </article>
        )}
      </WatchConsumer>
    );
  }
}
