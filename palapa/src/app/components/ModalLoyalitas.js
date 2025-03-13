import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";


const ModalLoyalitas = ({ isOpen, onClose }) => {
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
        <div className="absolute bottom-0 left-[-40] text-blue-200 opacity-30 text-[200px] z-[-1]">
            <RiTeamFill className="w-25 h-25"/>
        </div>
        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={10} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold text-blue-900 mb-4">LOYALITAS</h2>

        {/* Konten */}
        <p className="text-[#002453] leading-relaxed">
        Loyalitas menjadi nilai fundamental bagi PT Palapa Teknologi Indonesia, baik dari
        sisi karyawan, pelanggan, maupun mitra bisnis. Karyawan yang loyal tidak hanya
        berdedikasi untuk pekerjaan mereka, tetapi juga memiliki rasa tanggung jawab untuk
        mendukung visi dan misi perusahaan. 
        </p>
        <br />
        <p className="text-[#002453] leading-relaxed">
        Loyalitas terhadap perusahaan tercermin dari
        komitmen untuk bekerja dengan sepenuh hati, serta menjaga kualitas dan integritas dalam
        setiap proyek. Perusahaan juga mengapresiasi loyalitas pelanggan dan mitra bisnis yang
        telah menjalin hubungan jangka panjang dengan PT Palapa Teknologi Indonesia, yang
        membantu perusahaan tumbuh dan berkembang.
        </p>
      </div>
    </div>
  );
};

export default ModalLoyalitas;
