import React from "react";
import Link from "next/link";
import { GetDataMonitoringofTen } from "@/lib/getData";
import ChartAir from "@/components/chartAIr";
export const dynamic = "force-dynamic";

export default async function DashboardAir() {
  const DataMonitoring = await GetDataMonitoringofTen();

  return (
    <main className="pt-20 px-5 h-screen overflow-clip">
      <h3>
        Monitoring Air <Link href={"monitorair/alldata"}>➡️</Link>
      </h3>
      <ChartAir props={DataMonitoring}></ChartAir>
    </main>
  );
}
