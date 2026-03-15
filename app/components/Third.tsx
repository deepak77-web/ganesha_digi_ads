"use client"

const reasons= [
    { title:"Local Market Ki Samajh" },
    { title:"Affordable Pricing for Small Businesses" },
    { title:"Monthly Transparent Reporting" },
    { title:"Personal Support" },
    { title:"Trained in Advanced Meta Ads (IIT Delhi Certified)" },
    { title:"Bharat Visionary Leader (State Star in Digital Advertising – 2026)"},
]


function Third(){
    return(
        <div className=" flex justify-center ">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:justify-between items-center w-full max-w-300 h-[954px] sm:h-full sm:max-h-[1100px] md:h-auto lg:h-192.5 px-5 py-15 md:py-25">
            
            {/* Left part */}
            <img src="one.jpeg" alt="" className="w-auto md:w-[440px] h-auto lg:w-135 lg:h-143 rounded-4xl"/>

            {/* Right part */}
            <div className="flex flex-col w-full md:max-w-135 h-[496px] lg:h-auto gap-3 sm:h-auto sm:gap-4 md:h-auto md:gap-5 lg:justify-between">
                
                <h2 className="w-full text-[32px] lg:text-[46px] font-semibold leading-none ">GDAs Ko Kyu Choose Kare ?</h2>
                <p className="w-full font-semibold text-[#6430c0] text-[18px]"> Kyu GDAs Hai Aapke Business Ke Liye Perfect Partner?</p>
                
                <div>
                    {reasons.map((item,index)=>(
                        <div className="flex items-center font-semibold text-[18px]">    
                            <img className="size-8" src="tick.gif" alt="" />
                            <p>{item.title}</p>
                        </div>

                    ))}
                </div>
        
            </div>
            </div>
        </div>
    )
}
export default Third