"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/Logo.png";
import { FiHome, FiInfo, FiShoppingBag, FiPhone } from "react-icons/fi"; // Ikon dari react-icons

const Navbar = () => {

  return (
  <>  
    <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-8 py-2 xl:py-1 bg-white hidden md:flex">
    {/* Konten Navbar */}
        {/* Logo */}
        <div className="text-md font-bold flex items-center">
          <Image src={Logo} className="navLogo" width={80} height={80} alt="Palapa" />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-2 md:space-x-5 lg:space-x-14 text-sm md:text-xs lg:text-md xl:text-[15px] font-normal">
          <Link href="#heroSection" className="border-2 border-blue-500 text-[#002453] text-center py-2 md:py-1 px-6
                rounded-tl-[10px] rounded-tr-[30px] 
                rounded-bl-[30px] rounded-br-[10px] w-auto hover:text-blue-500">
            Beranda
          </Link>
          <Link href="#aboutSection" className="text-[#002453] hover:text-blue-500">Tentang Kami</Link>
          <Link href="#productSection" className="text-[#002453] hover:text-blue-500">Produk</Link>
          <Link href="#partnerSection" className="text-[#002453] hover:text-blue-500">Partner</Link>

          {/* Our Services Dropdown */}
          <div className="relative">
            <Link href="#contactSection"
              className="bg-blue-500 text-white font-normal px-6 py-2 rounded-lg flex items-center hover:text-gray-200"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-t-md py-2 flex justify-around items-center z-50 border-t">
        <a href="#" className="flex flex-col items-center text-blue-600">
          <FiHome className="text-2xl" />
          <span className="text-xs">Beranda</span>
        </a>
        <a href="#aboutSection" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <FiInfo className="text-2xl" />
          <span className="text-xs">Tentang</span>
        </a>
        <a href="#productSection" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <FiShoppingBag className="text-2xl" />
          <span className="text-xs">Produk</span>
        </a>
        <a href="#contactSection" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <FiPhone className="text-2xl" />
          <span className="text-xs">Hubungi</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
