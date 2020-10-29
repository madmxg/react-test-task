import React from 'react';
import './cart-item.scss';

class CartItem extends React.Component {
  render() {
    const { name, id, removeFromCart } = this.props;
    return (
      <div>
        <span>{name}</span>
        <button onClick={() => removeFromCart(id)}>remove</button>
      </div>
    );
  }
}

export default CartItem;
