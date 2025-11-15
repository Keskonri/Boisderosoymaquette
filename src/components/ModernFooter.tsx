import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

type Page = "home" | "cabanes" | "experiences" | "spa" | "localisation" | "contact";

interface ModernFooterProps {
  onNavigate: (page: Page) => void;
}

export function ModernFooter({ onNavigate }: ModernFooterProps) {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <button 
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-serif">BR</span>
              </div>
              <div>
                <div className="text-xl font-serif">Bois de Rosoy</div>
                <div className="text-xs text-white/60 tracking-wider">CABANES DANS LES ARBRES</div>
              </div>
            </button>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Vivez une expérience insolite au cœur de la forêt. Cabanes spa perchées dans les arbres, jacuzzi privatif, déconnexion totale à 1h de Paris.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2C5F2D] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2C5F2D] transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2C5F2D] transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg mb-4">Explorer</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Nos cabanes", page: "cabanes" as Page },
                { label: "Expériences", page: "experiences" as Page },
                { label: "Spa & Bien-être", page: "spa" as Page },
                { label: "Localisation", page: "localisation" as Page },
                { label: "Contact", page: "contact" as Page }
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-lg mb-4">Informations</h3>
            <ul className="space-y-3 text-sm">
              {[
                "À propos",
                "Blog & Actualités",
                "Chèques cadeaux",
                "Groupes & Événements",
                "Recrutement"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2C5F2D] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <button
                  onClick={() => onNavigate("localisation")}
                  className="text-white/70 hover:text-white transition-colors text-left"
                >
                  4 Chemin des Gendarmes<br />
                  60620 Rosoy-en-Multien
                </button>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2C5F2D] flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+33123456789" className="text-white/70 hover:text-white transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2C5F2D] flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:contact@leboisderosoy.com" className="text-white/70 hover:text-white transition-colors">
                  contact@leboisderosoy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/50">
              © 2025 Le Bois de Rosoy. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}