//Components
import { ProjectCard } from "../common/Card"

//Data
import { ProjectsData } from "../../data/projects"
import { ExperienceData } from "../../data/experiences"

type ProjectType = {
    forwardRef:React.RefObject<HTMLDivElement>
  }

const Project : React.FC<ProjectType> = ({forwardRef}) => {
  const offset = ExperienceData.length %2 == 0 ? 0 : 1;
  return (
      <div className="w-full flex justify-center flex-col items-center bg-gradient-to-r from-[hsl(0,0%,13%)] from-80% to-[hsl(0,0%,11%)] text-slate-300 pt-[130px] pb-[110px]" ref={forwardRef}>
  
        <div className="mb-[120px] text-gradiant-dark animate-appear-title">
          <span className="md:text-[4em] text-[3em] noto-sans-450" style={{"fontWeight":"500"}}>Projects</span>
        </div> 
        
        <div className="flex flex-col justify-center md:gap-y-[90px] gap-y-[100px] md:w-[61%] w-[78%]">
          {ProjectsData.map((project, idx) => (
            <ProjectCard key={idx} index={idx + offset} project={project} />
          ))}
        </div>
  
      </div>
    )
}

export default Project