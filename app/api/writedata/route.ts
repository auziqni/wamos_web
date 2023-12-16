// "use client";
import { NextResponse } from "next/server";
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
  q_air: number;
  q_udara: number;
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
      q_air: 1,
      q_udara: body.q_udara,
    },
  });

  if (writedata) {
    return NextResponse.json({ status: 200, data: "berhasil" });

    // router.reload();
  } else {
    return NextResponse.json({ status: 400, data: "gagal" });
  }
}
