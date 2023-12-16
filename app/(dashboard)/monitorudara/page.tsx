import React from "react";
import Link from "next/link";
import { GetDataMonitoring } from "@/lib/getData";
export const dynamic = "force-dynamic";
import ChartUdara from "@/components/chartUdaraSatuSatu";

export default async function DashboardAir() {
  const DataMonitoring = await GetDataMonitoring();

  return (
    <main>
      <ChartUdara props={DataMonitoring}></ChartUdara>
    </main>
  );
}
