//Components
import Button from "../common/Button"

//Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

//Data
import { Breakpoint } from "../../data/constants";

type NavbarType = {
    AboutRef:React.RefObject<HTMLDivElement>,
    ExperienceRef:React.RefObject<HTMLDivElement>,
    ProjectRef:React.RefObject<HTMLDivElement>,
    ContactRef:React.RefObject<HTMLDivElement>,
}

const scrollToElement = (targetRef : React.RefObject<HTMLDivElement>) => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

const Navbar : React.FC<NavbarType> = ({AboutRef,ExperienceRef,ProjectRef,ContactRef}) => {

  const Dimensions = useWindowDimensions();

  return (
    <div className="lg:py-[20px] md:py-[15px] sm:py-[10px] lg:px-[82px] md:px-[40px] sm:px-[28px] px-[18px] flex flex-row justify-between items-center h-[120px] bg-[#3D3D3D] text-[#E0E0E0]">
        <div className="relative">
          <span className="lg:text-4xl md:text-3xl sm:text-2xl text-[1.5rem] tracking-tight cursor-default">SOHAM JOSHI</span>
        </div>
        <div className="flex flex-row justify-between items-end lg:gap-x-[44px] md:gap-x-[28px] sm:gap-x-[22px] gap-x-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-[450]">

            {Dimensions.width>Breakpoint && <div className="group cursor-pointer mt-[10px]  hover:text-white" onClick={()=>{scrollToElement(AboutRef)}}>
                <span>About Me</span>
                <div className="relative w-full h-[2px] bg-[#F0F0F0] rounded-full right-[3px] top-[2px]"></div>
                <div className="relative w-[108%] h-[4px] bg-[#3D3D3D]  rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]"></div>
            </div>}

            {Dimensions.width>Breakpoint && <div className="group cursor-pointer mt-[10px]  hover:text-white" onClick={()=>{scrollToElement(ExperienceRef)}}>
                <span>Experience</span>
                <div className="relative w-full h-[2px] bg-[#F0F0F0] rounded-full right-[3px] top-[2px]"></div>
                <div className="relative w-[108%] h-[4px] bg-[#3D3D3D]  rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]"></div>
            </div>}

            {Dimensions.width>Breakpoint && <div className="group cursor-pointer mt-[10px] hover:text-white" onClick={()=>{scrollToElement(ProjectRef)}}>
                <span>Projects</span>
                <div className="relative w-full h-[2px] bg-[#F0F0F0] rounded-full right-[3px] top-[2px]"></div>
                <div className="relative w-[108%] h-[4px] bg-[#3D3D3D]  rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]"></div>
            </div>}

            <Button Text={"Contact Me"} Style={"border border-[#D0D0D0] hover:border-white"} onClick={()=>{scrollToElement(ContactRef)}}/>

        </div>
       
    </div>
  )
}

export default Navbar