import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <div className="flex justify-ceter items-center flex-col">
      <div className="wrapper flex">
        <div className="nextjs-grid grid gap-3">
            <div className="featured col-span-1 row-span-3 flex justify-center items-center border p-5"><Link href="">featured</Link></div>
            <div className="major-feat-0 row-span-2 flex justify-center items-center border p-5"><Link href="">major-feat-0</Link></div>
            <div className="minor-feat-0 flex justify-center items-center border p-5"><Link href="">minor-feat-0</Link></div>
            <div className="major-feat-1 row-span-2 flex justify-center items-center border p-5"><Link href="">major-feat-1</Link></div>
            <div className="minor-feat-1 flex justify-center items-center border p-5"><Link href="">minor-feat-1</Link></div>
        </div>
      </div>
    </div>
  );
}
