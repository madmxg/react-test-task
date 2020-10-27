import React from 'react';
import './cart-item.scss';

class CartItem extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount', this.props.name);
  }

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
