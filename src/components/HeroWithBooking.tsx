import { Button } from "./ui/button";
import { Calendar, Users, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroWithBooking() {
  return (
    <section className="relative h-screen w-full" id="PB_HeroImageSlot">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1729896632513-3b52a1c1b78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBjYWJpbiUyMGphY3V6emklMjBmb3Jlc3R8ZW58MXx8fHwxNzYyNTU2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cabane dans les arbres avec jacuzzi"
          className="w-full h-[120%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white max-w-5xl mx-auto space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif tracking-tight leading-tight">
            Vivez la forêt autrement
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
            Cabanes spa perchées dans les arbres • Jacuzzi privatif • À 1h de Paris
          </p>

          {/* Booking Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-white/20 backdrop-blur-md rounded-2xl p-5 lg:p-6 shadow-2xl max-w-3xl mx-auto border border-white/30 hover:bg-white/95 hover:backdrop-blur-none transition-all duration-500 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              {/* Arrivée */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-white/90 group-hover:text-[#1A1A1A]/60 transition-colors">
                  Arrivée
                </label>
                <div className="flex items-center gap-3 p-3 border border-white/40 rounded-lg cursor-pointer hover:border-[#2C5F2D] transition-colors bg-white/10 group-hover:bg-white group-hover:border-gray-200">
                  <Calendar className="w-5 h-5 text-white group-hover:text-[#2C5F2D] transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Choisir une date"
                    className="flex-1 outline-none text-white placeholder:text-white/70 group-hover:text-[#1A1A1A] group-hover:placeholder:text-[#1A1A1A]/60 bg-transparent"
                  />
                </div>
              </div>

              {/* Départ */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-white/90 group-hover:text-[#1A1A1A]/60 transition-colors">
                  Départ
                </label>
                <div className="flex items-center gap-3 p-3 border border-white/40 rounded-lg cursor-pointer hover:border-[#2C5F2D] transition-colors bg-white/10 group-hover:bg-white group-hover:border-gray-200">
                  <Calendar className="w-5 h-5 text-white group-hover:text-[#2C5F2D] transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Choisir une date"
                    className="flex-1 outline-none text-white placeholder:text-white/70 group-hover:text-[#1A1A1A] group-hover:placeholder:text-[#1A1A1A]/60 bg-transparent"
                  />
                </div>
              </div>

              {/* Personnes */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-white/90 group-hover:text-[#1A1A1A]/60 transition-colors">
                  Voyageurs
                </label>
                <div className="flex items-center gap-3 p-3 border border-white/40 rounded-lg cursor-pointer hover:border-[#2C5F2D] transition-colors bg-white/10 group-hover:bg-white group-hover:border-gray-200">
                  <Users className="w-5 h-5 text-white group-hover:text-[#2C5F2D] transition-colors" />
                  <select className="flex-1 outline-none text-white group-hover:text-[#1A1A1A] bg-transparent">
                    <option>2 adultes</option>
                    <option>2 adultes, 1 enfant</option>
                    <option>2 adultes, 2 enfants</option>
                  </select>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-end">
                <Button 
                  onClick={() => (window as any).openBooking?.()}
                  className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white h-[52px] gap-2 shadow-lg"
                >
                  Rechercher
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-5 pt-5 border-t border-white/30 group-hover:border-gray-200 flex flex-wrap items-center justify-center gap-4 text-sm text-white/90 group-hover:text-[#1A1A1A]/60 transition-colors">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 group-hover:bg-green-500 rounded-full transition-colors"></div>
                Disponibilités en temps réel
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Annulation gratuite jusqu'à 7 jours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/70 cursor-pointer hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-wider">Découvrir</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}