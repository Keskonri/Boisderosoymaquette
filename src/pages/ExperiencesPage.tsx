import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Coffee, Utensils, Bike, Telescope, Flame, Music, Heart, Camera, TreePine, Sunrise, Wine, Book } from "lucide-react";
import { motion } from "motion/react";

const experienceCategories = [
  {
    id: "gastronomie",
    title: "Gastronomie & Saveurs",
    subtitle: "Éveillez vos papilles",
    icon: Utensils,
    color: "#2C5F2D",
    image: "https://images.unsplash.com/photo-1654808991961-141a731f55db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmVha2Zhc3QlMjB0cmF5fGVufDF8fHx8MTc2MjU1NjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experiences: [
      {
        name: "Petit-déjeuner suspendu",
        description: "Réveillez-vous avec un panier gourmand livré directement à votre cabane. Produits frais et locaux, viennoiseries artisanales, confitures maison.",
        price: 35,
        duration: "Livré entre 8h-10h",
        included: ["Viennoiseries artisanales", "Pain frais", "Jus de fruits pressés", "Confitures maison", "Fruits de saison", "Café/Thé premium"]
      },
      {
        name: "Dîner romantique",
        description: "Menu gastronomique 3 services préparé par notre chef, servi dans votre cabane ou sur votre terrasse privée.",
        price: 95,
        duration: "2h30",
        included: ["Mise en place de votre table", "Menu 3 services", "Accord mets-vins", "Bougies & décoration", "Service discret"]
      },
      {
        name: "Panier pique-nique forestier",
        description: "Partez explorer la forêt avec un panier garni de spécialités locales et de saison.",
        price: 45,
        duration: "Flexible",
        included: ["Charcuterie & fromages locaux", "Salades fraîches", "Desserts maison", "Boissons", "Couverture de pique-nique", "Carte des sentiers"]
      }
    ]
  },
  {
    id: "nature",
    title: "Nature & Aventure",
    subtitle: "Explorez la forêt",
    icon: TreePine,
    color: "#8B6F47",
    image: "https://images.unsplash.com/photo-1640958904585-1f53cb0b03c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmb3Jlc3QlMjB2aWV3fGVufDF8fHx8MTc2MjU1NzM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experiences: [
      {
        name: "Randonnée guidée en forêt",
        description: "Découvrez la faune et la flore avec notre guide naturaliste. Observation des oiseaux et identification des plantes.",
        price: 60,
        duration: "3h",
        included: ["Guide naturaliste", "Jumelles fournies", "Livret pédagogique", "Goûter forestier", "Photos souvenir"]
      },
      {
        name: "VTT électrique",
        description: "Parcourez les sentiers forestiers en VTT électrique. Plusieurs parcours balisés disponibles.",
        price: 40,
        duration: "Demi-journée",
        included: ["VTT électrique", "Casque", "Carte des parcours", "Kit de réparation", "Bouteille d'eau"]
      },
      {
        name: "Atelier bushcraft",
        description: "Apprenez les techniques de survie en forêt : allumer un feu, reconnaître les plantes comestibles, construire un abri.",
        price: 85,
        duration: "4h",
        included: ["Instructeur expert", "Matériel fourni", "Manuel de survie", "Certificat de participation"]
      }
    ]
  },
  {
    id: "bienetre",
    title: "Bien-être & Relaxation",
    subtitle: "Ressourcez-vous",
    icon: Heart,
    color: "#2C5F2D",
    image: "https://images.unsplash.com/photo-1634923140519-e51c0dae26d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlbGF4aW5nJTIwc3BhfGVufDF8fHx8MTc2MjQ5MTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experiences: [
      {
        name: "Massage en cabane",
        description: "Massage relaxant ou sportif par notre praticienne diplômée, dans l'intimité de votre cabane.",
        price: 90,
        duration: "1h",
        included: ["Massage 1h", "Huiles bio", "Musique d'ambiance", "Tisane relaxante"]
      },
      {
        name: "Bain sonore sous les étoiles",
        description: "Séance de relaxation profonde aux bols tibétains sur votre terrasse, sous la voûte étoilée.",
        price: 75,
        duration: "1h30",
        included: ["Praticien certifié", "Bols tibétains", "Tapis de méditation", "Couvertures", "Tisane d'après séance"]
      },
      {
        name: "Yoga matinal en forêt",
        description: "Session de yoga au lever du soleil en pleine nature avec notre professeur certifiée.",
        price: 50,
        duration: "1h30",
        included: ["Professeur certifié", "Tapis de yoga", "Accès espace bien-être", "Infusion détox"]
      }
    ]
  },
  {
    id: "romantique",
    title: "Escapades Romantiques",
    subtitle: "Célébrez l'amour",
    icon: Wine,
    color: "#8B6F47",
    image: "https://images.unsplash.com/photo-1614680889829-9b2d25a71be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzYyNTMwNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experiences: [
      {
        name: "Soirée aux chandelles",
        description: "Transformation complète de votre cabane avec décoration romantique, pétales de roses et bougies parfumées.",
        price: 120,
        duration: "Soirée complète",
        included: ["Décoration romantique", "200 bougies LED", "Pétales de roses", "Champagne", "Playlist personnalisée", "Chocolats fins"]
      },
      {
        name: "Observation des étoiles",
        description: "Soirée astronomie avec télescope professionnel et guide passionné pour explorer le ciel nocturne.",
        price: 80,
        duration: "2h",
        included: ["Télescope professionnel", "Guide astronome", "Carte du ciel", "Plaids chauffants", "Chocolat chaud"]
      },
      {
        name: "Demande en mariage",
        description: "Organisation complète de votre demande : décoration, champagne, photographe. Un moment inoubliable.",
        price: 450,
        duration: "3h",
        included: ["Coordination complète", "Décoration sur-mesure", "Champagne millésimé", "Photographe 1h", "Album photo", "Discrétion garantie"]
      }
    ]
  }
];

const packages = [
  {
    name: "Week-end Découverte",
    description: "L'essentiel pour un premier séjour réussi",
    price: 450,
    image: "https://images.unsplash.com/photo-1703634869858-c2add296ae80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMG1vcm5pbmd8ZW58MXx8fHwxNzYyNTUyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    includes: [
      "2 nuits en cabane",
      "2 petits-déjeuners suspendus",
      "1 panier pique-nique forestier",
      "Accès VTT électrique",
      "Guide de randonnée"
    ]
  },
  {
    name: "Escapade Romantique",
    description: "Pour célébrer votre amour en pleine nature",
    price: 680,
    image: "https://images.unsplash.com/photo-1614680889829-9b2d25a71be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzYyNTMwNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true,
    includes: [
      "2 nuits en cabane premium",
      "Soirée aux chandelles",
      "1 dîner gastronomique",
      "2 petits-déjeuners",
      "2 massages en cabane",
      "Champagne à l'arrivée"
    ]
  },
  {
    name: "Semaine Ressourcement",
    description: "Déconnexion totale et reconnexion à la nature",
    price: 1250,
    image: "https://images.unsplash.com/photo-1634923140519-e51c0dae26d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlbGF4aW5nJTIwc3BhfGVufDF8fHx8MTc2MjQ5MTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    includes: [
      "7 nuits en cabane",
      "7 petits-déjeuners",
      "3 dîners gastronomiques",
      "4 massages",
      "2 séances de yoga",
      "1 bain sonore",
      "Randonnée guidée",
      "Atelier bushcraft"
    ]
  }
];

export function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1703634869858-c2add296ae80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMG1vcm5pbmd8ZW58MXx8fHwxNzYyNTUyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Expériences au Bois de Rosoy"
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
            <h1 className="text-5xl lg:text-7xl font-serif mb-6">Expériences</h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Enrichissez votre séjour avec nos activités sur-mesure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Categories */}
      {experienceCategories.map((category, categoryIndex) => (
        <section key={category.id} className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}`}>
          <div className="max-w-[1600px] mx-auto">
            {/* Category Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 bg-[#2C5F2D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <category.icon className="w-8 h-8 text-[#2C5F2D]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-4">{category.title}</h2>
              <p className="text-xl text-[#1A1A1A]/70">{category.subtitle}</p>
            </motion.div>

            {/* Experiences List */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.experiences.map((exp, expIndex) => (
                <motion.div
                  key={expIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: expIndex * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl text-[#1A1A1A] pr-4">{exp.name}</h3>
                      <div className="bg-[#2C5F2D] text-white px-4 py-2 rounded-full flex-shrink-0">
                        <span className="text-lg">{exp.price}€</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-[#2C5F2D] mb-4">{exp.duration}</div>
                    <p className="text-[#1A1A1A]/70 mb-6">{exp.description}</p>

                    <div className="mb-6">
                      <div className="text-sm text-[#1A1A1A] mb-3">Inclus :</div>
                      <ul className="space-y-2">
                        {exp.included.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#1A1A1A]/70">
                            <div className="w-1.5 h-1.5 bg-[#2C5F2D] rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white">
                      Réserver cette expérience
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Packages Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C5F2D] to-[#1e4520] text-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">Forfaits séjour</h2>
            <p className="text-xl text-white/90">
              Nos packages tout-inclus pour une expérience sans souci
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border ${pkg.popular ? 'border-white/40 ring-2 ring-white' : 'border-white/20'}`}
              >
                {pkg.popular && (
                  <div className="bg-white text-[#2C5F2D] text-center py-2 text-sm tracking-wider">
                    ⭐ LE PLUS POPULAIRE
                  </div>
                )}
                <div className="relative h-48">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-white/80 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl">{pkg.price}€</span>
                      <span className="text-white/70">/ séjour</span>
                    </div>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, idx) => (
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
                    Réserver ce forfait
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
              Une expérience sur-mesure ?
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 mb-8">
              Nous pouvons créer un séjour personnalisé selon vos envies. 
              Anniversaire, lune de miel, demande en mariage... Contactez-nous !
            </p>
            <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white px-10 py-6 text-lg">
              Créer mon séjour sur-mesure
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
