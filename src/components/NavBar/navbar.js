import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/1.png';
import './navbar.scss';

function NavBar() {
  const navItems = [
    {
      id: 1,
      path: '/',
      text: 'HOME',
    },
    {
      id: 2,
      path: '/Portfolio',
      text: 'PORTFOLIO',
    },
    {
      id: 3,
      path: '/Skills',
      text: 'SKILLS',
    },
    {
      id: 4,
      path: '/Contact',
      text: 'CONTACT',
    },
  ];
  return (
    <header className="nav-head">
      <img src={logo} className="logo" alt="logo" />
      <nav>
        <ul className="menu">
          {
                          navItems.map((navItems) => (
                            <>
                              <li key={navItems.id}>
                                <NavLink to={navItems.path} className="menulinks">{navItems.text}</NavLink>
                              </li>

                            </>
                          ))
                      }
        </ul>
      </nav>

    </header>
  );
}
export default NavBar;
