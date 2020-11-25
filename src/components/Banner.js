import React from "react";
import "./styles/Banner.css";

// when we use {children} basically all parameters which are gonna be passed to this component
// from another components are gonna be children and placed at the very end since this is where we wrote it
export default function Banner({ title, children, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
