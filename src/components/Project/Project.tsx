//Components
import { ProjectCard } from "../common/Card"

type ProjectType = {
    forwardRef:React.RefObject<HTMLDivElement>
  }

const Project : React.FC<ProjectType> = ({forwardRef}) => {
  return (
      <div className="w-full mt-[80px] flex justify-center flex-col items-center pt-[100px] bg-[#232121] text-slate-300 pb-[100px]" ref={forwardRef}>
  
        <div className="mb-[140px] text-gradiant-dark">
          <span className="text-[63px] noto-sans-450" style={{"fontWeight":"500"}}>Projects</span>
        </div> 
        
        <div className="flex flex-col justify-center md:gap-y-[220px] gap-y-[140px] md:w-[61%] w-[78%]">
          {Array.from({ length: 4 }, (_, idx) => (
            <ProjectCard key={idx} index={idx} />
          ))}
        </div>
  
      </div>
    )
}

export default Project