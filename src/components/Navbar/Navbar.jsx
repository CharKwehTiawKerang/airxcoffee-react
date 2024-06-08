import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

import logo from '../../assets/airxlogo.svg'
import goal from '../../assets/sdg_logo_2021.svg'
import instagram from '../../assets/ig.svg'
import facebook from '../../assets/fb.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="logo-wrapper">
          <Link to='/'>
            <img className='main-logo' src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="nav-link">
          <div className="item">
            <Link to='#'>私たちについて <KeyboardArrowDownIcon /></Link>
          </div>
          <div className="item">
            <Link to='#'>OEM / 素材 / 製品情報 <KeyboardArrowDownIcon /></Link>
          </div>
          <div className="item">
            <Link to='/contact'>お問合せ</Link>
          </div>
          <div className="item">
            <Link to='#'>購 入 <KeyboardArrowDownIcon /></Link>
          </div>
        </div>

        <div className="goal">
          <Link to='/pdf'>
            <img src={goal} alt="" />
          </Link>
        </div>

        <div className="social">
          <div className="socmed">
            <div className="icon">
              <Link to='/instagram'><img src={instagram} alt="" /></Link>
            </div>
            <div className="icon">
              <Link to='/facebook'><img src={facebook} alt="" /></Link>
            </div>
          </div>
          <div className="language">
            <LanguageIcon />
            <span>J P</span>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar