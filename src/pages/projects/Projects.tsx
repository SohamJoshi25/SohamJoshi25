import Project from "../../components/Project/Project"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ScrollToHash from "../../components/common/ScrollToHash"
import { Helmet } from "react-helmet-async"

const Projects = () => {
  return (
    <>
    <Helmet>
      <title>Projects | sohamjoshi.in</title>
      <meta name="description" content="Selected projects demonstrating full-stack, systems, and open-source work by Soham Joshi." />
      <meta property="og:title" content="Projects — Soham Joshi" />
      <meta property="og:description" content="Selected projects demonstrating full-stack, systems, and open-source work by Soham Joshi." />
    </Helmet>
    <div className="h-[100vh] overflow-y-auto overflow-x-hidden bg-[#fcfbf7] ">
        <ScrollToHash/>
        <Navbar theme="black" classname={"h-[100px]"}  About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Blogs={"/blogs"}/>
        <Project small={true}/>
        <Footer About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/projects/#projects"} Blogs={"/blogs/"} />
    </div>
    </>
  )
}

export default Projects