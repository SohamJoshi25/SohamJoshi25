//Components
import { ExperienceCard } from "../common/Card"

type ExperienceType = {
  forwardRef:React.RefObject<HTMLDivElement>
}

const Experience : React.FC<ExperienceType> = ({forwardRef}) => {
  return (
    <div className="w-full flex justify-center flex-col items-center pt-[100px] pb-[20px]" ref={forwardRef}>

      <div className="mb-[140px] text-gradiant">
        <span className="text-[68px] noto-sans-450" style={{"fontWeight":"500"}}>Experience</span>
      </div> 
      
      <div className="flex flex-col justify-center gap-y-[220px] w-[61%]">
        {Array.from({ length: 4 }, (_, idx) => (
          <ExperienceCard key={idx} index={idx} />
        ))}
      </div>

    </div>
  )
}

export default Experience