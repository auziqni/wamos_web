import React from "react";

export default function Datacard({
  tittle,
  nilai,
}: {
  tittle: string;
  nilai: any;
}) {
  return (
    <div className="w-40 h-10 p-1 flex justify-between border border-solid border-black">
      <h1>{tittle}</h1>
      <h2 className="text-right">{nilai}</h2>
    </div>
  );
}
