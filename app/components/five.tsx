"use client"

import { ScrollHighlightText } from "./Animation"
function Fifth(){
    return(
        <div className=" flex justify-center ">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:justify-between items-center w-full max-w-300 h-[954px] sm:h-full sm:max-h-[1100px] md:h-auto lg:h-192.5 px-5 py-15 md:py-25">
            
            {/* Left part */}
            <img src="iit.jpg" alt="" className="w-auto md:w-[440px] h-auto lg:w-135 lg:h-143 rounded-4xl"/>

            {/* Right part */}
            <div className="flex flex-col w-full md:max-w-135 h-[464px] gap-3 sm:h-auto sm:gap-4 md:h-auto md:gap-5 lg:h-auto">
                <p className="w-full font-semibold text-[#6430c0] text-center">CERTIFICATION</p>
                <h2 className="w-full text-[32px] lg:text-[40px] font-semibold leading-none">Digital Marketing Mastery with Instagram & Facebook Ads</h2>

                <ScrollHighlightText className="text-[18px] ">
                    Our digital marketing agency is dedicated to transforming online potential into tangible success, 
                    offering a dynamic blend of creativity and strategic expertise to elevate your brand in the digital realm.
                </ScrollHighlightText>
                
                <div className="flex justify-center w-51 px-5 py-[18px] bg-[#6430c0] rounded-2xl">
                    <span className="w-full text-white font-semibold">
                        Get This Template -
                    </span>

                </div>

            </div>

            </div>
        </div>
    )
}
export default Fifth