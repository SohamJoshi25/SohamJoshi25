//Components
import Button from "./Button"


type CardType = {
    index:number
}

export const ExperienceCard : React.FC<CardType> = ({index}) => {
  return (
    <div className={`flex justify-center md:items-start w-full w-min-[900px] gap-x-[20px] gap-y-[10px] ${index%2==0?"md:flex-row-reverse":"md:flex-row"} flex-col`}>
        <div>
            <img src="Project-Expirence-Placeholder.png" alt="" className="rounded-[15px] w-full" />
        </div>
        <div className="pt-1 w-fit">
            <h4 className="min-[575px]:text-[36px] text-[32px] font-semibold leading-[44px]">FULL STACK DEVELOPER</h4>
            <p className="text-[18px] tracking-wide mb-[5px]">Internship | Creatosarous.io</p>
            <h3 className="text-[20px] tracking-wider font-[400] "> Aug 2024 - Jan 2025</h3>

            <p className="mt-[15px] mb-[22px] font-sans min-[575px]:max-w-[400px] text-[14px] leading-[18px]">
                I worked as a Full Stack Developer Intern at Creatosaurus.io, where I developed and optimized platform features using React, Node.js, Express, and MongoDB. I integrated APIs to enhance functionality and implemented Deep Links to improve user navigation and interaction. My contributions focused on creating a seamless user experience while ensuring efficient communication between the frontend and backend.
            </p>
            <div className="w-full m-auto">
                <Button Text={"View My Work"} Style={"w-fit  max-[575px]:m-auto"}/>
            </div>
        </div>
    </div>
  )
}


export const ProjectCard : React.FC<CardType> = ({index}) => {
    return (
        <div className={`flex justify-center md:items-start w-full w-min-[900px] gap-x-[20px] gap-y-[10px] ${index%2==0?"md:flex-row-reverse":"md:flex-row"} flex-col`}>
          <div>
              <img src="Project-Expirence-Placeholder.png" alt="" className="rounded-[15px] w-full" />
          </div>
          <div className="pt-1 w-fit">
            <h4 className="min-[575px]:text-[36px] text-[32px] font-semibold leading-[44px]">DRIVE CONNECT</h4>
  
                <p className="mt-[15px] mb-[22px] font-sans min-[575px]:max-w-[400px] text-[14px] leading-[18px]">
                    I worked as a Full Stack Developer Intern at Creatosaurus.io, where I developed and optimized platform features using React, Node.js, Express, and MongoDB. I integrated APIs to enhance functionality and implemented Deep Links to improve user navigation and interaction. My contributions focused on creating a seamless user experience while ensuring efficient communication between the frontend and backend.
                </p>
  
                <div className="w-full m-auto">
                    <Button Text={"View My Work"} Style={"w-fit  max-[575px]:m-auto"}/>
                </div>
          </div>
      </div>
    )
  }