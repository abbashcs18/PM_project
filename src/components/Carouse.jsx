import React from 'react'
import Carousel from 'better-react-carousel'

const Carouse = () => {
  return (
    <Carousel  loop>
      <Carousel.Item>
        <img width="100%" src="https://winvinayafoundation.org/wp-content/uploads/2020/12/Group-photo-with-NTT-Data200kb.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://winvinayafoundation.org/wp-content/uploads/2020/12/Birthday-Celebration200kb.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://winvinayafoundation.org/wp-content/uploads/2020/12/WinVinaya200kb.jpg" />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src="https://winvinayafoundation.org/wp-content/uploads/2020/12/Ready-to-pose-anytime200Kb.jpg" />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src="https://winvinayafoundation.org/wp-content/uploads/2020/12/Holi.jpg" />
      </Carousel.Item>

     
     </Carousel>
  )
}

export default Carouse