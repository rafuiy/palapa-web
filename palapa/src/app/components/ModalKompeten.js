import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";


const ModalKompeten = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-start px-10 bg-black/30 backdrop-blur-sm z-50 
                  transition-opacity duration-300 md:text-xs ${isOpen || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Modal */}
      <div className="relative bg-white p-7 py-10 md:p-8 lg:px-10 w-[100%] md:w-[70%] text-[10px] md:text-[15px] max-w-3xl rounded-2xl shadow-lg border border-gray-200 text-left overflow-hidden z-[-2]">
      
        {/* Ikon di Background */}
        <div className="absolute bottom-0 left-[-60] text-blue-200 opacity-30 text-[200px] z-[-1]">
            <LuHandshake className="w-25 h-25"/>
        </div>

        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={10} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold text-blue-900 mb-4">KOMPETEN</h2>

        {/* Konten */}
        <p className="text-[#002453] leading-relaxed">
            PT Palapa Teknologi Indonesia menilai kompetensi sebagai salah satu pilar utama
            dalam meraih keberhasilan. Setiap individu di perusahaan ini didorong untuk selalu
            mengembangkan keahlian dan keterampilan mereka melalui pendidikan dan pelatihan yang
            berkelanjutan.
        </p>
        <br />
        <p className="text-[#002453] leading-relaxed">
            Dengan memiliki tim yang kompeten, perusahaan dapat memberikan solusi
            teknologi yang canggih, efektif, dan sesuai dengan kebutuhan klien.         
        </p>
        <br />
        <p className="text-[#002453] leading-relaxed">
            Kompetensi juga mencakup kemampuan untuk berinovasi dan mengatasi tantangan teknis yang terus
            berkembang di industri teknologi.
        </p>
      </div>
    </div>
  );
};

export default ModalKompeten;
