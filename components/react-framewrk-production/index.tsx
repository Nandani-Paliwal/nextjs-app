import Image from "next/image";
import Link from "next/link";

export default function ReactFramworkProduction() {
  return (
    <div className="react-framework-main flex flex-col justify-center items-center text-center mx-auto">
      <div className="main-subdiv flex flex-col justify-center items-center text-center max-w-5xl px-4 lg:">
        <div className="intro-container flex flex-col justify-center items-center text-center w-full pt-10 pb-12 lg:pt-32 lg:pb-7">
          <h1 className="title text-5xl font-extrabold leading-tight tracking-tighter lg:text-8xl mb-7">
            The React Framework for Production
          </h1>
          <h2 className="description font-normal text-base lg:text-xl text-textgray leading-relaxed tracking-tight mb-10">
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more. No
            config needed.
          </h2>
          <div className="main-buttons mb-7 flex justify-center items-center text-center">
            <div className="button-spacer inline-block p-2">
              <Link href="" className="px-14 py-3 rounded-md text-white bg-blue leading-10 shadow-ex-md-blue">
                Start Learning
              </Link>
            </div>
            <div className="button-spacer inline-block p-2">
              <Link href="" className="px-14 py-3 rounded-md text-gray bg-white shadow-ex-md-gray hover:shadow-xl">
                Documentation
              </Link>
            </div>
            
          </div>
          <div className="links flex justify-center items-center text-center">
            <Link href="" className="px-2">
              <span className="text-gray text-sm">License: MIT</span>
            </Link>
            <div className="px-2">
              <Link href="" className="text-blue text-sm cursor-pointer rounded-md p-2 hover:bg-lightblue ">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
