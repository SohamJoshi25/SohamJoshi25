//Components
import Button from "./Button"


type CardType = {
    index:number
}

export const ExperienceCard : React.FC<CardType> = ({index}) => {
  return (
    <div className={`flex justify-between items-start w-full w-min-[900px] gap-x-[50px] ${index%2==0?"flex-row-reverse":"flex-row"}`}>
        <div>
            <img src="Project-Expirence-Placeholder.png" alt="" className="rounded-[15px] w-full h-[310px]" />
        </div>
        <div className="pt-1">
            <h4 className="text-[36px] font-semibold leading-[44px]">FULL STACK DEVELOPER</h4>
            <p className="text-[18px] tracking-wide mb-[5px]">Internship | Creatosarous.io</p>
            <h3 className="text-[20px] tracking-wider font-[400] "> Aug 2024 - Jan 2025</h3>

            <p className="mt-[15px] mb-[22px] font-sans max-w-[400px] text-[14px] leading-[18px]">
                I worked as a Full Stack Developer Intern at Creatosaurus.io, where I developed and optimized platform features using React, Node.js, Express, and MongoDB. I integrated APIs to enhance functionality and implemented Deep Links to improve user navigation and interaction. My contributions focused on creating a seamless user experience while ensuring efficient communication between the frontend and backend.
            </p>

            <Button Text={"View This Site"} Style={"w-fit"}/>
        </div>
    </div>
  )
}


export const ProjectCard : React.FC<CardType> = ({index}) => {
    return (
      <div className={`flex justify-between items-start w-full w-min-[900px] gap-x-[50px] ${index%2==0?"flex-row-reverse":"flex-row"}`}>
          <div>
              <img src="Project-Expirence-Placeholder.png" alt="" className="rounded-[15px] w-full h-[310px]" />
          </div>
          <div className="pt-1">
              <h4 className="text-[36px] font-semibold leading-[44px]">DRIVE CONNECT</h4>
  
              <p className="mt-[16px] mb-[28px] font-sans max-w-[400px] text-[14px] leading-[18px]">
                  I worked as a Full Stack Developer Intern at Creatosaurus.io, where I developed and optimized platform features using React, Node.js, Express, and MongoDB. I integrated APIs to enhance functionality and implemented Deep Links to improve user navigation and interaction. My contributions focused on creating a seamless user experience while ensuring efficient communication between the frontend and backend.
              </p>
  
              <Button Text={"View This Site"} Style={"w-fit border-white border-[1px]"}/>
          </div>
      </div>
    )
  }