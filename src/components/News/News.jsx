import React from 'react'
import { Link } from 'react-router-dom'
import './News.scss'

import finalProduct from '../../assets/final-product.jpg'
import sdglogo from '../../assets/sdg_logo_2021.svg'

const News = () => {
  return (
    <div className='news'>
        <h2>NEWS</h2>
        <div className="new-title">
            <div className="item top">
                <Link to='https://airxcoffee.jp/newspost/'>過去のニュース</Link>
            </div>
            <div className="item">
                <Link to='https://airxcoffee.jp/news/blitz-co-j/'>
                    <span>2024年3月24日</span>
                    <span>当社の製品が、BLITZ & CO.に採用されました。...</span>
                </Link>
            </div>
            <div className="item">
                <Link to='https://airxcoffee.jp/news/%e3%83%90%e3%82%a4%e3%82%aa%e3%82%ab%e3%83%bc%e3%83%9c%e3%83%b3%e3%80%8ccarbonex%e3%80%8d%e6%8a%80%e8%a1%93%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/'>
                    <span>2023年8月16日</span>
                    <span>バイオカーボン「CarboneX」技術について...</span>
                </Link>
            </div>
            <div className="item">
                <Link to='https://airxcoffee.jp/news/bsyoshimoto/'>
                    <span>2023年2月5日</span>
                    <span>BSよしもと - ワシんとこ・ポスト」で当社商品をご紹介いただきました...</span>
                </Link>
            </div>
            <div className="item">
                <Link to='https://airxcoffee.jp/news/ils_top100/'>
                    <span>2022年11月20日</span>
                    <span>第10回ILSパワーマッチング「ILS TOP100 STARTUPS」に選出...</span>
                </Link>
            </div>
        </div>

        <div className="AirX">
            <img src={finalProduct} alt="" />
            <div>
                <h2>AirX COFFEE</h2>
                <h3>
                    全てのAirX Coffee製品は、ベトナムのオーガニックコーヒーかすから作られた素材を使用しています。
                </h3>
                <h3>
                    私たちの技術が使い捨てプラスチックを減らし、地球が直面している環境汚染を減らしたいと願っています。
                </h3>
            </div>
            <img src={sdglogo} alt="" className='sdglogo'/>
        </div>
    </div>
  )
}

export default News