import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 lg:py-20 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-serif">BR</span>
              </div>
              <span className="text-xl font-serif">Bois de Rosoy</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Cabanes spa & insolites nichées au cœur d'une forêt préservée, à 1h de Paris.
            </p>
            <div className="flex gap-4 pt-2">
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
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {["Accueil", "Cabanes", "Spa & Bien-être", "Expériences", "Réservation"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-white/70 hover:text-white transition-colors"
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
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2C5F2D] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-white/70">
                  Forêt de Rosoy<br />
                  77123 Noisy-sur-École
                </span>
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

          {/* Newsletter */}
          <div>
            <h3 className="text-lg mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Recevez nos offres exclusives et actualités
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#2C5F2D] transition-colors"
              />
              <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white w-full">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2025 Bois de Rosoy. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
