import Blog from "../../components/Blog/Blog"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ScrollToHash from "../../components/common/ScrollToHash"
import { Helmet } from "react-helmet-async"

const Blogs = () => {
  return (
    <>
    <Helmet>
      <title>Blogs | sohamjoshi.in</title>
      <meta name="description" content="Technical blogs and notes on algorithms, systems, and engineering by Soham Joshi." />
      <meta property="og:title" content="Blogs — Soham Joshi" />
      <meta property="og:description" content="Technical blogs and notes on algorithms, systems, and engineering by Soham Joshi." />
    </Helmet>
    <div className="h-[100vh] overflow-y-auto overflow-x-hidden bg-[#fcfbf7] ">
        <ScrollToHash/>
        <Navbar theme="black" classname={"h-[100px]"} About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/projects/#projects"}/>
        <Blog />
        <Footer About={"/#aboutme"} Contact={"/#contact"} Experience={"/#experience"} Project={"/projects/#projects"} Blogs={"/blogs/"}/>
    </div>
    </>
  )
}

export default Blogs