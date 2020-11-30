import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { BsWatch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./ButtonContainer";
import { ImCart } from "react-icons/im";
import "./styles/Navbar.css";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <BsWatch className="nav-icon" />
          </Link>
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watches">Catalogue</Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <ImCart className="nav-icon" />
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </div>
      </nav>
    );
  }
}
