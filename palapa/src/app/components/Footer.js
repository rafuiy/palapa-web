import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import { RiGlobalLine } from "react-icons/ri";


export default function Footer() {
    return (
      <footer className="bg-white pt-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-[#2E312D] items-start gap-10 xl:gap-20">
          {/* Kiri: Logo dan Deskripsi */}
          <div className="md:w-2/3 text-sm md:text-xs md:text-md lg:text-[md] xl:text-base md:w-[45%]">
            <Image src={Logo} width={100} height={120} alt="Palapa" className="mb-4"/>
            <p className="text-gray-700">
              Palapa senantiasa menggaungkan semangat transformasi yang berkelanjutan sebagai bagian dari komitmennya untuk merealisasikan visi menjadi perusahaan global energi kelas dunia serta mendukung terwujudnya kemandirian energi nasional.
            </p>
            <h3 className="text-lg xl:text-xl font-bold text-[#302F3B] mt-10 md:mt-5 xl:mb-2">Alamat</h3>
            <p className="text-gray-700">
              Graha Pasopati Nusantara Jl. Gempol Raya Kav. II No. 19 Ceger, Cipayung - Jakarta Timur 13820.
            </p>
            <p className="text-gray-700 mt-5">
              Email: palapateknologi@gmail.com
            </p>
            <p className="text-gray-700">
              Telepon: 021-38653070
            </p>
            <p className="text-gray-700">
              Whatsapp: 081212348615
            </p>
          </div>
  
          {/* Kanan: Company Links */}
          <div className="md:w-1/3 md:mt-8" >
            <h3 className="text-lg text-[#302F3B] font-bold mb-6">Company</h3>
            <ul className="text-gray-700 text-sm space-y-4 text-md lg:text-sm md:text-xs xl:text-[15px]">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#aboutSection" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#contactSection" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="flex flex-row border-t mt-1 py-3 text-gray-600 text-sm md:flex-row items-left justify-between max-w-7xl mx-auto md:pr-[25%] lg:pr-[32%] xl:pr-[35%]">
          <div className="flex justify-left gap-4">
            <RiGlobalLine className="w-5 h-5" />
            <h2 className="h-4 font-bold text-md">Indonesia</h2>
          </div>
          <p className="text-xs">2025 | All Right Reserved | Palapa Teknologi Komunikasi</p>
        </div>
      </footer>
    );
  }
  