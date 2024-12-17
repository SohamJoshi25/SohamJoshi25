//Assets
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

const Footer : React.FC<FooterType> = ({AboutRef,ExperienceRef,ProjectRef}) => {
  return (
    <div className='bg-black w-full h-[200px] text-lg px-[50px] pt-[18px] text-white flex flex-row justify-between'>
        
      <div className="flex flex-col justify-around">
        <span className='text-3xl tracking-wide'>SOHAM JOSHI</span>
        <div>
          <p className='text-[12px]  leading-[18px]'>Designed and developed  with ♡ by me </p>
          <p className='text-[12px]  leading-[18px]'>Copyright© 2024</p>
        </div>
      </div>

      <div className="flex flex-col justify-around">

        <div className="flex flex-row gap-[10px] justify-end items-center text-[15px]">
          <span className="cursor-pointer" onClick={()=>{scrollToElement(AboutRef)}}>About Me</span>
          <span>·</span>
          <span className="cursor-pointer" onClick={()=>{scrollToElement(ExperienceRef)}}>Experience</span>
          <span>·</span>
          <span className="cursor-pointer" onClick={()=>{scrollToElement(ProjectRef)}}>Projects</span>
        </div>

        <div className="flex flex-row gap-[25px] justify-end items-center">
          <Email/>
          <Github/>
          <LinkedIn/>
          <Resume/>
        </div>

        <div className="flex flex-row gap-[12px] justify-end items-center text-sm">
          <Phone onClick={()=>{}}/>
          <span className="tracking-wider">+91 9922927414</span>
        </div>

      </div>

    </div>
  )
}

export default Footer