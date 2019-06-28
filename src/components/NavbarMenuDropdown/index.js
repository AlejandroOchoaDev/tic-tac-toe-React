import React, { Component } from 'react';

class NavbarMenuDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  onClick() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const { options = [], text, id } = this.props;
    const { isActive } = this.state;

    const items = options.map(({ text, href }, index) => (
      <a
        className="dropdown-item"
        href={href}
        key={index}
      >
        { text }
      </a>
    ));

    return (
      <li className="nav-item dropdown">
        <span
          id={id}
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          role="button"
          onClick={this.onClick.bind(this)}
        >
          { text }
        </span>
        <div
          className={`dropdown-menu ${isActive ? 'show' : ''}`}
          aria-labelledby={id}
        >
          { items }
        </div>
      </li>
    );
  }
}

export default NavbarMenuDropdown;
