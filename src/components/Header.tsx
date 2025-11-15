import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    "Accueil",
    "Cabanes",
    "Spa & Bien-être",
    "Expériences",
    "Réservation"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#2C5F2D]/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo placeholder - PB_LogoSlot */}
          <div className="flex items-center gap-2" id="PB_LogoSlot">
            <div className="w-10 h-10 bg-[#2C5F2D] rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-serif">BR</span>
            </div>
            <span className="text-xl text-[#1A1A1A] font-serif hidden sm:block">
              Bois de Rosoy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-[#1A1A1A] hover:text-[#2C5F2D] transition-colors text-sm tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-[#2C5F2D]/5 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-[#2C5F2D]" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 flex flex-col gap-4 border-t border-[#2C5F2D]/10 pt-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-[#1A1A1A] hover:text-[#2C5F2D] transition-colors text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white mt-2 w-full">
              Réserver
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
