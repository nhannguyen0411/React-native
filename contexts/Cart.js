import React, { Component } from "react";

export const CartContext = React.createContext();
export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      sum: 0,
      count: 0
    };

    this.addToCart = this.addToCart.bind(this);
    this.countIncrease = this.countIncrease.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  countIncrease(product) {
      this.setState({
          cartItems: this.state.cartItems.map(item => {
              if (item.id === product.id) {
                  item.quantity = item.quantity + 1;
              }
              return item;
          }),
          sum: this.state.sum += parseFloat(product.price.split('.').join('')),
          count: this.state.count + 1
      });
  }
 
  removeFromCart(product){
    if(product.quantity >= 2) {
        this.setState({
            cartItems: this.state.cartItems.map(item => {
                if (item.name.toLowerCase() === product.name.toLowerCase()) {
                    item.quantity = item.quantity - 1;
                }
                return item;
            }),
            sum: this.state.sum -= parseFloat(product.price.split('.').join('')),
            count: this.state.count - 1
        });
    } else {
        const filt = this.state.cartItems.filter( item =>  item.id !== product.id )
        this.setState({
            cartItems: filt,
            count: this.state.count - 1,
            sum: this.state.sum -= parseFloat(product.price.split('.').join(''))
        })
    }
  }

  addToCart(product) {
    let find = this.state.cartItems.find(
        item => item.name.toLowerCase() === product.name.toLowerCase()
    );
    if(find === undefined) {
        const productWithQuantity = { ...product, quantity: 1 };
        this.setState({
            cartItems: [...this.state.cartItems, productWithQuantity],
            count: this.state.count + 1,
            sum: this.state.sum += parseFloat(product.price.split('.').join(''))
        });
    } else {
        this.countIncrease(product);
    }
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          countIncrease: this.countIncrease,
          removeFromCart: this.removeFromCart,
          count: this.state.count,
          sum: this.state.sum
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}