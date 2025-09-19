import Project from "../../components/Project/Project"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ScrollToHash from "../../components/common/ScrollToHash"

const Projects = () => {
  return (
    <div className="h-[100vh] overflow-y-auto overflow-x-hidden bg-[#fcfbf7] ">
        <ScrollToHash/>
        <Navbar theme="black" classname={"h-[100px]"}  About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/projects/#projects"}/>
        <Project small={true}/>
        <Footer About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/projects/#projects"}/>
    </div> 
  )
}

export default Projects