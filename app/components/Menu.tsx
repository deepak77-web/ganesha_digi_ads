"use client"

import { useState } from "react";

function Menu() {

  const [open, setOpen] = useState(false);

  function toggle(){
    setOpen(prev=>!prev);
  }

  return (
    <>
    <div className="flex flex-row justify-between mx-10 ">
    <button
        className="flex flex-col justify-center items-center w-10 h-10 relative z-60"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-1 bg-white rounded transition-all duration-300
            ${open ? 'rotate-45 translate-y-2' : ''}
          `}
        ></span> 
         <span
          className={`block w-6 h-1 bg-white rounded transition-all duration-300 my-1
            ${open ? 'opacity-0' : ''}
          `}
        ></span>
        <span
          className={`block w-6 h-1 bg-white rounded transition-all duration-300
            ${open ? '-rotate-45 -translate-y-2' : ''}
          `}
        ></span>
        

      </button> 

    </div>
    
      
      <div className={`
          fixed top-13 right-0 h-full w-60 shadow-lg z-50 transform transition-transform duration-300 rounded-4xl bg-[#0b0917] md:hidden
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}>

      <div className="flex flex-col items-center">
      
      <button className="p-3 text-gray-500 w-full font-semibold text-[20px]">HOME</button>
      <button className="p-2 text-gray-500 w-full font-semibold text-[20px]">ABOUT US</button>
      <button className="p-2 text-gray-500 w-full font-semibold text-[20px]">SERVICES</button>
      <button className="p-2 text-gray-500 w-full font-semibold text-[20px]">TRAINING</button>
      <button className="p-2 text-gray-500 w-full font-semibold text-[20px]">BLOG</button>
      <button className="p-2 text-gray-500 w-full font-semibold text-[20px]">CONTACT US</button>

      </div>    

      </div>
  
    </>
    );
  }
  
  export default Menu;