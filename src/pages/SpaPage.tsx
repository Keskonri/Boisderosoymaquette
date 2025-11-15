import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Droplets, Heart, Sparkles, Waves, Wind, Flame, Clock, Users } from "lucide-react";
import { motion } from "motion/react";

const spaFeatures = [
  {
    icon: Droplets,
    title: "Jacuzzi privatif",
    description: "Chaque cabane dispose de son spa extérieur chauffé toute l'année"
  },
  {
    icon: Sparkles,
    title: "Chromothérapie",
    description: "Système d'éclairage LED pour une relaxation optimale"
  },
  {
    icon: Wind,
    title: "Aromathérapie",
    description: "Huiles essentielles bio pour parfumer votre bain"
  },
  {
    icon: Flame,
    title: "Chauffage intelligent",
    description: "Température maintenue à 38°C pour votre confort"
  }
];

const massages = [
  {
    name: "Massage Relaxant",
    duration: "60 min",
    price: 90,
    description: "Massage doux aux huiles essentielles pour une détente profonde. Idéal après une journée de randonnée.",
    image: "https://images.unsplash.com/photo-1634923140519-e51c0dae26d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlbGF4aW5nJTIwc3BhfGVufDF8fHx8MTc2MjQ5MTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Réduction du stress", "Amélioration du sommeil", "Détente musculaire", "Apaisement mental"]
  },
  {
    name: "Massage Sportif",
    duration: "60 min",
    price: 95,
    description: "Massage tonique ciblé sur les zones de tension. Parfait pour les sportifs et les amateurs de VTT.",
    image: "https://images.unsplash.com/photo-1634923140519-e51c0dae26d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlbGF4aW5nJTIwc3BhfGVufDF8fHx8MTc2MjQ5MTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Récupération musculaire", "Amélioration de la circulation", "Élimination des toxines", "Prévention des courbatures"]
  },
  {
    name: "Massage en Duo",
    duration: "60 min",
    price: 170,
    description: "Partagez un moment de détente à deux avec deux praticiennes dans votre cabane.",
    image: "https://images.unsplash.com/photo-1634923140519-e51c0dae26d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlbGF4aW5nJTIwc3BhfGVufDF8fHx8MTc2MjQ5MTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Expérience partagée", "Synchronisation", "Moment de complicité", "Double détente"],
    popular: true
  },
  {
    name: "Massage Prénatal",
    duration: "60 min",
    price: 95,
    description: "Massage adapté aux futures mamans pour soulager les tensions de la grossesse.",
    image: "https://images.unsplash.com/photo-1634923140519-e51c0dae26d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlbGF4aW5nJTIwc3BhfGVufDF8fHx8MTc2MjQ5MTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Soulagement du dos", "Réduction des œdèmes", "Relaxation profonde", "Connexion maman-bébé"]
  }
];

const rituals = [
  {
    name: "Rituel Forestier",
    duration: "2h",
    price: 150,
    description: "Expérience complète associant bain sonore aux bols tibétains et massage aux huiles de la forêt",
    includes: ["Accueil avec tisane détox", "Bain sonore 45 min", "Massage 60 min", "Temps de repos guidé"]
  },
  {
    name: "Rituel Romantique",
    duration: "2h30",
    price: 280,
    description: "Moment de détente à deux avec massages en duo et champagne au jacuzzi",
    includes: ["Décoration florale", "Massages en duo 60 min", "Session jacuzzi privée", "Champagne & gourmandises"]
  },
  {
    name: "Rituel Ressourcement",
    duration: "3h",
    price: 200,
    description: "Journée bien-être complète avec yoga, méditation et soins",
    includes: ["Yoga matinal en forêt", "Méditation guidée", "Massage 60 min", "Déjeuner détox", "Accès jacuzzi illimité"]
  }
];

const wellnessActivities = [
  {
    icon: Heart,
    name: "Yoga en forêt",
    description: "Sessions matinales avec professeur certifié",
    schedule: "8h-9h30 • Lun-Mer-Ven"
  },
  {
    icon: Wind,
    name: "Méditation guidée",
    description: "Initiation à la pleine conscience",
    schedule: "18h-19h • Mar-Jeu-Sam"
  },
  {
    icon: Waves,
    name: "Bain sonore",
    description: "Relaxation aux bols tibétains",
    schedule: "Sur réservation"
  },
  {
    icon: Sparkles,
    name: "Atelier respiration",
    description: "Techniques de breathwork",
    schedule: "Sur réservation"
  }
];

export function SpaPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1728344436686-31c6f5546cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwamFjdXp6aSUyMGZvcmVzdHxlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Spa et bien-être"
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
            <h1 className="text-5xl lg:text-7xl font-serif mb-6">Spa & Bien-être</h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Ressourcez-vous dans votre jacuzzi privatif sous les étoiles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spa Features */}
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
              Votre spa privatif
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto">
              Chaque cabane est équipée d'un jacuzzi extérieur haut de gamme, 
              pour des moments de détente en communion avec la nature
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {spaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#2C5F2D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#2C5F2D]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-[#1A1A1A] mb-3">{feature.title}</h3>
                <p className="text-[#1A1A1A]/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 relative h-96 rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728344436686-31c6f5546cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwamFjdXp6aSUyMGZvcmVzdHxlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Jacuzzi forestier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-serif mb-2">Immersion totale</h3>
                <p className="text-white/90">Un bain chaud sous la canopée</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative h-44 rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728633835386-4c154522b77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmVlaG91c2UlMjB0ZXJyYWNlJTIwdmlld3xlbnwxfHx8fDE3NjI1NTczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Terrasse spa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-44 rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1703634869858-c2add296ae80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMG1vcm5pbmd8ZW58MXx8fHwxNzYyNTUyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vue forêt"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massages Section */}
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
              Massages en cabane
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto">
              Nos praticiennes diplômées se déplacent directement dans votre cabane 
              pour des soins personnalisés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {massages.map((massage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-3xl shadow-lg overflow-hidden ${massage.popular ? 'ring-2 ring-[#2C5F2D]' : ''}`}
              >
                {massage.popular && (
                  <div className="bg-[#2C5F2D] text-white text-center py-2 text-sm tracking-wider">
                    ⭐ COUP DE CŒUR
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback
                      src={massage.image}
                      alt={massage.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl text-[#1A1A1A]">{massage.name}</h3>
                      <div className="text-right flex-shrink-0 ml-4">
                        <div className="text-2xl text-[#2C5F2D]">{massage.price}€</div>
                        <div className="text-sm text-[#1A1A1A]/60">{massage.duration}</div>
                      </div>
                    </div>

                    <p className="text-[#1A1A1A]/70 mb-6">{massage.description}</p>

                    <div className="mb-6">
                      <div className="text-sm text-[#1A1A1A] mb-3">Bienfaits :</div>
                      <div className="grid grid-cols-2 gap-2">
                        {massage.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                            <div className="w-1.5 h-1.5 bg-[#2C5F2D] rounded-full"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white">
                      Réserver
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C5F2D] to-[#1e4520] text-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">
              Rituels bien-être
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Des expériences complètes pour une détente absolue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rituals.map((ritual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl">{ritual.name}</h3>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-3xl">{ritual.price}€</div>
                    <div className="text-sm text-white/70">{ritual.duration}</div>
                  </div>
                </div>

                <p className="text-white/90 mb-6">{ritual.description}</p>

                <div className="mb-8">
                  <div className="text-sm text-white/80 mb-3">Le rituel comprend :</div>
                  <ul className="space-y-2">
                    {ritual.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                        <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-white text-[#2C5F2D] hover:bg-white/90 py-6">
                  Réserver ce rituel
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Activities */}
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
              Activités bien-être
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto">
              Complétez votre séjour avec nos ateliers de ressourcement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-[#2C5F2D]/10 rounded-2xl flex items-center justify-center mb-6">
                  <activity.icon className="w-7 h-7 text-[#2C5F2D]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-[#1A1A1A] mb-2">{activity.name}</h3>
                <p className="text-[#1A1A1A]/70 mb-4">{activity.description}</p>
                <div className="text-sm text-[#2C5F2D]">{activity.schedule}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF8F5] rounded-3xl p-8 lg:p-12"
          >
            <h2 className="text-3xl text-[#1A1A1A] mb-8 text-center">
              Informations pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#2C5F2D] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Horaires</h3>
                    <p className="text-[#1A1A1A]/70">Soins disponibles de 9h à 20h sur réservation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#2C5F2D] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Réservation</h3>
                    <p className="text-[#1A1A1A]/70">Réservez vos soins lors de votre réservation ou sur place</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg text-[#1A1A1A] mb-3">À savoir</h3>
                <ul className="space-y-2 text-[#1A1A1A]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C5F2D]">•</span>
                    <span>Huiles et produits 100% bio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C5F2D]">•</span>
                    <span>Praticiennes diplômées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C5F2D]">•</span>
                    <span>Soins en cabane ou en extérieur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C5F2D]">•</span>
                    <span>Annulation gratuite 48h avant</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#1A1A1A]/10 text-center">
              <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white px-10 py-6">
                Réserver mes soins
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
