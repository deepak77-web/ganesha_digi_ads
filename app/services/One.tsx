"use client"
import Link from "next/link"

const services=[
    { img: "web.gif",
      title: "Website Design & Development",
      description: "Elevate your brand with stunning web design & development for impactful online experiences.",
      path:"/services/web"
    },
    { img: "seo.gif",
      title: "Search Engine Optimization",
      description: "Partner with a top SEO agency in Ranchi or Gaya to optimize strategies and drive results.",
      path:"/services/web"
    },
    { img: "brand.gif",
      title: "Branding & Promotion",
      description: "Our team crafts unique brands, drives promotions, and boosts visibility through audience engagement.",
      path:"/services/brand"
    },
    { img: "abc.jpeg",
      title: "Graphic Design",
      description: "Create visually stunning designs that communicate your brand’s message effectively with expert graphic design.",
      path:"/services/web"
    },
    { img: "google.gif",
      title: "Google my Business",
      description: "Stand out from the competition on the world’s most popular search engine with Google My Business.",
      path:"/services/google"
    },
    { img: "social.gif",
      title: "Social Media Marketing",
      description: "Build connections and drive growth with engaging social media campaigns that deliver real results.",
      path:"/services/social"
    },
]

export default function One(){
    return (
        <div className="flex justify-center w-full h-auto lg:h-[1048px] p-5 md:p-10">

            <div className="flex flex-col w-full max-w-[1260px] h-auto lg:h-[948px] gap-5">

                <div className="flex flex-col gap-4 w-full max-w-[1060px] h-auto lg:h-[108px] p-2.5 text-center md:text-left">
                    <h2 className="h-auto md:h-[50px] text-[32px] md:text-[39px] font-bold leading-tight">WHAT WE OFFER</h2>
                    <h2 className="text-[18px] font-semibold leading-tight">We’re here to help turn your ideas into something amazing.</h2>
                </div>

                <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((item,index)=>(
                        <div className="flex justify-center items-center w-full max-w-[412px] h-auto lg:h-[400px] bg-[#F8F8F9] rounded-4xl">
       
                            <div className="flex flex-col gap-4 w-full max-w-[382px] h-auto lg:h-[368px] m-3.5 p-5 md:p-10 bg-[#FFFFFF] rounded-4xl">
                                <img className="size-25" src={item.img} alt="" />
                                <div className="pt-[15px]">
                                    <h6 className="text-[18px] font-semibold">{item.title}</h6>
                                </div>
                                <div>{item.description}</div>
                                <Link href={item.path} className="text-[19px]">Learn More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
    
