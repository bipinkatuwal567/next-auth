"use client";

import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex justify-between p-4 items-center bg-white w-4/5 sm:w-[600px] rounded-xl shadow-sm">
      <div className="flex gap-x-2">
      <Button asChild variant={pathName === "/server" ? "default" : "outline"}>
        <Link href={"/server"}>Server</Link>
      </Button>
      <Button asChild variant={pathName === "/client" ? "default" : "outline"}>
        <Link href={"/client"}>Client</Link>
      </Button>
      <Button asChild variant={pathName === "/admin" ? "default" : "outline"}>
        <Link href={"/admin"}>Admin</Link>
      </Button>
      <Button asChild variant={pathName === "/settings" ? "default" : "outline"}>
        <Link href={"/settings"}>Settings</Link>
      </Button>
      </div>

      <UserButton />
    </nav>
  );
};

export default Navbar;
