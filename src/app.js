import React from 'react';
import styles from './app.module.scss';
import Product from './product/product';

class App extends React.Component {
  state = {
    pageTitle: 'My App',
    products: [
      { id: 1, name: 'Apple 🍏', count: 10 },
      { id: 2, name: 'Lemon 🍋', count: 5 },
    ],
    cart: [],
  };

  changePageTitleHandler = () => {
    this.setState({ pageTitle: 'Products list' });
  };

  addToCartHandler = (id, name) => {
    if (!this.state.cart.find((item) => item.id === id)) {
      this.setState((prevState) => ({
        cart: [...prevState.cart, { id, name }],
      }));
    }
  };

  removeFromCartHandler = (id) => {
    const filteredArray = this.state.cart.filter((item) => item.id !== id);
    this.setState({
      cart: filteredArray,
    });
  };

  render() {
    const { products, cart, pageTitle } = this.state;

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>{pageTitle}</h1>
        </header>
        <button onClick={this.changePageTitleHandler}>Change title</button>

        {products.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            count={item.count}
            addToCart={() => this.addToCartHandler(item.id, item.name)}
            inCart={cart.find(({ id }) => id === item.id)}
          />
        ))}

        <div
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            margin: '0px auto',
          }}
        >
          <div>Cart:</div>
          {this.state.cart.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => this.removeFromCartHandler(item.id)}>
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
