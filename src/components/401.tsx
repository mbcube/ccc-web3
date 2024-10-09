import Link from "next/link";

export default function Unauthorized() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="text-center">
          <p className="text-base font-semibold text-tulip-600">401</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            Unauthorized
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Sorry, your powerlevel is too low to view this page.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="\login"
              className="rounded-md bg-tulip-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tulip-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tulip-600"
            >
              Login
            </Link>
            <Link href="\" className="text-sm font-semibold text-gray-100">
              Go back home <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
