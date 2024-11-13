"use client";

import Unauthorized from "@/components/401";

import { auth } from "@/lib/auth/auth";
import { useState } from "react";
import { Tweet } from "react-tweet";

export default function Home() {
  // const session = await auth();
  const [tweetId, setTweetId] = useState("");

  // if (!session?.user) return <Unauthorized />;

  return (
    <section>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-100">
            Home
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <input
            id="tweetId"
            name="tweetId"
            type="text"
            placeholder="your tweet id"
            value={tweetId}
            onChange={(e) => setTweetId(e.target.value)}
            className="block w-56 px-2 rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {tweetId && (
            <div data-theme="dark" className="tweet-class px-4 ">
              <Tweet id={tweetId} />
            </div>
          )}
        </div>
      </main>
    </section>
  );
}
