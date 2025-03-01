import Image from "next/image";
import Navbar from "./components/Navbar";
import Herobg from "./assets/bgHero.png";
import About1 from "./assets/Rocket.png";
import Misi1 from "./assets/Branch.png";
import Misi2 from "./assets/Lovehand.png";
import Misi3 from "./assets/Screen.png";
import Product1 from "./assets/iWartel.png";
import Product2 from "./assets/Imcpas.png";
import Product3 from "./assets/Paypas.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <hero className="flex text-left h-[75vh] items-center px-14">
      <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-b from-transparent to-[#0502B3] z-10 opacity-20"></div>
        <Image src={Herobg} 
          alt="Hero Background" 
          objectFit="contain" 
          objectPosition="bottom right" 
          style={{ height: "70%", width: "45%"}}
          className="absolute bottom-0 right-0 opacity-60"/>
        <div className="flex flex-col w-1/2">
          <h1 className="text-5xl font-bold text-600">
            Sarana Telekomunikasi<br/>Legal Pemasyarakatan
          </h1>
          <p className="text-400 mt-12 w-3/4">
            <span className="font-bold text-xl">Palapa</span> Telah Hadir dibidang teknologi komunikasi modern 
            dan lebih efisien, kami siap membantu anta dalam masalah komunikasi
          </p>
          <button className="border-2 border-blue-500 text-gray-700 border-2 border-blue-500 p-3 
               rounded-tl-[10px] rounded-tr-[30px] 
               rounded-bl-[30px] rounded-br-[10px] w-[30%] mt-12">
            Temukan Kami
          </button>
        </div>
      </hero>

      {/* ABOUT US */}
      <div className="flex flex-col items-center mt-20 py-16 px-14">
        <h1 className="text-3xl font-bold mt-14">About Us</h1>
        <div className="flex flex-row gap-10 mt-14">
          <Image src={About1} width={40} height={40} alt="About us" className="w-[60px] h-[60px] object-contain"/>
          <div>
            <p><strong>Palapa Teknologi</strong> didirikan secara resmi pada 26 September 2005 dan bergerak di bidang
              perdagangan besar piranti lunak serta layanan teknologi informasi dan komunikasi. Sebagai anak
              perusahaan dari PT. Pasopati Nusantara Holding Company, Palapa Teknologi memiliki peran strategis 
              dalam menyediakan solusi telekomunikasi yang aman, legal, dan terintegrasi.</p>
            <button className="border-2 border-blue-500 text-gray-700 border-2 border-blue-500 p-3 
              rounded-tl-[10px] rounded-tr-[30px] 
              rounded-bl-[30px] rounded-br-[10px] w-[15%] mt-10">
              Selengkapnya
            </button>
          </div>  
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="px-14 w-3/5">
        <div className="VISI flex flex-col gap-5 mt-14">
          <h1 className="text-3xl font-bold">Our Vision</h1>
          <p><strong>Palapa Teknologi</strong> memiliki visi untuk menjadi penyedia layanan telekomunikasi dan Informasi handal
          dan terpercaya dengan kinerja prima yang berkelanjutan di Indonesia</p>
        </div>

        <div className="MISI flex flex-col gap-5 mt-24 w-3/4">
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <div className="flex flex-row items-center gap-10 mt-8">
            <Image src={Misi1} width={40} height={40} alt="" className="w-[50px] h-[50px] object-contain"/>
            <p className="font-medium">Menjadi solusi teknologi informasi dan komunikasi 
              bagi lingkungan tertutup/terbatas.</p>
          </div>
          <div className="flex flex-row items-center gap-10 mt-2">
            <Image src={Misi2} width={40} height={40} alt="" className="w-[50px] h-[50px] object-contain"/>
            <p className="font-medium">Menghadirkan teknologi informasi dan komunikasi dengan inovasi yang unggul</p>
          </div>
          <div className="flex flex-row items-center gap-10 mt-2">
            <Image src={Misi3} width={40} height={40} alt="" className="w-[50px] h-[50px] object-contain"/>
            <p className="font-medium">Menyajikan sistem terintegrasi dengan pelayanan terbaik</p>
          </div>
        </div>
      </div>

      {/* OUR PRODUCT */}
      <div className="flex flex-col px-14 mt-20 gap-20">
        <h1 className="text-center mt-10 text-3xl font-bold">Our Product</h1>

        {/* WARTELSUS */}
        <div className="flex flex-row">
          <div className="flex flex-col w-[50%]">
            <h1 className="text-3xl font-bold mt-20">I-Wartelsus</h1>
            <h2 className="text-lg font-bold mt-3">{"(Integrated WarungTelekomunikasi Khusus)"}</h2>

            <p className="mt-5">adalah fasilitas telekomunikasi berbasis teknologi data yang terintegrasi 
              online secara nasional. Sistem komunikasi ini mencakup voice call, video call,
               serta layanan komunikasi dan informasi lainnya....</p>
            <button className="rounded-xl bg-blue-500 text-white w-1/3 py-3 mt-8">Lihat lebih detail</button>
          </div>

          <div className="flex justify-center items-center w-1/2 p-0">
            <Image src={Product1} objectFit="contain" alt="I-Wartelsus" className="w-[80%] h-[75%] rounded-2xl p-8"/>
          </div>
        </div>

        {/* IMC PAS */}
        <div className="flex flex-row">
          <div className="flex justify-center items-end w-1/2 p-0 ">
            <Image src={Product2} objectFit="contain" alt="I-Wartelsus" className="w-[80%] h-[75%] rounded-2xl p-8"/>
          </div>

          <div className="flex flex-col w-[50%]"> 
              <h1 className="text-3xl font-bold mt-20">IMC PAS</h1>
              <h2 className="text-lg font-bold mt-3">{"Integrated Monitoring Pemasyarakatan Center"}</h2>

              <p className="mt-5">adalah fasilitas pusat pemantauan berbasis teknologi data yang terintegrasi 
                on line secara nasional sebagai media monitoring dan deteksi dini Pemasyarakatan...</p>
              <button className="rounded-xl bg-blue-500 text-white w-1/3 py-3 mt-8">Lihat lebih detail</button>
          </div>
        </div>

        {/* PAYPAS */}
        <div className="flex flex-row">
          <div className="flex flex-col w-[50%]">
            <h1 className="text-3xl font-bold mt-20">Paypas</h1>
            <h2 className="text-lg font-bold mt-3">{"Payment Pemasyarakatan"}</h2>

            <p className="mt-5">Paypas (Payment Pemasyarakatan) adalah sistem pembayaran elektronik yang 
              memanfaatkan virtual account dan teknologi biometrik untuk memastikan transaksi yang aman,
               efisien, dan terkontrol di lingkungan pemasyarakatan ...</p>
          </div>

          <div className="flex justify-center items-end w-1/2 p-0">
            <Image src={Product3} objectFit="contain" alt="I-Wartelsus" className="w-[80%] h-[75%] rounded-2xl p-8"/>
          </div>
        </div>
      </div>

    </div>
  );
}
