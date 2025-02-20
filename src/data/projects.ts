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
        title:"DRIVE CONNECT",
        isFinished:false,
        text:"DriveConnect is a project that seamlessly integrates multiple Google Drive accounts, providing users with a unified storage experience. It aims to minimize internal fragmentation that arises when managing multiple Google Drives separately. The motivation behind this project stems from the common challenges users face in their daily lives while using Google Drive. By connecting multiple Google Drive accounts, DriveConnect offers a single, consolidated storage space, making file management more efficient and hassle-free.",
        onClickLink:"https://driveconnect-app.vercel.app/"
    }
];