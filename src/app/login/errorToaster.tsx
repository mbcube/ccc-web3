"use client";

import { useEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
export default function ErrorToaster() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const error = params.get("error");
    if (error) {
      toast.error("Unable to sign in, please try again later.");
      router.push("/login");
    }
  }, [params]);

  return <></>;
}
