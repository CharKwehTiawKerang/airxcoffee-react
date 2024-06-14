import React from 'react'
import './Client.scss'

import starbucks from '../../assets/starbucks.svg'
import liverpool from '../../assets/liverpool.svg'
import dekra from '../../assets/dekra.svg'
import mercedes from '../../assets/mercedes.svg'
import porsche from '../../assets/porsche.svg'
import intercontinental from '../../assets/intercontinental.svg'

import milenio from '../../assets/milenio.svg'
import business from '../../assets/business-insider.svg'
import vogue from '../../assets/vogue.svg'
import straitstime from '../../assets/the-straits-times.svg'
import bangkok from '../../assets/BangkokPost.svg'
import sprudge from '../../assets/sprudge.svg'

const Client = () => {
  return (
    <div className='client'>
        <h2>Clients & Partners</h2>
        <div className="clients">
          <div className="item">
            <img src={starbucks} alt="" />
          </div>
          <div className="item">
            <img src={liverpool} alt="" />
          </div>
          <div className="item">
            <img src={dekra} alt="" />
          </div>
          <div className="item">
            <img src={mercedes} alt="" />
          </div>
          <div className="item">
            <img src={porsche} alt="" />
          </div>
          <div className="item">
            <img src={intercontinental} alt="" />
          </div>
        </div>

        <h2>AirX Coffee In News</h2>
        <div className="news-client">
          <div className="item">
            <img src={milenio} alt="" />
          </div>
          <div className="item">
            <img src={business} alt="" />
          </div>
          <div className="item">
            <img src={vogue} alt="" />
          </div>
          <div className="item">
            <img src={straitstime} alt="" />
          </div>
          <div className="item">
            <img src={bangkok} alt="" />
          </div>
          <div className="item">
            <img src={sprudge} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Client