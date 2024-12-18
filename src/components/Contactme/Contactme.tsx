//Components
import { useState } from "react"
import Button from "../common/Button"


type ContactType = {
  forwardRef:React.RefObject<HTMLDivElement>
}

const Contactme : React.FC<ContactType> = ({forwardRef}) => {

    const [name,setName] = useState("")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit  = () => {
        window.alert(name+contact+message);
        setName("");
        setMessage("");
        setContact("");
    }

  return (
    <div className="w-full flex justify-center flex-col items-center pt-[96px] pb-[80px]" ref={forwardRef}>

      <div className="mb-[100px] text-gradiant m-auto w-full text-center">
        <span className="sm:text-[68px] text-[40px] noto-sans-450" style={{"fontWeight":"500"}}>CONTACT ME</span>
      </div> 

      <div className="flex items-start xl:flex-row flex-col justify-around gap-y-[80px] gap-x-[50px] xl:w-[1400px] w-[80%] ">

        <div className="w-full flex flex-col justify-center items-center text-center xl:text-left xl:justify-end items-top">
            <h1 className="sm:text-[32px] text-[28px] font-[400] max-w-[400px]"><strong>Thank You </strong>For Visiting My Portfolio Website</h1>
            <h2 className="sm:text-[24px] text-[20px] tracking-tight mt-[50px] font-[300] max-w-[400px]">I’d love to hear from you! Whether it’s a project idea, collaboration, or just to say hi – feel free to drop a message.</h2>
        </div>

        <div className="xl:w-[1400px] w-full m-auto" >

            <div className="">
                <div className="sm:text-[16px] text-[14px] tracking-wider mb-[2px]">YOUR NAME</div>
                <input type="text" value={name} className="block w-full text-sm h-[44px] p-[10px] outline-none rounded-[4px] shadow-sm" placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className="mt-[38px]">
                <div className="sm:text-[16px] text-[14px] tracking-wider mb-[2px]">HOW CAN I CONTACT YOU BACK?</div>
                <input type="text" value={contact} className="block w-full text-sm h-[44px] p-[10px] outline-none rounded-[4px] shadow-sm" placeholder="Your Email or Number" onChange={(e)=>{setContact(e.target.value)}}/>
            </div>

            <div className=" mt-[38px]">
                <div className="sm:text-[16px] text-[14px] tracking-wider mb-[2px]">YOUR MESSAGE</div>
                <textarea value={message} className="block w-full text-sm h-[160px] min-h-[220px] outline-none rounded-[4px] p-[10px] resize-none shadow-sm" placeholder="Lets Connect regarding a Project" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            </div>

            <Button Text={"Submit"} Style={"w-fit mt-[36px] m-auto"} onClick={onSubmit}/>

        </div>

      </div>

    </div>
  )
}

export default Contactme