export type ExperienceType = {
    image:string,
    title:string,
    subtitle:string,
    tags:string[],
    date:string,
    isFinished:boolean,
    text:string,
    onClickText?:string,
    onClickLink:string,
}

export const ExperienceData : ExperienceType[] = [
    {
        image: "/Experiences/finacle.webp",
        title: "Product Engineer",
        subtitle: "Infosys Finacle",
        date: "Apr 2025 - Present",
        tags: [
            "Java",
            "Spring Boot",
            "Apache Kafka",
            "Apache Flink",
            "PostgreSQL",
            "Kubernetes",
            "Clojure"
        ],
        isFinished: false,
        text: "Working on Infosys Finacle, a digital and core banking platform. Trained in Spring Boot, PostgreSQL, Kafka, Kubernetes, Docker, JMeter, Unix and Bash. During my internship, contributed to account projection capabilities using Spring Boot, Kafka, PostgreSQL, Kubernetes and Clojure. Worked with tools and standards including Jenkins, SonarQube, OpenAPI and IDP. Identified a significant architectural issue in a component and proposed a more robust architecture to the senior engineering team, strengthening my experience in distributed systems and event-driven architectures.",
        onClickText: "Visit Organization",
        onClickLink: "https://www.finacle.com?utm_source=sohamjoshi.in&utm_medium=experience"
    },
    {
        image:"/Experiences/creatsaurus.webp",
        title:"Full Stack Developer",
        subtitle:"Internship | Creatosarous.io",
        date:"Aug 2024 - Jan 2025",
        tags:["Express","React","MongoDB","TailwindCSS"],
        isFinished:true,
        text:"I worked as a Full Stack Developer Intern at Creatosaurus.io, where I developed and optimized platform features using React, Node.js, Express, and MongoDB. I integrated APIs to enhance functionality and implemented Deep Links to improve user navigation and interaction. My contributions focused on creating a seamless user experience while ensuring efficient communication between the frontend and backend.",
        onClickText: "Visit Application",
        onClickLink:"https://www.app.creatosaurus.io/apps?utm_source=sohamjoshi.in&utm_medium=experience"
    }
];