export type ProjectType = {
    image:string,
    title:string,
    isFinished:boolean,
    tags:string[],
    text:string,
    onClickLink:string,
}

export const ProjectsData : ProjectType[] = [
    {
        image:"/Projects/querynox.webp",
        title:"QueryNox",
        isFinished:true,
        tags:["React","Express","MongoDB","Typescript","TanStack Query","AWS EC2","Cloudflare R2","Github Actions","Nginx","Polar","Clerk","Prometheus","Grafana","Loki"],
        text:"QueryNox is a production-grade, multi-model AI chat platform that unifies access to models like Claude 3.5 Sonnet, GPT, Llama 3.3-70B, Gemini 1.5 Flash, and more. It features real-time web search, document analysis via RAG, and image generation with DALL·E—while delivering enterprise-grade security, monitoring, and scalability.",
        onClickLink:"https://www.querynox.xyz?utm_source=sohamjoshi.in&utm_medium=portfolio"
    },
    {
        image:"/Projects/dirvcs.webp",
        title:"DIRVCS",
        isFinished:true,
        tags:["GoLang","Cobra","Viper"],
        text:"Dirvcs is a command-line version control tool built specifically for directory structures. Unlike Git, it does not track content — instead, it tracks and compares snapshots of your folder hierarchy.",
        onClickLink:"https://dirvcs.sohamjoshi.in?utm_source=sohamjoshi.in&utm_medium=portfolio"
    },
    {
        image:"/Projects/driveconnect.webp",
        title:"Drive Connect",
        isFinished:true,
        tags:["React","Express","MongoDB","Typescript","TailwindCSS","Socket","Google APIs"],
        text:"DriveConnect is a project that seamlessly integrates multiple Google Drive accounts, providing users with a unified storage experience. By connecting multiple Google Drive accounts, DriveConnect offers a single, consolidated storage space, virtually unlimited storage, making file management more efficient and hassle-free.",
        onClickLink:"https://driveconnect.sohamjoshi.in?utm_source=sohamjoshi.in&utm_medium=portfolio"
    },
    {
        image:"/Projects/dnsserver.webp",
        title:"DNS Server CLI",
        isFinished:true,
        tags:["GoLang","PostgreSQL","Docker","Cobra"],
        text:"A CLI-Based App written in golang which can be used to iteratively lookup server between root server, TLD server, name and authoritative server and resolve dns queries with support to override certain domain queries to respond with custom answer. UDP data transmission was implemented with only standard libraries. Database used was postgres to store answers.",
        onClickLink:"https://github.com/SohamJoshi25/dns-server?utm_source=sohamjoshi.in&utm_medium=portfolio"
    },
    {
        image:"/Projects/flappybird.webp",
        title:"Flappy Bird",
        isFinished:true,
        tags:["Unity"],
        text:"Flappy Bird go weeeeeee. First Project to explore Unity and Game Development. A Game with multiple scenes, audio effects, animations, transitions, Volume control with pause/play functionality.",
        onClickLink:"https://github.com/SohamJoshi25/FlappyBird?utm_source=sohamjoshi.in&utm_medium=portfolio"
    },
    {
        image:"/Projects/keyboard.webp",
        title:"Keyboard Firmware",
        isFinished:true,
        tags:["Hardware","ESP-32","Emedded C"],
        text:"My Keyboard Broke, so i used the keys of the broken mechanical keyboard, wired the switches with an ESP-32 and wrote the hardware by myself using the Bluetooth Library in c++. I also  had to  hand soldered 100 zener diode 3 whole times (Check  their Polarity twice🥲).",
        onClickLink:"https://github.com/SohamJoshi25/ESP32Keyboard?utm_source=sohamjoshi.in&utm_medium=portfolio"
    },
    {
        image:"/Projects/farmermarket.webp",
        title:"Farmer Market API",
        isFinished:true,
        tags:["FastAPI","PostgreSQL","Web Scrapper"],
        text:"Restful API which exposes a quantity and prices of all local farmer's market products daily by scraping a Government Website (Pune APMC). Database is daily updated using github actions cron job scheduler.",
        onClickLink:"https://github.com/SohamJoshi25/PuneFarmersMarket-API?utm_source=sohamjoshi.in&utm_medium=portfolio"
    },
    {
        image:"/Projects/oauth.webp", 
        title:"OAuth Microservice",
        isFinished:true,
        tags:["React","Express","MongoDB","Passport.js"],
        text:"Implemented a service which manages authentication of users using various apps to integrate user specific features, fetch user specific app data from OAuth service provider eg. Google Drive, Google Photos, Dropbox, Pinterest, etc. Implemented in Express.js and MongoDB for session and token management.",
        onClickLink:"https://github.com/SohamJoshi25/OauthBackend?utm_source=sohamjoshi.in&utm_medium=portfolio"
    },
    {
        image:"/Projects/shorturl.webp",
        title:"ShortURL",
        isFinished:true,
        tags:["Next.js","Redis","MongoDB"],
        text:"Developed ShortURL, a URL shortening service using Next.js for frontend and backend. Enhanced performance with Redis caching and utilized MongoDB for efficient URL storage. Created responsive interfaces with Next.js and styled with CSS for visual appeal.solution for managing and retrieving data swiftly.",
        onClickLink:"https://123short.vercel.app?utm_source=sohamjoshi.in&utm_medium=portfolio"
    }
];