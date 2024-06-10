import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

import logo from '../../assets/airxlogo.svg'
import pnh from '../../assets/logo_foot01.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <Link to=''>TOP</Link>
        </div>
        <div className="item">
          <Link to='/'>私たちについて</Link>
        </div>
        <div className="item">
          <Link to='aboutus'>OEM / 素材 / 製品情報 <KeyboardArrowDownIcon/></Link>
        </div>
        <div className="item">
          <Link to='/contact'>お問合せ</Link>
        </div>
        <div className="item">
          <Link to=''>購 入 <KeyboardArrowDownIcon/></Link>
        </div>
        <div className="item">
          <Link to='/pdf'>SDGs</Link>
        </div>
      </div>
      <div className="bottom">
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="copyright">
          <span>&copy; 2024 PNH Co., Ltd. All Rights Reserved.</span>
        </div>
        <div className="company-related">
          <Link to='https://pnh.co.jp' target='_blank'>
            <img src={pnh} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer