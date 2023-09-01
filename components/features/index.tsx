import Image from "next/image";
import Link from "next/link";

export default function Features() {
  const feturesGridList = [
    {
      title: "Image Optimization",
      description:
        "<Image> and Automatic Image Optimization with instant builds.",
      link: "#",
    },
    {
      title: "Internationalization",
      description:
        "Built-in Domain & Subdomain Routing and Automatic Language detection.",
      link: "#",
    },
    {
      title: "Next.js Analytics",
      description:
        "A true lighthouse score based on real visitor data & page-by-page insights",
      link: "#",
    },
    {
      title: "Zero Config",
      description:
        "Automatic compilation and bundling. Optimized for production from the start.",
      link: "#",
    },
    {
      title: "Hybrid: SSG and SSR",
      description:
        "Pre-render pages at build time (SSG) or request time (SSR) in a single project.",
      link: "#",
    },
    {
      title: "Incremental Static Regeneration",
      description:
        "Add and update statically pre-rendered pages incrementally after build time.",
      link: "#",
    },
    {
      title: "TypeScript Support",
      description: "Automatic TypeScript configuration and compilation.",
      link: "#",
    },
    {
      title: "Fast Refresh",
      description:
        "Fast, reliable live-editing experience, as proven at Facebook scale.",
      link: "#",
    },
    {
      title: "File-system Routing",
      description: "Every component in the `pages` directory becomes a route.",
      link: "#",
    },
    {
      title: "API Routes",
      description:
        "Optionally create API endpoints to provide backend functionality.",
      link: "#",
    },
    {
      title: "Built-in CSS Support",
      description:
        "Create component-level styles with CSS modules. Built-in Sass support.",
      link: "#",
    },
    {
      title: "Middleware",
      description: "Dynamic routing defined by code instead of configuration.",
      link: "#",
    },
  ];

  const logoList1 = [
    {
      logo: "/logo-list1/1.svg",
      height: 40,
      width: 328,
    },
    {
      logo: "/logo-list1/2.svg",
      height: 36,
      width: 96,
    },
    {
      logo: "/logo-list1/3.svg",
      height: 40,
      width: 116,
    },
    {
      logo: "/logo-list1/4.svg",
      height: 33,
      width: 122,
    },
    {
      logo: "/logo-list1/5.svg",
      height: 31,
      width: 112,
    },
    {
      logo: "/logo-list1/6.svg",
      height: 31,
      width: 113,
    },
    {
      logo: "/logo-list1/7.svg",
      height: 36,
      width: 111,
    },
    {
      logo: "/logo-list1/8.svg",
      height: 30,
      width: 225,
    },
    {
      logo: "/logo-list1/9.svg",
      height: 40,
      width: 120,
    },
    {
      logo: "/logo-list1/10.svg",
      height: 40,
      width: 213,
    },
    {
      logo: "/logo-list1/11.svg",
      height: 42,
      width: 80,
    },
  ];

  const logoList2 = [
    {
      logo: "/logo-list2/1.svg",
      height: 44,
      width: 122,
    },
    {
      logo: "/logo-list2/2.svg",
      height: 36,
      width: 240,
    },
    {
      logo: "/logo-list2/3.svg",
      height: 45,
      width: 120,
    },
    {
      logo: "/logo-list2/4.svg",
      height: 58,
      width: 57,
    },
    {
      logo: "/logo-list2/5.svg",
      height: 52,
      width: 184,
    },
    {
      logo: "/logo-list2/6.svg",
      height: 36,
      width: 105,
    },
    {
      logo: "/logo-list2/7.svg",
      height: 36,
      width: 156,
    },
    {
      logo: "/logo-list2/8.svg",
      height: 35,
      width: 100,
    },
    {
      logo: "/logo-list2/9.svg",
      height: 48,
      width: 159,
    },
    {
      logo: "/logo-list2/10.svg",
      height: 37,
      width: 103,
    },
    {
      logo: "/logo-list2/11.svg",
      height: 64,
      width: 219,
    },
  ];

  return (
    <div className="features main  text-center mx-auto overflow-hidden">
      <div className="features features-list flex flex-col justify-center items-center px-4 py-28 max-w-5xl mx-auto">
        <div className="features-title flex-col justify-center items-center mt-4 mb-12">
          <h2 className="text-3xl m-4 leading-5 tracking-tighter font-bold">
            The Web SDK
          </h2>
          <h3 className="font-normal text-base text-gray ">
            Next.js has all the tools you need to make the Web. Faster.
          </h3>
        </div>
        <div className="features-grid flex flex-col gap-6">
          {feturesGridList.map((item, index) => (
            <div
              className="features-card flex flex-col border border-white92 p-6 text-left rounded-md gap-4"
              key={index}
            >
              <h3 className="font-bold text-lg leading-6">{item.title}</h3>
              <p className="text-sm leading-6">{item.description}</p>
              <div>
                <Link href={item.link} className="text-sm text-blue">
                  Documentation →
                </Link>
              </div>
            </div>
          ))}
          {/* mobile  */}
          <div className="features-card-hide-on-desktop flex flex-col border border-white92 p-6 text-left rounded-md gap-4">
            <h3 className="font-bold text-lg leading-6">And more</h3>
            <p className="text-sm leading-6">
              Support for{" "}
              <Link href="" className="text-blue hover:text-lightblue">
                environment variables
              </Link>
              ,{" "}
              <Link href="" className="text-blue hover:text-lightblue">
                preview mode
              </Link>
              ,{" "}
              <Link href="" className="text-blue hover:text-lightblue">
                custom head tags
              </Link>
              ,{" "}
              <Link href="" className="text-blue hover:text-lightblue">
                automatic polyfills
              </Link>
              , and more.
            </p>
          </div>
        </div>
        <p className="features-card-more-on-desktop hidden text-sm leading-6 my-10">
          <strong>And more: </strong>
          Support for{" "}
          <Link href="" className="text-blue hover:text-lightblue">
            environment variables
          </Link>
          ,{" "}
          <Link href="" className="text-blue hover:text-lightblue">
            preview mode
          </Link>
          ,{" "}
          <Link href="" className="text-blue hover:text-lightblue">
            custom head tags
          </Link>
          ,{" "}
          <Link href="" className="text-blue hover:text-lightblue">
            automatic polyfills
          </Link>
          , and more.
        </p>
      </div>
      <div className="company-slider mt-8 mb-16">
        <div className="slider-container  overflow-hidden py-4">
          <div className="slider-content-wrapper flex  justify-around items-center whitespace-nowrap animate-slide80">
          {logoList1.map((logoitem, index) => (
                <div
                  className="slide flex-shrink-0 px-8 py-2 hover:opacity-100 opacity-50 "
                  key={index}
                >
                  <Image
                    src={logoitem.logo}
                    alt=""
                    height={logoitem.height}
                    width={logoitem.width}
                  />
                </div>
              ))}
              {logoList1.map((logoitem, index) => (
                <div
                  className="slide flex-shrink-0 px-8 py-2 hover:opacity-100 opacity-50 "
                  key={index}
                >
                  <Image
                    src={logoitem.logo}
                    alt=""
                    height={logoitem.height}
                    width={logoitem.width}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="margin-bottom:1rem mb-4"></div>
        <div className="slider-container flex overflow-hidden py-4 ">
          <div className="slider-content-wrapper flex whitespace-nowrap animate-slide100 ">
          {logoList2.map((logoitem, index) => (
                <div
                  className="slide flex-shrink-0 px-8 py-2 hover:opacity-100 opacity-50"
                  key={index}
                >
                  <Image
                    src={logoitem.logo}
                    alt=""
                    height={logoitem.height}
                    width={logoitem.width}
                  />
                </div>
              ))}
              {logoList2.map((logoitem, index) => (
                <div
                  className="slide flex-shrink-0 px-8 py-2 hover:opacity-100 opacity-50"
                  key={index}
                >
                  <Image
                    src={logoitem.logo}
                    alt=""
                    height={logoitem.height}
                    width={logoitem.width}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
