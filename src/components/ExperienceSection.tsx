import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ExperienceSection() {
  return (
    <section id="expériences" className="py-20 lg:py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div 
          id="PB_ExperienceImageSlot" 
          className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-2 lg:order-1"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1718436170975-29ce3ef54fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBmb3Jlc3QlMjBwYXRofGVufDF8fHx8MTc2MjU1NjYyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Forêt sereine"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 order-1 lg:order-2">
          <div className="inline-block px-4 py-2 bg-[#2C5F2D]/10 rounded-full">
            <span className="text-[#2C5F2D] text-sm tracking-wide uppercase">
              L'expérience
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl text-[#1A1A1A]">
            Une parenthèse hors du temps
          </h2>

          <div className="space-y-4 text-[#1A1A1A]/70 text-lg leading-relaxed">
            <p>
              Au Bois de Rosoy, nous avons imaginé un lieu où le luxe se marie avec la simplicité de la nature. Chaque détail a été pensé pour vous offrir une expérience unique, suspendue entre ciel et terre.
            </p>
            <p>
              Nos cabanes perchées vous invitent à ralentir, à vous reconnecter avec l'essentiel. Le chant des oiseaux au réveil, la brume matinale qui s'élève entre les arbres, le crépitement du feu dans la cheminée... Des instants précieux qui marquent les esprits.
            </p>
            <p>
              À seulement une heure de Paris, découvrez un havre de paix où luxe discret et immersion totale dans la nature créent des souvenirs inoubliables.
            </p>
          </div>

          <div className="pt-6 border-t border-[#2C5F2D]/20">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl lg:text-4xl text-[#2C5F2D] mb-2">15</div>
                <div className="text-sm text-[#1A1A1A]/60">Hectares de forêt</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl text-[#2C5F2D] mb-2">3</div>
                <div className="text-sm text-[#1A1A1A]/60">Cabanes uniques</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl text-[#2C5F2D] mb-2">1h</div>
                <div className="text-sm text-[#1A1A1A]/60">Depuis Paris</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
