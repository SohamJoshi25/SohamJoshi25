//Assets
import Email from "./assets/Email"
import Github from "./assets/Github"
import LinkedIn from "./assets/LinkedIn"
import Phone from "./assets/Phone"
import Resume from "./assets/Resume"

const Footer = () => {
  return (
    <div className='bg-black w-full h-[200px] text-lg px-[30px] py-[25px] text-white flex flex-row justify-between'>
        
      <div className="flex flex-col justify-around">
        <span className='text-3xl tracking-wide'>SOHAM JOSHI</span>
        <span className='text-lg'>Designed and developed  with ♡ by me </span>
        <span className='text-lg'>Copyright© 2024</span>
      </div>

      <div className="flex flex-col justify-around">

      <div className="flex flex-row gap-[15px] justify-end items-center">
          <span>ABOUT ME</span>
          <span>·</span>
          <span>EXPERIENCE</span>
          <span>·</span>
          <span>PROJECTS</span>
        </div>

        <div className="flex flex-row gap-[25px] justify-end items-center">
          <Email onClick={()=>{}}/>
          <Github onClick={()=>{}}/>
          <LinkedIn onClick={()=>{}}/>
          <Resume onClick={()=>{}}/>
        </div>

        <div className="flex flex-row gap-[5px] justify-end items-center">
          <Phone onClick={()=>{}}/>
          <span>+91 9922927414</span>
        </div>

      </div>

    </div>
  )
}

export default Footer