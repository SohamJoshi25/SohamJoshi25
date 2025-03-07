export type ProjectType = {
    image:string,
    title:string,
    isFinished:boolean,
    text:string,
    onClickLink:string,
}

export const ProjectsData : ProjectType[] = [
    {
        image:"/Projects/driveconnect.png",
        title:"Drive Connect",
        isFinished:true,
        text:"DriveConnect is a project that seamlessly integrates multiple Google Drive accounts, providing users with a unified storage experience. It aims to minimize internal fragmentation that arises when managing multiple Google Drives separately. The motivation behind this project stems from the common challenges users face in their daily lives while using Google Drive. By connecting multiple Google Drive accounts, DriveConnect offers a single, consolidated storage space, making file management more efficient and hassle-free.",
        onClickLink:"https://driveconnect-app.vercel.app/"
    },
    {
        image:"/Projects/dnsserver.png",
        title:"DNS Server CLI",
        isFinished:true,
        text:"A CLI-Based App written in golang which can be used to iteratively lookupserver between root server, TLD server, name and authoritative server andresolve dns queries with support to override certain domain queries to respond with custom answer. UDP data transmission was implemented with only standard libraries. Database used was postgres to store answers.",
        onClickLink:"https://github.com/SohamJoshi25/dns-server"
    }
    // {
    //     image:"/Projects/driveconnect.png",
    //     title:"Custom Keyboard with Firmware",
    //     isFinished:true,
    //     text:"My Keyboard Broke, so i used the keys of the broken mechanical keyboard, wired the switches with an ESP-32 and wrote the hardware by myself using the Bluetooth Library in c++. I also  had to  hand soldered 100 zener diode 3 whole times (Check  their Polarity twice🥲).",
    //     onClickLink:"https://driveconnect-app.vercel.app/"
    // },
    // {
    //     image:"/Projects/driveconnect.png",
    //     title:"Deep Linker | Opens Link in app ",
    //     isFinished:true,
    //     text:"Developed a Product which provides Deep Links for famous applications. Deep Linking Allows a link to be opened directly in app increasing retentionship and engagement and allows for more security. Tech Stack used was Express to create RESTful APIs and interface using Server Side Rendered Pages.",
    //     onClickLink:"https://driveconnect-app.vercel.app/"
    // },
    // {
    //     image:"/Projects/driveconnect.png", 
    //     title:"OAuth Microservice",
    //     isFinished:true,
    //     text:"Implemented a service which manages authentication of users using various apps to integrate user specific features, fetch user specific app data from OAuth service provider eg. Google Drive, Google Photos, Dropbox, Pinterest, etc. Implemented in Express.js and MongoDB for session and token management.",
    //     onClickLink:"https://driveconnect-app.vercel.app/"
    // },
    // {
    //     image:"/Projects/driveconnect.png",
    //     title:"ShortURL",
    //     isFinished:true,
    //     text:"Developed ShortURL, a URL shortening service using Next.js for frontend and backend. Enhanced performance with Redis caching and utilized MongoDB for efficient URL storage. Created responsive interfaces with Next.js and styled with CSS for visual appeal.solution for managing and retrieving data swiftly.",
    //     onClickLink:"https://driveconnect-app.vercel.app/"
    // }
];