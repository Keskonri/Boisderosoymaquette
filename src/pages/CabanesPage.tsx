import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Maximize2, Users, Sparkles, Wifi, Coffee, Flame, Droplets, Wind, Star, ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

const cabins = [
  {
    id: 1,
    name: "La Canopée",
    tagline: "Vue panoramique sur la forêt",
    description: "Notre cabane emblématique offre une vue à 360° sur la forêt. Perchée à 8 mètres de hauteur, elle dispose d'une terrasse spacieuse avec jacuzzi privatif.",
    mainImage: "https://images.unsplash.com/photo-1696482280456-00654f9bc25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0cmVlaG91c2UlMjBuYXR1cmV8ZW58MXx8fHwxNzYyNTU2NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1761782797823-2b555af8a226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBpbnRlcmlvciUyMGNvenl8ZW58MXx8fHwxNzYyNTU3MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1728344436686-31c6f5546cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwamFjdXp6aSUyMGZvcmVzdHxlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1728633835386-4c154522b77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmVlaG91c2UlMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    price: 320,
    capacity: "2-4 personnes",
    surface: "35 m²",
    height: "8 mètres",
    features: [
      { icon: Maximize2, label: "35 m² habitables" },
      { icon: Users, label: "2-4 personnes" },
      { icon: Sparkles, label: "Jacuzzi chromothérapie" },
      { icon: Wifi, label: "Wifi haut débit" },
      { icon: Coffee, label: "Cuisine équipée" },
      { icon: Flame, label: "Cheminée" }
    ],
    amenities: [
      "Lit king-size 180x200",
      "Canapé convertible",
      "Salle de bain avec douche italienne",
      "WC séparés",
      "Terrasse 20 m² avec salon de jardin",
      "Jacuzzi 4 places chauffé",
      "Cuisine équipée (plaques, frigo, micro-ondes)",
      "Cheminée au bioéthanol",
      "Chauffage au sol",
      "Linge de maison fourni",
      "Produits d'accueil bio",
      "Wifi fibre optique"
    ]
  },
  {
    id: 2,
    name: "Le Nid Perché",
    tagline: "Au plus proche des oiseaux",
    description: "Cabane intimiste idéale pour les couples en quête de romantisme. Nichée à 6 mètres dans un chêne centenaire avec vue sur l'étang.",
    mainImage: "https://images.unsplash.com/photo-1598721987126-0e7bee3ba71f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJpbiUyMGZvcmVzdCUyMGludGVyaW9yfGVufDF8fHx8MTc2MjU1NjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1761782797823-2b555af8a226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBpbnRlcmlvciUyMGNvenl8ZW58MXx8fHwxNzYyNTU3MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1728344436686-31c6f5546cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwamFjdXp6aSUyMGZvcmVzdHxlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1703634869858-c2add296ae80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMG1vcm5pbmd8ZW58MXx8fHwxNzYyNTUyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    price: 290,
    capacity: "2 personnes",
    surface: "30 m²",
    height: "6 mètres",
    features: [
      { icon: Maximize2, label: "30 m² habitables" },
      { icon: Users, label: "2 personnes" },
      { icon: Sparkles, label: "Spa extérieur" },
      { icon: Wifi, label: "Wifi" },
      { icon: Coffee, label: "Kitchenette" },
      { icon: Droplets, label: "Vue sur l'étang" }
    ],
    amenities: [
      "Lit queen-size 160x200",
      "Salle d'eau avec douche",
      "WC",
      "Terrasse 15 m²",
      "Spa 2 places chauffé",
      "Kitchenette (mini-frigo, bouilloire, vaisselle)",
      "Chauffage",
      "Linge de maison fourni",
      "Produits d'accueil bio",
      "Wifi",
      "Vue directe sur l'étang"
    ]
  },
  {
    id: 3,
    name: "L'Observatoire",
    tagline: "Le point culminant de la forêt",
    description: "Notre cabane premium au sommet de la canopée. Vue spectaculaire à 360°, jacuzzi avec chromothérapie et équipements haut de gamme.",
    mainImage: "https://images.unsplash.com/photo-1610477101678-e8658d018a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBzdW5zZXQlMjBuYXR1cmV8ZW58MXx8fHwxNzYyNTU2NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1761782797823-2b555af8a226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBpbnRlcmlvciUyMGNvenl8ZW58MXx8fHwxNzYyNTU3MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1728344436686-31c6f5546cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwamFjdXp6aSUyMGZvcmVzdHxlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1728633835386-4c154522b77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmVlaG91c2UlMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    price: 380,
    capacity: "2-4 personnes",
    surface: "40 m²",
    height: "10 mètres",
    features: [
      { icon: Maximize2, label: "40 m² habitables" },
      { icon: Users, label: "2-4 personnes" },
      { icon: Sparkles, label: "Jacuzzi chromothérapie" },
      { icon: Wifi, label: "Wifi premium" },
      { icon: Coffee, label: "Cuisine complète" },
      { icon: Flame, label: "Cheminée & poêle" }
    ],
    amenities: [
      "Suite parentale avec lit king-size 180x200",
      "Chambre enfants avec 2 lits 90x190",
      "Salle de bain avec baignoire et douche",
      "WC séparés",
      "Terrasse 25 m² avec vue panoramique",
      "Jacuzzi 5 places avec chromothérapie",
      "Cuisine complète équipée",
      "Cheminée et poêle à bois",
      "Plancher chauffant",
      "Système audio Sonos",
      "Télescope pour observation des étoiles",
      "Linge de maison premium",
      "Produits d'accueil bio luxe",
      "Wifi fibre optique"
    ]
  }
];

export function CabanesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729896632513-3b52a1c1b78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBjYWJpbiUyMGphY3V6emklMjBmb3Jlc3R8ZW58MXx8fHwxNzYyNTU2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Nos cabanes dans les arbres"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl"
          >
            <h1 className="text-5xl lg:text-7xl font-serif mb-6">Nos Cabanes</h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Trois refuges uniques perchés dans les arbres, chacun avec son caractère et son atmosphère
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cabins Detailed Sections */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {cabins.map((cabin, index) => (
          <section key={cabin.id} className={`py-20 lg:py-32 ${index !== cabins.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C5F2D]/10 rounded-full mb-6">
                    <Star className="w-4 h-4 text-[#2C5F2D]" fill="#2C5F2D" />
                    <span className="text-[#2C5F2D] text-sm tracking-wider uppercase">
                      Cabane n°{cabin.id}
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-4">{cabin.name}</h2>
                  <p className="text-xl text-[#8B6F47] mb-6">{cabin.tagline}</p>
                  <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">{cabin.description}</p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#FAF8F5] rounded-2xl p-4 text-center">
                    <div className="text-2xl text-[#2C5F2D] mb-1">{cabin.surface}</div>
                    <div className="text-xs text-[#1A1A1A]/60">Surface</div>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-2xl p-4 text-center">
                    <div className="text-2xl text-[#2C5F2D] mb-1">{cabin.capacity.split(' ')[0]}</div>
                    <div className="text-xs text-[#1A1A1A]/60">Personnes</div>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-2xl p-4 text-center">
                    <div className="text-2xl text-[#2C5F2D] mb-1">{cabin.height}</div>
                    <div className="text-xs text-[#1A1A1A]/60">Hauteur</div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {cabin.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2C5F2D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-[#2C5F2D]" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm text-[#1A1A1A]/80">{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-xl text-[#1A1A1A] mb-4">Équipements inclus</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cabin.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2C5F2D] mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-sm text-[#1A1A1A]/70">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="bg-gradient-to-br from-[#2C5F2D] to-[#1e4520] rounded-2xl p-8 text-white">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <div className="text-sm text-white/80 mb-1">À partir de</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl">{cabin.price}€</span>
                        <span className="text-white/80">/nuit</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/80">Capacité</div>
                      <div className="text-lg">{cabin.capacity}</div>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-[#2C5F2D] hover:bg-white/90 py-6 gap-2">
                    Réserver {cabin.name}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Images Gallery */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 relative h-96 rounded-3xl overflow-hidden">
                    <ImageWithFallback
                      src={cabin.mainImage}
                      alt={cabin.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {cabin.gallery.map((img, idx) => (
                    <div key={idx} className="relative h-48 rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src={img}
                        alt={`${cabin.name} - ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-6">Comparer les cabanes</h2>
            <p className="text-lg text-[#1A1A1A]/70">Trouvez la cabane qui correspond à vos besoins</p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#2C5F2D] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Caractéristiques</th>
                    {cabins.map(cabin => (
                      <th key={cabin.id} className="px-6 py-4 text-center">{cabin.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-[#1A1A1A]">Surface</td>
                    {cabins.map(cabin => (
                      <td key={cabin.id} className="px-6 py-4 text-center text-[#1A1A1A]/70">{cabin.surface}</td>
                    ))}
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="px-6 py-4 text-[#1A1A1A]">Capacité</td>
                    {cabins.map(cabin => (
                      <td key={cabin.id} className="px-6 py-4 text-center text-[#1A1A1A]/70">{cabin.capacity}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-[#1A1A1A]">Hauteur</td>
                    {cabins.map(cabin => (
                      <td key={cabin.id} className="px-6 py-4 text-center text-[#1A1A1A]/70">{cabin.height}</td>
                    ))}
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="px-6 py-4 text-[#1A1A1A]">Prix/nuit</td>
                    {cabins.map(cabin => (
                      <td key={cabin.id} className="px-6 py-4 text-center text-[#2C5F2D]">{cabin.price}€</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4"></td>
                    {cabins.map(cabin => (
                      <td key={cabin.id} className="px-6 py-4 text-center">
                        <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white">
                          Réserver
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
