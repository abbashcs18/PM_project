import React from 'react'
import Home from '../home/Home';
import FormComponent from '../Form/FormComponet';
import Login from '../login/Login';
import wvf from '../images/WinVinayaAcademy.jpg'
import About from '../about/About';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


  const NotFound = () => {
  return <h2>Page Not found.</h2>;
};

const Navbar = () => {
    return (
        <header>
        <Router>
        <div className="flex justify-between mx-auto p-6 bg-white text-orange-600 ">
            <img className='w-auto h-12' src={wvf} alt="WVF logo" />
            
            <div className='flex text-2xl px-6 font-medium '>
                <Link  to="/" className='p-2 px-6 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-500'>Home</Link>
                <Link to='/about' className='p-2 px-6 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-500'>About</Link>
                <Link to='/interview' className='" p-2 px-6 w-full shadow-sm  hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-500" id="menu-button" aria-expanded="true" aria-haspopup="true' href="/">Interview</Link><svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <Link to="/login" className='p-2 px-6 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-500 active:bg-orange-500'>Login</Link> 
            </div>
        </div>

        <Routes>
            <Route path='/' element={<Home/>} exact={true}/>
            <Route path='/interview' element={<FormComponent/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route component={NotFound} />
        </Routes>
        </Router>
        </header>
    
    )
}

export default Navbar