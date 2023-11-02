"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import type { Monitoring } from "@prisma/client";
import Link from "next/link";
import TimeConvert from "@/lib/timeConvert";
import { useRouter } from "next/navigation";
import { Route } from "next";

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

export function RefreshTableAIr() {
  const router = useRouter();
  router.refresh();
}

export default function Table({ props }: { props: Monitoring[] }) {
  const router = useRouter();
  const handleClick = () => {
    router.refresh();
  };

  router.refresh();
  return (
    <div>
      <button onClick={handleClick}>refresh</button>
      <Box
        sx={{
          height: "70vh",
          width: "100%",
        }}
      >
        <DataGrid
          rows={props}
          // rows={jamaahs}
          columns={columns}
          // columns={[{headerAlign="center"}]}
          // components={{ Toolbar: GridToolbar }}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          sx={{
            boxShadow: 2,
            border: 1,
            borderColor: "green",
            "& .MuiDataGrid-cell:hover": {
              color: "green",
            },
          }}
          getRowId={(row) => row.id}
        />
      </Box>
    </div>
  );
}
