import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex justify-center flex-col items-center gap-4">
        <span className="font-sans text-9xl ">404</span>
        <span>Page Not Found</span>
        <button className=" p-2 px-3 rounded-md font-semibold hover:bg-slate-100 mt-10" onClick={()=>navigate("/")}>← Back to Home</button>
      </div>
      
    </div>
  )
}

export default PageNotFound