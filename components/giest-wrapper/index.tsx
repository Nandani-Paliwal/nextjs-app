import Link from "next/link";
import Image from "next/image";


export default function GiestWrapper() {
  return (
    <div className="announcement-features wrapper flex justify-center  my-20 max-w-7xl mx-auto">
      <div className="announcement-features-subdiv flex gap-9 justify-between items-center relative py-12 lg:w-full mx-9">
        <div className="flex flex-col justify-center text-center lg:justify-start lg:items-start gap-2">
          <p className="font-medium text-2xl text-grayshade">
            Huge new features and major leaps forward for developer experience
          </p>
          <p className="text-base text-gray444">
            Read the{" "}
            <Link
              href=""
              className="text-blue font-medium transition ease-in-out duration-200"
            >
              Next.js Conf announcements{" "}
            </Link>
            blog post or browse the{" "}
            <Link
              href=""
              className="text-blue font-medium transition ease-in-out duration-200"
            >
              changelog
            </Link>{" "}
            for all the latest.
          </p>
        </div>
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
                  <Image src="/arrow.svg" alt="arrow" height={24} width={24} />
                </div>
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
