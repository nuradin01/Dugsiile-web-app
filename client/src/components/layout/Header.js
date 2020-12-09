import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { logout} from '../../actions/userActions';
import { clearDashboard, clearStudents } from '../../actions/studentActions';

const Header = ({logout, clearDashboard, clearStudents }) => {

  const onLogout = () => {
    logout()
    clearDashboard()
    clearStudents()
  }

  return (
    <header className="app-header">
      <Link className="app-header__logo" to="/">
        Dugsiile
      </Link>
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
              <Link className="dropdown-item" to="/login" onClick={onLogout}>
                <i className="fa fa-sign-out fa-lg" /> Sign Out
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
}
export default connect (null , {logout, clearDashboard, clearStudents })(Header);
