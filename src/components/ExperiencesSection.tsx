import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Coffee, Utensils, Bike, Telescope, Flame, Music } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    icon: Coffee,
    title: "Petit-déjeuner suspendu",
    description: "Panier gourmand livré à votre cabane"
  },
  {
    icon: Utensils,
    title: "Dîner romantique",
    description: "Menu gastronomique avec produits locaux"
  },
  {
    icon: Bike,
    title: "VTT en forêt",
    description: "Parcours balisés à disposition"
  },
  {
    icon: Telescope,
    title: "Observation des étoiles",
    description: "Lunette astronomique fournie"
  },
  {
    icon: Flame,
    title: "Soirée feu de camp",
    description: "Guimauves et vin chaud"
  },
  {
    icon: Music,
    title: "Bain sonore",
    description: "Séance de relaxation profonde"
  }
];

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-[#2C5F2D]/10 rounded-full mb-6">
                <span className="text-[#2C5F2D] text-sm tracking-wider uppercase">
                  Expériences & Services
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                Des moments d'exception
                <br />
                à chaque instant
              </h2>
              <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
                Nous avons conçu une palette d'expériences pour enrichir votre séjour. 
                Du réveil gourmand à la nuit étoilée, chaque moment est pensé pour vous 
                offrir une parenthèse inoubliable.
              </p>
            </div>

            {/* Experiences Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-[#2C5F2D]/5 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2C5F2D]/10 rounded-xl flex items-center justify-center">
                    <exp.icon className="w-6 h-6 text-[#2C5F2D]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] mb-1">{exp.title}</h4>
                    <p className="text-sm text-[#1A1A1A]/60">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-[#2C5F2D] hover:gap-4 transition-all"
              >
                <span>Découvrir toutes nos expériences</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <div 
                className="relative h-72 rounded-3xl overflow-hidden"
                id="PB_ExperienceImage1Slot"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654808991961-141a731f55db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmVha2Zhc3QlMjB0cmF5fGVufDF8fHx8MTc2MjU1NjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Petit-déjeuner"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div 
                className="relative h-52 rounded-3xl overflow-hidden"
                id="PB_ExperienceImage2Slot"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1634923140519-e51c0dae26d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlbGF4aW5nJTIwc3BhfGVufDF8fHx8MTc2MjQ5MTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Spa relaxation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div 
                className="relative h-52 rounded-3xl overflow-hidden"
                id="PB_ExperienceImage3Slot"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1640958904585-1f53cb0b03c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmb3Jlc3QlMjB2aWV3fGVufDF8fHx8MTc2MjU1NzM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vue aérienne forêt"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div 
                className="relative h-72 rounded-3xl overflow-hidden"
                id="PB_ExperienceImage4Slot"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614680889829-9b2d25a71be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzYyNTMwNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dîner romantique"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
