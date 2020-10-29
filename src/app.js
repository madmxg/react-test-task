import React from 'react';
import styles from './app.module.scss';
import Product from './product/product';
import Cart from './cart/cart';
import ErrorBoundary from './error-boundary/error-boundary';
import withWindowSize from './hoc/with-window-size';

class App extends React.Component {
  state = {
    pageTitle: 'My App',
    products: [
      { id: 1, name: 'Apple 🍏', count: 10 },
      { id: 2, name: 'Lemon 🍋', count: 5 },
    ],
    cart: [],
    inputData: '',
  };

  componentDidMount() {
    this.inputRef.focus();
  }

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

  changeInputHandler = (event) => {
    this.setState({ inputData: event.target.value });
  };

  render() {
    const { isMobile } = this.props;
    const { products, cart, pageTitle } = this.state;

    return (
      <ErrorBoundary>
        <div className={styles.app}>
          <header className={styles.header}>
            {!isMobile && <h1>{pageTitle}</h1>}
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
          <Cart
            data={this.state.cart}
            removeFromCart={this.removeFromCartHandler}
          />

          <input
            type="text"
            onChange={this.changeInputHandler}
            value={this.state.inputData}
            ref={(ref) => (this.inputRef = ref)}
          />
          <div>inputData: {this.state.inputData}</div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withWindowSize(App);
