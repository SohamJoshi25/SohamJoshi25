const Home = () => {
    return (
        <div className="bg-slate-100 flex items-center justify-center h-[100vh] w-[100vw] px-20" >
            <div className="flex items-start flex-col pb-[10vh]">

            <h2 className="block text-lg mb-5">
                Hey, this is <span className="mx-1 text-2xl text-nowrap">Soham Joshi</span>.
                <p className=" text-sm max-w-[70ch] mt-3">
                I am a passionate developer ( thats what they all say lol ). I like to keep myself busy in various projects and stuff. Love to collaberate and work efficiently.
                </p>
            </h2>

            <h2 className="block mb-14 text-sm">
                Currently this website is under <b>development</b>. Thanks for visiting.
            </h2>

            <h3 className="mb-1">Connect with me at</h3>
            
            <div className="flex flex-col pl-2 text-[14px]">
                <li>
                <a href="https://www.linkedin.com/in/sohamjoshi25/" title="Visit my Linkedin Page" target="_blank" referrerPolicy="origin" className="text-blue-600">Linkedin</a>
                </li>
                <li>
                <a href="https://github.com/SohamJoshi25" title="Visit my Github Page" target="_blank" referrerPolicy="origin" className="text-blue-600">Github</a>
                </li>
                <li>
                <a href="https://leetcode.com/u/SohamJoshi25/" title="Visit my Leetcode Profile" target="_blank" referrerPolicy="origin" className="text-blue-600">Leetcode</a>
                </li>
                <li>
                <a href="https://www.codechef.com/users/sohamjoshi25" title="Visit my Codechef Page" target="_blank" referrerPolicy="origin" className="text-blue-600">Codechef</a>
                </li>
                <li>
                <a href="mailto:sohamjoshi.official@gmail.com" title="Email me here" target="_blank" referrerPolicy="origin" className="text-blue-600">sohamjoshi.official@gmail.com</a>
                </li>
            </div>

            </div>
        </div>
    )
}

export default Home