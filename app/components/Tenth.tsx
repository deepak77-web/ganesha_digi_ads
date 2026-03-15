"use client"
import { useState } from "react"

const faqs=[
    {
        question:"Is it hard to customize this template?",
        desc:`Ideal for those seeking precision and confidence with advanced AI
        beatae assumenda a, possimus error commodi eligendi perferendis excepturi alias minima 
        itaque ducimus aut at nostrum sit iusto repellendus repellat sunt corrupti. Soluta voluptas 
        voluptatem commodi? Eum hic animi perspiciatis dicta, quis nostrum aspernatur qui eaque totam 
        tenetur adipisci fugit, voluptatem deserunt, debitis odit vero tempora magnam rem provident vitae.
        Dolores doloribus hic ad nihil, impedit earum veniam nisi optio facilis! Recusandae fuga nihil nam, 
        magnam quas vero tempora pariatur odit, debitis assumenda autem quibusdam, consequatur non fugiat porro?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur soluta debitis eveniet fugit 
        nulla quibusdam voluptatem? Saepe enim vel aliquam `
        
    },
    {
        question:"Is support available in case I get stuck?",
        desc:"Ideal for those seeking precision and confidence with advanced AI.",
        
    },
    {
        question:"What can I customize exactly on this template?",
        desc:"Ideal for those seeking precision and confidence with advanced AI.",
        
    },
]

function Tenth(){
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    function handleOpen(index:number){
        setOpenIndex(prev =>(prev===index ?null :index))
    }


    return(
        <div className="flex justify-center h-auto  bg-[#F8F8F9]">

            <div className="flex flex-col gap-10 md:justify-between items-center w-full lg:max-w-300 h-auto py-25 px-5 ">

                {/* First component */}
                <div className="w-full md:max-w-153 h-35 flex flex-col justify-between">
                    <p className="text-[#6430C0] font-semibold text-center">FAQ</p>
                    <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-semibold text-center leading-tight">Frequently Asked Questions</h2>
                </div>

                {/* Second component */}


                <div className="w-full md:max-w-200 h-auto  flex flex-col gap-3 md:justify-between">

                    <div className="w-full md:max-w-200 h-auto  flex flex-col gap-3 md:justify-between">
                    
                        {faqs.map((item,index)=>(    
                            <div key={index} className="w-full md:max-w-200 h-auto  flex flex-col gap-3 md:justify-between bg-[#F8F8F9] rounded-4xl ">
                            
                                <div onClick={()=>handleOpen(index)} className={`flex gap-3 sm:gap-4 md:gap-5 items-center bg-[#FFFFFF] rounded-2xl p-5 ${openIndex === index? "duration-300 transform-y-10":"transform-y-0"}`}>
                                    <h5 className="w-full text-[18px] font-medium">{item.question}</h5>
                                    <img src="plus.png" alt="" className={`size-4 ${openIndex ===index? "rotate-45 duration-300" :"rotate-0 duration-300"}`}/>    
                                </div>

                                {openIndex === index && (
                                    <div onClick={()=>handleOpen(index)} className={`flex gap-3 sm:gap-4 md:gap-5 items-center bg-[#FFFFFF] rounded-2xl p-5 ${openIndex === index? "duration-300 transform-y-10":"transform-y-0"}`}>
                                        {item.desc}
                                    </div>
                                )}
                            
                            </div>
                        ))}
                    </div>
                    <button className="w-full h-14 bg-[#6430C0] text-white text-[18px] font-medium rounded-2xl"> Get This Template -</button>
                </div>  
            </div>
        </div>
    )
}
export default Tenth;