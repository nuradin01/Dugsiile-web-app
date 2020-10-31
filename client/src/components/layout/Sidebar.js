import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'



const Sidebar = ({ userState: { user }, }) => {
  useEffect(() => {
    const script5 = document.createElement('script');
    script5.src = 'js/main.js';
    script5.async = true;
    document.body.appendChild(script5);

    // eslint-disable-next-line
  }, []);
 
  return (
    <>
      <div>
        <div className="app-sidebar__overlay" data-toggle="sidebar" />
        <aside className="app-sidebar">
          <div className="app-sidebar__user">
            <img
              className="app-sidebar__user-avatar"
              src="rsz_avatar.png"
              alt="User "
            />
            <div>
              <p className="app-sidebar__user-name">
                {user.name.length <= 16
                  ? user.name
                  : user.name.slice(0, 16) + '...'}
              </p>
              <p className="app-sidebar__user-designation">
                {user.role}
              </p>
            </div>
          </div>
          <ul className="app-menu">
            <li>
              <Link className="app-menu__item active" to="/">
                <i className="app-menu__icon fa fa-dashboard" />
                <span className="app-menu__label">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link className="app-menu__item " to="/school">
                <i className="app-menu__icon fa fa-university" />
                <span className="app-menu__label">School</span>
              </Link>
            </li>
            <li>
              <Link className="app-menu__item " to="/students">
                <i className="app-menu__icon fa fa-users" />
                <span className="app-menu__label">Students</span>
              </Link>
            </li>

            <li>
              <Link className="app-menu__item" to="/user">
                <i className="app-menu__icon fa fa-user" />
                <span className="app-menu__label">Profile</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};
Sidebar.propTypes = {
  user: PropTypes.object,

}
const mapStateToProps = (state) => ({
  userState: state.userState,
});

export default connect(mapStateToProps)(Sidebar);
