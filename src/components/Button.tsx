import type { MouseEventHandler } from "react";

type ButtonProps = Readonly<{
  title?: string;
  children?: React.ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}>;

export default function Button(props: Readonly<ButtonProps>) {
  const { title, children, onClick } = props;
  return (
    <button
      type="button"
      className="rounded-md bg-sorrell-brown-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sorrell-brown-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sorrell-brown-500"
      onClick={onClick}
    >
      {title ?? "Button Name"}
      {children ?? "Button Children"}
    </button>
  );
}
