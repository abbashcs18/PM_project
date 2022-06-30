import React from 'react'




const Login = () => {
   
  return (

  document.title = 'Login',
    
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div class="w-full h-96 p-16 mt-24 m-auto bg-white rounded shadow-lg ring-8 ring-purple-800/400 lg:max-w-md">
              <h1 class="text-4xl -mt-3.5 font-semibold text-center text-orange-400 ">LOGIN</h1>

              <form class="mt-12">
                  <div>
                      <input type="email"
                          class="block w-full px-4 py-2 mt-2 text-black  bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Email " />
                  </div>
                  <div class="mt-8">
                      <div>

                          <input type="password"
                              class="block w-full px-4 py-2 mt-2 text-black bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Password" />
                      </div>

                      <div class="mt-8 text-center">
                          <button
                              class="w-32  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-red-400">
                              Login
                          </button>
                      </div>
                  </div>
              </form>

          </div>
      </div>

  )
}

export default Login;