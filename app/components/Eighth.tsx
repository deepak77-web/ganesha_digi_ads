"use client"
import Stats from "./Stats";
import { ScrollHighlightText } from "./Animation";


function Eighth(){
    return(
        <div className="flex justify-center h-auto md:h-250 bg-[#F8F8F9]">

            <div className="flex flex-col gap-5 md:justify-between items-center w-full lg:max-w-300 h-auto md:h-250 py-15 md:py-[100px] px-5">

                {/* First component */}
                <div className="w-full max-w-153 h-auto md:h-35 flex flex-col gap-4 md:justify-between">
                    <p className="text-[#6430C0] font-semibold text-center">FROM STRATEGY TO ACTION</p>
                    <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-semibold text-center leading-tight">Unleash the Power of Our Dynamic Service Portfolio</h2>
                </div>

                {/* Second component */}
                <div className="w-full lg:max-w-290 h-auto md:h-146 flex flex-col gap-5 md:justify-between">

                    {/* Stats */}
                    <Stats/>
                

                {/* Company Growth Summary */}
                <div className="flex flex-col md:flex-row gap-5 md:justify-between w-full lg:max-w-290 h-auto md:h-104 p-5 md:p-10  rounded-3xl bg-[#FFFFFF]">

                    {/* left side */}
                    <div className="flex flex-col gap-4 md:justify-between w-full md:max-w-122.5 h-auto md:h-76 p-4 md:py-10 md:pl-5">
                        <img src="rayban.png" alt="" className="h-7 w-[140px]"/>

                        <ScrollHighlightText className="text-[22px] md:text-[28px] leading-tight font-semibold">
                            "Results-driven and a pleasure to work with. Our ROI tripled in just three months!"
                        </ScrollHighlightText>

                        <div className="flex gap-4 items-center">
                            <img src="jake.jpg" alt="" className="size-[54px] rounded-full" />

                            <div className="w-full max-w-105 h-auto md:h-15">
                                <h5 className="text-[19px] font-semibold">Jake Thompson</h5>
                                <p>CEO, Digital Trends Solutions</p>
                            </div>
                        </div> 
                    </div>

                    {/* right side */}
                    <div className="flex flex-col justify-between items-center w-full md:max-w-122.5 h-auto md:h-79 font-semibold text-[18px]">

                        <div className="w-full h-29">
                            <h3 className="text-[#6430C0] text-[32px] sm:text-[40px] md:text-[60px]">5x</h3>
                            <h5>More deal-flow</h5>
                        </div>
                        <div className="w-full h-0.5 bg-[#F0F0F2]"></div>

                        <div className="w-full h-29 ">
                            <h3 className="text-[#6430C0] text-[32px] sm:text-[40px] md:text-[60px]">400%</h3>
                            <h5>Increase in revenue</h5>
                        </div>

                    </div>
                </div>

                </div>

            </div>

        </div>
    )

}
export default Eighth;