import React from 'react'
import Carousel from 'better-react-carousel'
import Footer from '../Footer';

import wvf1 from './wvf1.jpg';
import wvf2 from './wvf2.jpg';
import wvf3 from './wvf3.jpg';
import wvf4 from './wvf4.jpg';
import wvf5 from './wvf5.jpg'

const About = () => {
  return (
    <>
        <div className="bg-white">
    <div class="text-orange-600 text-4xl font-extrabold text-center mt-5">
        “From a tiny spark may burst a mighty flame” – Dante
    </div>
    <div class="text-orange-700 text-2xl mt-5">
        Mission
    </div>
    <div class="mt-3">
        The primary aim of WinVinaya Foundation is to enable Persons with Disabilities (PWD), economically disadvantaged candidates and women with life skills and resources so that they can get a job and lead a life with dignity.
    </div>
    <div class="text-orange-700 text-2xl mt-3">
        Genesis
    </div>

    <div class=" mt-3">In 2016, Shiva Jayagopal a Veteran in IT Industry who loves Coaching and Akila Sankar, a special educator with extensive experience working with Persons with Disabilities, who believes that “Anyone can learn” with the right methodology, decided to bring together both their strengths to Train Persons with Disabilities in IT Skills and place them in companies. WinVinaya Foundation was started in their home with few computers and few students. In just few years, WinVinaya Foundation trained hundreds of students across a wide range of disabilities and added more courses. The founders believe that this is just the beginning and with the collaboration with well-wishers and right partners, we can impact lives of millions of Persons with Disabilities.</div>

</div>


<Carousel loop class="w-screen h-screen flex justify-center items-center">
<Carousel.Item>
        <img className="block py-32" src={wvf1} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="block py-32" src={wvf2} />
    </Carousel.Item>
    <Carousel.Item>
        <img className="block py-32" src={wvf3} />
    </Carousel.Item>
    <Carousel.Item>
        <img className="block py-32" src={wvf4} />
    </Carousel.Item>
    <Carousel.Item>
        <img className="block py-32" src={wvf5} />
    </Carousel.Item>
         </Carousel>
         
         <Footer/>
    </>
    )
}
export default About