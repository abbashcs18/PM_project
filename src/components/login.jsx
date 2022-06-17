import React from 'react'

const Login = () => {
  return (
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div class="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/400 lg:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-orange-400 ">LOGO</h1>

        <form class="mt-6">
            <div>
                <input type="email" 
                    class="block w-full px-4 py-2 mt-2 text-purple-700  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Email "/>
            </div>
            <div class="mt-4">
                <div>
                    
                    <input type="password"
                        class="block w-full px-4 py-2 mt-2 text-purple-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Password"/>
                </div>
               
                <div class="mt-6">
                    <button
                        class="w-full  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
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





