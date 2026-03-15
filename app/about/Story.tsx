import { ScrollHighlightText } from "../components/Animation"
export default function Story(){
    return(
        <div className=" flex flex-col items-center justify-center w-full h-auto lg:h-[928px] text-black px-4 md:px-6">
                <h1 className="text-[36px] md:text-[46px] text-sm text-center font-semibold pb-10 md:pb-6">Our Story(so far)</h1>

                <div className="flex flex-col items-center md:justify-center md:flex-row gap-5 w-full max-w-[1124px] h-auto lg:h-[720px] md:mt-10" >

                    {/* left side - image */}

                    <div className="w-[300px] h-[212px] sm:w-[440px] sm:h-[308px]  md:w-[448px] md:h-[308px] flex justify-center items-center mb-10">
                        <img className="w-full rounded-xl -rotate-12" src="team.jpg" alt="" />
    
                    </div>

                    {/* right side */}
                    <div className="w-full max-w-[548px] h-auto">
                         <ScrollHighlightText className="text-[16px]">
                           {` We came together over a shared excitement about building a product that could solve our own problem of where our next favourite hack is coming from. But also a product that helps everyone thrive in this market: from founders and engineers to companies and investors.
                            
                            Stellar is a product that connects people around the topics and ideas that fascinate them. The idea that we can use technology to take our experience , as security lovers, to a new dimension and leave the computer industry in better shape while we're at it.

                            You can dive into the atoms that make up a product, share the moments that move you and discuss the ideas you find compelling. We want to create a ground for discussion and bring knowledge together , while making it more accessible and easier to grasp.

                            Contrary to popular belief, this product is not random security. It has roots in a piece of classical literature, making it over 5 years old. Richard McClintock, a professor at  Hampden-Sydney College  in Virginia, looked up one of the more obscure words, consectetur from a passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            We all thrive on learning something new every day and everyone is constantly trying on different hats. We are working with new technologies while rethinking an old industry and are excited about all the possibilities and opportunities to innovate.
                            It's a problem deeply ingrained in traditional sectors like startups and the wider service industry but which has been compounded in the past five to ten years by the emergence of the mostly tech-powered gig economy which has created a new generation of shift workers and indeed                 
                        
                           `} 
                        </ScrollHighlightText>

                    </div>
                        
                </div>
            </div>

    )
}
