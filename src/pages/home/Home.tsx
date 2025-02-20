import { useRef } from "react"

//Components
import Aboutme from "../../components/Aboutme/Aboutme"
import Experience from "../../components/Experience/Experience"
import Navbar from "../../components/Navbar/Navbar"
import Project from "../../components/Project/Project"
import Contactme from "../../components/Contactme/Contactme"
import Footer from "../../components/Footer/Footer"

const Home = () => {

    const AboutmeRef = useRef<HTMLDivElement>(null);
    const ExperienceRef = useRef<HTMLDivElement>(null);
    const ProjectRef = useRef<HTMLDivElement>(null);
    const ContactRef = useRef<HTMLDivElement>(null);

    return (
        <div className="h-[100vh] overflow-auto bg-[#fcfbf7] customScrollBar">
            <Navbar AboutRef={AboutmeRef} ExperienceRef={ExperienceRef} ProjectRef={ProjectRef} ContactRef={ContactRef}/>
            <Aboutme forwardRef={AboutmeRef}/>
            <Experience forwardRef={ExperienceRef}/>
            <Project forwardRef={ProjectRef}/>
            <Contactme forwardRef={ContactRef}/>
            <Footer AboutRef={AboutmeRef} ExperienceRef={ExperienceRef} ProjectRef={ProjectRef}/>
        </div>
    )
}

export default Home