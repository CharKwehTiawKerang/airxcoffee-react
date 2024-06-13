import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

import productOne from '../../assets/product-img1.jpg'
import productTwo from '../../assets/product-img2.jpg'
import productThree from '../../assets/product-img3.jpg'
import productFour from '../../assets/product-img4.jpg'
import san from '../../assets/san.jpg'

const Card = () => {
  return (
    <div className='card'>
        <h2>AIRX COFFEE PRODUCTS</h2>
        <div className="cards-wrapper">
          <div className="item">
            <img src={productOne} alt="" />
            <span className="title">AirX コーヒーマグ</span>
            <span className="desc">
              コーヒーバイオコンポジットから作られたAirXCoffee Mugは、
              高品質、再利用可能、耐久性、軽量の製品です。
              マイルドなコーヒーの香りがします。
            </span>
            <Link to='/products'>製品を見る</Link>
          </div>
          <div className="item">
            <img src={productTwo} alt="" />
            <span className="title">AirX コーヒーマスク</span>
            <span className="desc">
              AirXコーヒーフェイスマスクは、PoweKnitテクノロジーを使用したコーヒー糸から作られ、
              ユーザーの顔にしっかりフィットします。
              マスクは洗って再利用できます。
            </span>
            <Link to='/products'>製品を見る</Link>
          </div>
          <div className="item">
            <img src={productThree} alt="" />
            <span className="title">AirX カラトリーセット</span>
            <span className="desc">
              コーヒーバイオコンポジットから作られたAirXコーヒーカラトリーセットは、
              生分解性で環境に優しい使い捨て製品です。
            </span>
            <Link to='/products'>製品を見る</Link>
          </div>
          <div className="item">
            <img src={productFour} alt="" />
            <span className="title">AirX コーヒーファニチャー</span>
            <span className="desc">
              コーヒーバイオコンポジットから作られたAirXコーヒーの家具シリーズです。
              軽くて丈夫な、環境に優しい製品です。
            </span>
            <Link to='/products'>製品を見る</Link>
          </div>
        </div>

        <img className='san' src={san} alt="" />
    </div>
  )
}

export default Card