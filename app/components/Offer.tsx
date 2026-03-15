"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Offer() {
  const services=[
    { img: "web.gif",
      title: "Website & E-Commerce Services",
      description: "Elevate your brand with stunning web design & development for impactful online experiences.",
      path:"/services/web"
    },
    { img: "brand.gif",
      title: "Branding & Creative Services",
      description: "Our team crafts unique brands, drives promotions, and boosts visibility through audience engagement.",
      path:"/services/brand"
    },
    { img: "social.gif",
      title: "Social Media & Content Marketing",
      description: "Build connections and drive growth with engaging social media campaigns that deliver real results.",
      path:"/services/social"
    },
    { img: "seo.gif",
      title: "Search Engine Optimization",
      description: "Get found where it matters. I optimize your website and content to increase visibility and attract high-quality organic traffic.",
      path:"/services/web"
    },
    
    { img: "google.gif",
      title: "Google my Business",
      description: "Stand out from the competition on the world’s most popular search engine with Google My Business.",
      path:"/services/google"
    },
    
]

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col lg:flex-row h-auto md:min-h-screen items-center justify-center bg-[#f5f4f3] py-10 md:py-0 px-4 gap-5">

      {/* left component */}
      <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-7 w-full md:max-w-[576px] h-auto md:h-[252px] p-3">

        <div className="flex flex-col gap-5">
          <h2 className="text-[32px] sm:text-[36px] md:text-[46px] font-bold leading-tight text-center md:text-left">HOW WE CAN HELP YOU</h2>
          <p className="text-[18px] leading-tight text-center md:text-left">We help businesses grow their online presence and generate real results through data-driven marketing strategies.</p>
        </div>

        <Link href={"https://wa.me/919939862765"}>
          <div className="w-[208px] h-[68px] bg-white flex items-center justify-center border-2 border-[#6430C0] rounded-full">
            <div className="w-[200px] h-[60px] flex bg-white items-center justify-center gap-1 rounded-full p-3 border-2 border-[#6430C0]">
              <p className="text-[18px] font-semibold"> Get in Touch </p>
              <img className="size-10 rotate-90" src="up.gif" alt="" />
            </div>
          </div>
        </Link>

      </div>
        
      
      {/* right component */}
      <div className="flex w-full max-w-[576px] flex-col gap-3">
        {services.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`
                relative w-full cursor-pointer overflow-hidden rounded-3xl
                bg-white text-[#6430C0]  transition-all duration-300 ease-in-out
                ${isActive ? "h-85 md:h-80" : "h-10"}
              `}
            >
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
                <p className="text-black leading-relaxed font-semibold">
                  {item.description}
                </p>
                <Link href={item.path} className="text-[19px]">Learn More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
