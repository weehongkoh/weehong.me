"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import NavLink from "@/components/Common/NavLink";

export default function Nav() {
  const links = [
    {
      title: "Home",
      href: "/",
    },
  ];

  return (
    <Disclosure as="nav" className="fixed left-0 top-0 w-full bg-sky-950">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 lg:py-0">
            <div className="flex h-16">
              <div className="flex flex-1 justify-between">
                <div className="hidden sm:ml-auto sm:flex sm:space-x-8">
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
                <DisclosureButton className="text-sorrell-brown-500 focus:ring-sorrell-brown-700 relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset">
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
