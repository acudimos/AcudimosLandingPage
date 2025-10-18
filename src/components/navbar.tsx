import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-[#586c78]">Acudi</span>
              <span className="text-[#d8845f]">mos</span>
            </span>
          </Link>

          {/* Contact Button */}
          <Button
            className="bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full px-6"
            size="lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            solicita tu acompañante hoy!
          </Button>
        </div>
      </div>
    </nav>
  );
}
