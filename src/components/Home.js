
import './Home.css';
import Navbar from './Navbar/Navbar.js';
import Interview from './Interview';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
       <Navbar/>
      
       {/* <Router>
        
          <Route path='/interview' component={Interview}/>
        
       </Router> */}
       
       <div className="gr">

<p>WinVinaya is the best platform to help <br></br> you enhance your skill, expands your knowledge and <br></br>prepare for techinical interviews</p>

<button className="bg-orange-500 hover:bg-orange-900 text-white font-bold py-2 px-4 border-b-4 border-orange-900 hover:border-orange-900 rounded">Create Account</button>

</div>
<div className="wrap">
 <div className="layer layer1"></div>
 <div className="layer layer2"></div>
 <div className="layer layer3"></div>
</div>
 
</div>
     
    
  );
}

export default Home;
