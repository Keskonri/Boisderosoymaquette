import { Menu, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

type Page = "home" | "cabanes" | "experiences" | "spa" | "localisation" | "contact";

interface ModernHeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export function ModernHeader({ onNavigate, currentPage }: ModernHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Cabanes", page: "cabanes" as Page },
    { label: "Expériences", page: "experiences" as Page },
    { label: "Spa & Bien-être", page: "spa" as Page },
    { label: "Localisation", page: "localisation" as Page },
  ];

  const handleMenuClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : currentPage === "home" ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3"
            id="PB_LogoSlot"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              scrolled || currentPage !== "home" ? 'bg-[#2C5F2D]' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-white text-xl font-serif">BR</span>
            </div>
            <div className="hidden sm:block">
              <div className={`text-xl font-serif transition-colors ${
                scrolled || currentPage !== "home" ? 'text-[#1A1A1A]' : 'text-white'
              }`}>
                Bois de Rosoy
              </div>
              <div className={`text-xs tracking-wider transition-colors ${
                scrolled || currentPage !== "home" ? 'text-[#1A1A1A]/60' : 'text-white/80'
              }`}>
                CABANES DANS LES ARBRES
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.page)}
                className={`text-sm tracking-wide hover:opacity-70 transition-opacity ${
                  scrolled || currentPage !== "home" ? 'text-[#1A1A1A]' : 'text-white'
                } ${currentPage === item.page ? 'opacity-70' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              onClick={() => (window as any).openBooking?.()}
              className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white px-6 py-5 gap-2"
            >
              <Calendar className="w-4 h-4" />
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled || currentPage !== "home" ? 'text-[#1A1A1A]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled || currentPage !== "home" ? 'text-[#1A1A1A]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.page)}
                  className={`text-[#1A1A1A] hover:text-[#2C5F2D] transition-colors px-4 py-2 text-left ${
                    currentPage === item.page ? 'text-[#2C5F2D]' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button 
                  onClick={() => handleMenuClick("contact")}
                  className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white w-full py-6 gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Réserver maintenant
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}