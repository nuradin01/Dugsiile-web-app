import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="app-header">
      <a className="app-header__logo" href="#!">
        Dugsiile
      </a>
      {/* Sidebar toggle button*/}
      <a
        className="app-sidebar__toggle"
        href="#!"
        data-toggle="sidebar"
        aria-label="Hide Sidebar"
      >
        {' '}
      </a>
      {/* Navbar Right Menu*/}
      <ul className="app-nav">
       
        {/* User Menu*/}
        <li className="dropdown">
          <a
            className="app-nav__item"
            href="#!"
            data-toggle="dropdown"
            aria-label="Open Profile Menu"
          >
            <i className="fa fa-user fa-lg" />
          </a>
          <ul className="dropdown-menu settings-menu dropdown-menu-right">
            <li>
              <Link className="dropdown-item" to="/user">
                <i className="fa fa-user fa-lg" /> Profile
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href="/login">
                <i className="fa fa-sign-out fa-lg" /> Sign Out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
