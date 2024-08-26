"use client";

import { FadeIn, FadeInStagger } from "@/lib/faderIn";
import { use, useEffect, useState } from "react";
import { Tweet } from "react-tweet";

export default function Tweets() {
  const [tweets, setTweets] = useState<string[]>([
    "1797629548370018460",
    "1807773009433801100",
    "1817130283541397599",
  ]);

  return (
    <FadeInStagger id="highlights">
      <div className="bg-zinc-950 py-24 w-full sm:py-32 border-y border-tulip-400/20 ">
        <FadeIn className="text-center">
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-tulip-400 ">
            Highlights
          </h1>
        </FadeIn>
        <FadeIn className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mt-8">
          {tweets?.map((tweet: string) => (
            <div key={tweet} data-theme="dark" className="tweet-class px-4 ">
              <Tweet id={tweet} />
            </div>
          ))}
        </FadeIn>
      </div>
    </FadeInStagger>
  );
}
