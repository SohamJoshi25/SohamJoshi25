//Components
import { ExperienceCard } from "../common/Card"

type ExperienceType = {
  forwardRef:React.RefObject<HTMLDivElement>
}

const Experience : React.FC<ExperienceType> = ({forwardRef}) => {
  return (
    <div className="w-full flex justify-center flex-col items-center pt-[100px] pb-[20px]" ref={forwardRef}>

      <div className="mb-[140px] text-gradiant">
        <span className="md:text-[68px] text-[58px] noto-sans-450" style={{"fontWeight":"500"}}>Experience</span>
      </div> 
      
      <div className="flex flex-col justify-center md:gap-y-[220px] gap-y-[140px] md:w-[61%] w-[78%]">
        {Array.from({ length: 4 }, (_, idx) => (
          <ExperienceCard key={idx} index={idx} />
        ))}
      </div>

    </div>
  )
}

export default Experience