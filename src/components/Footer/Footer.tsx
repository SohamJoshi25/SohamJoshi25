//Assets
import { toast } from "react-toastify"
import { Email } from "../../data/constants"
import Github from "./assets/Github"
import LinkedIn from "./assets/LinkedIn"
import Resume from "./assets/Resume"
import { useNavigate } from "react-router-dom"

type FooterType = {
  About?: string,
  Experience?: string,
  Project?: string,
  Contact?: string,
  Blogs?: string
}

const copyEmail = () => {
  navigator.clipboard.writeText(Email)
  toast.success("Email Copied!")
}

const Footer: React.FC<FooterType> = ({About, Experience, Project, Contact, Blogs}) => {

  const navigate = useNavigate()

  const scrollToElement = (targetRef?: string) => {
    navigate(targetRef ?? "/")
  }

  return (
    <footer
      className="bg-black w-full md:min-h-[200px] min-h-[220px] md:px-[50px] sm:px-[30px] px-[15px] text-white flex md:flex-row flex-col justify-between pt-4 md:pb-10 pb-6 gap-y-8"
      id="footer"
    >
      <div className="flex flex-col justify-start gap-[15px]">
        <span className="md:text-3xl sm:text-2xl text-xl tracking-wide">
          SOHAM JOSHI
        </span>

        <p className="md:text-[15px] sm:text-[10px] text-[8px] leading-[12px]">
          Designed and developed with ♡ by me
        </p>
      </div>

      <div className="flex flex-col gap-5 md:items-end items-start">
        <div className="flex flex-row flex-wrap gap-x-[10px] gap-y-2 md:justify-end items-center md:text-[15px] sm:text-[10px] text-[8px]">
          <span className="cursor-pointer" onClick={() => scrollToElement(About)}>About Me</span>
          <span>·</span>
          <span className="cursor-pointer" onClick={() => scrollToElement(Experience)}>Experience</span>
          <span>·</span>
          <span className="cursor-pointer" onClick={() => scrollToElement(Project)}>Projects</span>
          <span>·</span>
          <span className="cursor-pointer" onClick={() => scrollToElement(Contact)}>Contact</span>
          <span>·</span>
          <span className="cursor-pointer" onClick={() => scrollToElement(Blogs)}>Blogs</span>
        </div>

        <div className="flex flex-row md:gap-x-[25px] sm:gap-x-[15px] gap-x-[10px] items-center">
          <Resume />
          <Github />
          <LinkedIn />
        </div>

        <div
          className="flex flex-row items-center md:text-[15px] sm:text-[10px] text-[8px] cursor-pointer"
          onClick={copyEmail}
        >
          <span className="tracking-wider">{Email}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer