import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";


const ModalIntegrity = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-start px-10 bg-black/30 backdrop-blur-sm z-50 
                  transition-opacity duration-300 ${isOpen || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
                  md:text-xs
                  `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Modal */}
      <div className="relative bg-white p-7 py-10 md:p-8 lg:px-10 text-[10px] md:text-[15px] w-[100%] md:w-[70%] max-w-3xl rounded-2xl shadow-lg border border-gray-200 text-left overflow-hidden z-[-2]">

                {/* Ikon di Background */}
        <div className="absolute bottom-0 left-[-60] text-blue-200 opacity-30 text-[200px] z-[-1]">
          <LuShieldCheck className="w-25 h-25"/>
        </div>

        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={10} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold text-blue-900 mb-4">INTEGRITAS</h2>

        {/* Konten */}
        <p className="text-[#002453] leading-relaxed">
          Integritas adalah dasar dari semua tindakan yang dilakukan oleh PT Palapa Teknologi Indonesia. 
          Perusahaan ini berpegang teguh pada prinsip kejujuran, transparansi, dan etika dalam setiap aspek bisnis.
        </p>
        <br />
        <p className="text-[#002453] leading-relaxed z-2">
          Setiap keputusan yang diambil, baik di tingkat manajemen maupun di lapangan, selalu mengutamakan kepentingan pelanggan 
          dan pemangku kepentingan dengan tetap menjaga moralitas yang tinggi.
        </p>
        <br />
        <p className="text-[#002453] leading-relaxed">
          Integritas memastikan bahwa perusahaan bertindak dengan cara yang benar, mengedepankan kepercayaan dan rasa hormat 
          yang membangun hubungan jangka panjang yang saling menguntungkan.
        </p>
      </div>
    </div>
  );
};

export default ModalIntegrity;
