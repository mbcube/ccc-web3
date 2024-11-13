"use client";

import { signIn } from "next-auth/react";
import { DiscordIcon } from "@/icons/discord";
import React from "react";

export default function LinkDiscordButton() {
  return (
    <button
      onClick={() => signIn("discord", { redirectTo: "/app/profile" })}
      className="flex items-center justify-center gap-3 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-tulip-400/20 hover:bg-zinc-800 focus-visible:ring-transparent"
    >
      <DiscordIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-tulip-400" />
      <span className="text-sm font-semibold leading-6 text-gray-100">
        Link Discord
      </span>
    </button>
  );
}
