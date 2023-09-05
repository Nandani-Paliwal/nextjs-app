import Image from "next/image";
import Link from "next/link";

export default function Announcement() {
  return (
    <div className="announcement flex flex-col justify-center items-center gap-20 max-w-7xl m-auto">
      <div className="flex wrapper w-full">
        <div className="nextjs-grid flex flex-col gap-4 m-6 w-full">
          <div className="featured lg:col-span-1 lg:row-span-3 flex flex-col justify-center items-center border border-white92 text-center py-20  rounded-lg shadow overflow-hidden relative">
            <Link href="#">
              <div className="flex flex-col justify-center items-center text-center gap-20">
                <div
                  aria-hidden="true"
                  className="nextjs13-bg absolute top-0 left-12 rounded-full w-80 h-80"
                ></div>
                <Image
                  src="/nextjs-logo-title.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="shadowdrop-shadow "
                />
                <div className=" flex flex-col justify-center items-center relative h-full">
                  <h2 className="announcement-subtext font-bold text-6xl mb-3">
                    Next.js 13
                  </h2>
                  <span className="announcement-subtext font-medium text-sm">
                    By Vercel
                  </span>
                  <p className="text-textgray font-normal text-xl text-center tracking-tight leading-relaxed mt-9">
                    Bring the power of full-stack{" "}
                    <span className="block"></span> to the frontend.
                  </p>
                </div>
                <div className="button-getstarted flex justify-center items-center rounded-full text-white border border-transparent bg-gray75 px-4 py-2 gap-3 text-base">
                  <p>Get Started</p>
                  <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="20"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className="tilt-card-glow"></div>
            </Link>
          </div>
          <div className="major-feat-0 lg:col-span-1 lg:row-span-2 flex flex-col justify-center items-center border border-white92 relative text-center rounded-lg py-8 px-1 shadow overflow-hidden">
            <Link href="">
              <div className="flex flex-col justify-center items-center">
                <div
                  aria-hidden="true"
                  className="uppercase font-semibold text-textgray text-xs border border-white92 px-1 rounded-[4px] absolute top-3 bg-gray05 right-3"
                >
                  Beta
                </div>
                <Image
                  src="/router-visual-title.svg"
                  alt=""
                  width={218}
                  height={140}
                  className="next-announcements_routerVisual__OHgIM invert"
                />
                <div className="flex flex-col justify-center items-center text-center mt-4">
                  <h3 className="announcement-subtext font-medium text-2xl">
                    Powerful routing{" "}
                    <span className="block text-center ">and layouts</span>
                  </h3>
                  <p className="font-normal text-xl text-textgray max-w-sm mt-3">
                    Build complex interfaces while shipping less JavaScript.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="minor-feat-0 lg:col-span-1 lg:row-span-1 lg:col-start-2 announcement-link flex flex-col justify-center items-center border border-white92 text-center p-4 rounded-lg shadow overflow-hidden relative ">
            <Link href="">
              <div className="flex flex-col justify-center items-center ">
                <div className=".announcement-subtext flex flex-col justify-center items-center relative text-gray444 gap-4 my-6 pb-28">
                  <h3 className="sr-only">Server Components</h3>
                  <p className="font-normal text-xl text-textgray max-w-xs">
                    Building on{" "}
                    <span className="text-black">React Server Components</span>,{" "}
                    <span className="text-blue bg-lightblue rounded-md px-1 ">
                      app
                    </span>{" "}
                    now makes <span className="text-black">server-first</span>{" "}
                    the default.
                  </p>
                  <div className="badge relative flex justify-center items-center text-center bg-white text-xs font-normal  rounded-lg px-2 py-1">
                    Powered by Vercel Functions
                  </div>
                </div>
                <Image
                  src="/react-visual-title.svg"
                  alt=""
                  width={246}
                  height={219}
                  className="next-announcements_reactVisual__OHgIM block absolute bottom-0 translate-y-28"
                />
              </div>
            </Link>
          </div>
          <div className="major-feat-1 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-2  flex flex-col justify-center items-center border border-white92 text-center p-4 gap-6 rounded-lg shadow overflow-hidden">
            <Link href="">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/globe-light.png"
                  alt=""
                  width={280}
                  height={185}
                  className=""
                />
                <div className="flex flex-col justify-center items-center text-center mb-9">
                  <h3 className="announcement-subtext font-medium text-2xl">
                    Dynamic HTML Streaming
                  </h3>
                  <p className="font-normal text-xl text-textgray max-w-sm mt-3">
                    Support for HTML streaming, <br />
                    now on Vercel.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="minor-feat-1 lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-1 announcement-link flex flex-col justify-center items-center border border-white92 text-center p-8 rounded-lg shadow overflow-hidden relative ">
            <Link href="">
              <div className="flex flex-col justify-center items-center">
                <div className=".announcement-subtext flex flex-col justify-center items-center relative text-gray444 gap-4 my-2">
                  <h3 className="sr-only">Asset Optimization</h3>
                  <p className="font-normal text-xl text-textgray max-w-xs">
                    Native support for{" "}
                    <span className="block">
                      <span className="text-black">custom fonts</span> and{" "}
                      <span className="text-black">Images</span>
                    </span>
                  </p>
                  <div className="badge relative flex justify-center items-center text-center bg-white text-xs font-normal  rounded-lg px-2 py-1">
                    Powered by Vercel Image Optimization
                  </div>
                </div>
                <div>
                  <svg
                    aria-labelledby="assets-title"
                    fill="none"
                    height="90"
                    role="img"
                    viewBox="0 0 256 90"
                    width="256"
                    className="next-announcements_assetsVisual__7g09R invert mt-8"
                  >
                    <rect
                      fill="url(#paint0_linear_1389_8626)"
                      fillOpacity="0.1"
                      height="90"
                      rx="12"
                      width="120"
                    ></rect>
                    <path
                      d="M15.2207 33H14.002L20.8251 14.0909H22.1547L28.9778 33H27.7591L21.536 15.5774H21.4437L15.2207 33ZM16.9473 25.8814H26.0325V26.9524H16.9473V25.8814Z"
                      fill="url(#paint1_linear_1389_8626)"
                    ></path>
                    <path
                      d="M35.6056 33.3047C34.7869 33.3047 34.036 33.1416 33.3527 32.8154C32.6757 32.4891 32.1309 32.0121 31.7185 31.3843C31.3123 30.7564 31.1091 29.9932 31.1091 29.0945C31.1091 28.5036 31.2138 27.9835 31.4231 27.5341C31.6323 27.0848 31.9555 26.697 32.3925 26.3708C32.8295 26.0445 33.3897 25.7768 34.0729 25.5675C34.7562 25.3521 35.5717 25.1859 36.5197 25.0689C37.2398 24.9828 37.8831 24.8997 38.4493 24.8196C39.0156 24.7335 39.4588 24.6011 39.7789 24.4226C40.1051 24.2441 40.2682 23.9733 40.2682 23.6101V23.0192C40.2682 21.9851 39.942 21.1634 39.2895 20.554C38.6371 19.9446 37.7384 19.6399 36.5935 19.6399C35.5779 19.6399 34.7223 19.8646 34.0268 20.314C33.3374 20.7571 32.8542 21.3296 32.5772 22.0313L31.5154 21.6343C31.7862 20.9572 32.1771 20.394 32.688 19.9446C33.205 19.4953 33.7959 19.1598 34.4607 18.9382C35.1316 18.7167 35.8333 18.6059 36.5658 18.6059C37.1998 18.6059 37.803 18.6951 38.3755 18.8736C38.9541 19.0521 39.468 19.323 39.9174 19.6861C40.3729 20.0493 40.733 20.514 40.9976 21.0803C41.2623 21.6404 41.3947 22.3113 41.3947 23.0931V33H40.2682V30.4425H40.1851C39.9389 30.9719 39.6004 31.4551 39.1695 31.8921C38.7448 32.323 38.2308 32.6676 37.6276 32.9262C37.0305 33.1785 36.3565 33.3047 35.6056 33.3047ZM35.7164 32.2614C36.6027 32.2614 37.3875 32.046 38.0708 31.6151C38.7602 31.1781 39.2988 30.581 39.6866 29.8239C40.0743 29.0668 40.2682 28.2081 40.2682 27.2479V25.1613C40.1267 25.2844 39.9205 25.3952 39.6496 25.4936C39.3849 25.586 39.0833 25.6691 38.7448 25.7429C38.4124 25.8106 38.0616 25.8722 37.6922 25.9276C37.3291 25.9768 36.9751 26.023 36.6304 26.0661C35.5964 26.1892 34.7531 26.38 34.1006 26.6385C33.4543 26.8909 32.9804 27.2233 32.6787 27.6357C32.3833 28.0481 32.2356 28.5467 32.2356 29.1314C32.2356 30.0978 32.5679 30.8611 33.2327 31.4212C33.8975 31.9813 34.7254 32.2614 35.7164 32.2614Z"
                      fill="url(#paint2_linear_1389_8626)"
                    ></path>
                    <path
                      d="M14.7948 77H13.7028V70.056H14.7948V71.232H14.9628C15.3921 70.3173 16.1388 69.86 17.2028 69.86C18.0055 69.86 18.6448 70.112 19.1208 70.616C19.5968 71.1107 19.8348 71.8573 19.8348 72.856V77H18.7428V73.08C18.7428 72.352 18.5795 71.806 18.2528 71.442C17.9261 71.078 17.4828 70.896 16.9228 70.896C16.2601 70.896 15.7375 71.1247 15.3548 71.582C14.9815 72.03 14.7948 72.632 14.7948 73.388V77ZM22.9331 73.864C22.9611 74.5547 23.1757 75.11 23.5771 75.53C23.9784 75.95 24.5384 76.16 25.2571 76.16C25.5837 76.16 25.8684 76.1227 26.1111 76.048C26.3537 75.9733 26.5591 75.8707 26.7271 75.74C26.9044 75.6093 27.0444 75.46 27.1471 75.292C27.2591 75.1147 27.3477 74.928 27.4131 74.732L28.4491 75.012C28.2531 75.656 27.8891 76.1833 27.3571 76.594C26.8344 76.9953 26.1251 77.196 25.2291 77.196C24.7344 77.196 24.2771 77.112 23.8571 76.944C23.4464 76.7667 23.0917 76.5193 22.7931 76.202C22.4944 75.8847 22.2611 75.5067 22.0931 75.068C21.9251 74.6293 21.8411 74.144 21.8411 73.612V73.276C21.8411 72.7907 21.9251 72.338 22.0931 71.918C22.2704 71.498 22.5131 71.1387 22.8211 70.84C23.1291 70.532 23.4884 70.294 23.8991 70.126C24.3191 69.9487 24.7717 69.86 25.2571 69.86C25.8264 69.86 26.3164 69.9673 26.7271 70.182C27.1471 70.3873 27.4877 70.644 27.7491 70.952C28.0197 71.26 28.2157 71.596 28.3371 71.96C28.4677 72.324 28.5331 72.66 28.5331 72.968V73.864H22.9331ZM25.2571 70.896C24.9491 70.896 24.6597 70.9473 24.3891 71.05C24.1277 71.1433 23.8944 71.2787 23.6891 71.456C23.4931 71.6333 23.3297 71.8433 23.1991 72.086C23.0777 72.3193 22.9984 72.576 22.9611 72.856H27.4411C27.4224 72.5573 27.3477 72.2867 27.2171 72.044C27.0957 71.8013 26.9324 71.596 26.7271 71.428C26.5311 71.26 26.3024 71.1293 26.0411 71.036C25.7891 70.9427 25.5277 70.896 25.2571 70.896ZM35.5093 70.056H36.7553L34.7113 73.36V73.528L36.9233 77H35.6493L33.7593 73.948H33.5073L31.6173 77H30.3433L32.5553 73.528V73.36L30.5113 70.056H31.7573L33.5073 72.94H33.7593L35.5093 70.056ZM38.7616 70.056H40.9456V67.2H42.0376V70.056H44.7256V71.064H42.0376V75.572C42.0376 75.852 42.1636 75.992 42.4156 75.992H44.3896V77H42.0236C41.7063 77 41.4449 76.8973 41.2396 76.692C41.0436 76.4867 40.9456 76.2253 40.9456 75.908V71.064H38.7616V70.056ZM52.0519 65.716L53.0319 66.024L48.9579 78.484L47.9639 78.176L52.0519 65.716ZM55.7941 70.056H57.9361V68.292C57.9361 67.9747 58.0341 67.7133 58.2301 67.508C58.4355 67.3027 58.6968 67.2 59.0141 67.2H61.7581V68.208H59.4061C59.1541 68.208 59.0281 68.348 59.0281 68.628V70.056H61.9261V71.064H59.0281V77H57.9361V71.064H55.7941V70.056ZM70.8484 73.612C70.8484 74.1907 70.7504 74.704 70.5544 75.152C70.3677 75.5907 70.1157 75.964 69.7984 76.272C69.4811 76.5707 69.1077 76.7993 68.6784 76.958C68.2584 77.1167 67.8197 77.196 67.3624 77.196C66.8957 77.196 66.4524 77.1167 66.0324 76.958C65.6124 76.7993 65.2437 76.5707 64.9264 76.272C64.6091 75.964 64.3524 75.5907 64.1564 75.152C63.9697 74.704 63.8764 74.1907 63.8764 73.612V73.444C63.8764 72.8747 63.9697 72.3707 64.1564 71.932C64.3524 71.484 64.6091 71.106 64.9264 70.798C65.2531 70.49 65.6264 70.2567 66.0464 70.098C66.4664 69.9393 66.9051 69.86 67.3624 69.86C67.8197 69.86 68.2584 69.9393 68.6784 70.098C69.0984 70.2567 69.4671 70.49 69.7844 70.798C70.1111 71.106 70.3677 71.484 70.5544 71.932C70.7504 72.3707 70.8484 72.8747 70.8484 73.444V73.612ZM67.3624 76.16C67.6984 76.16 68.0064 76.104 68.2864 75.992C68.5757 75.8707 68.8277 75.698 69.0424 75.474C69.2571 75.25 69.4251 74.984 69.5464 74.676C69.6677 74.3587 69.7284 74.004 69.7284 73.612V73.444C69.7284 73.0707 69.6677 72.73 69.5464 72.422C69.4251 72.1047 69.2571 71.834 69.0424 71.61C68.8277 71.386 68.5757 71.2133 68.2864 71.092C67.9971 70.9613 67.6891 70.896 67.3624 70.896C67.0357 70.896 66.7277 70.9613 66.4384 71.092C66.1491 71.2133 65.8971 71.386 65.6824 71.61C65.4677 71.834 65.2997 72.1047 65.1784 72.422C65.0571 72.73 64.9964 73.0707 64.9964 73.444V73.612C64.9964 74.004 65.0571 74.3587 65.1784 74.676C65.2997 74.984 65.4677 75.25 65.6824 75.474C65.8971 75.698 66.1444 75.8707 66.4244 75.992C66.7137 76.104 67.0264 76.16 67.3624 76.16ZM73.8207 77H72.7287V70.056H73.8207V71.232H73.9887C74.418 70.3173 75.1647 69.86 76.2287 69.86C77.0313 69.86 77.6707 70.112 78.1467 70.616C78.6227 71.1107 78.8607 71.8573 78.8607 72.856V77H77.7687V73.08C77.7687 72.352 77.6053 71.806 77.2787 71.442C76.952 71.078 76.5087 70.896 75.9487 70.896C75.286 70.896 74.7633 71.1247 74.3807 71.582C74.0073 72.03 73.8207 72.632 73.8207 73.388V77ZM80.9229 70.056H83.1069V67.2H84.1989V70.056H86.8869V71.064H84.1989V75.572C84.1989 75.852 84.3249 75.992 84.5769 75.992H86.5509V77H84.1849C83.8676 77 83.6063 76.8973 83.4009 76.692C83.2049 76.4867 83.1069 76.2253 83.1069 75.908V71.064H80.9229V70.056Z"
                      fill="url(#paint3_linear_1389_8626)"
                    ></path>
                    <rect
                      height="89"
                      rx="11.5"
                      stroke="url(#paint4_angular_1389_8626)"
                      strokeOpacity="0.1"
                      width="119"
                      x="0.5"
                      y="0.5"
                    ></rect>
                    <rect
                      fill="url(#paint5_linear_1389_8626)"
                      fillOpacity="0.1"
                      height="90"
                      rx="12"
                      width="120"
                      x="136"
                    ></rect>
                    <path
                      d="M150.579 77H149.487V70.056H150.579V71.232H150.747C151.176 70.3173 151.923 69.86 152.987 69.86C153.789 69.86 154.429 70.112 154.905 70.616C155.381 71.1107 155.619 71.8573 155.619 72.856V77H154.527V73.08C154.527 72.352 154.363 71.806 154.037 71.442C153.71 71.078 153.267 70.896 152.707 70.896C152.044 70.896 151.521 71.1247 151.139 71.582C150.765 72.03 150.579 72.632 150.579 73.388V77ZM158.717 73.864C158.745 74.5547 158.96 75.11 159.361 75.53C159.762 75.95 160.322 76.16 161.041 76.16C161.368 76.16 161.652 76.1227 161.895 76.048C162.138 75.9733 162.343 75.8707 162.511 75.74C162.688 75.6093 162.828 75.46 162.931 75.292C163.043 75.1147 163.132 74.928 163.197 74.732L164.233 75.012C164.037 75.656 163.673 76.1833 163.141 76.594C162.618 76.9953 161.909 77.196 161.013 77.196C160.518 77.196 160.061 77.112 159.641 76.944C159.23 76.7667 158.876 76.5193 158.577 76.202C158.278 75.8847 158.045 75.5067 157.877 75.068C157.709 74.6293 157.625 74.144 157.625 73.612V73.276C157.625 72.7907 157.709 72.338 157.877 71.918C158.054 71.498 158.297 71.1387 158.605 70.84C158.913 70.532 159.272 70.294 159.683 70.126C160.103 69.9487 160.556 69.86 161.041 69.86C161.61 69.86 162.1 69.9673 162.511 70.182C162.931 70.3873 163.272 70.644 163.533 70.952C163.804 71.26 164 71.596 164.121 71.96C164.252 72.324 164.317 72.66 164.317 72.968V73.864H158.717ZM161.041 70.896C160.733 70.896 160.444 70.9473 160.173 71.05C159.912 71.1433 159.678 71.2787 159.473 71.456C159.277 71.6333 159.114 71.8433 158.983 72.086C158.862 72.3193 158.782 72.576 158.745 72.856H163.225C163.206 72.5573 163.132 72.2867 163.001 72.044C162.88 71.8013 162.716 71.596 162.511 71.428C162.315 71.26 162.086 71.1293 161.825 71.036C161.573 70.9427 161.312 70.896 161.041 70.896ZM171.293 70.056H172.539L170.495 73.36V73.528L172.707 77H171.433L169.543 73.948H169.291L167.401 77H166.127L168.339 73.528V73.36L166.295 70.056H167.541L169.291 72.94H169.543L171.293 70.056ZM174.545 70.056H176.729V67.2H177.821V70.056H180.509V71.064H177.821V75.572C177.821 75.852 177.947 75.992 178.199 75.992H180.173V77H177.807C177.49 77 177.229 76.8973 177.023 76.692C176.827 76.4867 176.729 76.2253 176.729 75.908V71.064H174.545V70.056ZM187.836 65.716L188.816 66.024L184.742 78.484L183.748 78.176L187.836 65.716ZM193.804 67.984C193.804 67.7133 193.897 67.4847 194.084 67.298C194.28 67.102 194.513 67.004 194.784 67.004C195.055 67.004 195.283 67.102 195.47 67.298C195.666 67.4847 195.764 67.7133 195.764 67.984C195.764 68.2547 195.666 68.488 195.47 68.684C195.283 68.8707 195.055 68.964 194.784 68.964C194.513 68.964 194.28 68.8707 194.084 68.684C193.897 68.488 193.804 68.2547 193.804 67.984ZM191.816 75.992H194.252V71.064H192.068V70.056H195.344V75.992H197.612V77H191.816V75.992ZM206.758 77H205.666V72.016C205.666 71.6893 205.592 71.4233 205.442 71.218C205.293 71.0033 205.055 70.896 204.728 70.896C204.42 70.896 204.168 71.0127 203.972 71.246C203.786 71.47 203.692 71.82 203.692 72.296V77H202.6V71.96C202.6 71.652 202.516 71.4 202.348 71.204C202.18 70.9987 201.956 70.896 201.676 70.896C201.34 70.896 201.079 71.0173 200.892 71.26C200.715 71.5027 200.626 71.82 200.626 72.212V77H199.534V70.056H200.626V70.812H200.794C200.916 70.4853 201.093 70.2473 201.326 70.098C201.56 69.9393 201.835 69.86 202.152 69.86C202.488 69.86 202.764 69.9487 202.978 70.126C203.202 70.3033 203.356 70.532 203.44 70.812H203.608C203.926 70.1773 204.43 69.86 205.12 69.86C205.643 69.86 206.044 70.028 206.324 70.364C206.614 70.6907 206.758 71.12 206.758 71.652V77ZM213.553 75.824H213.385C213.161 76.2907 212.848 76.636 212.447 76.86C212.055 77.084 211.639 77.196 211.201 77.196C210.743 77.196 210.319 77.1213 209.927 76.972C209.535 76.8133 209.189 76.5847 208.891 76.286C208.601 75.978 208.373 75.6047 208.205 75.166C208.037 74.7273 207.953 74.2187 207.953 73.64V73.416C207.953 72.8467 208.037 72.3427 208.205 71.904C208.373 71.4653 208.601 71.0967 208.891 70.798C209.189 70.49 209.535 70.2567 209.927 70.098C210.319 69.9393 210.734 69.86 211.173 69.86C211.649 69.86 212.078 69.9673 212.461 70.182C212.853 70.3873 213.161 70.7093 213.385 71.148H213.553V70.056H214.645V75.572C214.645 75.852 214.771 75.992 215.023 75.992H215.373V77H214.631C214.313 77 214.052 76.8973 213.847 76.692C213.651 76.4867 213.553 76.2253 213.553 75.908V75.824ZM211.313 76.16C211.639 76.16 211.938 76.0993 212.209 75.978C212.489 75.8567 212.727 75.684 212.923 75.46C213.119 75.236 213.273 74.97 213.385 74.662C213.497 74.3447 213.553 73.9947 213.553 73.612V73.444C213.553 73.0707 213.497 72.73 213.385 72.422C213.273 72.1047 213.114 71.834 212.909 71.61C212.713 71.386 212.475 71.2133 212.195 71.092C211.924 70.9613 211.63 70.896 211.313 70.896C210.986 70.896 210.687 70.9567 210.417 71.078C210.146 71.1993 209.908 71.372 209.703 71.596C209.507 71.8107 209.353 72.0767 209.241 72.394C209.129 72.702 209.073 73.0427 209.073 73.416V73.64C209.073 74.4333 209.278 75.054 209.689 75.502C210.109 75.9407 210.65 76.16 211.313 76.16ZM222.223 75.936H222.055C221.831 76.356 221.523 76.6733 221.131 76.888C220.748 77.0933 220.328 77.196 219.871 77.196C219.404 77.196 218.965 77.1167 218.555 76.958C218.144 76.7993 217.78 76.5707 217.463 76.272C217.155 75.9733 216.907 75.6047 216.721 75.166C216.543 74.718 216.455 74.2093 216.455 73.64V73.416C216.455 72.856 216.548 72.3567 216.735 71.918C216.921 71.47 217.169 71.0967 217.477 70.798C217.785 70.49 218.144 70.2567 218.555 70.098C218.965 69.9393 219.395 69.86 219.843 69.86C220.347 69.86 220.785 69.972 221.159 70.196C221.541 70.4107 221.84 70.728 222.055 71.148H222.223V70.056H223.315V78.708C223.315 79.0253 223.212 79.2867 223.007 79.492C222.811 79.6973 222.554 79.8 222.237 79.8H217.715V78.792H221.845C222.097 78.792 222.223 78.652 222.223 78.372V75.936ZM219.899 76.16C220.225 76.16 220.529 76.0993 220.809 75.978C221.089 75.8567 221.331 75.684 221.537 75.46C221.751 75.236 221.919 74.97 222.041 74.662C222.162 74.3447 222.223 73.9947 222.223 73.612V73.444C222.223 73.0707 222.162 72.73 222.041 72.422C221.919 72.1047 221.751 71.834 221.537 71.61C221.331 71.386 221.084 71.2133 220.795 71.092C220.515 70.9613 220.216 70.896 219.899 70.896C219.572 70.896 219.264 70.9567 218.975 71.078C218.695 71.1993 218.447 71.372 218.233 71.596C218.027 71.82 217.864 72.086 217.743 72.394C217.631 72.702 217.575 73.0427 217.575 73.416V73.64C217.575 74.032 217.631 74.382 217.743 74.69C217.864 74.998 218.027 75.264 218.233 75.488C218.447 75.7027 218.695 75.8707 218.975 75.992C219.255 76.104 219.563 76.16 219.899 76.16ZM226.175 73.864C226.203 74.5547 226.418 75.11 226.819 75.53C227.22 75.95 227.78 76.16 228.499 76.16C228.826 76.16 229.11 76.1227 229.353 76.048C229.596 75.9733 229.801 75.8707 229.969 75.74C230.146 75.6093 230.286 75.46 230.389 75.292C230.501 75.1147 230.59 74.928 230.655 74.732L231.691 75.012C231.495 75.656 231.131 76.1833 230.599 76.594C230.076 76.9953 229.367 77.196 228.471 77.196C227.976 77.196 227.519 77.112 227.099 76.944C226.688 76.7667 226.334 76.5193 226.035 76.202C225.736 75.8847 225.503 75.5067 225.335 75.068C225.167 74.6293 225.083 74.144 225.083 73.612V73.276C225.083 72.7907 225.167 72.338 225.335 71.918C225.512 71.498 225.755 71.1387 226.063 70.84C226.371 70.532 226.73 70.294 227.141 70.126C227.561 69.9487 228.014 69.86 228.499 69.86C229.068 69.86 229.558 69.9673 229.969 70.182C230.389 70.3873 230.73 70.644 230.991 70.952C231.262 71.26 231.458 71.596 231.579 71.96C231.71 72.324 231.775 72.66 231.775 72.968V73.864H226.175ZM228.499 70.896C228.191 70.896 227.902 70.9473 227.631 71.05C227.37 71.1433 227.136 71.2787 226.931 71.456C226.735 71.6333 226.572 71.8433 226.441 72.086C226.32 72.3193 226.24 72.576 226.203 72.856H230.683C230.664 72.5573 230.59 72.2867 230.459 72.044C230.338 71.8013 230.174 71.596 229.969 71.428C229.773 71.26 229.544 71.1293 229.283 71.036C229.031 70.9427 228.77 70.896 228.499 70.896Z"
                      fill="url(#paint6_linear_1389_8626)"
                    ></path>
                    <path
                      d="M150 29L156.879 22.1213C157.157 21.8428 157.488 21.6218 157.852 21.471C158.216 21.3202 158.606 21.2426 159 21.2426C159.394 21.2426 159.784 21.3202 160.148 21.471C160.512 21.6218 160.843 21.8428 161.121 22.1213L168 29M166 27L167.879 25.1213C168.157 24.8428 168.488 24.6218 168.852 24.471C169.216 24.3202 169.606 24.2426 170 24.2426C170.394 24.2426 170.784 24.3202 171.148 24.471C171.512 24.6218 171.843 24.8428 172.121 25.1213L176 29M152 34H174C174.53 34 175.039 33.7893 175.414 33.4142C175.789 33.0391 176 32.5304 176 32V16C176 15.4696 175.789 14.9609 175.414 14.5858C175.039 14.2107 174.53 14 174 14H152C151.47 14 150.961 14.2107 150.586 14.5858C150.211 14.9609 150 15.4696 150 16V32C150 32.5304 150.211 33.0391 150.586 33.4142C150.961 33.7893 151.47 34 152 34ZM166 19H166.011V19.0107H166V19ZM166.5 19C166.5 19.1326 166.447 19.2598 166.354 19.3536C166.26 19.4473 166.133 19.5 166 19.5C165.867 19.5 165.74 19.4473 165.646 19.3536C165.553 19.2598 165.5 19.1326 165.5 19C165.5 18.8674 165.553 18.7402 165.646 18.6464C165.74 18.5527 165.867 18.5 166 18.5C166.133 18.5 166.26 18.5527 166.354 18.6464C166.447 18.7402 166.5 18.8674 166.5 19V19Z"
                      stroke="url(#paint7_linear_1389_8626)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <rect
                      height="89"
                      rx="11.5"
                      stroke="url(#paint8_angular_1389_8626)"
                      strokeOpacity="0.1"
                      width="119"
                      x="136.5"
                      y="0.5"
                    ></rect>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_1389_8626"
                        x1="5.14286"
                        x2="134.183"
                        y1="-4.31202e-07"
                        y2="74.2991"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0.125"
                          stopColor="white"
                          stopOpacity="0.24"
                        ></stop>
                        <stop offset="0.347973" stopColor="white"></stop>
                        <stop
                          offset="0.567708"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint1_linear_1389_8626"
                        x1="11.3243"
                        x2="55.1263"
                        y1="10"
                        y2="33.9391"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0.125"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop offset="0.347973" stopColor="white"></stop>
                        <stop
                          offset="0.567708"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint2_linear_1389_8626"
                        x1="11.3243"
                        x2="55.1263"
                        y1="10"
                        y2="33.9391"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0.125"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop offset="0.347973" stopColor="white"></stop>
                        <stop
                          offset="0.567708"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint3_linear_1389_8626"
                        x1="89"
                        x2="13.2212"
                        y1="64.875"
                        y2="83.3767"
                      >
                        <stop stopColor="white"></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0.56"
                        ></stop>
                      </linearGradient>
                      <radialGradient
                        cx="0"
                        cy="0"
                        gradientTransform="translate(60 45) rotate(90) scale(45 60)"
                        gradientUnits="userSpaceOnUse"
                        id="paint4_angular_1389_8626"
                        r="1"
                      >
                        <stop
                          offset="0.39711"
                          stopColor="white"
                          stopOpacity="0.1"
                        ></stop>
                        <stop
                          offset="0.405834"
                          stopColor="white"
                          stopOpacity="0.1"
                        ></stop>
                        <stop offset="0.423464" stopColor="white"></stop>
                      </radialGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint5_linear_1389_8626"
                        x1="141.143"
                        x2="270.183"
                        y1="-4.31202e-07"
                        y2="74.2991"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0.125"
                          stopColor="white"
                          stopOpacity="0.24"
                        ></stop>
                        <stop offset="0.347973" stopColor="white"></stop>
                        <stop
                          offset="0.567708"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint6_linear_1389_8626"
                        x1="233"
                        x2="150.364"
                        y1="64.875"
                        y2="87.147"
                      >
                        <stop stopColor="white"></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0.56"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint7_linear_1389_8626"
                        x1="148.595"
                        x2="185.223"
                        y1="12.3333"
                        y2="32.4808"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0.125"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop offset="0.347973" stopColor="white"></stop>
                        <stop
                          offset="0.567708"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <radialGradient
                        cx="0"
                        cy="0"
                        gradientTransform="translate(196 45) rotate(90) scale(45 60)"
                        gradientUnits="userSpaceOnUse"
                        id="paint8_angular_1389_8626"
                        r="1"
                      >
                        <stop
                          offset="0.39711"
                          stopColor="white"
                          stopOpacity="0.1"
                        ></stop>
                        <stop
                          offset="0.405834"
                          stopColor="white"
                          stopOpacity="0.1"
                        ></stop>
                        <stop offset="0.423464" stopColor="white"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex wrapper w-full">
        <div className="turbopack-grid flex flex-col gap-4 m-6 w-full">
          <div className="featured lg:col-span-1 lg:row-span-3 lg:col-start-2 flex flex-col justify-center items-center border border-white92 text-center py-20  rounded-lg shadow overflow-hidden relative">
            <Link href="#">
              <div
                aria-hidden="true"
                className="uppercase font-semibold text-textgray text-xs border border-white92 px-1 rounded-[4px] absolute top-3 bg-gray05 right-3"
              >
                Alpha
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-20">
                <div
                  aria-hidden="true"
                  className="turbo-bg absolute top-0 left-12 rounded-full w-80 h-80"
                ></div>
                <Image
                  src="/turbo-logo-title.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="shadowdrop-shadow "
                />
                <div className=" flex flex-col justify-center items-center relative h-full">
                  <h2 className="announcement-subtext font-bold text-6xl mb-3">
                    Turbopack
                  </h2>
                  <p className="text-textgray font-normal text-xl text-center tracking-tight leading-relaxed mt-9">
                    Introducing the successor to <br />
                    Webpack, written in Rust.
                  </p>
                </div>
                <div className="button-getstarted flex justify-center items-center rounded-full text-white border border-transparent bg-gray75 px-4 py-2 gap-3 text-base">
                  <p>Try in Next.js 13</p>
                  <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="20"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className="tilt-card-glow"></div>
            </Link>
          </div>
          <div className="major-feat-0 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1 flex flex-col justify-center items-center border border-white92 text-center rounded-lg px-1 shadow overflow-hidden relative">
            <div className="flex flex-col justify-center items-center w-full h-full pt-20"><Image
              src="/faster-builds-visual-title.svg"
              alt=""
              width={242}
              height={170}
              className="absolute top-0"
            />
            <div className=" flex relative flex-col justify-center items-center  mt-32 mb-5">
              <div className="announcement-subtext text-7xl font-bold ">
                700x
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="announcement-subtext font-medium text-2xl mt-3">
                  faster updates
                </h3>
                <p className="font-normal text-xl text-textgray max-w-sm mt-3">
                  than Webpack
                </p>
              </div>
            </div></div>
          </div>
          <div className="minor-feat-0 lg:col-span-1 lg:row-span-1 lg:row-start-3 lg:col-start-3 announcement-link flex flex-col justify-start items-center border border-white92 text-center p-8 rounded-lg shadow overflow-hidden relative ">
            <div className=".announcement-subtext flex flex-col justify-center items-center relative text-gray444 mt-8">
              <h3 className="announcement-subtext font-medium text-2xl">
                Incremental by design.
              </h3>
              <p className="font-normal text-xl text-textgray max-w-sm mt-1">
                Only build what has changed, <br />
                both locally and in the cloud.
              </p>
            </div>
            <Image
              src="/pie-chart-visual-title.svg"
              alt=""
              width={246}
              height={219}
              className="next-announcements_pieChartVisual block absolute bottom-0 translate-y-28"
            />
          </div>
          <div className="major-feat-1 lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-2  flex flex-col justify-center items-center border border-white92 text-center p-4 gap-6 rounded-lg shadow overflow-hidden">
            <div className="flex flex-col justify-center items-center text-center mb-3 mt-9">
              <div className="announcement-subtext flex flex-col justify-center items-center text-7xl font-bold">
                4x
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="announcement-subtext font-medium text-2xl mt-3">
                  faster cold starts
                </h3>
                <p className="font-normal text-xl text-textgray max-w-sm mt-3">
                  than Webpack
                </p>
              </div>
            </div>
            <Image
              src="/hmr-visual-title.svg"
              alt=""
              width={230}
              height={140}
              className=""
            />
          </div>
          <div className="minor-feat-1 lg:col-span-1 lg:row-span-1  clg:ol-start-1 lg:row-start-1 announcement-link flex flex-col justify-center items-center border border-white92 text-center p-8 rounded-lg shadow overflow-hidden relative ">
            <Image
              src="/ecosystem-visual-title.svg"
              alt=""
              height={62}
              width={152}
            />
            <div className=".announcement-subtext flex flex-col justify-center items-center relative text-gray444 gap-4 my-2">
              <h3 className="announcement-subtext font-medium text-2xl">
                Ecosystem Friendly
              </h3>
              <p className="font-normal text-xl text-textgray max-w-sm mt-1">
                Out-of-the-box support <br />
                for Typescript, JSX, CSS <br />
                and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex wrapper w-full">
        <div className="vercel-grid flex flex-col gap-4 m-6 w-full">
          <div className="featured lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:col-start-3 flex flex-col justify-center items-center border border-white92 text-center py-20  rounded-lg shadow overflow-hidden relative">
            <Link href="#">
              <div className="flex flex-col justify-center items-center text-center gap-20">
                <div
                  aria-hidden="true"
                  className="vercel-bg absolute top-0 left-12 rounded-full w-80 h-80"
                ></div>
                <Image
                  src="/vercel-logo-title.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="shadowdrop-shadow "
                />
                <div className=" flex flex-col justify-center items-center relative h-full">
                  <h2 className="announcement-subtext font-bold text-6xl">
                    Vercel
                  </h2>
                  <p className="text-textgray font-normal text-xl text-center tracking-tight leading-relaxed mt-5">
                    The Native Next.js platform.{" "}
                  </p>
                </div>
                <div className="button-getstarted flex justify-center items-center rounded-full text-white border border-transparent bg-gray75 px-4 py-2 gap-3 text-base">
                  <p>Deploy Now</p>
                  <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="20"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className="tilt-card-glow"></div>
            </Link>
          </div>
          <div className="major-feat-0 lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-1 flex flex-col justify-center items-center border border-white92 relative text-center rounded-lg py-8 px-1 shadow overflow-hidden">
            <Link href="">
              <div className="flex flex-col justify-center items-center">
                <div
                  aria-hidden="true"
                  className="uppercase font-semibold text-textgray text-xs border border-white92 px-1 rounded-[4px] absolute top-3 bg-gray05 right-3"
                >
                  Enterprise
                </div>
                <Image
                  src="/monitoring-title.svg"
                  alt=""
                  width={348}
                  height={196}
                  className="next-announcements_monitoringTitle"
                />
                <div className="flex flex-col justify-center items-center text-center mt-0mb-4">
                  <h3 className="announcement-subtext font-medium text-2xl">
                    Monitoring Logs{" "}
                  </h3>
                  <p className="font-normal text-xl text-textgray max-w-sm mt-3">
                    Deployment-base introspection.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="minor-feat-0 lg:col-span-1 lg:row-span-1 lg:col-start-2 lg:row-start-1 announcement-link flex flex-col justify-center items-center border border-white92 text-center rounded-lg shadow overflow-hidden relative ">
            <Link href="">
              <div className=".announcement-subtext flex flex-col justify-center items-center relative text-gray444  my-2">
                <p className="font-medium text-2xl  max-w-xs">
                  Dynamic social cards
                </p>
                <Image
                  src="/social-cards-light.png"
                  alt=""
                  width={348}
                  height={194}
                  className=""
                />
                <div className="badge relative flex justify-center items-center text-center bg-white text-xs font-normal  rounded-lg px-2 py-1 mt-3">
                  Powered by Vercel Edge Functions
                </div>
              </div>
            </Link>
          </div>
          <div className="major-feat-1 lg:col-span-1 lg:row-span-1 lg:col-start-2 lg:row-start-2  flex flex-col justify-center items-center border border-white92 text-center p-4 gap-6 rounded-lg shadow overflow-hidden">
            <Link href="">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/refresh-badge-title.svg"
                  alt=""
                  width={347}
                  height={104}
                  className=""
                />
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-black font-medium text-2xl  max-w-sm mt-3">
                    <span className="announcement-subtext">Privacy first</span>,
                    real-time <span className="block"></span>
                    analytics,
                    <span className="announcement-subtext"> at the edge.</span>
                  </h3>
                  <div className="button-getstarted flex justify-center items-center rounded-full text-white border border-transparent bg-gray75 px-4 py-2 gap-3 text-base mt-8">
                    <div className="splitbee-title">
                      <svg
                        aria-labelledby="splitbee-title"
                        fill="none"
                        height="24"
                        role="img"
                        viewBox="0 0 21 22"
                        width="24"
                      >
                        <title id="splitbee-title">
                          The Splitbee logo, a cartoon of a small bee.
                        </title>
                        <path
                          d="M6.363 17.046v-6.364l-5.09 3.977 5.09 2.386z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M6.363 10.682l-.391-.502A.636.636 0 017 10.682h-.637zm0 6.364H7a.636.636 0 01-.907.576l.27-.576zm-5.09-2.387l-.27.576a.637.637 0 01-.122-1.077l.391.501zM7 10.682v6.364H5.727v-6.364H7zm-.907 6.94l-5.09-2.387.54-1.152 5.09 2.386-.54 1.153zM.881 14.158l5.09-3.978.784 1.003-5.09 3.978-.784-1.003z"
                          fill="#121212"
                        ></path>
                        <path
                          d="M9.882 2.247c.483-.208 1.128-.128 1.83.34.696.465 1.372 1.271 1.824 2.323.452 1.052.572 2.097.43 2.922-.143.832-.529 1.355-1.012 1.563-.483.207-1.129.127-1.83-.342-.697-.464-1.373-1.27-1.825-2.322-.452-1.052-.571-2.097-.43-2.922.144-.831.53-1.355 1.013-1.562z"
                          fill="#fff"
                          stroke="#121212"
                          strokeWidth="1.27273"
                        ></path>
                        <path
                          d="M4.442 14.372c.69 3.032 4.216 5.073 8.41 4.21 4.223-.87 6.776-4.191 6.09-7.2-.683-3.001-4.437-5.019-8.649-4.165-4.82 1.48-6.437 4.58-5.85 7.155z"
                          fill="#FFC700"
                        ></path>
                        <path
                          d="M4.442 14.372c.69 3.032 4.216 5.073 8.41 4.21 4.223-.87 6.776-4.191 6.09-7.2-.683-3.001-4.437-5.019-8.649-4.165-4.82 1.48-6.437 4.58-5.85 7.155z"
                          fill="url(#paint0_linear_2061_7132)"
                        ></path>
                        <path
                          d="M4.442 14.372c.69 3.032 4.216 5.073 8.41 4.21 4.223-.87 6.776-4.191 6.09-7.2-.683-3.001-4.437-5.019-8.649-4.165-4.82 1.48-6.437 4.58-5.85 7.155z"
                          stroke="#121212"
                          strokeWidth="1.27273"
                        ></path>
                        <path
                          d="M12.726 18.564c-3.094.346-5.32-1.963-5.727-5.018-.406-3.056 1.16-5.7 4.255-6.046"
                          stroke="#121212"
                          strokeLinecap="round"
                          strokeWidth="1.27273"
                        ></path>
                        <path
                          d="M15.59 17.569c-3.817 1.386-5.188-2.312-5.618-4.2-.678-2.976.75-5.795 3.188-6.297"
                          stroke="#121212"
                          strokeLinecap="round"
                          strokeWidth="1.27273"
                        ></path>
                        <path
                          d="M4.156 4.542c-.304.43-.36 1.077-.047 1.862.31.777.957 1.606 1.891 2.267.935.661 1.933.996 2.769 1.029.843.033 1.435-.236 1.74-.665.303-.43.358-1.077.046-1.861-.31-.778-.957-1.607-1.892-2.268-.934-.661-1.932-.995-2.768-1.028-.843-.033-1.435.235-1.74.664z"
                          fill="#fff"
                          stroke="#121212"
                          strokeWidth="1.27273"
                        ></path>
                        <circle
                          fill="#121212"
                          r="0.636364"
                          stroke="#121212"
                          strokeWidth="0.636364"
                          transform="scale(-1 1) rotate(12.217 -59.622 -63.439)"
                        ></circle>
                        <defs>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id="paint0_linear_2061_7132"
                            x1="10.1232"
                            x2="13.74"
                            y1="6.60272"
                            y2="19.0304"
                          >
                            <stop stopColor="#FFE073"></stop>
                            <stop offset="1" stopColor="#FFA800"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p>Vercel welcomes Splitbee</p>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="20"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="minor-feat-1 lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-2 announcement-link flex flex-col justify-start items-center border border-white92 text-center rounded-lg shadow overflow-hidden relative">
            <div
              aria-hidden="true"
              className="uppercase font-semibold text-textgray text-xs border border-white92 px-1 rounded-[4px] absolute top-3 bg-gray05 right-3"
            >
              Beta
            </div>
            <Link href="">
              <div className="flex flex-col justify-start items-center mt-20">
                <div className=" flex flex-col justify-start items-center text-gray444">
                  <h3 className="announcement-subtext font-medium text-2xl">
                    Review your UI{" "}
                  </h3>
                  <p className="font-normal text-xl text-textgray max-w-[250px] mt-1 mb-3">
                    Leave feedback instantly with new collaboration features on
                    Previews.
                  </p>
                </div>
                <Image
                  src="/ui-comments-light.png"
                  alt=""
                  width={452}
                  height={296}
                  className="lg:absolute lg:right-0 lg:bottom-4 lg:translate-x-20"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>   
    </div>
  );
}
