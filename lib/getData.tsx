import { PrismaClient } from "@prisma/client";
// import { currentUser } from "@clerk/nextjs";
const prisma = new PrismaClient();

export const GetDataMonitoring = async () => {
  //   const user = await currentUser();
  const res = await prisma.monitoring.findMany({
    where: {
      no_alat: 1,
    },
    select: {
      id: true,
      no_alat: true,
      createdat: true,
      air_ph: true,
      air_tds: true,
      air_suhu: true,
      udara_co: true,
      udara_no2: true,
      udara_ch3: true,
    },
  });
  return res;
};

export const GetDataMonitoringofTen = async () => {
  //   const user = await currentUser();
  const res = await prisma.monitoring.findMany({
    take: 10,
    orderBy: {
      createdat: "desc", // Mengurutkan berdasarkan kolom 'date' secara descending (dari yang terbaru)
    },
    where: {
      no_alat: 1,
    },
    select: {
      id: true,
      no_alat: true,
      createdat: true,
      air_ph: true,
      air_tds: true,
      air_suhu: true,
      udara_co: true,
      udara_no2: true,
      udara_ch3: true,
    },
  });

  const reverse = res.reverse();
  return reverse;
};
