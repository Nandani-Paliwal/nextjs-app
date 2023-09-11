"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [navbarColor, setNavbarColor] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    });
  }

  return (
    <div className="header flex justify-center items-center flex-col sticky top-0 z-50 bg-none">
      <div className="banner flex justify-center bg-black text-white w-full h-14">
        <div className="inner flex justify-between items-center w-full px-3 mx-auto max-w-5xl">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
          <p className="font-medium ">
            Deploy <b>Next.js</b> on Vercel{" "}
            <span aria-hidden="true">&rarr;</span>
          </p>
        </div>
      </div>
      <header
        className={`flex flex-col justify-center items-center w-full text-base h-[80px] mx-auto px-4 ${
          navbarColor ? "backdrop-blur-md" : null
        } `}
      >
        <div className="flex flex-col justify-center w-full h-full bg-none max-w-5xl ">
          <nav
            className=" flex relative h-full gap-2 w-full items-center justify-between "
            aria-label="Global"
          >
            <div className=" flex items-center">
              <Link href="#" className="-m-1.5 p-1.5 mr-6 px-4">
                <span className="sr-only">Nextjs</span>
                <Image
                  src="/next.svg"
                  alt=""
                  height={18.28}
                  width={90}
                  
                />
              </Link>
              {/* desktop nav items */}
              <Popover.Group className=" desktop-navItems flex gap-x-6">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray hover:text-black"
                >
                  Showcase
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray hover:text-black"
                >
                  Docs
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray hover:text-black"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold text-gray hover:text-black"
                >
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray hover:text-black"
                >
                  Enterprise
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray hover:text-black"
                >
                  Templates
                </Link>
              </Popover.Group>
            </div>
            <div className="flex justify-end items-center ">
              <div className="navbar-header-buttons flex justify-between items-center gap-2">
                <Link href="#" className="cursor-pointer">
                  <div className="cursor-none rounded-lg relative shadow-md ">
                    <span className="conf-gradient-wrapper-container_gradientWrapper rounded-[7px]">
                    <span
                  aria-hidden="true"
                  className="conf-gradient-wrapper_grayscaleBorder__BOowP conf-gradient-wrapper_gradient__4eJTD rounded-[7px]"
                ></span>
                <span
                  aria-hidden="true"
                  className="conf-gradient-wrapper_active__noDev"
                ></span>
                <span className="conf-gradient-wrapper_children">
                  <div className="hero-buttons-contents gap-3 h-[34px] flex justify-between items-center px-3 text-sm text-black bg-white rounded-[5px] whitespace-nowrap">
                    <p>Nextjs Conf</p>
                  </div>
                </span>
                    </span>

                  </div>
                </Link>
                <div className="Nextjs-Feedback-Btn flex relative justify-center items-center rounded bg-white shadow py-2 px-3 text-gray text-sm border border-transparent hover:border-black hover:border">
                  <Link href="#">Feedback</Link>
                </div>
                <div className="Nextjs-Learn-Btn flex relative justify-center items-center rounded border border-blue bg-blue py-2 px-4 text-white  text-sm hover:bg-transparent hover:text-blue">
                  <Link href="#">Learn</Link>
                </div>
                <Link href="#">
                  <Image
                    src="/github.svg"
                    alt="githubICon"
                    height={25}
                    width={25}
                    className="github-icon flex"
                  />
                </Link>
              </div>
              <div className="mobile-menu hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </nav>
          {/* mobile view */}
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed flex flex-col justify-between inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Nextjs </span>
                  <Image
                    className="h-8 w-auto"
                    src="/next.svg"
                    alt=""
                    height={100}
                    width={100}
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:text-black"
                    >
                      Showcase
                    </Link>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:text-black"
                    >
                      Docs
                    </Link>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:text-black"
                    >
                      Blog
                    </Link>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:text-black"
                    >
                      Analytics
                    </Link>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:text-black"
                    >
                      Enterprise
                    </Link>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:text-black"
                    >
                      Templates
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </header>
    </div>
  );
}
