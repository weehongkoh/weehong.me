import "@/styles/loader.scss";

export default function Loader({ message }: Readonly<{ message?: string }>) {
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-sky-950">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="firstSquare"
            x="1.5"
            y="1.5"
            rx="1"
            width="9"
            height="9"
          />
          <rect
            className="secondSquare"
            x="13.5"
            y="1.5"
            rx="1"
            width="9"
            height="9"
          />
          <rect
            className="fourthSquare"
            x="13.5"
            y="13.5"
            rx="1"
            width="9"
            height="9"
          />
          <rect
            className="thirdSquare"
            x="1.5"
            y="13.5"
            rx="1"
            width="9"
            height="9"
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}
