import React from "react";
import type { Monitoring } from "@prisma/client";

export default function TimeConvert({ props }: { props: Monitoring }) {
  const dateText = props.createdat;
  const dateObject = new Date(dateText);

  const tanggal = dateObject.toLocaleDateString(); // Mengambil tanggal
  const jam = dateObject.toLocaleTimeString(); // Mengambil jam

  return tanggal + jam;
}
