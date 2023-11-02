"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function NavbarLanding() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className="flex justify-between items-center fixed inset-0 w-full h-14 z-10 bg-white/20 backdrop-blur-lg px-5 text-white">
      <div className="">WAMOS</div>
      <div className="flex justify-between items-center">
        <a className="m-5 " href="/#main">
          Dashboard
        </a>
        <a className="m-5 " href="/#description">
          Description
        </a>
        <a className="m-5 " href="/#features">
          Features
        </a>
        {isSignedIn ? (
          <></>
        ) : (
          <Link className="m-5" href={"/sign-in"}>
            {" "}
            SignIn
          </Link>
        )}

        <div className=" m-5 w-36 h-10 bg-blue-400 flex items-center justify-center rounded-lg">
          <Link className="" href={isSignedIn ? "/monitorair" : "/sign-up"}>
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
