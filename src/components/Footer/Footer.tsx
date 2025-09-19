//Assets
import { toast } from "react-toastify"
import {Email} from "../../data/constants"
import Github from "./assets/Github"
import LinkedIn from "./assets/LinkedIn"
import Resume from "./assets/Resume"
import { useNavigate } from "react-router-dom"

type FooterType = {
  About?:string,
  Experience?:string,
  Project?:string,
  Contact?:string,
}

const copyEmail = ()=>{
  navigator.clipboard.writeText(Email);
  toast.success("Email Copied!")
}

const Footer : React.FC<FooterType> = ({About,Experience,Project,Contact}) => {

  const navigate = useNavigate();

  const scrollToElement = (targetRef?: string) => {
    if (!targetRef){
      navigate("/"); return;
    }
    else if (typeof targetRef === "string") {
      navigate(targetRef);
    }
  };


  return (
    <div className='bg-black w-full md:h-[200px] h-[150px] md:px-[50px] sm:px-[30px] px-[15px] text-white flex flex-row justify-around pt-4 md:pb-10' id="footer">
        
      <div className="flex flex-col justify-start gap-[15px] max-h-36">
        <span className='md:text-3xl sm:text-2xl text-xl tracking-wide mr-2'>SOHAM JOSHI</span>
        <div className="mt-30px">
          <p className='md:text-[15px] sm:text-[8px] min-[575px]:text-[10px] text-[6px] leading-[12px]'>Designed and developed  with ♡ by me </p>
        </div>
      </div>

      <div className="flex flex-col justify-between md:pt-3 pt-2 md:max-h-32 min-[575px]:max-h-24 max-h-20">

        <div className="flex flex-row gap-[10px] justify-end items-center md:text-[15px] sm:text-[8px] min-[575px]:text-[10px] text-[6px] text-nowrap">
            <span className="cursor-pointer" onClick={()=>{scrollToElement(About)}}>About Me</span>
            <span>·</span>
            <span className="cursor-pointer" onClick={()=>{scrollToElement(Experience)}}>Experience</span>
            <span>·</span>
            <span className="cursor-pointer" onClick={()=>{scrollToElement(Project)}}>Projects</span>
            <span>·</span>
            <span className="cursor-pointer" onClick={()=>{scrollToElement(Contact)}}>Contact</span>
        </div>

        <div className="flex flex-row md:gap-x-[25px] sm:gap-x-[15px] gap-x-[10px] justify-end items-center ">
          <Resume/>
          <Github/>
          <LinkedIn/>
        </div>

        <div className="flex flex-row gap-[12px] justify-end items-center md:text-[15px] sm:text-[8px] min-[575px]:text-[10px] text-[6px] cursor-pointer" onClick={copyEmail}>
          <span className="tracking-wider">{Email}</span>
        </div>

      </div>

    </div>
  )
}

export default Footer