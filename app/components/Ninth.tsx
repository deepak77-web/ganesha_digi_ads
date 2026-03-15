const plans=[
    {
        name:"PRO",
        desc:"Ideal for those seeking precision and confidence with advanced AI.",
        monthly_price:"$199/m",
        yearly_price:"$1999 billed annually",
        features:[
            "feature1",
            "feature2",
            "feature3",
            "feature4",
        ]
    },
    {
        name:"PREMIUM",
        desc:"Ideal for those seeking precision and confidence with advanced AI.",
        monthly_price:"$499/m",
        yearly_price:"$4999 billed annually",
        features:[
            "feature1",
            "feature2",
            "feature3",
            "feature4",
        ]
    },
]


function Ninth(){
    return(
        <div className="flex justify-center h-auto md:h-265">

            <div className="flex flex-col gap-3 md:justify-between items-center w-full max-w-300 h-auto md:h-265 px-2.5 py-25 md:px-5">

                {/* First component */}
                <div className="w-full max-w-153 h-auto gap-2 px-2.5 md:px-0 md:h-35 flex flex-col md:justify-between">
                    <p className="text-[#6430C0] font-semibold text-center">PRICING</p>
                    <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-semibold text-center md:leading-tight">Plans to Fit Your Business</h2>
                </div>

                {/* Second component */}
                <div className="w-full lg:max-w-290 h-auto md:h-164 flex flex-col gap-5 md:flex-row  md:justify-between p-[5px] rounded-4xl">
                    
                    {plans.map((item,index)=>(    
                        <div className="w-full max-w-143 h-164 flex flex-col justify-between bg-[#F8F8F9] p-[5px] rounded-4xl ">

                            <div className="w-full h-105 flex flex-col justify-between bg-[#FFFFFF] p-[30px] rounded-4xl">
                                <h3 className="text-[26px] font-semibold">{item.name}</h3>
                                <p className="text-[18px]">{item.desc}</p>
                                <h3 className="text-[44px] font-semibold text-[#6430c0]">{item.monthly_price}</h3>
                                <p className="text-[18px] font-semibold">{item.yearly_price}</p>

                                <div className="w-full h-[118px] flex flex-col justify-between">
                                    <button className="w-full h-14 bg-[#6430c0] text-white rounded-2xl font-semibold">Get This Plan-</button>
                                    <button className="w-full h-13 border-2 border-[#6430c0] text-[#6430c0] rounded-2xl font-semibold">Talk To an Expert</button>
                                </div>
                                
                            </div>

                            <div className="w-full h-48 flex flex-col justify-between p-[25px]">
                                    
                                {item.features.map((feature,index)=>(
                                    <div className="flex gap-2 items-center text-[20px]">
                                        <img src="tick.png" alt="" className="size-5 "/>
                                        <p >{feature}</p>
                                    </div>
                                ))}
                            </div>

                    
                        </div>
                    ))}
                    
                </div>

            </div>

        </div>
    )

}
export default Ninth;