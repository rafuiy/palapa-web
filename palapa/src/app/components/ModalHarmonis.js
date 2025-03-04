import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { LuHandHeart } from "react-icons/lu";

const ModalHarmonis = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-start px-10 bg-black/30 backdrop-blur-sm z-50 
                  transition-opacity duration-300 md:text-xs ${isOpen || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Modal */}
      <div className="relative bg-white p-5 w-[100%] md:w-[50%] text-[10px] md:text-[15px] max-w-3xl rounded-2xl shadow-lg border border-gray-200 text-left overflow-hidden z-[-2]">
      
        {/* Ikon di Background */}
        <div className="absolute bottom-0 left-[-60] text-blue-200 opacity-30 text-[200px] z-[-1]">
            <LuHandHeart className="w-25 h-25"/>
        </div>
        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={10} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold text-blue-900 mb-4">HARMONIS</h2>

        {/* Konten */}
        <p className="text-gray-700 leading-relaxed">
        Budaya harmonis adalah kunci dalam menciptakan lingkungan kerja yang produktif
        dan menyenangkan di PT Palapa Teknologi Indonesia. Perusahaan ini meyakini bahwa
        komunikasi yang terbuka, saling menghargai, dan kerja sama yang solid antar tim adalah
        faktor penting dalam mencapai tujuan bersama. 
        </p>
        <br />
        <p className="text-gray-700 leading-relaxed">
        Dengan menjaga hubungan yang harmonis,
        baik antara karyawan, manajemen, maupun dengan klien, PT Palapa Teknologi Indonesia
        dapat menghadirkan solusi terbaik dan meningkatkan kinerja secara keseluruhan. Harmoni
        di dalam perusahaan juga mendorong terciptanya inovasi yang lahir dari kolaborasi yang
        baik.
        </p>
      </div>
    </div>
  );
};

export default ModalHarmonis;
