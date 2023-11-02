"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function NavbarDashboard() {
  return (
    <div className="flex justify-between items-center fixed inset-0 w-full h-14 z-10 bg-white/20 backdrop-blur-lg shadow-lg px-5">
      <div className="">WAMOS</div>
      <div className="flex justify-between items-center mr-10">
        <Link className=" m-5" href={"/monitorair"}>
          Air
        </Link>
        <Link className=" m-5" href={"/monitorudara"}>
          Udara
        </Link>
      </div>
    </div>
  );
}
