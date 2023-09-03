import Image from "next/image";
import Link from "next/link";

export default function NewsletterSubscribe() {
  return (
    <div className="newsletter-subscribe-main flex mx-auto py-16 w-full text-center">
      <div className="content items-center max-w-5xl px-6 my-8 mx-auto ">
        <aside className="title text-left">
          <h2 className="text-3xl font-bold leading-tight mb-3">
            Next.js is getting better every day — don&apos;t miss out on all the
            action.
          </h2>
          <h3 className="font-normal text-base leading-loose">
            Join the Next.js newsletter and stay updated on new releases and
            features, guides, and case studies.
          </h3>
        </aside>
        <aside className="">
          <div className="email-form text-right">
            <form className="inline-block  max-w-full w-56">
              <div className="email text-center m-auto ">
                <label className="email-input-field flex rounded-lg bg-transparent border border-gray999 items-center w-full mx-auto">
                  <span className="email-icon inline-flex mx-4">
                    <svg
                      aria-label="closed email"
                      height="15"
                      viewBox="0 0 15 11"
                      width="15"
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-width="1"
                        transform="translate(-598.000000, -418.000000) translate(560.000000, 404.000000) translate(23.000000, 0.000000) translate(15.000000, 13.000000) translate(0.000000, 1.000000)"
                      >
                        <rect
                          height="10"
                          rx="2"
                          width="14"
                          x="0.5"
                          y="0.5"
                        ></rect>
                        <path
                          d="M1.175 1.135L7.5 5.5"
                          strokeLinecap="square"
                        ></path>
                        <path
                          d="M14.04.912L7.5 5.5"
                          strokeLinecap="square"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <div className="input">
                    <input name="email-input-field" id="email-input-field" type="email" placeholder="you@domain.com" className=" block border-none bg-transparent rounded-none text-sm text-left text-black w-full py-1 h-9 leading-[27px] focus:outline-none  " />
                  </div>
                </label>
                <button type="submit" className="justify-center items-center py-1 px-2 cursor-pointer no-underline border border-black rounded-md bg-black  text-white font-medium w-full h-11 mt-3 transition-all duration-200 ease-in-out hover:bg-white hover:text-black">Subscribe</button>
              </div>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
