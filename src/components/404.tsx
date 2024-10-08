import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center">
        <div className="text-center">
          <p className="text-base font-semibold text-tulip-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="\"
              className="rounded-md bg-tulip-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tulip-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tulip-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
