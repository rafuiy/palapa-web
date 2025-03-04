import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";


const ModalAdaptif = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-end px-10 bg-black/30 backdrop-blur-sm z-50 
                  transition-opacity duration-300 md:text-xs ${isOpen || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* Container Modal */}
    <div className="relative bg-white p-5 w-[100%] md:w-[50%] text-[10px] md:text-[15px] max-w-3xl rounded-2xl shadow-lg border border-gray-200 text-left overflow-hidden z-[-2]">

                {/* Ikon di Background */}
        <div className="absolute bottom-0 left-[-60] text-blue-200 opacity-30 text-[200px] z-[-1]">
          <LuGoal className="w-25 h-25"/>
        </div>        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={10} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold text-blue-900 mb-4">ADAPTIF</h2>

        {/* Konten */}
        <p className="text-gray-700 leading-relaxed">
        Sebagai perusahaan yang bergerak di bidang teknologi, PT Palapa Teknologi
        Indonesia sangat menyadari pentingnya kemampuan untuk beradaptasi dengan cepat
        terhadap perubahan
        </p>
        <br />
        <p className="text-gray-700 leading-relaxed">
            Dunia teknologi yang terus berkembang menuntut perusahaan untuk
            terus berinovasi dan mengubah strategi serta metode kerja agar tetap relevan. PT Palapa
            Teknologi Indonesia menumbuhkan budaya yang adaptif dengan mendorong karyawan
            untuk selalu terbuka terhadap perubahan, teknologi baru, dan metode yang lebih efisien
            dalam menghadapi tantangan pasar yang dinamis.
        </p>
      </div>
    </div>
  );
};

export default ModalAdaptif;
