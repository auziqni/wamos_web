"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function NavbarLanding() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className="flex justify-between items-center fixed inset-0 w-full h-14 z-10 bg-white/20 backdrop-blur-lg px-5">
      <div className="">WAMOS</div>
      <div className="flex justify-between items-center">
        <a className="m-5" href="/">
          Dashboard
        </a>
        <a className="m-5" href="/">
          Description
        </a>
        <a className="m-5" href="/">
          Features
        </a>
        {isSignedIn ? <></> : <Link href={"/sign-in"}> SignIn</Link>}

        <div className=" w-36 h-10 bg-green-400 text-center ">
          <Link href={isSignedIn ? "/monitorair" : "/sign-up"}>
            {" "}
            {isSignedIn ? "Dashboard" : "Sign Up"}
          </Link>
          {/* <a className="m-5" href="/">
            Sign Up
          </a> */}
        </div>
      </div>
    </div>
  );
}
