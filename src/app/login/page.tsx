"use client";

import { DiscordIcon } from "@/icons/discord";
import { XIcon } from "@/icons/x";
import React, { Suspense, useEffect } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import ErrorToaster from "./errorToaster";

export default function LoginPage() {
  return (
    <>
      <Suspense fallback={<></>}>
        <ErrorToaster />
      </Suspense>
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto h-28 w-auto"
            src="/img/logo-slim.webp"
            alt="Next.js Logo"
            width={4200}
            height={2100}
            priority
          />
          <h2 className="my-6 text-center text-xl font-bold leading-9 tracking-tight text-tulip-400">
            LET&apos;S COOK
          </h2>
        </div>

        <div className="bg-zinc-900 border border-tulip-400/20 px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <button
            onClick={() => signIn("twitter", { redirectTo: "/app/home" })}
            className="flex items-center justify-center gap-3 rounded-md bg-zinc-900/20 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-tulip-400/20 hover:bg-zinc-800 focus-visible:ring-transparent"
          >
            <XIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white fill-tulip-400" />

            <span className="text-sm font-thin leading-6 text-gray-100">
              Twitter Login
            </span>
          </button>

          <div className="relative my-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full border-t border-tulip-400/20" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-zinc-900 px-6 text-gray-400">Or</span>
            </div>
          </div>
          <button
            onClick={() => signIn("discord", { redirectTo: "/app/home" })}
            className="flex items-center justify-center gap-3 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-tulip-400/20 hover:bg-zinc-800 focus-visible:ring-transparent"
          >
            <DiscordIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400" />

            <span className="text-sm font-semibold leading-6 text-gray-100">
              Discord Login
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
