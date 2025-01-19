//Components
import { useState } from "react"
import Button from "../common/Button"

//Utils
import sendEmail from "./utils/EmailSender"
import { toast } from "react-toastify"

type ContactType = {
  forwardRef:React.RefObject<HTMLDivElement>
}

const Contactme : React.FC<ContactType> = ({forwardRef}) => {

    const [name,setName] = useState("")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")
    const [error,setError] = useState<boolean>(false);
    const [loading,setLoading] = useState<boolean>(false);

    const onSubmit  = async () => {

      if(loading)return;

      if(error){
        toast.error("Please try later or directly email me");
        return;
      }

      if(!name || !contact || !message){
        toast.error("Please fill all the inputs");
        return;
      }

      await sendEmail({ name:name,contact:contact,message:message,setError:setError,setLoading:setLoading})

      if(!error){
        setName("");
        setMessage("");
        setContact("");
      }
    }

  return (
    <div className="w-full flex justify-center flex-col items-center pt-[100px] pb-[70px]  bg-gradient-to-r from-[hsl(0,0%,90%)] via-50% via-[hsl(0,0%,89%)] to-[hsl(0,0%,88%)]" ref={forwardRef}>

      <div className="mb-[90px] text-gradiant m-auto w-full text-center animate-appear-title">
        <span className="sm:text-[62px] text-[42px] noto-sans-450 " style={{"fontWeight":"500"}}>CONTACT ME</span>
      </div> 

      <div className="flex items-start xl:flex-row flex-col justify-center gap-y-[80px] gap-x-[30px] xl:max-w-[1450px] w-[70%] xl:w-[74%] sm:min-w-[420px] h-fit ">

        <div className="w-full flex flex-col justify-center items-center text-center xl:text-left xl:justify-end items-top">
            <h1 className="sm:text-[32px] text-[28px] font-[400] max-w-[400px]"><strong>Thank You </strong>For Visiting My Portfolio Website</h1>
            <h2 className="sm:text-[24px] text-[20px] tracking-tight mt-[50px] font-[300] max-w-[400px]">I’d love to hear from you! Whether it’s a project idea, collaboration, or just to say hi – feel free to drop a message.</h2>
        </div>

        <div className="xl:max-w-[1450px] xl:w-[100%] w-full m-auto p-[3px] pb-[10px]" >

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

            <div className="w-fit h- m-auto mt-[36px]">
              <Button Text={"Submit"} onClick={onSubmit}/>  
            </div>


        </div>

      </div>

    </div>
  )
}

export default Contactme