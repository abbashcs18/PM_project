
import './Home.css';
import Carouse from '../carouse/Carouse';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';


function Home() {
 
document.title = 'Home'
  return (
 
  <div className="App">
    <Navbar/>
  <Carouse/>
 

  <div className="slide-top">

  <p>WinVinaya is the best platform to help <br></br> you enhance your skill, expands your knowledge and <br></br>prepare for techinical interviews</p>

  </div>





  <div className="wrap">
  <div className="layer layer1"></div>
  <div className="layer layer2"></div>
  <div className="layer layer3"></div>

  </div>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,64L80,106.7C160,149,320,235,480,245.3C640,256,800,192,960,160C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M27.9,-37.2C36.3,-38,43.4,-30.5,46.6,-21.8C49.8,-13,49.2,-3,46.5,5.8C43.9,14.7,39.3,22.4,32.1,24.4C25,26.5,15.3,22.9,6.7,27.6C-2,32.4,-9.6,45.5,-14.3,45.6C-19,45.6,-20.7,32.5,-23.8,23.6C-26.9,14.7,-31.4,9.9,-32.6,4.4C-33.8,-1.1,-31.8,-7.3,-33.6,-20.3C-35.4,-33.3,-41,-53,-36.1,-53.8C-31.1,-54.6,-15.6,-36.5,-2.9,-32C9.7,-27.5,19.5,-36.5,27.9,-37.2Z" transform="translate(100 100)" />
</svg>
  
  </div>



  );
}

export default Home;
