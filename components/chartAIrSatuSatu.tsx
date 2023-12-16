"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic"; // for server
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import ApexChart from "react-apexcharts"; // for dev
import { Monitoring } from "@prisma/client";
import TimeConvert from "@/lib/timeConvert";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Showquality from "@/components/showquality";

const formatDataSuhu = (data: Monitoring[]) => {
  const datawaktu = data.map((item) => TimeConvert({ props: item }));
  //   const datawaktu = data.map((item) => item.createdat.getDate.toString);
  //   const datawaktu = TimeConvert(data);
  const datasuhu = data.map((item) => item.air_suhu);
  const dataph = data.map((item) => item.air_ph);
  const datappm = data.map((item) => item.air_tds);

  return {
    series: [
      {
        name: "suhu",
        type: "column",
        data: datasuhu,
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
          seriesName: "suhu",
          opposite: true,
          min: 15,
          max: 45,
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
              return value + " 'C";
            },
          },
          title: {
            text: "suhu",
            style: {
              color: "#008FFB",
            },
          },

          tooltip: {
            enabled: true,
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

const formatDataPh = (data: Monitoring[]) => {
  const datawaktu = data.map((item) => TimeConvert({ props: item }));
  //   const datawaktu = data.map((item) => item.createdat.getDate.toString);
  //   const datawaktu = TimeConvert(data);
  const datasuhu = data.map((item) => item.air_suhu);
  const dataph = data.map((item) => item.air_ph);
  const datappm = data.map((item) => item.air_tds);

  return {
    series: [
      {
        name: "ph",
        type: "column",
        data: dataph,
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
          seriesName: "ph",
          opposite: true,
          min: 4,
          max: 9,
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
            text: "ph",
            style: {
              color: "#00E396",
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

const formatDataTds = (data: Monitoring[]) => {
  const datawaktu = data.map((item) => TimeConvert({ props: item }));
  //   const datawaktu = data.map((item) => item.createdat.getDate.toString);
  //   const datawaktu = TimeConvert(data);
  const datasuhu = data.map((item) => item.air_suhu);
  const dataph = data.map((item) => item.air_ph);
  const datappm = data.map((item) => item.air_tds);

  return {
    series: [
      {
        name: "TDS",
        type: "column",
        data: datappm,
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
          seriesName: "ppm",
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
            text: "ppm",
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

const columns = [
  {
    field: "id",
    headerName: "No",
    width: 35,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "createdat",
    headerName: "waktu",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    renderCell: (params: any) => <TimeConvert props={params.row}></TimeConvert>,
  },
  {
    field: "air_ph",
    headerName: "PH",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "air_tds",
    headerName: "TDS",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "air_suhu",
    headerName: "SUHU",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
];

export default function ChartAir({ props }: { props: Monitoring[] }) {
  // const [makan, setmakan] = useState(false);
  const router = useRouter();
  router.refresh();

  const MonitoringofTen: Monitoring[] = props.slice(-10);

  const chartOptionsSuhu: any = formatDataSuhu(MonitoringofTen).options;
  const chartSeriesSuhu: any = formatDataSuhu(MonitoringofTen).series;

  const chartOptionsPh: any = formatDataPh(MonitoringofTen).options;
  const chartSeriesPh: any = formatDataPh(MonitoringofTen).series;

  const chartOptionsTds: any = formatDataTds(MonitoringofTen).options;
  const chartSeriesTds: any = formatDataTds(MonitoringofTen).series;
  // const lastData: Monitoring = props[props.length - 1];

  const q_air = props[props.length - 1].q_air;
  return (
    <main className="mt-20 mx-5 grid lg:grid-cols-3 gap-5 md:grid-cols-1 ">
      <div className="lg:col-span-3 md:col-span-1 mt-5">
        <Showquality type="Udara" value={q_air}></Showquality>
      </div>
      <div className="h-96 p-2 border border-sky-200 shadow-lg ">
        <h1 className=" text-center font-bold">Data Ph</h1>
        <ApexChart
          options={chartOptionsPh}
          series={chartSeriesPh}
          height={"100%"}
        />
      </div>
      <div className="h-96 p-2 border border-sky-200 shadow-lg">
        <h1 className=" text-center font-bold">Data TDS</h1>
        <ApexChart
          options={chartOptionsTds}
          series={chartSeriesTds}
          height={"100%"}
        />
      </div>
      <div className="h-96 p-2 border border-sky-200 shadow-lg">
        <h1 className=" text-center font-bold">Data Suhu</h1>
        <ApexChart
          options={chartOptionsSuhu}
          series={chartSeriesSuhu}
          height={"100%"}
        />
      </div>
      <div className=" lg:col-span-3 md:col-span-1 mt-5">
        {/* <button onClick={handleClick}>refresh</button> */}
        <Box
          sx={{
            // height: "50vh",
            width: "100%",
          }}
        >
          <DataGrid
            slots={{
              toolbar: GridToolbar,
            }}
            rows={props}
            columns={columns}
            // columns={[{headerAlign="center"}]}

            initialState={{
              pagination: { paginationModel: { pageSize: 25 } },
            }}
            pageSizeOptions={[25, 50, 100]}
            sx={{
              boxShadow: 2,
              border: 1,
              borderColor: "grey",
              "& .MuiDataGrid-cell:hover": {
                color: "green",
              },
              "& .super-app-theme--header": {
                backgroundColor: "rgba(201, 255, 252, 0.55)",
              },
            }}
            getRowId={(row) => row.id}
          />
        </Box>
      </div>
    </main>
  );
}
