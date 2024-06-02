import type { ElementData } from "hast";
import type { ClassAttributes, HTMLAttributes } from "react";
import type { ExtraProps } from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nightOwl from "react-syntax-highlighter/dist/cjs/styles/prism/night-owl";

import CopyToClipboardButton from "@/components/CopyToClipboardButton";
import { trimString } from "@/utils/remove-space";

type CustomElementDataProps = ElementData & { meta: string };
type CodeProp = {
  title: string | undefined;
  highlight: HighlightProps;
};
type HighlightProps = {
  lineNumber: number[];
};

const processNumberRange = (data: Readonly<string[]>) => {
  return data.map((part) => {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      return Array(end - start + 1)
        .fill(0)
        .map((_, i) => start + i);
    } else {
      return Number(part);
    }
  });
};

const extractHighlight = (data: Readonly<string>) => {
  const regex = /highlight:"([^"]+)"/;
  if (data.includes("highlight")) {
    const input = data.trim();
    const match = regex.exec(input.trim());

    if (match && Array.isArray(match) && match.length > 1) {
      const parts = trimString(match[1]).split(",");
      return processNumberRange(parts).flat();
    }

    return [];
  }
};

const extractFilename = (data: Readonly<string>) => {
  if (data.includes("title")) {
    const regex = /title:"([^"]+)"/;
    const match = regex.exec(data);

    if (match && Array.isArray(match) && match.length > 1) {
      return match[1];
    }

    return "";
  }
};

const extractMeta = (data: Readonly<CustomElementDataProps>) => {
  let highlight: number[] | [] = [];
  let title: string | undefined = undefined;

  if (data && data.meta) {
    const input = data.meta;
    highlight = extractHighlight(input) || [];
    title = extractFilename(input);
  }

  return {
    highlight: {
      lineNumber: highlight,
    },
    title,
  };
};

export default function Code(
  props: Readonly<
    ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
  >
) {
  const { children, className, node } = props;

  const regex = /language-(\w+)/;
  const lang = regex.exec(className || "")?.[1];
  const metadata: CodeProp | undefined =
    node && extractMeta(node.data as CustomElementDataProps);

  return lang ? (
    <>
      <div className="sticky top-0 left-0 flex justify-between px-4 py-2">
        <p className="m-0 whitespace-normal pr-4">{metadata?.title}</p>
        <CopyToClipboardButton content={String(children).replace(/\n$/, "")} />
      </div>
      <SyntaxHighlighter
        PreTag="div"
        language={lang}
        className="code-block"
        showLineNumbers={true}
        wrapLines={true}
        useInlineStyles={true}
        lineProps={(lineNumber: number) => {
          const style = { display: "block", backgroundColor: "" };

          if (
            metadata &&
            metadata.highlight &&
            metadata.highlight.lineNumber?.includes(lineNumber)
          ) {
            style.backgroundColor = "rgb(6 95 70)";
          }

          return { style };
        }}
        style={nightOwl}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  ) : (
    <code className={className} {...props} />
  );
}
