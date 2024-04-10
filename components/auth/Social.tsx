'use client';
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

const Social = () => {
  const onClick = (provider: 'github' | "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button onClick={() => onClick("google")} variant="outline" size="lg" className="w-full">
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button onClick={() => onClick("github")} variant="outline" size="lg" className="w-full">
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Social;
