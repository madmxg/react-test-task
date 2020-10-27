import React from 'react';
import './cart.scss';

import CartItem from '../cart-item/cart-item';

class Cart extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          margin: '0px auto',
        }}
      >
        <div>Cart:</div>
        {this.props.data.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            removeFromCart={this.props.removeFromCart}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
