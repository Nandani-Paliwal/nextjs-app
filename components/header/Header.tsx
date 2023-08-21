import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="banner flex justify-center bg-black text-white w-full h-14">
        <div className="inner flex justify-between items-center w-4/5 px-3 mx-auto">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <p className="font-medium ">Deploy <b>Next.js</b> on Vercel <span aria-hidden="true">&rarr;</span></p>
        </div>
      </div>
    </div>
  );
}
