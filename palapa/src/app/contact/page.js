"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaMapMarkerAlt, FaWhatsapp   } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Contact() {

    return (
      <div id="heroSection" className="w-full font-inter overflow-hidden">
        
        
        <div className="flex flex-col gap-2 md:h-screen justify-center ">
        <Navbar/>

        
          {/* content */}
          <div className="flex flex-col-reverse md:flex-row w-full md:w-[95%] lg:w-4/5 mx-auto justify-between gap-8 lg:gap-10">
            {/* CONTENT KIRI */}
            <div className="flex flex-col justify-left gap-5 md:w-1/2">
                <h3 className="
                w-fit
                hidden md:flex
                px-4 py-2
                rounded-lg
                bg-[#E7F0FD]
                text-[#639DF7] text-sm font-medium">
                  Contact Us  
                </h3>
                <h1 className="
                
                font-bold text-[#3D3D3D] text-700 md:text-2xl lg:text-3xl
                mx-4 md:mx-0
                ">
                Konsultasi Sekarang
                </h1>

                <div className="flex gap-4 text-3d3d3d text-xs lg:text-md xl:text-lg items-start mx-4 md:mx-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-[#3882F5]"/>
                  <h4>Jl.Raya Gempol Kavling II No.19, RT.006/002, Gempol Kel, Ceger, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13820</h4>
                </div>

                {/* BUTTON CTA */}
                <div className="flex text-3d3d3d text-[8px] xl:text-xs justify-between items-center mx-2 md:mx-0">
                  <div className="flex gap-3 border border-[#DAE5EB] rounded-xl p-2 md:p-4 items-center w-[48%]">
                    <div className="bg-[#E7F0FD] rounded-full p-2">
                    <FaWhatsapp />
                    </div>
                    <h4 className="bg-[#E7F0FD] rounded-xl p-2 w-full text-center">Chat Via WhatsApp</h4>
                  </div>

                  <div className="flex gap-3 border border-[#DAE5EB] rounded-xl p-2 md:p-4 items-center w-[48%]">
                    <div className="bg-[#E7F0FD] rounded-full p-2">
                   <MdOutlineMarkEmailRead />
                   </div>
                   <h4 className="bg-[#E7F0FD] rounded-xl p-2 w-full text-center">Chat Via Email</h4>
                  </div>
                </div>
            </div>   

            {/* KONTEN KANAN */}
            <div className="relative w-[90%] md:w-1/2 mx-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6196948688334!2d106.89035037418397!3d-6.31358696178271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edfe6ea481f9%3A0xd2ded6731b79fb6!2sGRAHA%20PASOPATI%20NUSANTARA!5e0!3m2!1sid!2sid!4v1741107375046!5m2!1sid!2sid"
            loading="lazy" 
            className="w-full h-full  rounded-3xl shadow-[6px_6px_10px_rgba(0,0,0,0.2)]">
            </iframe>

          

          {/* Tombol lihat di Google Maps */}
          <a
            href="https://www.google.com/maps?q=Graha+Pasopati+Nusantara"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/3 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg text-xs font-semibold shadow-md flex items-start justify-left space-x-2 hover:bg-gray-200"
          >
            <FaMapMarkerAlt className="text-gray-600" />
            <span>Lihat dari Google Maps</span>
          </a>
        </div>

        <h3 className="
                w-fit
                mx-4
                md:hidden
                px-4 py-2
                rounded-lg
                bg-[#E7F0FD]
                text-[#639DF7] text-sm font-medium">
                  Contact Us  
                </h3>
          </div>

          {/* foter */}
          <div className="absolute bottom-0 w-full"><Footer/></div>
        </div>

      
      </div>
    );
}