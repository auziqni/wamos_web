"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic"; // for server
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import ApexChart from "react-apexcharts"; // for dev
import Datacard from "@/components/datacard";
import { Monitoring } from "@prisma/client";
import TimeConvert from "@/lib/timeConvert";
import { useRouter } from "next/navigation";

type mock = {
  waktu: string;
  suhu: number;
  ph: number;
  ppm: number;
};

const formatData = (data: Monitoring[]) => {
  const datawaktu = data.map((item) => TimeConvert({ props: item }));
  //   const datawaktu = data.map((item) => item.createdat.getDate.toString);
  //   const datawaktu = TimeConvert(data);
  const dataco = data.map((item) => item.udara_co);
  const datano2 = data.map((item) => item.udara_no2);
  const datach3 = data.map((item) => item.udara_ch3);

  return {
    series: [
      {
        name: "co",
        type: "column",
        data: dataco,
      },
      {
        name: "no2",
        type: "column",
        data: datano2,
      },
      {
        name: "ch3",
        type: "line",
        data: datach3,
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        width: [1, 1, 4],
      },

      // title: {
      //   text: "Monitoring Air",
      //   align: "left",
      //   offsetX: 110,
      // },

      xaxis: {
        categories: datawaktu,
      },

      yaxis: [
        {
          seriesName: "co",
          opposite: true,
          min: 0,
          max: 100,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
            formatter: function (value: any) {
              return value + "";
            },
          },
          title: {
            text: "co",
            style: {
              color: "#008FFB",
            },
          },

          tooltip: {
            enabled: true,
          },
        },

        {
          seriesName: "no2",
          opposite: true,
          min: 0,
          max: 100,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#00E396",
          },
          labels: {
            style: {
              colors: "#00E396",
            },
            formatter: function (value: any) {
              return value + "";
            },
          },
          title: {
            text: "no2",
            style: {
              color: "#00E396",
            },
          },
        },

        {
          seriesName: "ch3",
          opposite: true,
          min: 0,
          max: 10000,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#FEB019",
          },
          labels: {
            style: {
              colors: "#FEB019",
            },
            formatter: function (value: any) {
              return value + "";
            },
          },
          title: {
            text: "ch3",
            style: {
              color: "#FEB019",
            },
          },
        },
      ],

      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };
};

export default function ChartUdara({ props }: { props: Monitoring[] }) {
  // const [makan, setmakan] = useState(false);
  const router = useRouter();
  router.refresh();
  const chartOptions: any = formatData(props).options;
  const chartSeries: any = formatData(props).series;
  const lastData: Monitoring = props[props.length - 1];

  return (
    <div className="relative h-screen flex flex-col px-5">
      <div className="flex justify-between pt-5">
        {/* <Datacard tittle="waktu" nilai={lastData.createdat.getDate} /> */}
        <Datacard tittle="co" nilai={lastData.udara_co} />
        <Datacard tittle="no2" nilai={lastData.udara_no2} />
        <Datacard tittle="ch3" nilai={lastData.udara_ch3} />
      </div>
      <div className="flex-1 ">
        <ApexChart options={chartOptions} series={chartSeries} height={"90%"} />
      </div>
    </div>
  );
}
