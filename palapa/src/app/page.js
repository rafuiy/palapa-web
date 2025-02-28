import Image from "next/image";
import Navbar from "./components/Navbar";
import Herobg from "./assets/bgHero.png";
import Rocket from "./assets/Rocket.png";

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
        <h1 className="text-3xl font-bold">About Us</h1>
        <div className="flex flex-row gap-10 mt-14">
          <Image src={Rocket} width={40} height={40} alt="About us" className="w-[60px] h-[60px] object-contain"/>
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
      <div>
        <div className="VISI ">
          <h1>Our Mission</h1>
          <p>Palapa Teknologi memiliki visi untuk menjadi penyedia layanan telekomunikasi dan Informasi handal
          dan terpercaya dengan kinerja prima yang berkelanjutan di Indonesia</p>
        </div>

        <div className="MISI">
          <h1>Our Mission</h1>
          <div>
            <p>Menjadi solusi teknologi informasi dan komunikasi 
              bagi lingkungan tertutup/terbatas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
