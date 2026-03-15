"use client"

import First from "./First";
import Menu from "./Menu";
import { useState } from "react";
import Link from "next/link";

function Navbar(){
    const [clicked,setClicked] = useState(false)

    return(
        <div className="flex flex-col items-center h-20 bg-black">
            
            {/* navbar */}
            <div className="flex justify-center items-center w-full max-w-300 h-20 px-2.5 py-5 ">
                <nav className="flex justify-between items-center w-full max-w-295 h-[47px] px-2.5 py-6 ">
                    {/* logo */}
                    <img src="/gda_logo.png" alt="logo" className="w-40 h-35 rounded-full" />

                    {/* right component - menu */}
                    <div className="hidden  md:flex justify-between items-center w-full max-w-167 h-[47px] ">

                        <div className="flex justify-between gap-3 items-center w-full max-w-124 h-[26.5px] text-[14px] text-white font-semibold">
                            <p className="h-[22.5px]">
                                <Link href="/" className="h-[18px]">HOME</Link>
                            </p>
                            <p className="h-[22.5px]">
                                <Link href="/about" className="h-[18px]">ABOUT US</Link>
                            </p>
                            <p className="h-[22.5px]">
                                <Link href="/services" className="h-[18px]">SERVICES</Link>
                            </p>
                            <p className="h-[22.5px]">
                                <Link href="/training" className="h-[18px]">TRAINING</Link>
                            </p>
                            <p className="h-[22.5px]">
                                <Link href="/blog" className="h-[18px]">BLOG</Link>
                            </p>
                            <p className="h-[22.5px]">
                                <Link href="/contact" className="h-[18px]">CONTACT US</Link>
                            </p>

                        </div>

                        {/* button */}
                        <div className="flex items-center justify-center w-full max-w-[131px] h-[47px] border-[1.5px] border-white rounded-2xl">
                            <a className="w-full max-w-[131px] h-[47px] px-[18px] py-[14px]">
                                <p className="text-[14px] text-white font-semibold text-center"> Get Started </p>
                            </a>
                        </div>
                    </div>

                    <div className="flex md:hidden" >
                        <Menu/>
                    </div>
                    
                </nav>
            </div>
        </div>

    )
}
export default Navbar;