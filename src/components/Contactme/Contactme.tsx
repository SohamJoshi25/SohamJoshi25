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
    <div className="w-full flex justify-center flex-col items-center pb-20 mt-[210px]" ref={forwardRef}>

      <div className="mb-[50px] text-gradiant">
        <span className="text-[63px] noto-sans-450">CONTACT ME</span>
      </div> 

      <div className="flex items-center justify-around gap-x-[50px] w-[70%]">

        <div className="w-full">
            <h1 className="text-[32px] tracking-wide font-[400] max-w-[400px]"><strong>Thank You </strong>For Visiting My Portfolio Website</h1>
            <h2 className="text-[24px] tracking-tight mt-[50px] font-[300] max-w-[400px]">I’d love to hear from you! Whether it’s a project idea, collaboration, or just to say hi – feel free to drop a message.</h2>
        </div>

        <div className="w-full" >

            <div className=" mt-[38px]">
                <span className="text-[14px] tracking-wider">YOUR NAME</span>
                <input type="text" value={name} className="block w-full h-[32px] pl-[5px] outline-none rounded-sm font-body" placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className=" mt-[38px]">
                <span className="text-[14px] tracking-wider">HOW CAN I CONTACT YOU BACK?</span>
                <input type="text" value={contact} className="block w-full h-[32px] pl-[5px] outline-none rounded-sm font-body" placeholder="Your Email or Number" onChange={(e)=>{setContact(e.target.value)}}/>
            </div>

            <div className=" mt-[38px]">
                <span className="text-[14px] tracking-wider ">YOUR MESSAGE</span>
                <textarea value={message} className="block w-full h-[160px] min-h-[220px] outline-none rounded-sm font-body p-[5px] resize-none" placeholder="Lets Connect regarding a Project" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            </div>

            <Button Text={"Submit"} Style={"w-fit mt-[36px] m-auto"} onClick={onSubmit}/>

        </div>

      </div>

    </div>
  )
}

export default Contactme