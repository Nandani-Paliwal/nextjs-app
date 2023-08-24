import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero ">
        <div className=" relative flex flex-col overflow-hidden mx-auto max-w-2xl pt-10 pb-16 sm:py-48 lg:py-16">
        <Image
              src="/prism-light-colorful.jpg"
              alt=""
              width={900}
              height={900}
              className="prism-light-colorful flex items-center justify-center"
            />
          <div className="relative mt-72 text-center z-10">
            <div className="flex justify-center items-center mb-11">
              <Image src="/conflogo.svg" alt="" width={250} height={250} />
            </div>
            <div className="text-center">
              <h1 className="text-9xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-3">
                Dynamic without limits
              </h1>
              <p className="hero-announcement mt-6 text-xl leading-8 text-textgray font-normal font-sans">
                Every announcement from the 2022 edition of{" "}
                <strong className="text-grayshade font-medium">
                  Next.js Conf
                </strong>
                .
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#">
                  <div className="flex">
                    <div className="btn relative flex justify-center items-center rounded-2xl overflow-hidden before:animate-fullSpin">
                      <div className="flex justify-center items-center  text-white bg-black py-3 px-5 rounded-full  font-medium gap-3 z-10 ">
                        <Image
                          src="/triangle.svg"
                          alt=""
                          height={15}
                          width={15}
                        />
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
        </div>
      </div>
  )
}
