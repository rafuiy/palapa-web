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
    <div className="my-4 md:my-16 flex justify-center items-center md:flex-row flex-col">
  {/* Grid hanya muncul di mobile */}
  <div className="grid grid-cols-3 gap-4 md:hidden">
  {words.map((word, index) => (
    <div
      key={index}
      className={`flex flex-col items-center gap-2 ${index >= 3 ? 'mt-1' : ''} bg-[#FAFAFA] rounded-xl p-2 py-6`}
    >
      {/* Huruf dalam lingkaran */}
      <div
        onClick={() => setActiveModal(word.text)}
        onMouseEnter={() => handleMouseEnter(word.text)}
        onMouseLeave={handleMouseLeave}
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#99BFFA] text-[#E7F0FD] text-4xl md:text-5xl rounded-full cursor-pointer hover:bg-[#001a3d] transition"
        style={{ fontFamily: "Zen Tokyo Zoo, sans-serif" }}
      >
        {word.letter}
      </div>
      <p className="text-md font-bold text-[#3D3D3D]">{word.text}</p>
      <div
        onClick={() => setActiveModal(word.text)}
        onMouseEnter={() => handleMouseEnter(word.text)}
        onMouseLeave={handleMouseLeave}
        className="w-16 h-16 md:w-20 md:h-20 flex mt-4 items-center justify-center text-[#99BFFA] text-8xl rounded-full cursor-pointer hover:bg-[#001a3d] transition"
      >
        {word.image}
      </div>
    </div>
  ))}
</div>


  {/* Versi non-mobile (md ke atas) */}
  <div className="hidden md:flex flex-row gap-6 xl:gap-16">
    {words.map((word, index) => (
      <div key={index} className="flex flex-col items-center gap-2">
        <div
          onClick={() => setActiveModal(word.text)}
          onMouseEnter={() => handleMouseEnter(word.text)}
          onMouseLeave={handleMouseLeave}
          className="w-20 h-20 flex items-center justify-center bg-[#99BFFA] text-[#E7F0FD] text-5xl rounded-full cursor-pointer hover:bg-[#001a3d] transition"
          style={{ fontFamily: "Zen Tokyo Zoo, sans-serif" }}
        >
          {word.letter}
        </div>
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
  </div>

  {renderModal()}
</div>

  );
}
