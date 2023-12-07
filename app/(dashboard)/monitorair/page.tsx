import React from "react";
import Link from "next/link";
import { GetDataMonitoringofTen, GetDataMonitoring } from "@/lib/getData";
import ChartAir from "@/components/chartAIrSatuSatu";
export const dynamic = "force-dynamic";

export default async function DashboardAir() {
  // const DataMonitoring = await GetDataMonitoringofTen();
  const DataMonitoring = await GetDataMonitoring();

  return (
    <main>
      <ChartAir props={DataMonitoring}></ChartAir>
    </main>
  );
}
