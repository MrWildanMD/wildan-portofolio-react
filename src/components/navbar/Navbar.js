/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import fileSaver from 'file-saver';

function Navbar() {
  const saveFile = () => {
    fileSaver.saveAs(
      process.env.PUBLIC_URL + '/assets/resume.pdf',
      'Wildan Mauluddana - Resume.pdf',
    );
  };
  const menuItem = (
    <React.Fragment>
      <li>
        <Link
          to='/'
          className='hover:text-secondary font-bold hover:border-2 hover:border-primary rounded'
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to='/services'
          className='hover:text-secondary font-bold hover:border-2 hover:border-primary rounded'
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to='/projects'
          className='hover:text-secondary font-bold hover:border-2 hover:border-primary rounded'
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to='/about'
          className='hover:text-secondary font-bold hover:border-2 hover:border-primary rounded'
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to='/contact'
          className='hover:text-secondary font-bold hover:border-2 hover:border-primary rounded'
        >
          Contact Me
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {menuItem}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Wildan Mauluddana
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{menuItem}</ul>
      </div>
      <div className='navbar-end'>
        <Link
          onClick={saveFile}
          target='_blank'
          className='btn text-secondary font-bold border-2 border-primary rounded'
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
