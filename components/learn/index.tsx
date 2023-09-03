import Image from "next/image";
import Link from "next/link";

export default function Learn() {
  return (
    <div className="learn main flex flex-col justify-center items-center w-full mx-auto max-w-lg text-center py-24 px-4">
      <div className="flex relative flex-col justify-center items-center text-center mb-8">
        <h2 className="text-3xl mb-4 font-bold ">Learn Next.js</h2>
        <h3 className="text-base font-normal text-gray">
          Learn Next.js step-by-step and earn points ✨.
        </h3>
      </div>
      <Link href="">
        <div className="inline-flex mb-5 w-[926px]">
          <Image
            src="/learn.png"
            alt=""
            width={926}
            height={679}
            className="max-w-full h-auto"
          />
        </div>
      </Link>
      <Link
          href=""
          className="px-14 h-11 text-center rounded-md text-white bg-blue leading-10 shadow-ex-md-blue"
        >
          Get Started
        </Link>
    </div>
  );
}
