const details=[
    {
        img:"call.gif",
        method:"CALL US ",
        detail:"xxxxxx7739 "
    },
    {
        img:"email.gif",
        method:" EMAIL US",
        detail:"ganeshadigiads@gmail.com "
    },
    {
        img:"loc.gif",
        method:"VISIT US ",
        detail:" Nucleus Mall,Circular Road Ranchi,Jharkhand (834001)  "
    },
    
]

export default function Contact(){
    return(
        <div className="flex flex-col items-center w-full max-w-[1470px] h-[944px] p-2.5 gap-10">

            <div className="w-[770px] h-[140px] p-2.5">

                <div className="flex items-center h-[42px]">
                    <h3 className="text-[39px] h-[42px] mb-4 font-bold">LET'S CONNECT</h3>
                    <img className="size-15" src="link.gif" alt="" />

                </div>
                
                <h2 className="font-semibold text-[#6430c0]">We’d love to hear from you.
                <br/>let’s create something together.</h2>
            </div>

            <div className="flex gap-5">
                {/* left component */}
                <div className="flex flex-col justify-center w-[450px] h-[620px] p-4 gap-3">
                    {details.map((item,index)=>(
                        <div className="flex justify-center items-center w-[420px] h-auto bg-[#F8F8F9] p-[5px] rounded-4xl text-center">
                            <div className="flex flex-col items-center w-[420px] h-auto  bg-[#FFFFFF] text-black gap-1 rounded-4xl p-2.5">
                            <img className="size-[80px]" src={item.img} alt="" />
                            <h1>{item.method}</h1>
                            <h3>{item.detail}</h3>

                        </div>
                        </div>                        
                    ))}
                    
                </div>

                {/* right component */}
                <div className="flex justify-center items-center w-[800px] h-[620px] bg-[#F8F8F9] p-[5px] rounded-4xl ">

                    <div className="w-[728px] h-[600px] p-10 flex flex-col gap-5 bg-[#FFFFFF] rounded-4xl">
                        <h2 className="text-[30px] font-bold text-center">TAKE YOUR BUSINESS TO NEW HEIGHTS!</h2>
                        <h2 className="text-[18px] text-center font-semibold text-[#6430c0]">Start your journey by filling out the form!</h2>

                        <div className="h-0.5 bg-[#707070]"></div>

                        {/* info fields */}
                        <div className="w-full flex flex-col justify-center max-w-[686px] h-[350px] ">

                            <div className="flex ">
                                <div className="w-full max-w-[342px] h-[60px] mb-[25px] px-5">
                                    <input className="w-full max-w-[302px] h-[60px] px-5 py-[7px] border-2 border-[#6430c0] rounded-4xl " type="text" placeholder="Your Name / Business Name ..."/>
                                </div>

                                <div className="w-full max-w-[342px] h-[60px] mb-[25px] px-5">
                                    <input className="w-full max-w-[302px] h-[60px] px-5 py-[7px] border-2 border-[#6430c0] rounded-4xl " type="text" placeholder="Phone / WhatsApp Number ..."/>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-full max-w-[342px] h-[60px] mb-[25px] px-5">
                                    <input className="w-full max-w-[302px] h-[60px] px-5 py-[7px] border-2 border-[#6430c0] rounded-4xl " type="text" placeholder="Email ..."/>
                                </div>

                                <div className="w-full max-w-[342px] h-[60px] mb-[25px] px-5">
                                    <input className="w-full max-w-[302px] h-[60px] px-5 py-[7px] border-2 border-[#6430c0] rounded-4xl " type="text" placeholder="City ..."/>
                                </div>
                            </div>

                            <div className="w-full  h-[60px] mb-[25px] px-5">
                                <input className="w-full h-[60px] px-5 py-[7px] border-2 border-[#6430c0] rounded-4xl " type="text" placeholder="Select Services ..."/>

                            </div>

                            <div className="w-full  h-[50px] mb-[25px] px-5 relative text-white text-[18px]">
                                <img className="absolute size-8 top-[20%] left-[41%]" src="send.svg" alt="" />
                                <button className="w-full h-[50px] px-5 py-[7px] border-2 bg-[#6430c0] rounded-4xl font-bold hover:cursor-pointer ">Send </button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}