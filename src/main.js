import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const WatchContext = React.createContext();

class WatchProvider extends Component {
  state = {
    watches: [],
    sortedWatches: [],
    featuredWatches: [],
    detailProduct: detailProduct,
    cart: [],
    modelOpen: false, // for opening widnow once add to cart button was clicked
    modelProduct: detailProduct, // for opening widnow oince add to cart button was clicked
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    // for watchList page
    company: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
  };

  componentDidMount() {
    let watches = this.setProducts();
    let featuredWatches = watches.filter((watch) => watch.featured === true);
    let maxPrice = Math.max(...watches.map((item) => item.price));
    this.setState({
      watches,
      featuredWatches,
      sortedWatches: watches,
      price: maxPrice,
      maxPrice,
    });
  }

  setProducts = () => {
    let watches = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      watches = [...watches, singleItem];
    });
    return watches;
  };

  getItem = (id) => {
    let tempWatches = [...this.state.watches];
    const product = tempWatches.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // we grab everything what inputs are giving us and fix values in the state
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value, // name is what we work with, type or capacity or breakfast and it will be equal to what user selects
      },
      this.filterWatches
    ); // we need to filter depending on value we are getting fromm the input form
  };

  filterWatches = () => {
    let { watches, company, price } = this.state;

    // all the rooms
    let tempWatches = [...watches];

    //trnasform value since we are getting price as string
    price = parseInt(price);

    //filter by type
    if (company !== "all") {
      tempWatches = tempWatches.filter((watch) => watch.company === company);
    }
    //filter by price
    tempWatches = tempWatches.filter((watch) => watch.price <= price);

    this.setState({
      sortedWatches: tempWatches,
    });
  };

  // All functions for  Cart Page
  addToCart = (id) => {
    let tempProducts = [...this.state.watches];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true; // we basically update some properties of product which was added
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { watches: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals(); // every time we save new product to the cart we loop through all items in the cart and update total
      }
    );
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.watches];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          watches: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1; //10% tax
    const tax = parseFloat(tempTax.toFixed(2)); //.toFixed returns string up to 2 decimal points and then we parse it to float
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  //For model component,perhaps will be removed in future
  openModel = (id) => {
    // we gonna cal it everytime we click the icon of the product
    const product = this.getItem(id);
    this.setState(() => {
      return { modelProduct: product, modelOpen: true };
    });
  };

  closeModel = () => {
    this.setState(() => {
      return { modelOpen: false };
    });
  };

  render() {
    return (
      <WatchContext.Provider
        value={{
          ...this.state,
          getItem: this.getItem,
          handleDetail: this.handleDetail,
          handleChange: this.handleChange,
          addToCart: this.addToCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </WatchContext.Provider>
    );
  }
}

const WatchConsumer = WatchContext.Consumer;

//HigherOrder Component
export function withWatchConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <WatchConsumer>
        {(value) => <Component {...props} context={value} />}
      </WatchConsumer>
    );
  };
}

export { WatchProvider, WatchConsumer, WatchContext };
