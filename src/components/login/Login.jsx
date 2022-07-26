import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

import {
  Link

} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState();
  const [count] = useState(false);



  function Submit(e) {


    if (email == "can@gmail.com" && password == "asdf") {

      e.preventDefault();
      console.log(email, password);
      const userData = {
        email,
        password,
      };
      localStorage.setItem('token-info', JSON.stringify(userData));
      setIsLoggedin(true);

      setEmail('');
      setPassword('');
      navigate("/interview");
    <Link   to="/" className='p-1 px-8  hover:bg-orange-100 focus:outline-none '>Log out </Link> 
    

      // props.setIsLoggedin;
    }
    else if (email == "admin@gmail.com" && password == "asdf") {
      e.preventDefault();
      console.log(email, password);
      const userData = {
        email,
        password,
      };
      localStorage.setItem('token-info', JSON.stringify(userData));
      setIsLoggedin(true);

      setEmail('');
      setPassword('');

      navigate("/admin");
    }
    else {
      alert('Please enter a valid email address and password ');
    }
    console.log(email);
  }
  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };


  return (


    document.title = 'Login',

    <div>
      <Navbar />
      {!isLoggedin ? (
        <>
          <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div class="w-full h-96 p-16 mt-24 m-auto bg-white rounded shadow-lg ring-8 ring-purple-800/400 lg:max-w-md">
              <h1 class="text-4xl -mt-3.5 font-semibold text-center text-orange-400 ">LOGIN</h1>
              <form class="mt-12" onSubmit={Submit}>
                <div>
                  <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}
                    class="block w-full px-4 py-2 mt-2 text-black  bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Email " />
                </div>
                <div class="mt-8">
                  <div>


                    <input type="password" name="passoword" value={password} onChange={e => setPassword(e.target.value)}
                      class="block w-full px-4 py-2 mt-2 text-black bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Password" />

                  </div>

                  <div class="mt-8 text-center">
                    <button type='submit'
                      class="w-32  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-red-400">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )
        : (
          <>
            <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
              <div class="w-auto h-[200px] p-10 mt-24 m-auto bg-white rounded shadow-lg ring-8 ring-purple-800/400 lg:max-w-md">
                <h1 class="text-4xl -mt-3.5 font-semi bold text-center text-orange-400 ">Sucessfully!!</h1>
                <button className="bg-red-600 text-1xl text-black font-bold w-[300px] px-3 py-2  ml-[15px] my-[50px] hover:bg-red-900 focus:outline-none" onClick={logout}>LOG OUT</button>
              </div>
            </div>
          </>
        )}
    </div>



  )
}

export default Login;