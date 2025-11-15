import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, TreePine, Heart } from "lucide-react";
import { motion } from "motion/react";

export function ConceptSection() {
  const concepts = [
    {
      icon: TreePine,
      title: "Perché dans les arbres",
      description: "Cabanes suspendues entre 4 et 8 mètres de hauteur, nichées dans la canopée"
    },
    {
      icon: Sparkles,
      title: "Spa privatif",
      description: "Chaque cabane dispose de son jacuzzi extérieur avec vue imprenable"
    },
    {
      icon: Heart,
      title: "Déconnexion totale",
      description: "Une bulle hors du temps pour se ressourcer, à seulement 1h de Paris"
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
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
              Le Concept
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#1A1A1A] mb-6">
            Une expérience insolite
            <br />
            au cœur de la nature
          </h2>
          <p className="text-lg lg:text-xl text-[#1A1A1A]/70">
            Le Bois de Rosoy réinvente l'hébergement en pleine nature en combinant luxe, authenticité et respect de l'environnement
          </p>
        </motion.div>

        {/* Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden"
            id="PB_ConceptImage1Slot"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728633835386-4c154522b77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmVlaG91c2UlMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Terrasse de cabane"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-3xl font-serif mb-2">Architecture unique</h3>
              <p className="text-white/90">Des cabanes pensées pour fusionner avec la nature</p>
            </div>
          </motion.div>

          {/* Grid of smaller images */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[280px] lg:h-[288px] rounded-3xl overflow-hidden"
              id="PB_ConceptImage2Slot"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728344436686-31c6f5546cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwamFjdXp6aSUyMGZvcmVzdHxlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Jacuzzi extérieur"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[280px] lg:h-[288px] rounded-3xl overflow-hidden"
              id="PB_ConceptImage3Slot"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761782797823-2b555af8a226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBpbnRlcmlvciUyMGNvenl8ZW58MXx8fHwxNzYyNTU3MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Intérieur cosy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[280px] lg:h-[288px] rounded-3xl overflow-hidden col-span-2"
              id="PB_ConceptImage4Slot"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1703634869858-c2add296ae80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMG1vcm5pbmd8ZW58MXx8fHwxNzYyNTUyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Forêt sereine"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif mb-1">15 hectares de forêt</h3>
                <p className="text-white/90 text-sm">Une nature préservée et respectée</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#2C5F2D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <concept.icon className="w-8 h-8 text-[#2C5F2D]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl lg:text-2xl text-[#1A1A1A] mb-3">
                {concept.title}
              </h3>
              <p className="text-[#1A1A1A]/70">
                {concept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
