import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  return (
    <Link to="/Cryptocurrency App/">
      <div className='navbar'>
        <FaCoins className='navbar__icon'/>
        <h1 className='navbar__title'>Coin <span className='navbar__title-color'>Search</span></h1>
      </div>
    </Link>
  )
}

export default Navbar