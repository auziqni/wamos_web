// "use client";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type getreq = {
  no_alat: number;
  air_ph: number;
  air_tds: number;
  air_suhu: number;
  udara_co: number;
  udara_no2: number;
  udara_ch3: number;
};

export async function POST(request: Request) {
  // const router = useRouter();

  const body: getreq = await request.json();
  // const router = useRouter();

  const writedata = await prisma.monitoring.create({
    data: {
      no_alat: body.no_alat,
      air_ph: body.air_ph,
      air_tds: body.air_tds,
      air_suhu: body.air_suhu,
      udara_co: body.udara_co,
      udara_no2: body.udara_no2,
      udara_ch3: body.udara_ch3,
    },
  });

  if (writedata) {
    return NextResponse.json({ status: 200, data: "berhasil" });

    // router.reload();
  } else {
    return NextResponse.json({ status: 400, data: "gagal" });
  }
}
