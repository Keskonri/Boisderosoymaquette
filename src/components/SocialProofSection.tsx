import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    text: "Une expérience magique ! Le jacuzzi sous les étoiles, le silence de la forêt... Un week-end parfait pour se ressourcer.",
    author: "Sophie & Marc",
    date: "Octobre 2024",
    rating: 5,
    cabin: "La Canopée"
  },
  {
    id: 2,
    text: "Un endroit exceptionnel. L'accueil est chaleureux, la cabane magnifique et les petits-déjeuners délicieux.",
    author: "Julie T.",
    date: "Septembre 2024",
    rating: 5,
    cabin: "Le Nid Perché"
  },
  {
    id: 3,
    text: "Nous avons adoré notre séjour. La déconnexion totale à 1h de Paris, c'est exactement ce dont nous avions besoin.",
    author: "Thomas & Emma",
    date: "Novembre 2024",
    rating: 5,
    cabin: "L'Observatoire"
  }
];

export function SocialProofSection() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
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
              Ils ont vécu l'expérience
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#1A1A1A] mb-6">
            Nos voyageurs témoignent
          </h2>

          {/* Rating Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#2C5F2D] text-[#2C5F2D]" />
                ))}
              </div>
              <div className="text-3xl text-[#1A1A1A] mb-1">4.9/5</div>
              <div className="text-sm text-[#1A1A1A]/60">Note moyenne</div>
            </div>
            <div className="w-px h-16 bg-[#1A1A1A]/10"></div>
            <div className="text-center">
              <div className="text-3xl text-[#1A1A1A] mb-1">150+</div>
              <div className="text-sm text-[#1A1A1A]/60">Avis vérifiés</div>
            </div>
            <div className="w-px h-16 bg-[#1A1A1A]/10"></div>
            <div className="text-center">
              <div className="text-3xl text-[#1A1A1A] mb-1">98%</div>
              <div className="text-sm text-[#1A1A1A]/60">Recommandent</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <Quote className="w-10 h-10 text-[#2C5F2D] mb-4" strokeWidth={1.5} />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#2C5F2D] text-[#2C5F2D]" />
                ))}
              </div>

              <p className="text-[#1A1A1A] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-[#1A1A1A]">{testimonial.author}</div>
                <div className="text-sm text-[#1A1A1A]/60 mt-1">
                  {testimonial.cabin} • {testimonial.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Review with Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#2C5F2D] to-[#1e4520] rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              <Quote className="w-12 h-12 text-white/30 mb-6" strokeWidth={1.5} />

              <blockquote className="text-2xl lg:text-3xl mb-8 leading-relaxed">
                "Notre nuit dans les arbres restera gravée dans nos mémoires. L'intimité, le luxe discret, la communion avec la nature... Une parenthèse enchantée."
              </blockquote>

              <div>
                <div className="text-lg mb-1">Claire & Antoine</div>
                <div className="text-white/70 text-sm">Séjour anniversaire • Décembre 2024</div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-white/70 text-sm mb-2">Réservé via</div>
                <div className="flex items-center gap-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='30' viewBox='0 0 100 30'%3E%3Ctext x='0' y='20' font-family='Arial' font-size='20' fill='white'%3EBooking%3C/text%3E%3C/svg%3E" alt="Booking.com" className="h-6 opacity-80" />
                </div>
              </div>
            </div>

            {/* Image */}
            <div 
              className="relative h-64 lg:h-auto"
              id="PB_FeaturedTestimonialImageSlot"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729896632513-3b52a1c1b78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBjYWJpbiUyMGphY3V6emklMjBmb3Jlc3R8ZW58MXx8fHwxNzYyNTU2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Témoignage client"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Platforms */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#1A1A1A]/60 mb-6">Retrouvez nos avis sur</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="px-6 py-3 bg-white rounded-xl shadow-sm">
              <span className="text-[#1A1A1A]">Google ★★★★★</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-xl shadow-sm">
              <span className="text-[#1A1A1A]">TripAdvisor ★★★★★</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-xl shadow-sm">
              <span className="text-[#1A1A1A]">Booking.com 9.4/10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
