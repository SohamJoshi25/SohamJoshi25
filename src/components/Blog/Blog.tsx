//Components
import { BlogCard } from "../common/Card"

//Data
import { BlogData } from "../../data/blogs"

import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import ViewMore from "../common/assets/ViewMore"

import { Helmet } from "react-helmet-async";

type BlogPropType = {
    limit?:number
  }

const Blog : React.FC<BlogPropType> = ({limit = 3}) => {

  const increaseLimitBy = 3;
  const { slug } = useParams<{slug:string}>();
  const blogs = BlogData
  const blog = blogs.find((blog) => blog.slug === slug);
  const navigate = useNavigate();

  const [viewLimit, setViewLimit] = useState<number>(limit);


  // No slug → show all blogs
  if (!slug) {
    return (
      <>
      <Helmet>
        <title>Blogs | Your Site Name</title>

        <meta
            name="description"
            content="Read my latest articles about software development, programming, and technology."
        />

        <link
            rel="canonical"
            href="https://yourdomain.com/blogs"
        />

        <meta
            property="og:title"
            content="Blogs | Your Site Name"
        />

        <meta
            property="og:description"
            content="Read my latest articles about software development, programming, and technology."
        />

        <meta
            property="og:type"
            content="website"
        />
      </Helmet>
      
      <div className={`w-full flex justify-center flex-col items-center bg-gradient-to-r from-[hsl(0,0%,13%)] from-80% to-[hsl(0,0%,11%)] text-slate-300 pt-[60px] pb-[120px]`} id="blogs">

        <div className="text-gradiant-dark animate-appear-title p-[10px]">
          <span className="md:text-[4em] text-[3em] noto-sans-450" style={{"fontWeight":"500"}}>Blogs</span>
        </div> 

        <div className={`flex flex-col justify-center gap-y-[100px] md:gap-y-[90px] md:w-[61%] w-[78%]`}>
          {blogs && blogs.slice(0,viewLimit).map((blog,index) => {
              return <BlogCard index={index} blog={blog} key={blog.slug}/>
            })}
        </div>

        {viewLimit && blogs.length > viewLimit && <div>
          <div className="md:text-[3em] text-[2em] noto-sans-450 size-10 pt-10 cursor-pointer opacity-55 hover:opacity-85 relative top-4" title="view more" onClick={()=> {
            setViewLimit((prev) => Math.min(prev + increaseLimitBy,blogs.length))
          }}> <ViewMore /> </div>
        </div>}


      </div>
      </>
    )
  }


  // Slug exists but blog doesn't
  if (!blog) {
      return (
      <>
        <Helmet>
          <title>Blog Not Found | Your Site Name</title>
          <meta name="robots" content="noindex"/>
        </Helmet>
        <div className={`w-full flex justify-center flex-col items-center bg-gradient-to-r from-[hsl(0,0%,13%)] from-80% to-[hsl(0,0%,11%)] text-slate-300 pt-[60px] pb-[60px] h-svh`} id="blogs">
          <div className="flex justify-center flex-col items-center gap-4 h-full">
            <span className="font-sans text-9xl ">404</span>
            <span>Blog Not Found</span>
            <button className=" p-2 px-3 rounded-md font-semibold hover:bg-[hsl(0,0%,11%)] mt-10" onClick={()=>navigate("/blogs")}>← Back to Blogs</button>
          </div>
        </div>
      </>
      )
  }


  // Slug exists → show single blog
  return (
    <>
      <Helmet>
          <title>{blog.title} | Your Site Name</title>

          <meta
              name="description"
              content={blog.description}
          />

          <meta
              name="author"
              content={blog.authors.join(", ")}
          />

          <link
              rel="canonical"
              href={`https://yourdomain.com/blogs/${blog.slug}`}
          />

          <meta
              property="og:type"
              content="article"
          />

          <meta
              property="og:title"
              content={blog.title}
          />

          <meta
              property="og:description"
              content={blog.description}
          />

          {blog.coverImage && (
              <meta
                  property="og:image"
                  content={blog.coverImage}
              />
          )}

          <meta
              property="article:published_time"
              content={blog.publishedAt.toISOString()}
          />

          <meta
              property="article:modified_time"
              content={blog.updatedAt.toISOString()}
          />

          {blog.tags.map(tag => (
              <meta
                  key={tag}
                  property="article:tag"
                  content={tag}
              />
          ))}
      </Helmet>
      <div className="w-full min-h-screen bg-[hsl(0,0%,13%)] text-slate-300">

        <div className="w-full flex flex-col items-center md:pt-[130px] pt-[70px] pb-[70px] px-5">

            <div className="md:w-[61%] w-[90%] flex flex-col">

                <div className="text-sm opacity-50 mb-5">
                    {blog.category} · {blog.readingTime}
                </div>

                <h1 className="md:text-[3.5em] text-[2.5em] noto-sans-450 leading-tight mb-6">
                    {blog.title}
                </h1>

                <p className="md:text-lg text-base opacity-65 leading-relaxed mb-6">
                    {blog.description}
                </p>

                <div className="flex flex-row gap-2 text-sm opacity-50">
                    <span>By {blog.authors.join(", ")}</span>
                    <span>·</span>
                    <span>{blog.updatedAt.toLocaleDateString()}</span>
                </div>

            </div>

        </div>

        {blog.coverImage && (
            <div className="md:w-[60%] w-[80%] mx-auto mb-[80px]">
                <img src={blog.coverImage} alt={blog.title} className="w-full rounded-xl object-cover" />
            </div>
        )}

        <div className="md:w-[61%] w-[90%] mx-auto pb-[120px]">

            <ReactMarkdown
                components={{
                    h1: ({children}) => <h1 className="md:text-[3em] text-[2.2em] noto-sans-450 mt-[70px] mb-[30px]">{children}</h1>,
                    h2: ({children}) => <h2 className="md:text-[2em] text-[1.7em] noto-sans-450 mt-[60px] mb-[25px]">{children}</h2>,
                    h3: ({children}) => <h3 className="text-2xl noto-sans-450 mt-[45px] mb-[20px]">{children}</h3>,
                    p: ({children}) => <p className="md:text-[18px] text-[16px] leading-[1.9] opacity-85 mb-[25px]">{children}</p>,
                    ul: ({children}) => <ul className="list-disc ml-7 mb-[30px] space-y-2">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal ml-7 mb-[30px] space-y-2">{children}</ol>,
                    li: ({children}) => <li className="md:text-[17px] text-[15px] leading-relaxed">{children}</li>,
                    blockquote: ({children}) => <blockquote className="border-l-4 pl-6 my-[35px] opacity-70 italic">{children}</blockquote>,
                    code: ({children}) => <code className="bg-black/40 rounded px-1.5 py-0.5 text-sm">{children}</code>,
                    pre: ({children}) => <pre className="bg-black/40 rounded-xl p-5 overflow-x-auto my-[35px]">{children}</pre>,
                    img: ({src,alt}) => <img src={src} alt={alt ?? ""} className="w-[70%] mx-auto rounded-xl my-[5px]" />,
                    a: ({href,children}) => <a href={href} target="_blank" rel="noopener noreferrer" className="underline opacity-80 hover:opacity-100">{children}</a>,
                    hr: () => <hr className="my-[60px] opacity-10" />
                }}
            >
                {blog.data}
            </ReactMarkdown>

        </div>

    </div>
    </>
     
  ) 
}

export default Blog;