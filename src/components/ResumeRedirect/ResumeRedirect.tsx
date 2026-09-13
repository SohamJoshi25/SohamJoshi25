
import { useEffect } from "react";
import { Resume } from "../../data/constants";
import { useEffect } from "react";
import { Resume } from "../../data/constants";
const ResumeRedirect = () => {
    useEffect(()=>{
        window.location.href = Resume;
    },[])
  return (
    <>
      <Helmet>
        <title>Redirecting to Resume | sohamjoshi.in</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div style={{padding: 20}}>Redirecting to resume… If you are not redirected, <a href={Resume} target="_blank" rel="noopener noreferrer">click here</a>.</div>
    </>
  );
}

export default ResumeRedirect