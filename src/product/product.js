import React from 'react';
import './product.scss';

export default function Product(props) {
  const classNames = ['product'];

  if (props.inCart) {
    classNames.push('in-card');
  }

  return (
    <div className={classNames.join(' ')}>
      <div>{props.name}</div>
      <div>{props.count}</div>
      <div>{props.children}</div>
      <button onClick={props.addToCart}>buy</button>
    </div>
  );
}
