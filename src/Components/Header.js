import React, { Component } from 'react';
import Title from './Header/Title';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Title title={this.props.title} />
      </header>
    );
  }
}

export default Header;