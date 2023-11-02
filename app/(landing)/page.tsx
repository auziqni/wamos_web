import Image from "next/image";
import FeatureCard from "@/components/featureCard";
export default function Home() {
  return (
    <main>
      <section className="relative flex items-center justify-center overflow-clip w-full h-screen bg-slate-300 ">
        <Image
          className="absolute z-0 min-h-screen"
          src="/image/landingbg.jpg"
          alt="fish monitor"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          height={10}
          width={20}
        ></Image>
        <div className="h-60 w-96 z-10 bg-white/20 rounded-2xl  ">
          <div>
            <h1>masuk</h1>
            <h2 className="h-10 w-20 bg-red-300">masuk</h2>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-slate-400 p-10">
        <div>Kenalan Dengan Wamos</div>

        <div>
          <h2>
            WAMOS adalah solusi inovatif dalam dunia Internet of Things (IoT)
            yang dirancang khusus untuk memantau dua aspek penting dalam
            lingkungan akuatik dan udara. Dengan menggabungkan teknologi
            canggih, WAMOS memberikan kontrol penuh dan informasi real-time
            untuk memastikan kualitas air dalam kolam ikan dan kebersihan udara
            di sekitarnya. Ini adalah langkah maju dalam memastikan
            kesejahteraan lingkungan demi menjaga kelangsungan hidup makhluk
            hidup dan ekosistem.
          </h2>
        </div>
        <div className="grid grid-cols-3 mt-10 ">
          <div className="relative bg-white">gambar</div>
          <p className="col-span-2">
            WAMOS hadir dengan fitur canggih untuk memantau kondisi kolam ikan
            secara akurat. Sensor yang sensitif dan sistem analitik yang cerdas
            memonitor parameter penting seperti suhu, pH, kadar oksigen, dan
            kualitas air secara keseluruhan. Ketika parameter-parameter ini
            berada di luar kisaran yang aman untuk ikan, WAMOS akan memberikan
            notifikasi seketika kepada pemilik, memungkinkan tindakan cepat
            untuk menjaga kesehatan ikan dan lingkungan akuatik secara optimal.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-10">
          <p className="col-span-2">
            WAMOS juga dilengkapi dengan sensor canggih untuk memeriksa kualitas
            udara di sekitar kolam ikan. Pemantauan ini meliputi parameter
            seperti kualitas udara, suhu, kelembaban, dan tingkat polusi.
            Informasi ini memberikan wawasan mendalam tentang lingkungan sekitar
            kolam ikan, membantu menjaga kesehatan ikan dan mencegah dampak
            buruk dari perubahan lingkungan.
          </p>
          <div className="relative bg-white">gambar</div>
        </div>
      </section>

      <section className="relative w-full  bg-slate-200">
        <div className="w-32 mx-auto ">Fitur</div>
        <div className="flex justify-evenly ">
          <div className="grid grid-cols-1">
            <FeatureCard
              src="/image/water-temp.png"
              tittle="temp"
              desc="Sensor suhu di WAMOS mengukur suhu air, memberikan informasi tentang kondisi lingkungan sekitar kolam ikan."
            />
            <FeatureCard
              src="/image/water-ph.png"
              tittle="ph"
              desc="Sensor TDS pada WAMOS menghitung jumlah total padatan terlarut dalam air, membantu memahami kejernihan air"
            />
            <FeatureCard
              src="/image/water-tds.png"
              tittle="tds"
              desc="Sensor TDS pada WAMOS menghitung jumlah total padatan terlarut dalam air, membantu memahami kejernihan air."
            />
          </div>
          <div className="grid grid-cols-1">
            <FeatureCard
              src="/image/water-temp.png"
              tittle="CO"
              desc="WAMOS mengukur kadar karbon monoksida (CO) dalam udara sekitar, membantu mengawasi tingkat polusi udara."
            />
            <FeatureCard
              src="/image/water-ph.png"
              tittle="No2"
              desc="Dengan sensor NO2, WAMOS mendeteksi konsentrasi nitrogen dioksida dalam udara untuk memantau kualitas udara."
            />
            <FeatureCard
              src="/image/water-tds.png"
              tittle="NH3"
              desc="Sensor CH3 pada WAMOS mengenali bau organik dalam udara, memberikan petunjuk tentang kesehatan lingkungan sekitar."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
