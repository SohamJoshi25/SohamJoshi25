import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer/Footer"

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center gap-4  h-[100vh]">
        <span className="font-sans text-9xl ">404</span>
        <span>Page Not Found</span>
        <button className=" p-2 px-3 rounded-md font-semibold hover:bg-slate-100 mt-10" onClick={()=>navigate("/")}>← Back to Home</button>
      </div>
      <Footer/>
    </div>
  )
}

export default PageNotFound