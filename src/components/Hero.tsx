import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-screen w-full" id="PB_HeroImageSlot">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729896632513-3b52a1c1b78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBjYWJpbiUyMGphY3V6emklMjBmb3Jlc3R8ZW58MXx8fHwxNzYyNTU2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cabane dans les arbres avec jacuzzi"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 lg:px-12">
        <div className="text-center text-white max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight">
            Parenthèse suspendue au cœur de la forêt
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto">
            Cabane Spa & Insolite à 1 h de Paris
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white px-8 py-6 text-lg w-full sm:w-auto"
            >
              Découvrir nos cabanes
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
            >
              Réserver maintenant
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
