import Image from "next/image";
import Link from "next/link";

export default function Customers() {
  const slidesList = [
    {
      title: "Netflix Jobs",
      image: "/slides/netflix-jobs.jpg",
      style:
        "z-4 transform scale-67 translate-x-[-4.233600241796016px] -translate-y-105",
    },
    {
      title: "TikTok",
      image: "/slides/tiktok.png",
      style:
        " z-5 transform scale-78 translate-x-[-27.278922804770453px] -translate-y-70",
    },
    {
      title: "Twitch",
      image: "/slides/twitch.jpg",
      style:
        "z-6 transform scale-89 translate-x-[-25.244129544236895px] -translate-y-35",
    },
    {
      title: "Hulu",
      image: "/slides/hulu.png",
      style: "z-7 transform scale-100",
    },
    {
      title: "Notion",
      image: "/slides/notion.png",
      style:
        "z-6 transform scale-89 translate-x-[25.244129544236895px] -translate-y-35",
    },
    {
      title: "Target",
      image: "/slides/target.png",
      style:
        "z-5 transform scale-78 translate-x-[27.278922804770453px] -translate-y-70",
    },
    {
      title: "Nike",
      image: "/slides/nike.jpg",
      style:
        "z-4 transform scale-67 translate-x-[4.233600241796016px] -translate-y-105",
    },
  ];

  return (
    <div className="customers-mai flex flex-col justify-center items-center border-white92 bg-white98 border m-0 py-28">
      <div className="case-studies-box relative  mb-16 -mt-36">
        <div className="slider-wrapper flex justify-between items-center bg-white p-4 rounded-md h-20  shadow-2xl">
          <div className="content flex justify-between items-center gap-x-16 w-full">
            <div className="flex justify-center items-center relative w-36">
              <Image src="/logo-list2/6.svg" alt="" height={36} width={105} />
            </div>
            <Link
              href=""
              className="px-14 h-11 rounded-md text-white bg-blue leading-10 shadow-ex-md-blue"
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
      <div className="showcase-container-tablet  mt-12"></div>
      <div className="showcase-container-desktop none overflow-x-hidden mt-16 mb-8 mx-auto bg-emerald-600">
        <div className="slides flex mt-12 relative overflow-hidden bg-pink-400">
          {slidesList.map((slideItem, index) => (
            <div
              className={`bg-white rounded-md overflow-hidden cursor-pointer transition-all ease-linear shadow-lg w-80 h-48  ${slideItem.style}`}
              key={index}
            >
              <Image
                src={slideItem.image}
                alt={slideItem.title}
                height={185}
                width={330}
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
        className="px-14 h-11 rounded-md text-white bg-blue leading-10 shadow-ex-md-blue"
      >
        View Showcase
      </Link>
    </div>
  );
}
