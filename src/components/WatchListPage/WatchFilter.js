import React from "react";
import { useContext } from "react";
import { WatchContext } from "../../main";
import Title from "../Title";
import "../styles/WatchFilter.css";

//get all unqiue values for select form
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]; // Set only allows to store unique items, so we check if every items 'type' is in the set? IF NOT ADD there
};

// Hooks Api, so basically we can use HigherOrderComponent or Consumer or Hooks
export default function WatchFilter({ watches }) {
  const context = useContext(WatchContext);
  const { handleChange, company, price, minPrice, maxPrice } = context;

  // GET UNIQUE Types and capacity
  let types = getUnique(watches, "company");
  // add all
  types = ["all", ...types]; // we dont have all option in data.js so we added here
  // map to jsx , so that we have options inside whatever UI we put types in, in our case in select form
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {" "}
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search for a watch" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label hlmlFor="company">Watch brand</label>
          <select
            name="company"
            id="company"
            value={company}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* watch price */}
        <div className="form-group">
          <label htmlFor="price">watch price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of watch price */}
      </form>
    </section>
  );
}
