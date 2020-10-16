import React, { Fragment } from 'react';

export default function Product({ name, count, children }) {
  return (
    <Fragment>
      <div>{name}</div>
      <div>{count}</div>
      <div>{children}</div>
      <button>buy</button>
    </Fragment>
  );
}
