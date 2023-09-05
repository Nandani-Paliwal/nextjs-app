import Image from "next/image";
import Link from "next/link";

export default function Customers() {
  const slidesList = [
    {
      title: "Netflix Jobs",
      image: "/slides/netflix-jobs.jpg",
      style:
        "z-10 transform scale-[0.67] -translate-x-[4.23px] -translate-y-[105px]",
    },
    {
      title: "TikTok",
      image: "/slides/tiktok.png",
      style:
        " z-20 transform scale-[0.77] -translate-x-[27.27px] -translate-y-[70px] translate[0px]",
    },
    {
      title: "Twitch",
      image: "/slides/twitch.jpg",
      style:
        "z-30 transform scale-[0.88] -translate-x-[25.24px] -translate-y-[35px] translate[0px]",
    },
    {
      title: "Hulu",
      image: "/slides/hulu.png",
      style: "z-40 transform scale-100 translate-x-[0px] translate[0px]",
    },
    {
      title: "Notion",
      image: "/slides/notion.png",
      style:
        "z-30 transform scale-[0.88] translate-x-[25.24px] -translate-y-[35px] translate[0px]",
    },
    {
      title: "Target",
      image: "/slides/target.png",
      style:
        "z-20 transform scale-[0.77] translate-x-[27.27px] -translate-y-[70px] translate[0px]",
    },
    {
      title: "Nike",
      image: "/slides/nike.jpg",
      style:
        "z-10 transform scale-[0.67] translate-x-[4.23px] -translate-y-[70px] translate[0px]",
    },
  ];

  return (
    <div className="customers-main flex flex-col justify-center items-center border-white92 bg-white98 border m-0 py-28">
      <div className="case-studies-box relative text-center  mb-16 -mt-36">
        <div className="slider-wrapper flex justify-between items-center text-center bg-white p-4 m-auto rounded-md h-20  shadow-2xl">
          <div className="content flex justify-between items-center gap-x-16 gap-y-5">
            <div className="flex justify-center items-center relative w-36">
              <Image src="/logo-list2/6.svg" alt="" height={36} width={105} />
            </div>
            <Link
              href=""
              className="px-14 py-1 text-center rounded-md text-white bg-blue leading-10 shadow-ex-md-blue w-full"
            >
              Read Case Study
            </Link>
          </div>
        </div>
      </div>
      <div className="title flex flex-col justify-center items-center text-center  mb-20">
        <h2 className=" font-bold text-4xl leading-snug tracking-tighter mb-4">
          Who&apos;s Using Next.js
        </h2>
        <h3 className="font-normal text-base text-gray">
          We&apos;re honored some of the most talented creatives out there build with
          Next.js
        </h3>
      </div>
      <div className="showcase-container-tablet  relative  mt-12 mb-8">
        <div className="showcase-container-tablet overlay absolute top-0 right-0 -bottom-8 left-0 z-10"></div>
        <div className="slides flex flex-wrap">
        {slidesList.map((slideItem, index) => (
            <div
              className="showcase-container-tablet slide p-2 flex-1 flex-grow flex-shrink basis-1/2 "
              key={index}
            >
              <Image
                src={slideItem.image}
                alt={slideItem.title}
                height={185}
                width={330}
                className="block mx-auto flex-shrink-0 rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="showcase-container-desktop hidden overflow-x-hidden mt-16 mb-8 mx-auto bg-purple-600">
        <div className="slides flex mt-12 max-w-[100vw] bg-red-900">
          {slidesList.map((slideItem, index) => (
            <div
              className={`flex relative rounded-md cursor-pointer transition-all ease-linear shadow-lg overflow-hidden bg-white w-[330px] h-[185px]` }
              key={index}
            >
              <Image
                src={slideItem.image}
                alt={slideItem.title}
                height={185}
                width={330} className=" "
              />
              <div className="info absolute bottom-0 p-4 text-center text-white bg-gray8 w-full transition-opacity duration-600 ease opacity-0 hover:opacity-100">
                <h3 className="font-normal text-base">{slideItem.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href=""
        className="px-14 py-1  rounded-md text-white bg-blue leading-10 shadow-ex-md-blue"
      >
        View Showcase
      </Link>
    </div>
  );
}
