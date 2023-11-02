import React from "react";
import Image from "next/image";

type data = {
  src: string;
  tittle: string;
  desc: string;
};

export default function FeatureCard({ src, tittle, desc }: data) {
  return (
    <div className="relative flex h-20 items-center border border-black rounded-xl m-8 p-2">
      <Image src={src} alt={tittle} width={50} height={50}></Image>
      <div className="ml-7">
        <h1>{tittle}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
  );
}
