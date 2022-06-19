
import './Home.css';
import Carousel from 'better-react-carousel'
import { Slide } from 'react-slideshow-image';
import {slide} from './Slidepic'

function Home() {
  return (
    <div className="App">

       <Slide autoplay transitionDuration={500}>

    {slide.map((obj,index)=> (
      <div key={index}>
        <div style={{height:'100vh', backgroundImage:'url(${obj.url})'}}>
          <div style={{padding:20,
          width:200,
          borderBottomRightRadius:'20px',
          boxShadow:'4px 5px 0 rgb(0, 0, 0.2)',
          backgroundColor:'rgba(255, 255, 255, 0.8)',
          }}>

            hello
          </div>

        </div>
      
      </div>
    ))}
       </Slide>


      {/* <Carousel>
      <Carousel.Item>
        <img width="100%" src="" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src= alt=""/>
      </Carousel.Item>
    </Carousel>
             */}

{/*   
<div className="gr">

<p>WinVinaya is the best platform to help <br></br> you enhance your skill, expands your knowledge and <br></br>prepare for techinical interviews</p>

<button className="bg-orange-500 hover:bg-orange-900 text-white font-bold py-2 px-4 border-b-4 border-orange-900 hover:border-orange-900 rounded">Create Account</button>

</div>
<div className="wrap">
 <div className="layer layer1"></div>
 <div className="layer layer2"></div>
 <div className="layer layer3"></div>
</div>
  */}
</div>
     
    
  );
}

export default Home;
