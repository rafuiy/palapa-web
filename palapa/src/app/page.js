import Image from "next/image";
import Navbar from "./components/Navbar";
import Herobg from "./assets/bgHero.png";

export default function Home() {
  return (
    <div className="min-h-screen mx-8">
      <Navbar />
      <hero className="flex text-left h-[75vh] items-center mx-8">
        <Image src={Herobg} 
          alt="Hero Background" 
          objectFit="contain" 
          objectPosition="bottom right" 
          style={{ height: "70%", width: "50%"}}
          className="absolute bottom-0 right-0 opacity-80"/>
        <div className="flex flex-col w-1/2">
          <h1 className="text-5xl font-bold text-600">
            Sarana Telekomunikasi<br/>Legal Pemasyarakatan
          </h1>
          <p className="text-400 mt-10 w-3/4">
            <span className="text-700 text-xl">Palapa</span> Telah Hadir dibidang teknologi komunikasi modern 
            dan lebih efisien, kami siap membantu anta dalam masalah komunikasi
          </p>
          <button className="border-2 border-blue-500 text-gray-700 border-2 border-blue-500 p-3 
               rounded-tl-[10px] rounded-tr-[30px] 
               rounded-bl-[30px] rounded-br-[10px] w-[30%] mt-10">
            Temukan Kami
          </button>
        </div>
      </hero>
    </div>
  );
}
