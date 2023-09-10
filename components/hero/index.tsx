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
          <Link href="#" className="cursor-pointer">
            <div className=" cursor-none rounded-[32px] relative shadow-md ">
              <span className="conf-gradient-wrapper-container_gradientWrapper rounded-[32px]">
                <span
                  aria-hidden="true"
                  className="conf-gradient-wrapper_grayscaleBorder__BOowP conf-gradient-wrapper_gradient__4eJTD rounded-[32px]"
                ></span>
                <span
                  aria-hidden="true"
                  className="conf-gradient-wrapper_active__noDev"
                ></span>
                <span className="conf-gradient-wrapper_children">
                  <div className="hero-buttons-contents gap-3 h-12 flex justify-between items-center px-5 font-medium text-white bg-black rounded-3xl whitespace-nowrap">
                    <Image src="/triangle.svg" alt="" height={15} width={15} />
                    <p>Start Deploying</p>
                  </div>
                </span>
              </span>
            </div>
          </Link>
          <Link href="#" className="cursor-pointer">
            <div className="cursor-none rounded-[32px] relative shadow-md ">
              <span className="conf-gradient-wrapper-container_gradientWrapper rounded-[32px]">
                <span
                  aria-hidden="true"
                  className="conf-gradient-wrapper_grayscaleBorder__BOowP conf-gradient-wrapper_gradient__4eJTD rounded-[32px]"
                ></span>
                <span
                  aria-hidden="true"
                  className="conf-gradient-wrapper_active__noDev"
                ></span>
                <span className="conf-gradient-wrapper_children">
                  <div className="hero-buttons-contents gap-3 h-12 flex justify-between items-center px-5 font-medium text-black bg-white rounded-3xl whitespace-nowrap">
                    Replay the Event
                    <Image
                      src="/arrow.svg"
                      alt="arrow"
                      height={24}
                      width={24}
                    />
                  </div>
                </span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
