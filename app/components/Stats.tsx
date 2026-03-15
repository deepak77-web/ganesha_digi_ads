"use client"
import { CountUpNumber } from "./Animation";

const cards = [
  { num: 1, desc: "Revenue Generated", prefix: "$", suffix: "M+" },
  { num: 200, desc: "Happy Clients" },
  { num: 340, desc: "In ad spending every month", suffix: "K" },
  { num: 425, desc: "Worldwide locations" },
];

export default function Stats(){
    return(

        <div className="flex justify-center p-5">
            <div className="flex flex-col md:flex-row items-center w-full lg:max-w-290 h-auto md:h-[150px] gap-5 md:justify-center rounded-4xl">
        
            {/* cards */}
            {cards.map((item,index)=>(
                                
            <div className="w-full md:max-w-[278px] h-[150px] p-[30px] flex flex-col justify-between bg-[#ffffff] shadow-2xl rounded-3xl hover:scale-110">
                                
                <div className="text-[#6430C0] font-semibold text-center text-[40px]">
                    <CountUpNumber target={item.num} prefix={item.prefix} suffix={item.suffix} />
                </div>
                <p className="text-[18px] md:text-[16px] text-center ">{item.desc}</p>
                            
            </div>
            ))}
        </div>


        </div>

        
        
    )
}
    
