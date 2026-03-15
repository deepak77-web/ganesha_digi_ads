const companies=[
    {img:"apple.png"},
    {img:"google.png"},
    {img:"microsoft.png"},
    {img:"nike.png"},
    {img:"netflix.png"},
    {img:"nvidia.png"},
    {img:"mcdonalds.png"},
    {img:"meta.png"},
    {img:"instagr.png"},

]

function Second(){
    return(
        <div className="flex justify-center">

            <div className="flex flex-col items-center w-full lg:max-w-300 p-10 overflow-hidden">
            
                <p className="font-bold text-[24px] md:text-[32px] mb-6">TRUSTED BY</p>
                
                <section className="relative w-full lg:max-w-248 h-20 overflow-hidden">
                    
                    {/* moving track */}
                    <div className="flex gap-10 animate-scroll w-max">

                        {companies.map((item,index)=>(
                            <img key={index} className="h-18 w-auto object-contain shrink-0" src={item.img}></img>
                        ))}

                        {/* another set for infinite effect */}
                        {companies.map((item,index)=>(
                            <img key={`duplicate-${index}`} src={item.img} className="h-18 w-auto object-contain shrink-0" alt="" />
                        ))}

                    </div>


                </section>
            </div>
        </div>
        
    )

}
export default Second