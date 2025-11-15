import { MapPin, Car, Train, Plane, Clock } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const accessPoints = [
  {
    icon: Car,
    title: "En voiture",
    time: "1h depuis Paris",
    description: "A1 sortie Senlis puis direction Rosoy-en-Multien",
    distance: "70 km"
  },
  {
    icon: Train,
    title: "En train",
    time: "50 min + 20 min",
    description: "Gare de Crépy-en-Valois puis navette",
    distance: "Ligne K"
  },
  {
    icon: Plane,
    title: "En avion",
    time: "1h15",
    description: "Aéroport Charles de Gaulle puis voiture",
    distance: "55 km"
  }
];

export function LocationSection() {
  return (
    <section id="localisation" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2C5F2D]/10 rounded-full mb-6">
            <span className="text-[#2C5F2D] text-sm tracking-wider uppercase">
              Localisation
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#1A1A1A] mb-6">
            Au cœur de la forêt,
            <br />
            à portée de Paris
          </h2>
          <p className="text-lg lg:text-xl text-[#1A1A1A]/70">
            Nichées dans la forêt de Fontainebleau, nos cabanes offrent un havre de paix à seulement 1 heure de la capitale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden bg-gray-200"
            id="PB_MapImageSlot"
          >
            {/* Placeholder pour carte interactive */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[#2C5F2D] mx-auto mb-4" />
                <p className="text-[#1A1A1A]/60 mb-4">Carte interactive</p>
                <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm">
                  <div className="text-[#1A1A1A] mb-2">Le Bois de Rosoy</div>
                  <div className="text-sm text-[#1A1A1A]/60">
                    4 Chemin des Gendarmes<br />
                    60620 Rosoy-en-Multien<br />
                    Oise
                  </div>
                  <Button className="w-full mt-4 bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white">
                    Ouvrir dans Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Access Information */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Quick Info */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#2C5F2D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl text-[#1A1A1A] mb-2">
                    Accessible rapidement
                  </h3>
                  <p className="text-[#1A1A1A]/70">
                    Échappez-vous de Paris pour un week-end ou une escapade en semaine, 
                    sans perdre de temps dans les transports.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1A1A1A]/10">
                <div>
                  <div className="text-2xl text-[#2C5F2D] mb-1">1h</div>
                  <div className="text-xs text-[#1A1A1A]/60">Depuis Paris</div>
                </div>
                <div>
                  <div className="text-2xl text-[#2C5F2D] mb-1">70km</div>
                  <div className="text-xs text-[#1A1A1A]/60">Par l'A1</div>
                </div>
                <div>
                  <div className="text-2xl text-[#2C5F2D] mb-1">15ha</div>
                  <div className="text-xs text-[#1A1A1A]/60">De forêt</div>
                </div>
              </div>
            </div>

            {/* Access Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl text-[#1A1A1A] mb-6">Comment nous rejoindre</h3>
              
              {accessPoints.map((access, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#2C5F2D] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2C5F2D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <access.icon className="w-6 h-6 text-[#2C5F2D]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg text-[#1A1A1A]">{access.title}</h4>
                        <span className="text-sm text-[#2C5F2D] font-medium">{access.time}</span>
                      </div>
                      <p className="text-sm text-[#1A1A1A]/70 mb-1">{access.description}</p>
                      <span className="text-xs text-[#1A1A1A]/50">{access.distance}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-[#2C5F2D]/5 rounded-2xl p-6 border border-[#2C5F2D]/10">
              <h4 className="text-[#1A1A1A] mb-3">
                🚗 Parking gratuit
              </h4>
              <p className="text-sm text-[#1A1A1A]/70">
                Un parking sécurisé est à votre disposition. Vos bagages seront transportés 
                jusqu'à votre cabane par notre équipe.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Nearby Attractions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#FAF8F5] rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] mb-8 text-center">
            À découvrir dans les environs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Fontainebleau", distance: "15 km", type: "Château" },
              { name: "Barbizon", distance: "12 km", type: "Village de peintres" },
              { name: "Milly-la-Forêt", distance: "8 km", type: "Marché & cyclotourisme" },
              { name: "Forêt des Trois Pignons", distance: "5 km", type: "Escalade & randonnée" }
            ].map((place, index) => (
              <div key={index} className="text-center">
                <div className="text-lg text-[#1A1A1A] mb-1">{place.name}</div>
                <div className="text-sm text-[#2C5F2D] mb-1">{place.distance}</div>
                <div className="text-xs text-[#1A1A1A]/60">{place.type}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}