function Sixth(){
    return(
        <div className="flex justify-center bg-[url(/theme.jpg)] bg-no-repeat h-auto md:h-391 py-10 md:py-[100px] px-2.5 md:px-5">

            <div className="flex flex-col gap-5 md:justify-between w-full  lg:max-w-300 h-auto  md:h-316">

                {/* First component */}
                <div className="w-full lg:max-w-300 h-auto md:h-[94px] flex flex-col gap-4 md:justify-between text-white">
                    <p className="text-[#BB94E5] font-semibold text-center">SUCCESS STORIES</p>
                    <h2 className="text-[32px] md:text-[36px] lg:text-[44px] font-semibold text-center">Unveiling Our Digital Triumphs</h2>
                </div>

                {/* Second component */}
                <div className="bg-[url(/cover.jpg)] bg-top-right flex flex-col-reverse md:flex-row gap-5 md:justify-between w-full lg:max-w-300 h-auto md:h-135 pt-[5px] px-[5px] pb-5 md:p-10 text-white rounded-4xl">

                    {/* left side */}
                    <div className="flex flex-col gap-4 md:justify-between w-full md:max-w-130 h-auto md:h-115 p-[15px] lg:py-10 lg:pl-5 ">

                        <div className="w-full md:max-w-125 h-auto lg:h-[238px] flex flex-col gap-3 md:justify-between">
                            <p className="w-full text-[#BB94E5] font-semibold text-center md:text-left">GLOBAL VENTURES INC.</p>
                            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[46px] text-wrap leading-tight text-center md:text-left font-semibold">Transparent Monthly Reports</h2>
                            <p className="text-[18px] text-center md:text-left">See the power of data in action as we break down how analytics-driven decisions led to a surge in campaign effectiveness.</p>
                        </div>

                        {/* metrics */}
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-7">

                            <div className="h-[26px] flex gap-2 items-center font-semibold">
                                <img src="tick.png" alt="" className="size-5"/>
                                <h5>900% increase in ROI</h5>
                            </div>

                            <div className="h-[26px] flex gap-2 items-center font-semibold">
                                <img src="tick.png" alt="" className="size-5"/>
                                <h5>40% decrease in CAC</h5>
                            </div>
                        </div>

                        <div className="w-full md:max-w-59 h-14 bg-[#6430C0] px-5 py-[18px] flex items-center justify-center rounded-2xl">
                            <p className="text-[16px] md:text-[18px]">Read full case study - </p>
                        </div>

                    </div>

                    {/* right side */}
                    <div className="flex justify-center items-center w-full md:max-w-135 h-auto md:h-115 p-5">
                        <img src="three.png" alt="" />
                    </div>
                </div>

                {/* Third component */}
                <div className="bg-[url(/cover.jpg)] bg-top-right flex flex-col-reverse md:flex-row gap-5 md:justify-between w-full md:max-w-300 h-auto md:h-135 pt-[5px] px-[5px] pb-5 md:p-10 text-white rounded-4xl">

                    {/* left side */}
                    
                    <div className="flex flex-col gap-4 md:justify-between w-full md:max-w-130 h-auto lg:h-115 p-[15px] lg:py-10 lg:pl-5">

                        <div className=" w-full md:max-w-125 h-auto lg:h-[238px] flex flex-col gap-3 md:justify-between ">
                            <p className="w-full text-[#BB94E5] font-semibold text-center md:text-left">TECH INNOVATE CO.</p>
                            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[46px] text-wrap leading-tight text-center md:text-left font-semibold">SEO Success Blueprint</h2>
                            <p className="text-[18px] text-center md:text-left">Witness the impact of our SEO strategies as we unveil the rise in organic traffic and search engine rankings for our clients.</p>
                        </div>

                        {/* metrics */}
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-7">

                            <div className="h-auto md:h-[26px] flex gap-2 items-center font-semibold">
                                <img src="tick.png" alt="" className="size-5"/>
                                <h5>260% Increase in ROI</h5>
                            </div>

                            <div className="h-[26px] flex gap-2 items-center font-semibold">
                                <img src="tick.png" alt="" className="size-5"/>
                                <h5>90% Increase in ROAS</h5>
                            </div>
                        </div>

                        <div className="w-full md:max-w-59 h-14 bg-[#6430C0] px-5 py-[18px] flex items-center justify-center rounded-2xl">
                            <p className="text-[16px] md:text-[18px]">Read full case study - </p>
                        </div>
                        
                    </div>

                    {/* right side */}
                    <div className="flex justify-center items-center w-full md:max-w-135 h-auto md:h-115 p-5">
                        <img src="four.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Sixth;