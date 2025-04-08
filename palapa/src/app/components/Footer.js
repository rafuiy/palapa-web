import { RiGlobalLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA]">
      <div className="flex items-center px-16 py-8 text-[#757575] text-xs font-normal">
        <div className="flex items-center gap-2 flex-1">
          <RiGlobalLine className="w-4 h-4" />
          <h2 className="font-medium">Indonesia</h2>
        </div>

        <p className="flex-1 text-center">
          2025 | All Right Reserved | Palapa Teknologi Komunikasi
        </p>

        <div className="flex-1 text-right">
        <h2 className="text-xs whitespace-nowrap">
          Kebijakan Privasi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Waspada Penipuan
        </h2>
        </div>
      </div>
    </footer>
  );
}
