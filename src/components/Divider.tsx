import { ReactNode } from "react";

export default function Divider({
  className,
  children,
}: Readonly<{
  className?: string;
  children?: ReactNode;
}>) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-4 text-sm text-gray-500 md:px-16">
          {children}
        </span>
      </div>
    </div>
  );
}
