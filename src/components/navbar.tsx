import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-semibold">
              <span className="text-teal-600">Acudi</span>
              <span className="text-gray-700">mos</span>
            </span>
          </Link>

          {/* Contact Button */}
          <Button 
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6"
            size="lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contactar
          </Button>
        </div>
      </div>
    </nav>
  );
}
