import React, { useState } from 'react'


export default function Login(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

   

  const handleClick = () =>{
    alert("you are login");
  };
  
    return (
        <>
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                    <h1 className="text-3xl font-bold text-center text-gray-700">My Account</h1>
                <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
                    <form className="mt-6">
                        <div>
                        <h1 className='text-xl 
                        +font-bold text-center text-gray-700'>Welcome Back</h1>
                        
                        <h6 className='text-sm font-normal text-center text-gray-700'>Please sign up </h6>
                        </div>
                        <br />
                        {/* <div className="mb-4">
                            {/* <label htmlFor="text" className="block text-sm font-semibold text-gray-800">Name </label> }
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div> */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-800"> email address</label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
                            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <a href="/forget" className="text-xs text-blue-600 hover:underline">Forget Password?</a>
                        <div className="mt-2">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={handleClick}>Sign In</button>
                        </div>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-700">Don't have an account? <a href='crete account' className="font-medium text-blue-600 hover:underline">Sign up</a></p>
                </div>
            </div>
        </>
    )
}