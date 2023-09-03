import Image from "next/image";
import Link from "next/link";

const navigation = {
  generalResources: [
    { name: "Docs", href: "#" },
    { name: "Learn", href: "#" },
    { name: "Showcase", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Next.js Conf", href: "#" },
    { name: "Live", href: "#" },
  ],
  more: [
    { name: "Comerce", href: "#" },
    { name: "Contact Sales", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Releases", href: "#" },
    { name: "Telemetry", href: "#" },
  ],
  aboutVercel: [
    { name: "Next.js + Vercel", href: "#" },
    { name: "Open Source Software", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Twitter", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-white98 border-white92 border overflow-hidden m-0"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex flex-col justify-start items-start max-w-7xl ml-20 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="footer-grid items-start justify-start mt-12 grid grid-cols-4 gap-8 w-full">
          <div>
            <h3 className="text-sm font-medium text-black">
              General Resources
            </h3>
            <ul role="list" className="mt-4 space-y-1">
              {navigation.generalResources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-black">More</h3>
            <ul role="list" className="mt-4 space-y-1">
              {navigation.more.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-black">
              About Vercel
            </h3>
            <ul role="list" className="mt-4 space-y-1">
              {navigation.aboutVercel.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-black">
              Legal
            </h3>
            <ul role="list" className="mt-4 space-y-1">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-7 pt-8 gap-4">
            <Image src="/vercel.svg" alt="" width={100} height={24} />
          <p className="text-xs text-textgray">Copyright &copy; 2020 Vercel, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
