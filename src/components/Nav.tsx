"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import NavLink from "@/components/NavLink";

export default function Nav() {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:max-w-[1366px]">
            <div className="flex h-16">
              <div className="flex flex-1 justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-auto"
                    width={0}
                    height={0}
                    sizes="100vh"
                    src="/images/logo.png"
                    alt="Vernon Wee Hong KOH"
                  />
                  <p className="hidden font-pangaia font-bold text-sorrell-brown-700 ml-4 md:block">
                    Vernon Wee Hong KOH
                  </p>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-sorrell-brown-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {links.map((link) => (
                    <NavLink
                      href={link.href}
                      title={link.title}
                      key={link.href}
                    />
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-sorrell-brown-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sorrell-brown-700">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon className="block h-6 w-6" icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon className="block h-6 w-6" icon={faBars} />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-sorrell-brown-50 border-sorrell-brown-500 text-sorrell-brown-500", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {links.map((link) => (
                <NavLink
                  href={link.href}
                  title={link.title}
                  key={link.href}
                  isMobile={true}
                />
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
