//Components
import Button from "../common/Button"

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
  return (
    <div className="my-[20px] px-[82px] flex flex-row justify-between items-center h-[74px]">
        <span className="text-3xl font-semibold cursor-default">SOHAM JOSHI</span>
        <div className=" flex flex-row justify-between gap-x-[40px] text-[16px] font-[450] pt-[15px]">

            <div className="group cursor-pointer" onClick={()=>{scrollToElement(AboutRef)}}>
                <span>About Me</span>
                <div className="relative w-full h-[3px] bg-[#232121] rounded-full right-[3px] top-[2px]"></div>
                <div className="relative w-[108%] h-[5px] bg-[#E6E6E6] rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]"></div>
            </div>

            <div className="group cursor-pointer" onClick={()=>{scrollToElement(ExperienceRef)}}>
                <span>Experience</span>
                <div className="relative w-full h-[3px] bg-[#232121] rounded-full right-[3px] top-[2px]"></div>
                <div className="relative w-[108%] h-[5px] bg-[#E6E6E6] rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]"></div>
            </div>

            <div className="group cursor-pointer" onClick={()=>{scrollToElement(ProjectRef)}}>
                <span>Projects</span>
                <div className="relative w-full h-[3px] bg-[#232121] rounded-full right-[3px] top-[2px]"></div>
                <div className="relative w-[108%] h-[5px] bg-[#E6E6E6] rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]"></div>
            </div>

        
        </div>
        <Button Text={"Contact Me"} onClick={()=>{scrollToElement(ContactRef)}}/>
    </div>
  )
}

export default Navbar