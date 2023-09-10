import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero relative flex flex-col justify-center items-center -mt-20 overflow-hidden pt-10 pb-16 w-full">
      <div className="flex flex-col items-center text-center mx-auto max-w-5xl w-full">
        <Image
          src="/prism-light-colorful.jpg"
          alt=""
          width={900}
          height={900}
          className="prism-light-colorful flex items-center justify-center"
        />
        <div className="items-center text-center mt-[350px] z-10 w-full">
          <div className="flex justify-center items-center mb-11">
            <Image src="/conflogo.svg" alt="" width={250} height={250} />
          </div>
          <h1 className="text-5xl font-extrabold tracking-[-3px] text-gray-900 mb-3 lg:text-[88px]">
            Dynamic without limits
          </h1>
          <p className="hero-announcement mt-6 text-xl leading-8 text-textgray font-normal font-sans">
            Every announcement from the 2022 edition of{" "}
            <strong className="text-grayshade font-medium">Next.js Conf</strong>
            .
          </p>
        </div>
        <div aria-hidden="true" className="hero-fade"></div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="#">
            <div className="flex">
              <div className="btn relative flex justify-center items-center rounded-2xl overflow-hidden before:animate-fullSpin">
                <div className="flex justify-center items-center  text-white bg-black py-3 px-5 rounded-full  font-medium gap-3 z-10 ">
                  <Image src="/triangle.svg" alt="" height={15} width={15} />
                  <p>Start Deploying</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="btn relative flex justify-center items-center rounded-full bg-white shadow py-3 px-5 overflow-hidden before:animate-fullSpin">
              <div className="flex justify-center items-center text-black font-medium gap-3">
                <p className="z-10">
                  Replay the Event <span aria-hidden="true">→</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
