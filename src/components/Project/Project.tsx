//Components
import { ProjectCard } from "../common/Card"

type ProjectType = {
    forwardRef:React.RefObject<HTMLDivElement>
  }

const Project : React.FC<ProjectType> = ({forwardRef}) => {
  return (
      <div className="w-full mt-[200px] flex justify-center flex-col items-center pb-20" ref={forwardRef}>
  
        <div className="mb-[190px] text-gradiant">
          <span className="text-[63px] noto-sans-450">Projects</span>
        </div> 
        
        <div className="flex flex-col justify-center gap-y-[220px] w-[65%]">
          {Array.from({ length: 4 }, (_, idx) => (
            <ProjectCard key={idx} index={idx} />
          ))}
        </div>
  
      </div>
    )
}

export default Project