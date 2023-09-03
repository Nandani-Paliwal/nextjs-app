import Image from "next/image";
import Link from "next/link";

export default function Learn() {
  return (
    <div className="learn-main flex flex-col justify-center items-center mx-auto max-w-5xl text-center py-[100px] px-4">
      <div className="flex relative flex-col justify-center items-center text-center mb-8">
        <h2 className="text-3xl mb-4 font-bold ">Learn Next.js</h2>
        <h3 className="text-base font-normal text-gray">
          Learn Next.js step-by-step and earn points ✨.
        </h3>
      </div>
      <Link href="">
        <figure className="flex mb-5">
          <Image
            src="/learn.png"
            alt=""
            width={926}
            height={679}
            className="max-w-full h-auto "
          />
        </figure>
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
