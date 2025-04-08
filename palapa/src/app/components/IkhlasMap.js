import { useState } from "react";
import ModalIntegrity from "./ModalIntegrity";
import ModalKompeten from "./ModalKompeten";
import ModalSinergi from "./ModalSinergi";
import ModalHarmonis from "./ModalHarmonis";
import ModalAdaptif from "./ModalAdaptif";
import ModalLoyalitas from "./ModalLoyalitas";

import { RiShieldCheckLine, RiAwardFill, RiTeamLine, RiHandHeartLine, RiEqualizerLine } from "react-icons/ri";

export default function IkhlasDisplay() {
  const words = [
    { letter: "I", text: "INTEGRITAS", image: <RiShieldCheckLine/> },
    { letter: "K", text: "KOMPETEN", image: <RiAwardFill/> },
    { letter: "H", text: "HARMONIS", image: <RiTeamLine/> },
    { letter: "L", text: "LOYALITAS", image: <RiHandHeartLine/> },
    { letter: "A", text: "ADAPTIF", image: <RiEqualizerLine/> },
    { letter: "S", text: "SINERGI", image: <RiShieldCheckLine/> },
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
    <div className="flex my-16 flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-6 xl:gap-16">
      {words.map((word, index, image) => (
        <div
          key={index}
          className="flex flex-row items-center md:flex-col md:items-center gap-2"
        >
          {/* Huruf dalam lingkaran */}
          <div
            onClick={() => setActiveModal(word.text)}
            onMouseEnter={() => handleMouseEnter(word.text)}
            onMouseLeave={handleMouseLeave}
            className="w-20 h-20 flex items-center justify-center bg-[#99BFFA] text-[#E7F0FD] text-5xl rounded-full cursor-pointer hover:bg-[#001a3d] transition"
            style={{ fontFamily: "Zen Tokyo Zoo, sans-serif" }}
          >
            {word.letter}
          </div>
          {/* Teks di samping (mobile) dan di bawah (tablet ke atas) */}
          <p className="text-md font-bold text-[#3D3D3D]">{word.text}</p>

          <div
            onClick={() => setActiveModal(word.text)}
            onMouseEnter={() => handleMouseEnter(word.text)}
            onMouseLeave={handleMouseLeave}
            className="w-20 h-20 flex mt-4 items-center justify-center text-[#99BFFA] text-8xl rounded-full cursor-pointer hover:bg-[#001a3d] transition"
          >
            {word.image}
          </div>
        </div>
      ))}

      {renderModal()}
    </div>
  );
}
