
import { useEffect } from "react";
import { Resume } from "../../data/constants";

const ResumeRedirect = () => {
    useEffect(()=>{
        window.location.href = Resume
    },[])
  return null;
}

export default ResumeRedirect
