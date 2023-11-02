import React from "react";
import Table from "@/components/tableUdara";
import { GetDataMonitoring } from "@/lib/getData";
export const dynamic = "force-dynamic";

export default async function page() {
  const DataMonitoring = await GetDataMonitoring();

  return (
    <div className="pt-20 px-5">
      ini data{" "}
      <div>
        <Table props={DataMonitoring}></Table>
      </div>
    </div>
  );
}
