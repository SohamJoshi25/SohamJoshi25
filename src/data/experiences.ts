export type ExperienceType = {
    image:string,
    title:string,
    subtitle:string,
    tags:string[],
    date:string,
    isFinished:boolean,
    text:string,
    onClickLink:string,
}

export const ExperienceData : ExperienceType[] = [
    {
        image:"/Experiences/creatsaurus.png",
        title:"FULL STACK DEVELOPER",
        subtitle:"Internship | Creatosarous.io",
        date:"Aug 2024 - Jan 2025",
        tags:["Express","React","MongoDB","TailwindCSS"],
        isFinished:false,
        text:"I worked as a Full Stack Developer Intern at Creatosaurus.io, where I developed and optimized platform features using React, Node.js, Express, and MongoDB. I integrated APIs to enhance functionality and implemented Deep Links to improve user navigation and interaction. My contributions focused on creating a seamless user experience while ensuring efficient communication between the frontend and backend.",
        onClickLink:"https://www.app.creatosaurus.io/apps?utm_source=sohamjoshi.in&utm_medium=portfolio"
    }
];