import React from "react";
import Link from "next/link";
import { GetDataMonitoringofTen } from "@/lib/getData";
export const dynamic = "force-dynamic";
import ChartUdara from "@/components/chartUdara";

export default async function DashboardAir() {
  const DataMonitoring = await GetDataMonitoringofTen();

  return (
    <main className="pt-20 px-5 h-screen overflow-clip">
      <h3>
        Monitoring Udara<Link href={"monitorudara/alldata"}>➡️</Link>
      </h3>
      <ChartUdara props={DataMonitoring}></ChartUdara>
    </main>
  );
}
