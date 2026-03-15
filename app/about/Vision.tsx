const cards=[
    {title:"Our Vision",
     description:"Our ultimate goal is to not only have our contributions to the digital economy be recognized, but also to showcase the value we bring to both businesses and society as a whole.",
     img:"vision.gif"
    },
    {title:"Our Mission",
     description:"To enable businesses to grow by using our effective digital marketing services and people to be satisfied by finding convenience, fun and value in our online products.",
     img:"mission.gif"
    },
    {title:"Our Value",
     description:"To enable businesses to grow by using our effective digital marketing services and people to be satisfied by finding convenience, fun and value in our online products.",
     img:"one.png"
    },
    {title:"Trust",
     description:"The casual and Friendly environment fosters a proximity mindset where you can easily discuss and network with all Estrella team no matter their position in the company. Being trustworthy is one of our core value.",
     img:"one.png"
    },
    {title:"Collaboration",
     description:"Our collaborative approach fosters a more enjoyable working relationship, better communication and transparency, a more efficient use of project resource and ultimately allows us to add maximum value to your business.",
     img:"team.gif"
    },
    {title:"True Partner",
     description:"We take the time to understand your business from the top down so we can drive real value. We become a true partner to our client’s business, working across brand, marketing and technology initiatives to help them win.",
     img:"partner.gif"
    },
]

export default function Vision(){
    return(
        <div className="flex justify-center items-center w-full h-auto lg:h-[1070px] bg-[#ffffff] p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full max-w-[1260px] h-auto gap-4 lg:h-[950px] p-[10px]">
                {cards.map((item,index)=>(
                    <div className="w-full max-w-[300px] h-auto lg:max-w-[412px] md:h-[412px] p-[10px] border rounded-4xl shadow-2xl hover:scale-105">
                        <div className="flex flex-col w-full md:max-w-[382px] h-auto md:h-[390px] p-7 md:p-[40px]">
                            <div className="size-[80px]">
                                <img src={item.img} alt="" />
                            </div>

                            <div className="w-full max-w-[300px] h-[45px] pt-[15px]">
                                <h6 className="text-[18px] font-semibold"> {item.title}</h6>
                            </div>

                            <div>
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}