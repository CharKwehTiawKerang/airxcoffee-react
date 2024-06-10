import React, { useState } from 'react'
import './Slider.scss'

import topOne from '../../assets/top1.jpg'
import topTwo from '../../assets/top2.jpg'
import topThree from '../../assets/top3.jpg'

const Slider = () => {
  const [image, setImage] = useState('topOne')

  const slide = {
    transform: 'translateX(-15%)'
  }

  return (
    <div className='slider'>
      <div className="slider-switch">
        <input type="radio" id="one" name="radio-btn" onClick={() => setImage('topOne')}/>
        <input type="radio" id="two" name="radio-btn" onClick={() => setImage('topTwo')}/>
        <input type="radio" id="three" name="radio-btn" onClick={() => setImage('topThree')}/>
      </div>

      <div className="main-slider">
        { image == 'topOne' && (
          <div className="item">
            <img src={topOne} alt="" style={slide}/>
          </div>
        )}
        { image == 'topTwo' && (
          <div className="item">
            <img src={topTwo} alt="" style={slide}/>
          </div>
        )}
        { image == 'topThree' && (
          <div className="item">
            <img src={topThree} alt="" style={slide}/>
          </div>
        )}
      </div>

      <div className="slider-switch">
        <label for="one"></label>
        <label for="two"></label>
        <label for="three"></label>
      </div>
    </div>
  )
}

export default Slider

{/* <div className="main-slider">
        <div className="item">
          <span className='hero-title'>食品廃棄物とプラスチックの</span>
          <span className='hero-subtitle'>
            次世代資源循環
          </span>
        </div>
        <div className="item">
          <span className='hero-title'>世界初のコーヒーマスク</span>
          <span className='hero-subtitle'>
            The World's First Coffee Mask
          </span>
        </div>
        <div className="item">
          <span className='hero-title'>持続可能な社会へ</span>
          <span className='hero-subtitle'>
            To a Sustainable Society
          </span>
        </div>
      </div> */}