import React from 'react';
import styles from './app.module.scss';
import Product from './product/product';
import Cart from './cart/cart';
import ErrorBoundary from './error-boundary/error-boundary';
import withWindowSize from './hoc/with-window-size';
import { Layout } from './layout/layout';
import { ThemeContext, themes } from './theme-context';

class App extends React.Component {
  state = {
    pageTitle: 'My App',
    products: [
      { id: 1, name: 'Apple 🍏', count: 10 },
      { id: 2, name: 'Lemon 🍋', count: 5 },
    ],
    cart: [],
    inputData: '',
    theme: 'light',
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

  changeThemeHandler = (event) => {
    this.setState({
      theme: event.target.value,
    });
  };

  render() {
    const { products, cart } = this.state;

    return (
      <ErrorBoundary>
        <ThemeContext.Provider value={this.state.theme}>
          <Layout>
            <div className={styles.app}>
              <div>
                <span>Theme: </span>
                <select onChange={this.changeThemeHandler}>
                  {Object.keys(themes).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={this.changePageTitleHandler}>
                Change title
              </button>

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
          </Layout>
        </ThemeContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default withWindowSize(App);
