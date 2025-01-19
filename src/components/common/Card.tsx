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
    <div className={`flex justify-center items-center md:items-start w-full w-min-[900px] gap-x-[20px] gap-y-[10px] ${index%2==0?"md:flex-row-reverse animate-left":"md:flex-row animate-right"} flex-col`}>
        <div className="max-w-[460px]">
            <img src={experience?.image}  alt="" className="rounded-[15px] w-full" />
        </div>
        <div className="pt-1 w-full max-w-[460px] lg:max-w-fit">
            <h4 className="min-[575px]:text-[36px] text-[34px] font-semibold leading-[44px]">{experience?.title} </h4>
            <p className="text-[18px] tracking-wide mb-[5px]">{experience?.subtitle} </p>
            <h3 className="text-[20px] tracking-wider font-[400] ">{experience?.date} </h3>

            <p className="mt-[15px] mb-[22px] font-sans min-[575px]:max-w-[400px] text-[14px] leading-[18px]">
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
        <div className={`flex justify-center md:items-start w-full w-min-[900px] gap-x-[20px] gap-y-[10px] ${index%2==0?"md:flex-row-reverse animate-left":"md:flex-row animate-right"} flex-col`}>
          <div className=" max-w-[460px]">
              <img src={project?.image} alt="" className="rounded-[15px] " />
          </div>
          <div className="pt-1">
            <h4 className="min-[575px]:text-[36px] text-[34px] font-semibold leading-[44px]">{project?.title}</h4>
  
                <p className="mt-[15px] mb-[22px] font-sans min-[575px]:max-w-[400px] text-[14px] leading-[18px]">
                    {project?.text}
                </p>
  
                <div className="w-full m-auto">
                    <Button Text={"View My Work"} Style={"w-fit max-[575px]:m-auto border border-[1.8px]"} href={project?.onClickLink} />
                </div>
          </div>
      </div>
    )
  }