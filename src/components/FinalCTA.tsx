import { Button } from "./ui/button";
import { Calendar, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C5F2D] to-[#1e4520] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-serif mb-6">
            Prêt pour votre escapade
            <br />
            dans les arbres ?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-12">
            Réservez dès maintenant votre cabane et vivez une expérience inoubliable
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={() => (window as any).openBooking?.()}
              size="lg" 
              className="bg-white text-[#2C5F2D] hover:bg-white/90 px-12 py-8 text-xl gap-2"
            >
              <Calendar className="w-5 h-5" />
              Réserver maintenant
            </Button>
            <Button 
              onClick={() => (window as any).navigateTo?.('contact')}
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg gap-3 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Nous contacter
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <div className="text-lg mb-2">Par téléphone</div>
              <a href="tel:+33123456789" className="text-white/80 hover:text-white transition-colors">
                +33 1 23 45 67 89
              </a>
              <div className="text-sm text-white/60 mt-1">Lun-Dim 9h-20h</div>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <div className="text-lg mb-2">Par email</div>
              <a href="mailto:contact@leboisderosoy.com" className="text-white/80 hover:text-white transition-colors">
                contact@leboisderosoy.com
              </a>
              <div className="text-sm text-white/60 mt-1">Réponse sous 24h</div>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7" />
              </div>
              <div className="text-lg mb-2">Réservation en ligne</div>
              <div className="text-white/80">Disponible 24h/24</div>
              <div className="text-sm text-white/60 mt-1">Confirmation immédiate</div>
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-white/20"
          >
            <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-white/70">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Paiement sécurisé
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Annulation gratuite
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Meilleur tarif garanti
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}