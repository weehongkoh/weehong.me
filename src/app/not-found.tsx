import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-8 lg:py-24">
      <h1 className="mt-4 text-slate-400">404 - Page not found</h1>
      <p className="mt-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold leading-7 text-white">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </div>
  );
}
