import React from 'react';
import './header.css';
import Icon from './Icon';
import SearchBar from './SearchBar';
import Nav from './Nav';


function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      {/* {main icon} */}
      <Icon />
      {/* {searchbar} */}
      <SearchBar />
      {/* {nav} */}
      <Nav />
    </header>

  );
}

export default Header;