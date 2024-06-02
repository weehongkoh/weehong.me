import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-4 py-8 mx-auto flex flex-col justify-center sm:px-6 lg:container">
      <p className="text-base font-semibold leading-8 text-clover-600 ">404</p>
      <h1 className="mt-4 text-3xl text-sorrell-brown-600 font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="text-sm font-semibold leading-7 text-clover-600"
        >
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </main>
  );
}
