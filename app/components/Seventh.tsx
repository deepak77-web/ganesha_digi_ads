const reviews=[
    {
        img:"alex.png",
        name:"Alex Rodriguez",
        title:"Director of Operations, Global Ventures Inc.",
        review:"Incredible attention to detail. They optimized every aspect of our digital strategy."
    },
    {
        img:"jake.jpg",
        name:"Jake Thompson",
        title:"Founder & CEO, Digital Trends Solutions",
        review:"They transformed our business! Their creative solutions and strategic approach boosted online presence and drove significant customer growth."
    },
    {
        img:"sophie.jpg",
        name:"Emily Chen",
        title:"E-commerce Entrepreneur, Luxe Styles Boutique ",
        review:"They transformed our social media game—our sales have never been better!"
    },
    {
        img:"samantha.jpg",
        name:"Samantha Williams",
        title:"Marketing Manager, Tech Innovate Co.",
        review:"Our online presence skyrocketed thanks to their genius strategies! Couldn't be happier."
    },
    {
        img:"sophie.jpg",
        name:"Sophie Patel",
        title:"Founder, Urban Bites Food Truck",
        review:"Their tailored approach made our small business stand out in a big way!"
    },
    {
        img:"chris.jpg",
        name:"Chris Reynolds",
        title:"VP of Sales, Elite Fitness Solutions",
        review:"Exceptional analytics! Their insights have revolutionized our marketing approach."
    },
]

function Seventh(){
    return(

        <div className="flex justify-center">

            <div className="flex flex-col items-center gap-7 justify-center h-auto lg:h-272 py-25 px-5">

            {/* first */}
            <div className="h-[142px] w-full max-w-150">
                <p className="text-[#6430C0] font-semibold text-center">TESTIMONIALS</p>
                <h2 className="text-[32px] md:text-[38px] lg:text-[46px] text-center font-semibold leading-tight"> Hear What Our Clients Have to Say </h2>
            </div>

            {/* second */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto lg:h-151 w-full max-w-290 items-start">
                {reviews.map((item,index)=>(
                    <div key={index} className="flex flex-col gap-5 w-full max-w-94 bg-[#F8F8F9] p-[30px] rounded-4xl hover:scale-110">
                        <p className="w-full max-w-79 text-[18px]">{item.review}</p>
                        <div className="h-0.5 w-full bg-[#e3e3e8]"></div>

                        <div className="flex items-center gap-5 w-full max-w-79 h-auto lg:h-[78px]">
                            <img className="size-13 rounded-full" src={item.img} alt="" />

                            <div className="flex flex-col">
                                <h5 className="text-[18px] font-semibold">{item.name}</h5>
                                <p>{item.title}</p>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </div>
    )
}
export default Seventh