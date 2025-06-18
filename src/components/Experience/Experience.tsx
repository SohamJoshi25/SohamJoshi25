//Components
import { ExperienceCard } from "../common/Card"

//Data
import { ExperienceData } from "../../data/experiences"


type ExperienceType = {
  forwardRef:React.RefObject<HTMLDivElement>
}

const Experience : React.FC<ExperienceType> = ({forwardRef}) => {
  return (
    <div className="w-full flex justify-center flex-col items-center pt-[130px] pb-[110px]  bg-gradient-to-r from-[hsl(0,0%,90%)] via-50% via-[hsl(0,0%,89%)] to-[hsl(0,0%,88%)]" ref={forwardRef}>

      <div className="mb-[120px] text-gradiant animate-appear-title">
        <span className="md:text-[68px] text-[58px] noto-sans-450" style={{"fontWeight":"500"}}>Experience</span>
      </div> 
      
      <div className="flex flex-col justify-center md:gap-y-[90px] gap-y-[90px] md:w-[61%] w-[78%]">
        {ExperienceData.map((experience, idx) => (
          <ExperienceCard key={idx} index={idx} experience={experience}/>
        ))}
      </div>

    </div>
  )
}

export default Experience