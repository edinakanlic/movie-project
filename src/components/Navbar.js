import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import SearchForm from './SearchForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='logo-link'>
            <div className='logo'>
              <h1>Cinema</h1>
              <h3>online</h3>
            </div>
          </Link>
          <button type='button' className='nav-btn ' onClick={handleToggle}>
            <FaAlignJustify className='nav-icon' />
          </button>
        </div>

        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'activated' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/movies'
              className={({ isActive }) => (isActive ? 'activated' : '')}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/series'
              className={({ isActive }) => (isActive ? 'activated' : '')}
            >
              TV Series
            </NavLink>
          </li>
          <li>
            
            <SearchForm />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
