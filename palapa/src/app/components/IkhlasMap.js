import { useState } from "react";
import ModalIntegrity from "./ModalIntegrity";
import ModalKompeten from "./ModalKompeten";
import ModalSinergi from "./ModalSinergi";
import ModalHarmonis from "./ModalHarmonis";
import ModalAdaptif from "./ModalAdaptif";
import ModalLoyalitas from "./ModalLoyalitas";

export default function IkhlasDisplay() {
  const words = [
    { letter: "I", text: "INTEGRITAS" },
    { letter: "K", text: "KOMPETEN" },
    { letter: "H", text: "HARMONIS" },
    { letter: "L", text: "LOYALITAS" },
    { letter: "A", text: "ADAPTIF" },
    { letter: "S", text: "SINERGI" },
  ];

  const [activeModal, setActiveModal] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = (text) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveModal(text);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveModal(null), 2000);
    setHoverTimeout(timeout);
  };

  const renderModal = () => {
    switch (activeModal) {
      case "INTEGRITAS":
        return <ModalIntegrity isOpen={true} onClose={() => setActiveModal(null)} />;
      case "KOMPETEN":
        return <ModalKompeten isOpen={true} onClose={() => setActiveModal(null)} />;
      case "HARMONIS":
        return <ModalHarmonis isOpen={true} onClose={() => setActiveModal(null)} />;
      case "LOYALITAS":
        return <ModalLoyalitas isOpen={true} onClose={() => setActiveModal(null)} />;
      case "ADAPTIF":
        return <ModalAdaptif isOpen={true} onClose={() => setActiveModal(null)} />;
      case "SINERGI":
        return <ModalSinergi isOpen={true} onClose={() => setActiveModal(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-8">
      {words.map((word, index) => (
        <div
          key={index}
          className="flex flex-row items-center md:flex-col md:items-center gap-4 md:gap-2"
        >
          {/* Huruf dalam lingkaran */}
          <div
            onClick={() => setActiveModal(word.text)}
            onMouseEnter={() => handleMouseEnter(word.text)}
            onMouseLeave={handleMouseLeave}
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-[#002453] text-white text-5xl md:text-6xl lg:text-7xl rounded-full cursor-pointer hover:bg-[#001a3d] transition"
            style={{ fontFamily: "Zen Tokyo Zoo, sans-serif" }}
          >
            {word.letter}
          </div>
          {/* Teks di samping (mobile) dan di bawah (tablet ke atas) */}
          <p className="text-lg font-semibold text-gray-800">{word.text}</p>
        </div>
      ))}

      {renderModal()}
    </div>
  );
}
