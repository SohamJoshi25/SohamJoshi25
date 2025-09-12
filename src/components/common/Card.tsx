//Components
import Button from "./Button"

//Type
import { ProjectType } from "../../data/projects"
import { ExperienceType } from "../../data/experiences"


type CardType = {
    index:number,
    project?: ProjectType,
    experience?:ExperienceType
}

export const ExperienceCard : React.FC<CardType> = ({index,experience}) => {
  return (
        <div className={`flex justify-center py-10 md:items-start w-full w-min-[900px] gap-x-[20px] gap-y-[10px] md:px-12 sm:px-8 xs:px-2  ${index%2==0?"md:flex-row-reverse animate-left":"md:flex-row animate-right"} flex-col`}>
          <div className="w-full md:max-w-[460px] md:min-w-[260px]">
            <img src={experience?.image}  alt="ExperienceCard" className="rounded-[5px] w-[460px] shadow-[0_0px_10px_2px_rgb(0_0_0/20%)]" />
        </div>
        <div className="pt-1 w-full md:max-w-[460px] md:min-w-[260px]">
            <h4 className="min-[575px]:text-[36px] text-[34px] font-semibold leading-[44px]">{experience?.title} </h4>
            <p className="text-[18px] tracking-wide">{experience?.subtitle} </p>
            <h3 className="text-[17px] tracking-wider font-[350] ">{experience?.date} </h3>

            {experience?.tags && <div className="flex flex-row gap-x-3 gap-y-2 py-2 text-[13px] mt-[2px] flex-wrap">
                {experience.tags.map(tag =><span key={tag} className="px-2 pb-[1px] border border-[hsl(0,0%,11%)] rounded-xl text-nowrap">{tag}</span>)}
            </div>}

            <p className="mt-[6px] mb-[22px] font-sans min-[575px]:max-w-[400px] text-[14px] leading-[18px]">
                {experience?.text}    
            </p>
            <div className="w-full m-auto">
                <Button Text={"View My Work"} Style={"w-fit  max-[575px]:m-auto"} href={experience?.onClickLink}/>
            </div>
        </div>
    </div>
  )
}


export const ProjectCard : React.FC<CardType> = ({index,project}) => {
    return (
        <div className={`flex justify-center py-10 md:items-start w-full w-min-[900px] gap-x-[20px] gap-y-[10px] md:px-12 sm:px-8 xs:px-2 ${index%2==0?"md:flex-row-reverse animate-left":"md:flex-row animate-right"} flex-col`}>
          <div className="w-full md:max-w-[460px] md:min-w-[260px]">
              <img src={project?.image} alt="ProjectCard" className="rounded-[5px] w-[460px] shadow-[#DADADA30] shadow-[0_0px_10px_0]" />
          </div>
          <div className="pt-1 w-full md:max-w-[460px] md:min-w-[260px]">
            <h4 className="min-[575px]:text-[36px] text-[34px] font-semibold leading-[44px]">{project?.title}</h4>
        
                {project?.tags && <div className="flex flex-row gap-x-3 gap-y-2 py-2 text-[13px] mt-[2px] flex-wrap text-[#c3c1c1]">
                    {project.tags.map(tag =><span key={tag} className="px-2 pb-[1px] border border-[#d3d3d3] rounded-xl">{tag}</span>)}
                </div>}

                <p className="mt-[6px] mb-[22px] font-sans min-[575px]:max-w-[400px] text-[14px] leading-[18px]">
                    {project?.text}
                </p>
  
                <div className="w-full m-auto">
                    <Button Text={"View Project"} Style={"w-fit max-[575px]:m-auto border border-[1.8px]"} href={project?.onClickLink} />
                </div>
          </div>
      </div>
    )
  }