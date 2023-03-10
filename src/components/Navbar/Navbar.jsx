import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';

export default function Navbar() {

  const [open, setOpen] = useState(false)
  
  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="left">
        <div className="item">
          <img src='img/en.png' alt=''/>
          <KeyboardArrowDownIcon/>
        </div>
        <div className="item">
        <span>USD</span>
        <KeyboardArrowDownIcon/>
        </div>
        <div className="item">
          <NavLink className='link' to="products/1">Women</NavLink>
        </div>
        <div className="item">
        <NavLink className='link' to="products/2">Men</NavLink>
        </div>
        <div className="item">
        <NavLink className='link' to="products/3">Children</NavLink>
        </div>
        <div className="item">
        <NavLink className='link' to="products/4">Accessories</NavLink>

        </div>
        </div>
        <div className="center">
          <NavLink className='link text-uppercase' to="/" >Hagrstore</NavLink>
        </div>
        <div className="right">
          <div className="item">
            <NavLink className="link" to="/">HomePage</NavLink>
          </div>
          <div className="item">
            <NavLink className="link" to="/">About</NavLink>
          </div> 
          <div className="item">
            <NavLink className="link" to="/">Contact</NavLink>
          </div>
          <div className="item">
            <NavLink className="link"  to="/">Stores</NavLink>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartCheckoutOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>

      </div>
      {open && <Cart/>}
    </div>
  )
}
