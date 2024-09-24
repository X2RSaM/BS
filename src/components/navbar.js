import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 768 && setOpenNav(false));
  }, []);

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">Billing Software</a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpenNav(!openNav)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <div className={`hidden w-full md:block md:w-auto ${openNav ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li><NavLink to="/" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink></li>
            <li><NavLink to="/customers" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Customers</NavLink></li>
            <li><NavLink to="/inventory" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Inventory</NavLink></li>
            <li><NavLink to="/billing" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Billing</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;