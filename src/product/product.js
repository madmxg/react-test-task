import React from 'react';
import './product.scss';

class Product extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.inCart !== this.props.inCart) {
      console.log('componentDidUpdate');
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.inCart !== this.props.inCart;
  }

  render() {
    const classNames = ['product'];

    const { children, name, count, inCart, addToCart } = this.props;

    if (inCart) {
      classNames.push('in-card');
    }

    return (
      <div className={classNames.join(' ')}>
        <div>{name}</div>
        <div>{count}</div>
        <div>{children}</div>
        <button onClick={addToCart}>buy</button>
      </div>
    );
  }
}

export default Product;
