"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic"; // for server
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import ApexChart from "react-apexcharts"; // for dev
import Datacard from "@/components/datacard";
import { Monitoring } from "@prisma/client";
import TimeConvert from "@/lib/timeConvert";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";

const formatDataCo = (data: Monitoring[]) => {
  const datawaktu = data.map((item) => TimeConvert({ props: item }));
  //   const datawaktu = data.map((item) => item.createdat.getDate.toString);
  //   const datawaktu = TimeConvert(data);
  const dataco = data.map((item) => item.udara_co);

  return {
    series: [
      {
        name: "co",
        type: "column",
        data: dataco,
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
const formatDataNo2 = (data: Monitoring[]) => {
  const datawaktu = data.map((item) => TimeConvert({ props: item }));
  //   const datawaktu = data.map((item) => item.createdat.getDate.toString);
  //   const datawaktu = TimeConvert(data);
  const datano2 = data.map((item) => item.udara_no2);

  return {
    series: [
      {
        name: "no2",
        type: "column",
        data: datano2,
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
          seriesName: "no2",
          opposite: true,
          min: 0,
          max: 5,
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
const formatDataCh3 = (data: Monitoring[]) => {
  const datawaktu = data.map((item) => TimeConvert({ props: item }));
  //   const datawaktu = data.map((item) => item.createdat.getDate.toString);
  //   const datawaktu = TimeConvert(data);
  const datach3 = data.map((item) => item.udara_ch3);

  return {
    series: [
      {
        name: "ch3",
        type: "column",
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
          seriesName: "ch3",
          opposite: true,
          min: 0,
          max: 10,
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
    field: "udara_co",
    headerName: "CO",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "udara_no2",
    headerName: "No2",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "udara_ch3",
    headerName: "Ch3",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
];

export default function ChartUdara({ props }: { props: Monitoring[] }) {
  // const [makan, setmakan] = useState(false);
  const router = useRouter();
  router.refresh();

  const MonitoringofTen: Monitoring[] = props.slice(-10);

  const chartOptionsCo: any = formatDataCo(MonitoringofTen).options;
  const chartSeriesCo: any = formatDataCo(MonitoringofTen).series;

  const chartOptionsNo2: any = formatDataNo2(MonitoringofTen).options;
  const chartSeriesNo2: any = formatDataNo2(MonitoringofTen).series;

  const chartOptionsCh3: any = formatDataCh3(MonitoringofTen).options;
  const chartSeriesCh3: any = formatDataCh3(MonitoringofTen).series;
  // const lastData: Monitoring = props[props.length - 1]No2
  return (
    <main className="mt-20 mx-5 grid lg:grid-cols-3 gap-5 md:grid-cols-1 ">
      <div className="h-96 p-2 border border-sky-200 shadow-lg ">
        <h1 className=" text-center font-bold">Data Co</h1>
        <ApexChart
          options={chartOptionsCo}
          series={chartSeriesCo}
          height={"100%"}
        />
      </div>
      <div className="h-96 p-2 border border-sky-200 shadow-lg">
        <h1 className=" text-center font-bold">Data No2</h1>
        <ApexChart
          options={chartOptionsNo2}
          series={chartSeriesNo2}
          height={"100%"}
        />
      </div>
      <div className="h-96 p-2 border border-sky-200 shadow-lg">
        <h1 className=" text-center font-bold">Data Ch3</h1>
        <ApexChart
          options={chartOptionsCh3}
          series={chartSeriesCh3}
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
