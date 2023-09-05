import Link from "next/link";

export default function GiestWrapper() {
    return (
        <div className="announcement-features wrapper flex justify-center  my-20 max-w-7xl mx-auto">
        <div className="announcement-features-subdiv flex gap-9 justify-between items-center relative py-12 lg:w-full mx-9">
          <div className="flex flex-col justify-center text-center lg:justify-start lg:items-start gap-2">
            <p className="font-medium text-2xl text-grayshade">Huge new features and major leaps forward for developer experience</p>
            <p className="text-base text-gray444">Read the <Link href="" className="text-blue font-medium transition ease-in-out duration-200">Next.js Conf announcements </Link>blog post or browse the <Link href="" className="text-blue font-medium transition ease-in-out duration-200">changelog</Link> for all the latest.</p>
          </div>
          <Link href="#">
                  <div className="btn relative flex justify-center items-center rounded-full bg-white shadow py-3 px-5 overflow-hidden before:animate-fullSpin w-full">
                    <div className="flex justify-center items-center text-black font-medium gap-3">
                      <p className="z-10">
                        Replay the Event <span aria-hidden="true">→</span>
                      </p>
                    </div>
                  </div>
                </Link>
        </div>
      </div>
    )
}