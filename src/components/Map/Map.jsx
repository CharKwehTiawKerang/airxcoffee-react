import React from 'react'
import './Map.scss'

import location from '../../assets/viet-nam-map_22.jpg'

const Map = () => {
  return (
    <div className='map'>
        <span>
          私たちは「コーヒーかす」からさまざまなライフスタイル製品を作り、より高品質な製品を生産するだけでなく、
          環境問題の解決に寄与し、その精神を世界に発信します。
        </span>
        <div className="location-container">
        <div className="location-info">
            hi
          </div>
          <img src={location} alt="" />
          
        </div>
    </div>
  )
}

export default Map