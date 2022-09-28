import React from 'react'
import {useState } from "react";
import Signup  from './signup'

const footer = () => {
  const [hidden, setHidden] = useState(true)
  return (
    
    <div>
      <footer className="text-center text-white bg-gray-500">
  <div className="container p-6">
    <div className="">
      <p className="flex justify-center items-center">
        <span className="mr-4 text-2xl">Register for free</span>
        <button type="button" onClick={() => { setHidden(!hidden) }} className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-lg leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Sign up!
        </button>
        {!hidden && 
     <Signup/>
    }
      </p>
    </div>
  </div>

  <div className="text-center text-xl p-4 bg-gray-600">
    © 2021 Copyright:
    <a className="text-white" href="#">CZ</a>
  </div>
</footer>
    </div>
  )
}

export default footer
