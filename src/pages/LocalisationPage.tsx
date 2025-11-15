import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { MapPin, Car, Train, Plane, Clock, Navigation, TreePine, Mountain, Castle, Camera } from "lucide-react";
import { motion } from "motion/react";

const accessMethods = [
  {
    icon: Car,
    title: "En voiture depuis Paris",
    duration: "1h00",
    description: "Le moyen le plus pratique et direct",
    directions: [
      "Prendre l'A1 direction Lille",
      "Sortie 8 direction Senlis / Crépy-en-Valois",
      "Suivre D330A puis D1324 vers Crépy-en-Valois",
      "Prendre direction Rosoy-en-Multien",
      "Suivre Chemin des Gendarmes jusqu'au domaine"
    ],
    distance: "70 km",
    tips: "GPS : 4 Chemin des Gendarmes, 60620 Rosoy-en-Multien • Parking gratuit sur place"
  },
  {
    icon: Train,
    title: "En train + navette",
    duration: "1h10",
    description: "Option écologique depuis Paris",
    directions: [
      "Gare du Nord → Crépy-en-Valois (50 min)",
      "Navette privée sur réservation (20 min)",
      "Ou taxi depuis la gare (15 min)"
    ],
    distance: "Ligne K du Transilien",
    tips: "Navette gratuite pour séjours de 2 nuits minimum • Réservation 48h avant"
  },
  {
    icon: Plane,
    title: "En avion + voiture",
    duration: "1h15",
    description: "Pour les visiteurs internationaux",
    directions: [
      "Aéroport Charles de Gaulle (le plus proche)",
      "Location de voiture à l'aéroport",
      "Direction A1 puis sortie Senlis"
    ],
    distance: "55 km depuis CDG",
    tips: "Nous pouvons organiser un transfert privé sur demande"
  }
];

const nearbyAttractions = [
  {
    name: "Château de Fontainebleau",
    type: "Monument historique",
    distance: "15 km",
    duration: "20 min",
    description: "Résidence des souverains français pendant huit siècles, classée au patrimoine mondial de l'UNESCO",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBjaGF0ZWF1fGVufDF8fHx8MTc2MjU1NzM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Castle,
    activities: ["Visite guidée", "Jardins", "Musée"]
  },
  {
    name: "Forêt de Fontainebleau",
    type: "Nature & randonnée",
    distance: "5 km",
    duration: "10 min",
    description: "25 000 hectares de forêt exceptionnelle, paradis des randonneurs, grimpeurs et cyclistes",
    image: "https://images.unsplash.com/photo-1640958904585-1f53cb0b03c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmb3Jlc3QlMjB2aWV3fGVufDF8fHx8MTc2MjU1NzM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: TreePine,
    activities: ["Randonnée", "Escalade", "VTT", "Observation faune"]
  },
  {
    name: "Barbizon",
    type: "Village des peintres",
    distance: "12 km",
    duration: "15 min",
    description: "Charmant village qui inspira les peintres pré-impressionnistes, galeries d'art et restaurants",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjB2aWxsYWdlfGVufDF8fHx8MTc2MjU1NzM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Camera,
    activities: ["Galeries d'art", "Restaurants", "Balades"]
  },
  {
    name: "Trois Pignons",
    type: "Site d'escalade",
    distance: "8 km",
    duration: "12 min",
    description: "Site d'escalade de bloc mondialement connu, rochers de grès au cœur de la forêt",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBmb3Jlc3Q8ZW58MXx8fHwxNzYyNTU3MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Mountain,
    activities: ["Escalade", "Blocs", "Randonnée"]
  }
];

const villages = [
  {
    name: "Milly-la-Forêt",
    distance: "8 km",
    description: "Marché traditionnel, cyclotourisme, Maison Jean Cocteau",
    highlight: "Marché le samedi matin"
  },
  {
    name: "Fontainebleau",
    distance: "15 km",
    description: "Centre-ville historique, shopping, restaurants gastronomiques",
    highlight: "Ville d'art et d'histoire"
  },
  {
    name: "Moret-sur-Loing",
    distance: "25 km",
    description: "Cité médiévale sur la rivière, galeries d'art",
    highlight: "Un des plus beaux villages"
  },
  {
    name: "Barbizon",
    distance: "12 km",
    description: "Village des peintres, galeries, ateliers d'artistes",
    highlight: "Capitale de la peinture paysagiste"
  }
];

export function LocalisationPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1640958904585-1f53cb0b03c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmb3Jlc3QlMjB2aWV3fGVufDF8fHx8MTc2MjU1NzM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Localisation Bois de Rosoy"
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
            <h1 className="text-5xl lg:text-7xl font-serif mb-6">Nous Trouver</h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Au cœur de la forêt de Fontainebleau, à seulement 1 heure de Paris
            </p>
          </motion.div>
        </div>
      </section>

      {/* Address & Quick Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2C5F2D] text-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif mb-4">Le Bois de Rosoy</h2>
                  <div className="text-xl text-white/90 space-y-1">
                    <p>4 Chemin des Gendarmes</p>
                    <p>60620 Rosoy-en-Multien</p>
                    <p>Oise, France</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <div className="text-white/70 mb-1">Téléphone</div>
                  <a href="tel:+33123456789" className="text-lg hover:underline">+33 1 23 45 67 89</a>
                </div>
                <div>
                  <div className="text-white/70 mb-1">Email</div>
                  <a href="mailto:contact@leboisderosoy.com" className="text-lg hover:underline">contact@leboisderosoy.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">1h</div>
                  <div className="text-sm text-white/80">Depuis Paris</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">70km</div>
                  <div className="text-sm text-white/80">Par l'A1</div>
                </div>
                <div className="text-center col-span-2 pt-4 border-t border-white/20">
                  <div className="text-4xl mb-2">15ha</div>
                  <div className="text-sm text-white/80">De forêt privée</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="w-full h-[500px] bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-white rounded-2xl p-8 shadow-xl max-w-md mx-4">
              <MapPin className="w-16 h-16 text-[#2C5F2D] mx-auto mb-4" />
              <h3 className="text-2xl text-[#1A1A1A] mb-4">Carte interactive</h3>
              <p className="text-[#1A1A1A]/70 mb-6">
                4 Chemin des Gendarmes, 60620 Rosoy-en-Multien
              </p>
              <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white w-full gap-2">
                <Navigation className="w-4 h-4" />
                Ouvrir dans Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Access Methods */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
              Comment nous rejoindre
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto">
              Plusieurs options s'offrent à vous pour venir profiter de votre escapade nature
            </p>
          </motion.div>

          <div className="space-y-8">
            {accessMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Header */}
                  <div className="bg-[#2C5F2D] text-white p-8 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <method.icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-serif mb-2">{method.title}</h3>
                    <p className="text-white/80 mb-4">{method.description}</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                      <div>
                        <div className="text-3xl">{method.duration}</div>
                        <div className="text-sm text-white/70">Temps de trajet</div>
                      </div>
                      <div className="h-12 w-px bg-white/20"></div>
                      <div>
                        <div className="text-lg">{method.distance}</div>
                        <div className="text-sm text-white/70">Distance</div>
                      </div>
                    </div>
                  </div>

                  {/* Directions */}
                  <div className="p-8 lg:col-span-2">
                    <h4 className="text-xl text-[#1A1A1A] mb-6">Itinéraire détaillé</h4>
                    <ol className="space-y-4 mb-8">
                      {method.directions.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-[#2C5F2D]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#2C5F2D]">
                            {idx + 1}
                          </div>
                          <span className="text-[#1A1A1A]/80 pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="bg-[#FAF8F5] rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#2C5F2D]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#2C5F2D] text-sm">💡</span>
                        </div>
                        <div>
                          <div className="text-sm text-[#1A1A1A] mb-1">Bon à savoir</div>
                          <p className="text-sm text-[#1A1A1A]/70">{method.tips}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
              À découvrir dans les environs
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto">
              Le Bois de Rosoy est idéalement situé pour explorer les merveilles de la région
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <attraction.icon className="w-6 h-6 text-[#2C5F2D]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                      <Car className="w-4 h-4 text-[#2C5F2D]" strokeWidth={1.5} />
                      <span>{attraction.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl text-[#1A1A1A] mb-1">{attraction.name}</h3>
                      <p className="text-sm text-[#2C5F2D]">{attraction.type}</p>
                    </div>
                    <div className="text-right text-sm text-[#1A1A1A]/60 flex-shrink-0 ml-4">
                      {attraction.distance}
                    </div>
                  </div>

                  <p className="text-[#1A1A1A]/70 mb-6">{attraction.description}</p>

                  <div>
                    <div className="text-sm text-[#1A1A1A] mb-3">Activités :</div>
                    <div className="flex flex-wrap gap-2">
                      {attraction.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-[#2C5F2D]/10 text-[#2C5F2D] rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Villages Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF8F5] rounded-3xl p-8 lg:p-12"
          >
            <h3 className="text-3xl text-[#1A1A1A] mb-8 text-center">Villages de charme à proximité</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {villages.map((village, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#2C5F2D]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-[#2C5F2D]" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl text-[#1A1A1A] mb-2">{village.name}</h4>
                  <p className="text-sm text-[#2C5F2D] mb-3">{village.distance}</p>
                  <p className="text-sm text-[#1A1A1A]/70 mb-3">{village.description}</p>
                  <div className="inline-block px-3 py-1 bg-white rounded-full text-xs text-[#1A1A1A]/60">
                    {village.highlight}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C5F2D] to-[#1e4520] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">
              Besoin d'aide pour organiser votre venue ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Notre équipe est à votre disposition pour vous conseiller sur le meilleur itinéraire 
              ou organiser votre transfert
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-[#2C5F2D] hover:bg-white/90 px-10 py-6 text-lg">
                Nous contacter
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg"
              >
                Télécharger le plan d'accès
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}