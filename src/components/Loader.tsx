import "@/styles/loader.scss";

export default function Loader({ message }: Readonly<{ message?: string }>) {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-10 bg-white">
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-5">
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
