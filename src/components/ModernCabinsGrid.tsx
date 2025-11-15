import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Maximize2, Users, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const cabins = [
  {
    id: "cabin-1",
    name: "La Canopée",
    tagline: "Vue panoramique sur la forêt",
    image: "https://images.unsplash.com/photo-1696482280456-00654f9bc25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0cmVlaG91c2UlMjBuYXR1cmV8ZW58MXx8fHwxNzYyNTU2NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "320",
    features: [
      { icon: Maximize2, text: "35 m²" },
      { icon: Users, text: "2-4 personnes" },
      { icon: Sparkles, text: "Jacuzzi privatif" }
    ],
    highlights: ["Lit king-size", "Cuisine équipée", "Terrasse 20m²", "Wifi"]
  },
  {
    id: "cabin-2",
    name: "Le Nid Perché",
    tagline: "Au plus proche des oiseaux",
    image: "https://images.unsplash.com/photo-1598721987126-0e7bee3ba71f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJpbiUyMGZvcmVzdCUyMGludGVyaW9yfGVufDF8fHx8MTc2MjU1NjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "290",
    features: [
      { icon: Maximize2, text: "30 m²" },
      { icon: Users, text: "2 personnes" },
      { icon: Sparkles, text: "Spa extérieur" }
    ],
    highlights: ["Lit queen-size", "Coin salon", "Vue sur l'étang", "Wifi"]
  },
  {
    id: "cabin-3",
    name: "L'Observatoire",
    tagline: "Le point culminant de la forêt",
    image: "https://images.unsplash.com/photo-1610477101678-e8658d018a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBzdW5zZXQlMjBuYXR1cmV8ZW58MXx8fHwxNzYyNTU2NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "380",
    features: [
      { icon: Maximize2, text: "40 m²" },
      { icon: Users, text: "2-4 personnes" },
      { icon: Sparkles, text: "Jacuzzi chromothérapie" }
    ],
    highlights: ["Suite parentale", "Cuisine complète", "Vue 360°", "Cheminée"]
  }
];

export function ModernCabinsGrid() {
  return (
    <section id="cabanes" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
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
              Nos Cabanes
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#1A1A1A] mb-6">
            Trouvez votre refuge
            <br />
            dans les arbres
          </h2>
          <p className="text-lg lg:text-xl text-[#1A1A1A]/70">
            Trois cabanes uniques, chacune avec son caractère et son atmosphère
          </p>
        </motion.div>

        {/* Cabins Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cabins.map((cabin, index) => (
            <motion.div
              key={cabin.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              id={`PB_${cabin.id}ImageSlot`}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={cabin.image}
                  alt={cabin.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl text-[#2C5F2D]">{cabin.price}€</span>
                    <span className="text-sm text-[#1A1A1A]/60">/nuit</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] mb-2">
                  {cabin.name}
                </h3>
                <p className="text-[#1A1A1A]/60 mb-6">{cabin.tagline}</p>

                {/* Features Icons */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                  {cabin.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                      <feature.icon className="w-4 h-4 text-[#2C5F2D]" strokeWidth={1.5} />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {cabin.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                      <div className="w-1.5 h-1.5 bg-[#2C5F2D] rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Button 
                    onClick={() => (window as any).openBooking?.(cabin.id === "cabin-1" ? "canopee" : cabin.id === "cabin-2" ? "nid" : "observatoire")}
                    className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white gap-2 py-6"
                  >
                    Voir les disponibilités
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <button 
                    onClick={() => (window as any).navigateTo?.('cabanes')}
                    className="w-full text-sm text-[#2C5F2D] hover:text-[#2C5F2D]/80 transition-colors py-2"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#1A1A1A]/60 mb-6">
            Vous hésitez entre plusieurs cabanes ?
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white px-8 py-6"
          >
            Comparer les cabanes
          </Button>
        </motion.div>
      </div>
    </section>
  );
}