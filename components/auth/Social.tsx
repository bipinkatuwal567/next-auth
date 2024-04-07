'use client';
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button variant="outline" size="lg" className="w-full">
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button variant="outline" size="lg" className="w-full">
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Social;
