"use client";

import { useEffect, useState } from "react";

import { animate, scroll } from "motion";

export default function ReadingProgressIndicator() {
  const [show, setShow] = useState(false);

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scroll(animate(".progress", { strokeDasharray: ["0,1", "1,0"] }));
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <button
      className="block max-content ml-auto sticky bottom-5 right-0 z-20"
      onClick={jumpToTop}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="svg-progress"
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
        {show && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-mondo-600"
            x="35"
            y="35"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
              transform="rotate(-90 12 12)"
            />
          </svg>
        )}
      </svg>
    </button>
  );
}
