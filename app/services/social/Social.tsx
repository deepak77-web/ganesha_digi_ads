"use client"

import Typewriter from 'typewriter-effect';
import React, { useState } from "react";

const reasons= [
    { img:"/website.gif",
      title:"Social Media Management",
      description:"Professional Logo for your brand"   
    },
    { img:"/shopping.gif",
      title:"Blog Writing (English, Hindi & Hinglish)",
      description:"Ready-to-sell online stores"   
    },
    { img:"/shopping.gif",
      title:"SEO Articles ",
      description:"Ready-to-sell online stores"   
    },
    { img:"/shopping.gif",
      title:"YouTube Channel Setup",
      description:"Ready-to-sell online stores"   
    },
    { img:"/shopping.gif",
      title:"Thumbnail & Video SEO",
      description:"Ready-to-sell online stores"   
    },
]

export default function Social(){

    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    return(
        <div className=" flex justify-center ">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:justify-between items-center w-full max-w-[1200px] h-[954px] sm:h-full sm:max-h-[1100px] md:h-auto lg:h-[770px] px-5 py-15 md:py-25">
            
            {/* Left part */}
            <img src="/social.jpg" alt="" className="w-auto md:w-[440px] h-auto lg:w-[540px] lg:h-[572px]  rounded-4xl "/>

            {/* Right part */}
            <div className="flex flex-col w-full md:max-w-[540px] h-[496px] lg:h-auto gap-3 sm:h-auto sm:gap-4 md:h-auto md:gap-5 lg:justify-between">
                
                <h2 className="w-full text-[32px] lg:text-[46px] font-semibold leading-none text-center ">Social Media & Content Marketing</h2>
                <h1 className="w-full font-semibold text-[#6430c0] text-[24px] leading-tight text-center "> 
                    <Typewriter options={{ 
                        strings: [ "Aaj kal sirf page banana kaafi nahi hai,<br/> Regular content + strategy zaroori hai."],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 30,
                    }}
                    />
                </h1>

                {/* right component */}
                <div className="flex w-full max-w-[576px] flex-col gap-3">
                  {reasons.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <div
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`
                    relative w-full cursor-pointer overflow-hidden rounded-3xl
                   bg-white text-black transition-all duration-300 ease-in-out
                    ${isActive ? "h-65 md:h-60" : "h-10"}
                    `}>

                  {/* Title */}
                  <div className="flex h-10 items-center px-6">
                    <h3 className="text-[16px] md:text-[24px] font-semibold tracking-wide">
                    {item.title}
                    </h3>
                  </div>

              {/* Description (Visible When Expanded) */}
              <div
                className={`
                  absolute bottom-5 left-0 w-full p-6 transition-all duration-300
                  ${isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"}
                `}
              >
                <img className="size-30" src={item.img} alt="" />
                <p className="text-[#6430C0] leading-relaxed font-semibold">
                  {item.description}
                </p>
                
              </div>
            </div>
          );
        })}
      </div>
                
          </div>
        </div>
        </div>
    )
}
