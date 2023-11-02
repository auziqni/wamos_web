"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function NavbarDashboard() {
  const router = useRouter();

  const backtolanding = () => {
    router.push("/");
  };
  return (
    <div className="flex justify-between items-center fixed inset-0 w-full h-14 z-10 bg-white/20 backdrop-blur-lg shadow-lg px-5">
      <div onClick={backtolanding} className="">
        WAMOS
      </div>

      <div className="flex justify-between items-center mr-10">
        <Link className=" m-5" href={"/monitorair"}>
          Air
        </Link>
        <Link className=" m-5" href={"/monitorudara"}>
          Udara
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
