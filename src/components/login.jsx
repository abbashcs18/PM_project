import React from 'react'




const Login = () => {
  return (
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div class="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-purple-700">LOGO</h1>

        <form class="mt-6">
            <div>
                <label for="email" class="block text-sm text-gray-800">Email</label>
                <input type="email"
                    class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <div class="mt-4">
                <div class="password">
                Password
                    <input type="password"
                        class="block w-full px-4 py-2 mt-2 text-orange-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
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





