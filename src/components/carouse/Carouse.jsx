import React from 'react'
import Carousel from 'better-react-carousel'

import wvf1 from './wvf.jpg';
import wvf2 from './wvf2.jpg';
import wvf3 from './wvf3.jpg';
import wvf4 from './wvf4.jpg';
import wvf5 from './wvf5.jpg'
const Carouse = () => {
  return (
    <Carousel loop>
        <img className="block w-full"  src={wvf1} />
  
      <Carousel.Item>
        <img className= "block w-full" src={wvf2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="block w-full" src={wvf3} />
      </Carousel.Item>

      <Carousel.Item>
        <img className="block w-full" src={wvf4} />
      </Carousel.Item>

      <Carousel.Item>
        <img className="block w-full" src={wvf5} />
      </Carousel.Item>

      </Carousel>


  )
}

export default Carouse