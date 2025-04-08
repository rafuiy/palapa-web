"use client";

import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/app/assets/Logo.png";
import { FiBriefcase , FiInfo, FiShoppingBag, FiPhone } from "react-icons/fi"; 

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Navbar Desktop */}
      <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-20 py-2 xl:py-1 bg-white hidden md:flex">
        {/* Logo */}
        <div className="text-md font-bold flex items-center">
          <Image src={Logo} className="navLogo" width={100} height={100} alt="Palapa" />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-8 font-normal text-xs">
          <Link
            href="/"
            className={`
              text-[#616161] text-center
              py-2 
              px-6 
              rounded-tl-[30px] 
              rounded-tr-[10px] 
              rounded-bl-[10px] 
              rounded-br-[30px] 
              w-auto 
              hover:text-blue-500 transition-all duration-300 ${
                pathname === "/" ? "border-2 border-[#5091EC] font-medium" : ""
              }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`
              text-[#616161] text-center 
              py-2 
              px-6 
              rounded-tl-[30px] 
              rounded-tr-[10px] 
              rounded-bl-[10px] 
              rounded-br-[30px] 
              w-auto 
              hover:text-blue-500 transition-all duration-300
              ${
                pathname === "/about-us" ? "border-2 border-[#5091EC] font-semibold" : ""
              }`}
          >
            Tentang Kami
          </Link>
          <a
            href="/product"
            className={`
              text-[#616161] text-center 
              py-2 
              px-6 
              rounded-tl-[30px] 
              rounded-tr-[10px] 
              rounded-bl-[10px] 
              rounded-br-[30px] 
              w-auto 
              hover:text-blue-500 transition-all duration-300
              ${
                pathname === "/product" ? "border-2 border-[#5091EC] font-semibold" : ""
              }`}
          >
            Produk Kami
          </a>
          <a
            href="/partner"
            className={`
              text-[#616161] text-center 
              py-2 
              px-6 
              rounded-tl-[30px] 
              rounded-tr-[10px] 
              rounded-bl-[10px] 
              rounded-br-[30px] 
              w-auto 
              hover:text-blue-500 transition-all duration-300
              ${
                pathname === "/partner" ? "border-2 border-[#5091EC] font-semibold" : ""
              }`}
          >
            Partner Kami
          </a>

          {/* Tombol "Hubungi Kami" */}
          <a
            href="/contact"
            className={`bg-blue-500 text-white font-normal px-6 py-2 rounded-lg flex items-center hover:text-gray-200 transition-all duration-300`}
          >
            Hubungi Kita
          </a>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-t-md py-2 flex justify-around items-center z-50 border-t">
        <a
          href="#aboutSection"
          className={`flex flex-col items-center text-gray-600`}
        >
          <FiInfo className="text-2xl" />
          <span className="text-xs">Tentang</span>
        </a>
        <a
          href="#productSection"
          className={`flex flex-col items-center text-gray-600`}
        >
          <FiShoppingBag className="text-2xl" />
          <span className="text-xs">Produk</span>
        </a>
        <a
          href="#partnerSection"
          className={`flex flex-col items-center text-gray-600`}
        >
          <FiBriefcase className="text-2xl" />
          <span className="text-xs">Partner</span>
        </a>
        <a
          href="#contactSection"
          className={`flex flex-col items-center text-gray-600`}
        >
          <FiPhone className="text-2xl" />
          <span className="text-xs">Hubungi</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;