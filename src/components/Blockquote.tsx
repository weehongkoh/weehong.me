import type { ClassAttributes, HTMLAttributes } from "react";
import type { ExtraProps } from "react-markdown";

export default function Blockquote(
  props: Readonly<
    ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
  >
) {
  const { children } = props;
  return (
    <blockquote className="relative px-4 py-2 font-playfair bg-clover-100 border-l-4 border-clover-600">
      {children}
    </blockquote>
  );
}
