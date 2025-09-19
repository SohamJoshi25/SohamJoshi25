//Components
import { ProjectCard } from "../common/Card"

//Data
import { ProjectsData } from "../../data/projects"
import { ExperienceData } from "../../data/experiences"
import { useNavigate } from "react-router-dom"
import ViewMore from "./assets/ViewMore"

type ProjectType = {
    limit?:number,
    small?:boolean
  }

const Project : React.FC<ProjectType> = ({limit,small=false}) => {
  const offset = ExperienceData.length %2 == 0 ? 0 : 1;
  const navigate = useNavigate();
  return (
      <div className={`w-full flex justify-center flex-col items-center bg-gradient-to-r from-[hsl(0,0%,13%)] from-80% to-[hsl(0,0%,11%)] text-slate-300 ${small ? "pt-[60px] pb-[60px]" : "pt-[130px] pb-[110px]"}`} id="projects">
  
        <div className={`text-gradiant-dark animate-appear-title ${small ? "mb-[50px]" : "mb-[120px]"}`}>
          <span className="md:text-[4em] text-[3em] noto-sans-450" style={{"fontWeight":"500"}}>Projects</span>
        </div> 
        
        <div className={`flex flex-col justify-center ${small ? "gap-y-[70px] md:gap-y-[60px]" : "gap-y-[100px] md:gap-y-[90px]"} md:w-[61%] w-[78%]`}>
          {ProjectsData.slice(0,limit).map((project, idx) => (
            <ProjectCard key={idx} index={idx + offset} project={project} />
          ))}
        </div>

        {limit && ProjectsData.length > limit && <div>
          <div className="md:text-[3em] text-[2em] noto-sans-450 size-10 pt-10 cursor-pointer opacity-55 hover:opacity-85 relative top-4" title="view more" onClick={()=> {
            navigate('/projects/#projects')
          }}> <ViewMore /> </div>
        </div>}
                  
      </div>
    )
}

export default Project