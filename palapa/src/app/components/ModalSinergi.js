import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiExchangeFundsFill } from "react-icons/ri";

const ModalSinergi = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-end px-10 bg-black/30 backdrop-blur-sm z-50 
                  transition-opacity duration-300 md:text-xs ${isOpen || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Modal */}
      <div className="relative bg-white p-7 py-10 md:p-8 lg:px-10 w-[100%] md:w-[70%] text-[10px] md:text-[15px] max-w-3xl rounded-2xl shadow-lg border border-gray-200 text-left overflow-hidden z-[-2]">
      
        {/* Ikon di Background */}
        <div className="absolute bottom-0 left-[-60] text-blue-200 opacity-30 text-[200px] z-[-1]">
            <RiExchangeFundsFill className="w-25 h-25"/>
        </div>
        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={10} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold text-blue-900 mb-4">SINERGI</h2>

        {/* Konten */}
        <p className="text-[#002453] leading-relaxed">
            Sinergi adalah nilai yang mendorong PT Palapa Teknologi Indonesia untuk bekerja
            bersama dalam tim yang solid. Perusahaan ini memahami bahwa pencapaian tujuan bersama
            hanya dapat dicapai melalui kerja sama yang erat antar departemen dan individu.
        </p>
        <br />
        <p className="text-[#002453] leading-relaxed">
        Setiap anggota tim diajak untuk berbagi ide, pengetahuan, dan sumber daya demi menciptakan
        solusi yang lebih baik dan lebih efisien. Sinergi juga tercermin dalam hubungan yang kuat
        dengan mitra dan pelanggan, di mana kolaborasi menghasilkan hasil yang lebih besar
        daripada kerja individu. Dengan sinergi yang baik, perusahaan dapat menghadapi berbagai
        tantangan dan meraih kesuksesan bersama.
        </p>
      </div>
    </div>
  );
};

export default ModalSinergi;
