import React from 'react'
import './Home.scss';

import { Slider, News, Card, Client, Map } from '../../components'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <News />
      <Card />
      <Client />
      <Map />
    </div>
  )
}

export default Home