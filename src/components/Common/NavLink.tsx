import Link from "next/link";
import { usePathname } from "next/navigation";

import { DisclosureButton } from "@headlessui/react";

import { classNames } from "@/utils";

export default function NavLink({
  href,
  title,
  isMobile = false,
}: Readonly<{
  href: string;
  title: string;
  isMobile?: boolean;
}>) {
  const currentPath = usePathname();

  return isMobile ? (
    <DisclosureButton
      as={Link}
      href={href}
      className={classNames(
        currentPath === href ? "text-sorrell-brown-500" : "",
        "block py-2 pl-6 text-base font-medium",
      )}
    >
      {title}
    </DisclosureButton>
  ) : (
    <Link
      href={href}
      className={classNames(
        currentPath === href ? "text-sorrell-brown-500" : "",
        "inline-flex items-center px-1 pt-1 text-sm font-medium",
      )}
    >
      {title}
    </Link>
  );
}
