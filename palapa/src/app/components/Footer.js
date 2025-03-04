import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import { RiGlobalLine } from "react-icons/ri";


export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Kiri: Logo dan Deskripsi */}
          <div className="md:w-2/3 text-xs md:text-xs md:text-md">
            <Image src={Logo} width={100} height={120} alt="Palapa" className="mb-4"/>
            <p className="text-gray-700">
              Palapa senantiasa menggaungkan semangat transformasi yang berkelanjutan sebagai bagian dari komitmennya untuk merealisasikan visi menjadi perusahaan global energi kelas dunia serta mendukung terwujudnya kemandirian energi nasional.
            </p>
            <h3 className="text-lg font-bold mt-4">Alamat</h3>
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
          <div className="md:w-1/3 ">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="text-gray-700 text-sm space-y-2 text-md lg:text-sm md:text-xs">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#aboutSection" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#contactSection" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="flex flex-row border-t mt-8 pt-5 justify-left text-gray-600 text-sm md:flex-row items-left max-w-7xl mx-auto">
          <div className="flex justify-left gap-4 w-[35%] lg:w-[35%] md:w-[30%]">
            <RiGlobalLine className="w-5 h-5" />
            <h2 className="h-4 font-bold text-md">Indonesia</h2>
          </div>
          <p className="text-xs">2025 | All Right Reserved | Palapa Teknologi Komunikasi</p>
        </div>
      </footer>
    );
  }
  