//Components
import Button from "../common/Button"

//Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

//Data
import { Breakpoint } from "../../data/constants";
import { useNavigate } from "react-router-dom";

type NavbarType<> = {
    About?:string,
    Experience?: string,
    Project?:string,
    Contact?:string,
    theme?:"light" | "dark" | "black",
    classname?:string
}

const Navbar : React.FC<NavbarType> = ({About,Experience,Project,Contact,theme, classname}) => {

  const Dimensions = useWindowDimensions();
  const navigate = useNavigate();

  const scrollToElement = (targetRef?:string) => {
    if (!targetRef){
      navigate("/"); return;
    }
    else if (typeof targetRef === "string") {
      navigate(targetRef);
    }
  };

  return (
    <div className={`lg:py-[20px] md:py-[15px] sm:py-[10px] lg:px-[82px] md:px-[40px] sm:px-[28px] px-[18px] flex flex-row justify-between items-center h-[100px] ${classname} ${theme == "light" ? "bg-[#E0E0E0] text-[#3D3D3D]" : theme == "black" ?  "bg-[#1b1b1b] text-[#E0E0E0]" :  "bg-[#3D3D3D] text-[#E0E0E0]" }`} id='navbar'>
        <div className="relative">
          <span className="lg:text-4xl md:text-3xl sm:text-2xl text-[1.5rem] tracking-tight cursor-default">SOHAM JOSHI</span>
        </div>
        <div className="flex flex-row justify-between items-end lg:gap-x-[44px] md:gap-x-[28px] sm:gap-x-[22px] gap-x-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-[450]">

            {Dimensions.width>Breakpoint && <div className={`group cursor-pointer mt-[10px]  ${theme == "light" ? "hover:text-[#3D3D3D]" : theme == "black" ?  "hover:text-[#E0E0E0]" : "hover:text-white " }`} onClick={()=>{scrollToElement(About)}}>
                <span>About Me</span>
                <div className={`relative w-full h-[2px]  ${theme == "light" ? "bg-[#3D3D3D]" : "bg-[#E0E0E0]" }  rounded-full right-[3px] top-[2px]`}></div>
                <div className={`relative w-[108%] h-[4px] ${theme == "light" ? "bg-[#E0E0E0]" : theme == "black" ?  "bg-[#1b1b1b]" : "bg-[#3D3D3D]" }   rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]`}></div>
            </div>}

            {Dimensions.width>Breakpoint && <div className={`group cursor-pointer mt-[10px]  ${theme == "light" ? "hover:text-[#3D3D3D]" : theme == "black" ?  "hover:text-[#E0E0E0]" : "hover:text-white " }`} onClick={()=>{scrollToElement(Experience)}}>
                <span>Experience</span>
                <div className={`relative w-full h-[2px]  ${theme == "light" ? "bg-[#3D3D3D]" : "bg-[#E0E0E0]" }  rounded-full right-[3px] top-[2px]`}></div>
                <div className={`relative w-[108%] h-[4px] ${theme == "light" ? "bg-[#E0E0E0]" : theme == "black" ?  "bg-[#1b1b1b]" : "bg-[#3D3D3D]" }   rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]`}></div>
            </div>}

            {Dimensions.width>Breakpoint && <div className={`group cursor-pointer mt-[10px]  ${theme == "light" ? "hover:text-[#3D3D3D]" : theme == "black" ?  "hover:text-[#E0E0E0]" : "hover:text-white " }`} onClick={()=>{scrollToElement(Project)}}>
                <span>Projects</span>
                <div className={`relative w-full h-[2px]  ${theme == "light" ? "bg-[#3D3D3D]" : "bg-[#E0E0E0]" }  rounded-full right-[3px] top-[2px]`}></div>
                <div className={`relative w-[108%] h-[4px] ${theme == "light" ? "bg-[#E0E0E0]" : theme == "black" ?  "bg-[#1b1b1b]" : "bg-[#3D3D3D]" } rounded-full right-[5px] top-[-1px] transition-all duration-500 group-hover:translate-x-[200px]`}></div>
            </div>}

            <Button Text={"Contact Me"} Style={"border border-[#D0D0D0] hover:border-white"} onClick={()=>{scrollToElement(Contact)}}/>

        </div>
       
    </div>
  )
}

export default Navbar