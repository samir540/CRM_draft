import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';
import '../../styles/admin/Navigation.css';

const getClassName = link => {
  return link.isActive
    ? 'admin-navigation-link-active'
    : 'admin-navigation-link';
};

function AdminNavigation() {
  return (
    <nav className='admin-navigation'>
      <Link to='index'>
        <img src={logo} alt='Birdview Logo' className='admin-logo' />
      </Link>
      <h1 className='admin-navigation-title'>Admin Management</h1>
      <ul className='admin-navigation-list'>
        <li className='admin-navigation-list-item'>
          <NavLink to='users' className={getClassName}>
            Users
          </NavLink>
        </li>
        <li className='admin-navigation-list-item'>
          <NavLink to='roles' className={getClassName}>
            Roles
          </NavLink>
        </li>
        <li className='admin-navigation-list-item'>
          <NavLink to='notifications' className={getClassName}>
            Notifications
          </NavLink>
        </li>
        <li className='admin-navigation-list-item'>
          <NavLink to='activity' className={getClassName}>
            User Activity Log
          </NavLink>
        </li>
        <li className='admin-navigation-list-item'>
          <NavLink to='branches' className={getClassName}>
            Branches
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavigation;
