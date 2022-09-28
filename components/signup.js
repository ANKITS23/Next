import React from 'react'
import { useState } from "react";
import {FaRegWindowClose } from 'react-icons/fa';

const signup = () => {
    const [hide, setHide] = useState(true);
  return (
    <div className="main-container">
      <div className="wrapper">
        
      {hide &&
        <div className="fixed px-5 w-[50%] h-full left-1/2 top-[15%] transform translate-x-[-50%] z-10  ">

          <div className="w-full p-6 m-auto bg-gray-200 rounded-md border-2">
            <div className="" onClick={() => {setHide(!hide)}}><FaRegWindowClose  className="text-2xl"/></div>
      
            <h1 className="text-3xl font-semibold text-center text-black">Sign up</h1>
            <form className="mt-6">
            <div className="mb-2">
                <label
                  for="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                 User Name
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md   focus:outline-none "
                />
              </div>
              <div className="mb-2">
                <label
                  for="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md   focus:outline-none "
                />
              </div>
              <div className="mb-2">
                <label
                  for="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border "
                />
              </div>
            
              <div className="mt-6">
                <button className="border-2 border-gray-100 w-[30%] px-4 py-2 text-black ">Signup</button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Do you have an account?{" "}
              <a
                href="#"
                className="font-medium text-gray-600 hover:underline"
              >
                Sign In
              </a>
            </p>
          </div>
   
        </div>
     }
      </div>
    </div>
  )
}

export default signup
