//Components
import { ExperienceCard } from "../common/Card"

type ExperienceType = {
  forwardRef:React.RefObject<HTMLDivElement>
}

const Experience : React.FC<ExperienceType> = ({forwardRef}) => {
  return (
    <div className="w-full flex justify-center flex-col items-center pb-20" ref={forwardRef}>

      <div className="mb-[200px] text-gradiant">
        <span className="text-[63px] noto-sans-450">Experience</span>
      </div> 
      
      <div className="flex flex-col justify-center gap-y-[220px] w-[65%]">
        {Array.from({ length: 4 }, (_, idx) => (
          <ExperienceCard key={idx} index={idx} />
        ))}
      </div>

    </div>
  )
}

export default Experience