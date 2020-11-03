import React from 'react';
import { ThemeContext, themes } from '../theme-context';

class Header extends React.Component {
  render() {
    const theme = this.context;

    return (
      <header
        style={{
          color: themes[theme].color,
          background: themes[theme].background,
        }}
      >
        Title
        <ThemeContext.Consumer>{(value) => value.color}</ThemeContext.Consumer>
      </header>
    );
  }
}

Header.contextType = ThemeContext;

export default Header;
