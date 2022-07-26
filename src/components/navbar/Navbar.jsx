import React ,{useState}from 'react'
import Home from '../home/Home';
import FormComponent from '../Form/FormComponet';
import Login from '../login/Login';
import wvf from '../images/WinVinayaAcademy.jpg'
import About from '../about/About';
import NoFound from '../home/NoFound';
import Admin from '../admin/Admin';
import EditUser from '../admin/EditUser';
import ViewUsers from '../admin/ViewUsers';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
 
const Navbar = () => {
    const [count, setCount] = useState(0);
    const name = React.createContext
    // n
     


    return (
        <header>
            
        <Router>
        <div className="flex justify-between mx-auto p-6 bg-white text-orange-600 ">
            <img className='w-auto h-12' src={wvf} alt="WVF logo" />
            
            <div className='flex text-2xl px-6 font-medium '>
                <Link  to="/" className='p-1 px-6 w-full hover:bg-orange-100 focus:outline-none '> Home </Link>
                <Link to='/home/about' className='p-1 px-6 w-full hover:bg-orange-100 focus:outline-none '> About </Link>
                {/* <Link style={{{count}==1?pointerEvents:"none":""}} to='/interview' className=" p-1 px-6 w-full hover:bg-orange-100 focus:outline-none ">Interview</Link> */}
               
                <Link  to="/home/login" className='p-1 px-8  hover:bg-orange-100 focus:outline-none '>Login</Link> 
            </div>
        </div>

        <Routes>

        <Route path='/' element={<Home/>} exact={true} />
        <Route path='home/interview' element={<FormComponent/>}/>
        <Route path='home/about' element={<About/>}/>
        <Route path='home/login' element={<Login/>} />
            
         
        </Routes>
        </Router>
        </header>
    
    )
}

export default Navbar