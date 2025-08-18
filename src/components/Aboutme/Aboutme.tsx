import { useState } from "react"

//Components
import Button from "../common/Button"

//SVGs
import ReactSVG from "./components/ReactSVG"
import ExpressSVG from "./components/ExpressSVG"
import EjsSVG from "./components/EjsSVG"
import GitSVG from "./components/GitSVG"
import JavaSVG from "./components/JavaSVG"
import JwtSVG from "./components/JwtSVG"
import MongoSVG from "./components/MongoSVG"
import NodeSVG from "./components/NodeSVG"
import OauthSVG from "./components/OauthSVG"
import RedisSVG from "./components/RedisSVG"
import TypescriptSVG from "./components/TypescriptSVG"



//hooks
import useWindowDimensions from "../../hooks/useWindowDimensions"

//Constants
import { Github } from "../../data/constants"
//import RustSVG from "./components/RustSVG"
import GoSVG from "./components/GoSVG"


type AboutmeType = {
    forwardRef:React.RefObject<HTMLDivElement>
}

const Aboutme : React.FC<AboutmeType> = ({forwardRef}) => {

    const Dimensions = useWindowDimensions();
    const [isHovering, setIsHovering] = useState<boolean>(false);
    //from-[hsl(39,15%,88%)] via-60% via-[hsl(40,6%,83%)] to-[hsl(40,15%,74%)]

    return (
        <div className="flex justify-center relative max-[575px]:items-center bg-gradient-to-r animate-appear from-[hsl(60,2%,84%)] via-60% via-[hsl(40,6%,83%)] to-[hsl(60,3%,79%)] py-[60px] min-[575px]:flex-row flex-col-reverse md:px-2 px-0" ref={forwardRef}>

            {Dimensions.width > 830 && <div className="flex flex-col relative h-full justify-around ml-5 pt-[10px] gap-[5px] mr-[5px] px-[10px]">
                <ReactSVG/>
                <ExpressSVG/>
                <EjsSVG/>
                <GitSVG/>
                <JavaSVG/>
                <JwtSVG/>
                <MongoSVG/>
                <NodeSVG/>
                <OauthSVG/>
                <RedisSVG/>
                <TypescriptSVG/>
                <GoSVG/>
            </div>}

            {Dimensions.width <= 830 && <div className="flex flex-col absolute bottom-5 justify-around  pt-[10px] gap-[5px]  z-0 w-full">
                

                <div className="flex justify-around w-full">
                    <ReactSVG/>
                    <ExpressSVG/>
                    <EjsSVG/>
                    <GitSVG/>
                    <JavaSVG/>
                    <JwtSVG/>
                </div>
                <div className="flex justify-around w-full">
                    <MongoSVG/>
                    <NodeSVG/>
                    <OauthSVG/>
                    <RedisSVG/>
                    <TypescriptSVG/>
                    <GoSVG/>
                </div>
                
            </div>}

            <div className="z-30 p-[5px] min-[575px]:pl-[20px] min-[575px]:w-[700px] min-[575px]:left-10 relative pb-[86px]">
                {Dimensions.width>=575 && <div className="lg:text-[54px] md:text-[40px] sm:text-[30px] font-[500] text-[1.5rem] lg:leading-[74px] tracking-wide text-transparent " style={{"fontFamily":"Saira Semi Condensed"}} onMouseEnter={()=>{setIsHovering(true)}} onMouseLeave={()=>{setIsHovering(false)}} >
                    <h1 id="title1" className={`bg-clip-text bg-gradient-to-r ${isHovering ? "  from-[#979797] to-[#b4b4b4] " : " from-black to-[#252525] "} hover:from-[hsl(41,51%,25%)] hover:to-[hsl(41,36%,60%)] hover:scale-110 origin-left hover:font-[600] transition-transform`}>FULL STACK DEVELOPER</h1>
                    <h1 id="title2" className={`bg-clip-text bg-gradient-to-r ${isHovering ? "  from-[#979797] to-[#b4b4b4] " : " from-black to-[#252525] "} hover:from-[#1f2a5f] hover:to-[#767fbe] hover:scale-110 origin-left hover:font-[600] transition-transform`}>TECH ENTHUSIAST</h1>
                    <h1 id="title3" className={`bg-clip-text bg-gradient-to-r ${isHovering ? "  from-[#979797] to-[#b4b4b4] " : " from-black to-[#252525] "} hover:from-[hsl(295,51%,25%)] hover:to-[hsl(295,36%,60%)] hover:scale-110 origin-left hover:font-[600] transition-transform`}>PROGRAMMER</h1>
                </div>}
                <h4 className="mt-[30px] sm:max-w-[360px] max-w-[280px] min-[575px]:text-[19px] text-[17px] min-[575px]:tracking-wider min-[575px]:leading-[24px] pl-[5px] text-center min-[575px]:text-left ">
                    A Full-Stack Developer From Pune, Crafting Responsive And Scalable Websites And Software.
                </h4>
                <h4 className="mt-[30px] sm:max-w-[360px] max-w-[280px] min-[575px]:text-[18px] text-[16px] min-[575px]:tracking-wider min-[575px]:leading-[24px] pl-[5px] text-center min-[575px]:text-left ">
                Worked with technologies like GoLang, Docker, Java, Typescript, SpringBoot, NodeJS, ExpressJS, ReactJS, TailWindCSS, NextJS, Git, Github, MongoDB, JWT, Redis, PassportJS, ContextAPI and lot more ...
                </h4>
                <h4 className="mt-[20px] md:mb-[40px] mb-[30px] min-[575px]:text-[19px] text-[17px] min-[575px]:tracking-wide min-[575px]:leading-[24px] px-[5px] text-center min-[575px]:text-left w-full">Let's Work Together</h4>
                
                
                <div className="w-fit max-[575px]:m-auto">
                    <Button Text={"View Github"} href={Github}/>
                </div>
            </div>

            <div className="overflow-clip lg:w-[580px] md:w-[500px] sm:w-[380px] w-[280px] relative md:right-10 max-[575px]:mt-[20px] flex-shrink-0 ml-[30px]">
                <img src="SohamJoshiPhoto.png" alt="" className="block -rotate-3 w-full min-w-full " style={{"filter":"saturate(0.2) contrast(1.6) brightness(0.95)"}} />
            </div>

            {Dimensions.width<575 && <div className="lg:text-[58px] md:text-[40px] sm:text-[34px] text-[32px] w-fit font-[500] text-gradiant lg:leading-[74px] text-center min-[575px]:text-left">
                <h1>FULL STACK DEVELOPER</h1>
                <h1>TECH ENTHUSIAST</h1>
                <h1>PROGRAMMER</h1>
            </div>}

        </div>
    )
}

export default Aboutme