import React, { Component } from 'react';

import SearchInput from '../SearchInput';
import NavbarMenuList from '../NavbarMenuList';

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: [
        { text: 'Home', href: '/' },
        { text: 'Link', href: '/new-pet' },
        { text: 'Dropdown', options: [{ text: 'Action' }, { text: 'Another action' }, { text: 'Something else here' }] },
      ],
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">PET ADOPT STORE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarMenuList list={this.state.menu} />

          <form className="form-inline my-2 my-lg-0">
            <SearchInput className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
