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

      <div className="mb-[100px] text-gradiant">
        <span className="text-[63px] noto-sans-450" style={{"fontWeight":"500"}}>CONTACT ME</span>
      </div> 

      <div className="flex items-start flex-row justify-around w-[60%] gap-y-[40px] gap-x-[50px]">

        <div className="w-full flex flex-col justify-center items-top">
            <h1 className="text-[32px] font-[400] max-w-[400px]"><strong>Thank You </strong>For Visiting My Portfolio Website</h1>
            <h2 className="text-[24px] tracking-tight mt-[50px] font-[300] max-w-[400px]">I’d love to hear from you! Whether it’s a project idea, collaboration, or just to say hi – feel free to drop a message.</h2>
        </div>

        <div className="w-[100%] m-auto" >

            <div className="">
                <div className="text-[16px] tracking-wider mb-[2px]">YOUR NAME</div>
                <input type="text" value={name} className="block w-full text-sm h-[38px] p-[10px] outline-none rounded-[4px] shadow-sm" placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className="mt-[38px]">
                <div className="text-[16px] tracking-wider mb-[2px]">HOW CAN I CONTACT YOU BACK?</div>
                <input type="text" value={contact} className="block w-full text-sm h-[38px] p-[10px] outline-none rounded-[4px] shadow-sm" placeholder="Your Email or Number" onChange={(e)=>{setContact(e.target.value)}}/>
            </div>

            <div className=" mt-[38px]">
                <div className="text-[16px] tracking-wider mb-[2px]">YOUR MESSAGE</div>
                <textarea value={message} className="block w-full text-sm h-[160px] min-h-[220px] outline-none rounded-[4px] p-[10px] resize-none shadow-sm" placeholder="Lets Connect regarding a Project" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            </div>

            <Button Text={"Submit"} Style={"w-fit mt-[36px] m-auto"} onClick={onSubmit}/>

        </div>

      </div>

    </div>
  )
}

export default Contactme