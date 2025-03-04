import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Product1 from "../assets/iWartel.png";
import Product2 from "../assets/Imcpas.png";
import Product3 from "../assets/Paypas.png";
import "swiper/css";

export default function CardCarousel({ setActiveModal }) {
  const cards = [
    {
      key: "wartelsus", // Tambahkan key untuk memudahkan setActiveModal
      title: "I-Wartelsus",
      description: "I-Wartelsus adalah fasilitas telekomunikasi berbasis teknologi data yang terintegrasi online secara nasional.",
      image: Product1,
    },
    {
      key: "imcPas",
      title: "IMC PAS",
      description: "IMC PAS adalah fasilitas pusat pemantauan berbasis teknologi data yang terintegrasi online secara nasional.",
      image: Product2,
    },
    {
      key: "payPas",
      title: "Pay PAS",
      description: "Pay PAS adalah sistem pembayaran elektronik yang memanfaatkan virtual account dan teknologi biometrik.",
      image: Product3,
    },
  ];

  return (
    <div className="w-full py-6">
      <h1 className="text-center mt-10 mb-10 text-2xl font-bold">Our Product</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="px-4"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <Image src={card.image} alt={card.title} className="w-full h-32 p-5 object-contain shadow-md rounded-md" />
              <h2 className="mt-4 text-lg font-bold">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <button 
                onClick={() => setActiveModal(card.key)} 
                className="mt-8 px-4 py-1 bg-blue-500 text-xs text-white rounded-lg"
              >
                Lihat lebih detail
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
