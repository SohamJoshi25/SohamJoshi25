//Components
import Aboutme from "../../components/Aboutme/Aboutme"
import Experience from "../../components/Experience/Experience"
import Navbar from "../../components/Navbar/Navbar"
import Project from "../../components/Project/Project"
import Contactme from "../../components/Contactme/Contactme"
import Footer from "../../components/Footer/Footer"
import ScrollToHash from "../../components/common/ScrollToHash"

const Home = () => {
    
    return (
        <div className="h-[100vh] overflow-y-auto overflow-x-hidden bg-[#fcfbf7] ">
            <ScrollToHash/>
            <Navbar About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/#projects"}/>
            <Aboutme />
            <Experience/>
            <Project limit={2}/>
            <Contactme/>
            <Footer  About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/#projects"}/>
        </div>
    )
}

export default Home