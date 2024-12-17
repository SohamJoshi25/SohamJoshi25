//Components
import Button from "../common/Button"

type AboutmeType = {
    forwardRef:React.RefObject<HTMLDivElement>
}

const Aboutme : React.FC<AboutmeType> = ({forwardRef}) => {
  return (
    <div className="flex justify-around pl-[80px] bg-blue-500 pt-[30px] pb-[15px]" ref={forwardRef}>

        <div className="mt-[60px] ml-[150px] z-30">
            <div className="text-[58px] w-fit font-[500] text-gradiant leading-[74px]">
                <h1>FULL STACK DEVELOPER</h1>
                <h1>PROGRAMMER</h1>
                <h1>FREELANCER</h1>
            </div>
            <h4 className="mt-[30px] max-w-[324px] text-[18px] tracking-wider leading-[24px] pl-[5px]">
                A Full-Stack Developer From Pune, Crafting Responsive And Scalable Websites And Software.
            </h4>
            <h4 className="mt-[20px] mb-[50px] max-w-[324px] text-[18px] font-li tracking-wide pl-[5px]">Let's Work Together</h4>
            <Button Text={"View My Work"} Style={"w-fit"}/>
        </div>

        <div className="overflow-clip w-full h-[700px] min-h-[60px] max-w-[600px] relative right-[130px]">
            <img src="SohamJoshiPhoto.png" alt="" className="block -rotate-3" style={{"filter":"saturate(0.2) contrast(1.6) brightness(0.95)"}} />
        </div>

    </div>
  )
}

export default Aboutme