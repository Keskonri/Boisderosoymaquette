import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-[#2C5F2D]/5 p-8 lg:p-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #2C5F2D 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Content */}
          <div className="space-y-6">
            <Quote className="w-12 h-12 text-[#2C5F2D]" strokeWidth={1.5} />
            
            <blockquote className="text-2xl lg:text-3xl text-[#1A1A1A] leading-relaxed">
              "Une nuit magique dans les arbres. Le jacuzzi sous les étoiles, le silence de la forêt, le réveil avec les oiseaux... Une expérience qui ressource profondément."
            </blockquote>

            <div className="pt-4">
              <div className="text-[#1A1A1A]">Sophie & Marc</div>
              <div className="text-[#1A1A1A]/60 text-sm">Séjour en octobre 2024</div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 pt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#2C5F2D] fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Image */}
          <div 
            id="PB_TestimonialImageSlot" 
            className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1729896632513-3b52a1c1b78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBjYWJpbiUyMGphY3V6emklMjBmb3Jlc3R8ZW58MXx8fHwxNzYyNTU2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Témoignage client - nuit dans les arbres"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
