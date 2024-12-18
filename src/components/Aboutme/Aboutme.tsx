//Components
import Button from "../common/Button"

//hooks
import useWindowDimensions from "../../hooks/useWindowDimensions"

type AboutmeType = {
    forwardRef:React.RefObject<HTMLDivElement>
}

const Aboutme : React.FC<AboutmeType> = ({forwardRef}) => {

    const Dimensions = useWindowDimensions();

  return (
    <div className="flex justify-center max-[575px]:items-center  bg-blue-500 pt-[30px] pb-[35px] min-[575px]:flex-row flex-col-reverse " ref={forwardRef}>

        <div className="z-30 p-[5px] min-[575px]:pl-[70px]">
            {Dimensions.width>=575 && <div className="lg:text-[58px] md:text-[40px] sm:text-[30px] text-[1.5rem] w-fit font-[500] text-gradiant lg:leading-[74px]">
                <h1>FULL STACK DEVELOPER</h1>
                <h1>PROGRAMMER</h1>
                <h1>FREELANCER</h1>
            </div>}
            <h4 className="mt-[30px] sm:max-w-[360px] max-w-[280px] min-[575px]:text-[18px] text-[16px] min-[575px]:tracking-wider min-[575px]:leading-[24px] pl-[5px] text-center min-[575px]:text-left ">
                A Full-Stack Developer From Pune, Crafting Responsive And Scalable Websites And Software.
            </h4>
            <h4 className="mt-[20px] mb-[50px] min-[575px]:text-[19px] text-[17px] min-[575px]:tracking-wide min-[575px]:leading-[24px] px-[5px] text-center min-[575px]:text-left w-full">Let's Work Together</h4>
            <div className="w-full m-auto">
                <Button Text={"View My Work"} Style={"w-fit  max-[575px]:m-auto"}/>
            </div>
        </div>

        <div className="overflow-clip  lg:w-[640px] md:w-[500px] sm:w-[380px] w-[300px] relative md:right-10 max-[575px]:mt-[20px] flex-shrink-0">
            <img src="SohamJoshiPhoto.png" alt="" className="block -rotate-3 w-full min-w-full " style={{"filter":"saturate(0.2) contrast(1.6) brightness(0.95)"}} />
        </div>

        {Dimensions.width<575 && <div className="lg:text-[58px] md:text-[40px] sm:text-[34px] text-[32px] w-fit font-[500] text-gradiant lg:leading-[74px] text-center min-[575px]:text-left">
            <h1>FULL STACK DEVELOPER</h1>
            <h1>PROGRAMMER</h1>
            <h1>FREELANCER</h1>
        </div>}

    </div>
  )
}

export default Aboutme