//Assets
import { toast } from "react-toastify"
import Email from "./assets/Email"
import Github from "./assets/Github"
import LinkedIn from "./assets/LinkedIn"
import Phone from "./assets/Phone"
import Resume from "./assets/Resume"

type FooterType = {
  AboutRef:React.RefObject<HTMLDivElement>,
  ExperienceRef:React.RefObject<HTMLDivElement>,
  ProjectRef:React.RefObject<HTMLDivElement>
}

const scrollToElement = (targetRef : React.RefObject<HTMLDivElement>) => {
  targetRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const copyNumber = ()=>{
  navigator.clipboard.writeText("+91 9922927414");
  toast.success("Number Copied!")
}

const Footer : React.FC<FooterType> = ({AboutRef,ExperienceRef,ProjectRef}) => {
  return (
    <div className='bg-black w-full h-[200px] md:px-[50px] sm:px-[30px] px-[15px] pt-[18px] text-white flex flex-row justify-around gap-x-[250px]'>
        
      <div className="flex flex-col justify-start gap-[15px] py-[12px]">
        <span className='md:text-3xl sm:text-2xl text-xl tracking-wide'>SOHAM JOSHI</span>
        <div>
          <p className='md:text-[12px] sm:text-[8px] text-[6px] leading-[18px]'>Designed and developed  with ♡ by me </p>
        </div>
      </div>

      <div className="flex flex-col justify-between py-[20px]">

        <div className="flex flex-row gap-[10px] justify-end items-center md:text-[15px] sm:text-[12px] min-[575px]:text-10px] text-[8px] ">
          <span className="cursor-pointer" onClick={()=>{scrollToElement(AboutRef)}}>About Me</span>
          <span>·</span>
          <span className="cursor-pointer" onClick={()=>{scrollToElement(ExperienceRef)}}>Experience</span>
          <span>·</span>
          <span className="cursor-pointer" onClick={()=>{scrollToElement(ProjectRef)}}>Projects</span>
        </div>

        <div className="flex flex-row md:gap-x-[25px] sm:gap-x-[15px] gap-x-[10px] justify-end items-center ">
          <Email/>
          <Github/>
          <LinkedIn/>
          <Resume/>
        </div>

        <div className="flex flex-row gap-[12px] justify-end items-center text-sm cursor-pointer" onClick={copyNumber}>
          <Phone onClick={()=>{}}/>
          <span className="tracking-wider">+91 9922927414</span>
        </div>

      </div>

    </div>
  )
}

export default Footer