import React from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import IN from './components/IN';



function App() {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      <Login/>
    </div>
  );
}

export default App;
