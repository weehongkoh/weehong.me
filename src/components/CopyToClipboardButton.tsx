"use client";

import { useState } from "react";

import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CopyToClipboardButton({
  content,
}: Readonly<{
  content: string;
}>) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <button disabled={isCopied} onClick={copy}>
      <FontAwesomeIcon icon={faCopy} className="mr-1 h-4 w-4" />
      <span>{isCopied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
