// the animation is not working 
export default function Theme(){
    return(
         <div className="flex flex-col items-center bg-[url('/theme2.jpg')] bg-cover bg-center h-[668px] md:h-screen px-4">

            <div className=" flex flex-col items-center justify-center w-full max-w-[1104px] h-[668px] md:h-[568px] text-white md:mt-10">
                <h1 className="text-[16px] text-sm text-[#bb94e5] text-center font-semibold pb-3">The vision behind the project</h1>
                <h1 className="text-[44px] md:text-[56px] text-sm text-center font-semibold pb-6">Turning Security into Innovation</h1>

                <div className="size-72 sm:size-112 flex justify-center items-center relative  ">
                    <img className="size-72 sm:size-112" src="about-illustration.svg" alt="" />
                    <img className="absolute size-18 animate-float" src="about-icon.svg" alt="" />

                </div>
            </div>
        </div>
    )
}