import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageSquare, Gift, Users, Heart } from "lucide-react";
import { motion } from "motion/react";

const contactReasons = [
  {
    icon: MessageSquare,
    title: "Question générale",
    description: "Informations sur les cabanes, tarifs, disponibilités"
  },
  {
    icon: Gift,
    title: "Occasion spéciale",
    description: "Anniversaire, demande en mariage, lune de miel"
  },
  {
    icon: Users,
    title: "Groupe ou événement",
    description: "Séminaire, team building, réunion de famille"
  },
  {
    icon: Heart,
    title: "Chèque cadeau",
    description: "Offrir un séjour ou une expérience"
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: "Par téléphone",
    primary: "+33 1 23 45 67 89",
    secondary: "Lun-Dim • 9h-20h",
    description: "Pour une réponse immédiate"
  },
  {
    icon: Mail,
    title: "Par email",
    primary: "contact@leboisderosoy.com",
    secondary: "Réponse sous 24h",
    description: "Pour toute demande détaillée"
  },
  {
    icon: MapPin,
    title: "Sur place",
    primary: "Forêt de Rosoy",
    secondary: "77123 Noisy-sur-École",
    description: "Visite sur rendez-vous uniquement"
  }
];

const faqItems = [
  {
    question: "Quels sont les horaires d'arrivée et de départ ?",
    answer: "Arrivée à partir de 16h, départ avant 11h. Possibilité d'arrivée tardive et de départ anticipé sur demande."
  },
  {
    question: "Les animaux sont-ils acceptés ?",
    answer: "Oui, nous acceptons un animal de petite taille (moins de 10kg) avec supplément de 30€/séjour. Merci de nous prévenir lors de la réservation."
  },
  {
    question: "Y a-t-il du réseau et du wifi ?",
    answer: "Toutes les cabanes disposent du wifi fibre optique. Le réseau mobile est correct mais nous encourageons la déconnexion digitale."
  },
  {
    question: "Peut-on cuisiner dans les cabanes ?",
    answer: "La Canopée et L'Observatoire disposent de cuisines équipées. Le Nid Perché a une kitchenette. Nous proposons aussi des formules petit-déjeuner et dîner."
  },
  {
    question: "Les cabanes sont-elles accessibles aux enfants ?",
    answer: "Oui, La Canopée et L'Observatoire peuvent accueillir des familles. Cependant, les cabanes sont en hauteur et nécessitent une surveillance constante des jeunes enfants."
  },
  {
    question: "Quelle est la politique d'annulation ?",
    answer: "Annulation gratuite jusqu'à 7 jours avant l'arrivée. Entre 7 et 3 jours : 50% du montant. Moins de 3 jours : montant total conservé."
  }
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1703634869858-c2add296ae80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMG1vcm5pbmd8ZW58MXx8fHwxNzYyNTUyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Contactez-nous"
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
            <h1 className="text-5xl lg:text-7xl font-serif mb-6">Contactez-nous</h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-[#1A1A1A] mb-4">
              Comment pouvons-nous vous aider ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#2C5F2D]/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-[#2C5F2D]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg text-[#1A1A1A] mb-2">{reason.title}</h3>
                <p className="text-sm text-[#1A1A1A]/70">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl text-[#1A1A1A] mb-4">
                Envoyez-nous un message
              </h2>
              <p className="text-lg text-[#1A1A1A]/70 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">Prénom *</label>
                    <Input 
                      placeholder="Jean"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">Nom *</label>
                    <Input 
                      placeholder="Dupont"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Email *</label>
                  <Input 
                    type="email"
                    placeholder="jean.dupont@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Téléphone</label>
                  <Input 
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Sujet *</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#2C5F2D] transition-colors">
                    <option>Réservation et disponibilités</option>
                    <option>Question sur les cabanes</option>
                    <option>Occasion spéciale</option>
                    <option>Groupe ou événement</option>
                    <option>Chèque cadeau</option>
                    <option>Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Message *</label>
                  <Textarea 
                    placeholder="Décrivez-nous votre projet ou posez-nous vos questions..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent"
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-[#1A1A1A]/70">
                    J'accepte que mes données soient utilisées pour me recontacter concernant ma demande *
                  </label>
                </div>

                <Button className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white py-6 text-lg">
                  Envoyer le message
                </Button>

                <p className="text-xs text-[#1A1A1A]/60 text-center">
                  * Champs obligatoires
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl text-[#1A1A1A] mb-6">Nos coordonnées</h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="bg-[#FAF8F5] rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#2C5F2D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-6 h-6 text-[#2C5F2D]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="text-lg text-[#1A1A1A] mb-1">{method.title}</h4>
                          <a href="#" className="text-[#2C5F2D] hover:underline mb-1 block">
                            {method.primary}
                          </a>
                          <p className="text-sm text-[#1A1A1A]/60 mb-2">{method.secondary}</p>
                          <p className="text-sm text-[#1A1A1A]/70">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gradient-to-br from-[#2C5F2D] to-[#1e4520] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6" strokeWidth={1.5} />
                  <h3 className="text-xl">Horaires d'accueil</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Lundi - Vendredi</span>
                    <span>9h - 20h</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Samedi</span>
                    <span>9h - 21h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Dimanche</span>
                    <span>10h - 19h</span>
                  </div>
                </div>
                <p className="text-sm text-white/80 mt-6">
                  En dehors de ces horaires, vous pouvez nous laisser un message et nous vous recontacterons rapidement.
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-[#FAF8F5] rounded-2xl p-6">
                <h3 className="text-lg text-[#1A1A1A] mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#2C5F2D] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#2C5F2D] hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#2C5F2D] hover:text-white transition-colors"
                    aria-label="TripAdvisor"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-[#1A1A1A]/70">
              Trouvez rapidement des réponses à vos questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg text-[#1A1A1A] mb-3">{item.question}</h3>
                <p className="text-[#1A1A1A]/70">{item.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-[#1A1A1A]/70 mb-6">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Button 
              variant="outline" 
              className="border-2 border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white px-8 py-6"
            >
              Voir toutes les FAQ
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
