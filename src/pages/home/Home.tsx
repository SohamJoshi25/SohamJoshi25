//Components
import Aboutme from "../../components/Aboutme/Aboutme"
import Experience from "../../components/Experience/Experience"
import Navbar from "../../components/Navbar/Navbar"
import Project from "../../components/Project/Project"
import Contactme from "../../components/Contactme/Contactme"
import Footer from "../../components/Footer/Footer"
import ScrollToHash from "../../components/common/ScrollToHash"
import { Helmet } from "react-helmet-async"

const Home = () => {
    
    return (
        <>
        <Helmet>
          <title>Home | sohamjoshi.in</title>
          <meta name="description" content="Portfolio and blog of Soham Joshi — projects, blogs, and contact information." />
          <meta property="og:title" content="Soham Joshi — Home" />
          <meta property="og:description" content="Portfolio and blog of Soham Joshi — projects, blogs, and contact information." />
        </Helmet>
        <div className="h-[100vh] overflow-y-auto overflow-x-hidden bg-[#fcfbf7] ">
            <ScrollToHash/>
            <Navbar Blogs={"/blogs"} Contact={"/#contact"} Experience={"/#experience"} Project={"/#projects"}/>
            <Aboutme />
            <Experience/>
            <Project limit={2}/>
            <Contactme/>
            <Footer  About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/#projects"} Blogs={"/blogs/"}/>
        </div>
        </>
    )
}

export default Home