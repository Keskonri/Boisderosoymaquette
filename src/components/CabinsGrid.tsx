import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Maximize2, Droplet, Eye } from "lucide-react";

const cabins = [
  {
    id: "cabin-1",
    name: "La Canopée",
    image: "https://images.unsplash.com/photo-1696482280456-00654f9bc25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0cmVlaG91c2UlMjBuYXR1cmV8ZW58MXx8fHwxNzYyNTU2NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      { icon: Maximize2, text: "35 m²" },
      { icon: Droplet, text: "Jacuzzi privatif" },
      { icon: Eye, text: "Vue panoramique forêt" }
    ]
  },
  {
    id: "cabin-2",
    name: "Le Nid Perché",
    image: "https://images.unsplash.com/photo-1598721987126-0e7bee3ba71f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJpbiUyMGZvcmVzdCUyMGludGVyaW9yfGVufDF8fHx8MTc2MjU1NjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      { icon: Maximize2, text: "30 m²" },
      { icon: Droplet, text: "Spa extérieur" },
      { icon: Eye, text: "Vue sur étang" }
    ]
  },
  {
    id: "cabin-3",
    name: "L'Observatoire",
    image: "https://images.unsplash.com/photo-1610477101678-e8658d018a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjBzdW5zZXQlMjBuYXR1cmV8ZW58MXx8fHwxNzYyNTU2NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      { icon: Maximize2, text: "40 m²" },
      { icon: Droplet, text: "Spa avec chromothérapie" },
      { icon: Eye, text: "Vue dégagée 360°" }
    ]
  }
];

export function CabinsGrid() {
  return (
    <section id="cabanes" className="py-20 lg:py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-6xl text-[#1A1A1A] mb-6">
          Nos cabanes
        </h2>
        <p className="text-lg lg:text-xl text-[#1A1A1A]/70">
          Chaque cabane est unique, conçue pour offrir une expérience d'exception en harmonie avec la nature environnante
        </p>
      </div>

      {/* Cabins Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {cabins.map((cabin) => (
          <div
            key={cabin.id}
            id={`PB_${cabin.id}ImageSlot`}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-72 lg:h-80 overflow-hidden">
              <ImageWithFallback
                src={cabin.image}
                alt={cabin.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] mb-6">
                {cabin.name}
              </h3>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {cabin.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#1A1A1A]/70">
                    <feature.icon className="w-5 h-5 text-[#2C5F2D]" strokeWidth={1.5} />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white">
                Découvrir
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
