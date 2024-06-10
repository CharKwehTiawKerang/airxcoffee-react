import React from 'react'
import './Home.scss';

import { Slider, News, Card } from '../../components'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <News />
      <Card />
    </div>
  )
}

export default Home