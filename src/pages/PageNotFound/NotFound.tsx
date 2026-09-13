import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import { Helmet } from "react-helmet-async"

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title>404 — Page Not Found | sohamjoshi.in</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center gap-4  h-[100vh]">
        <span className="font-sans text-9xl ">404</span>
        <span>Page Not Found</span>
        <button className=" p-2 px-3 rounded-md font-semibold hover:bg-slate-100 mt-10" onClick={()=>navigate("/")}>← Back to Home</button>
      </div>
      <Footer About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/projects/#projects"} Blogs={"/blogs/"}/>
    </div>
    </>
  )
}

export default PageNotFound