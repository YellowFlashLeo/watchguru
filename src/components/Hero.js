import React from "react";
import "../components/styles/Hero.css";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

// so that if we have components which are going to use hero.css class and they dont have hero parameter than default will be
// Example in Home.js <Hero hero="defaultHero"  we dont need to write all this
// Only <Hero/> default will be set automatically
Hero.defaultProps = {
  hero: "defaultHero",
};
