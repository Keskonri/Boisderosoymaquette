import { Sparkles, TreePine, Coffee } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    id: "feature-1",
    title: "Jacuzzi privatif",
    description: "Un spa extérieur pour chaque cabane, avec vue imprenable sur la canopée",
    image: "https://images.unsplash.com/photo-1757937176646-d943553b5f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBvdXRkb29yJTIwbmF0dXJlfGVufDF8fHx8MTc2MjU1NjYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Sparkles
  },
  {
    id: "feature-2",
    title: "Forêt & sérénité",
    description: "Immersion totale dans 15 hectares de forêt préservée, à l'écart du monde",
    image: "https://images.unsplash.com/photo-1703634869858-c2add296ae80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMG1vcm5pbmd8ZW58MXx8fHwxNzYyNTUyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: TreePine
  },
  {
    id: "feature-3",
    title: "Petit-déjeuner haut de gamme",
    description: "Panier gourmand livré directement à votre cabane, produits locaux et bio",
    image: "https://images.unsplash.com/photo-1654808991961-141a731f55db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmVha2Zhc3QlMjB0cmF5fGVufDF8fHx8MTc2MjU1NjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Coffee
  }
];

export function FeatureBlocks() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            id={`PB_${feature.id}ImageSlot`}
            className="group relative overflow-hidden rounded-2xl h-[400px] lg:h-[500px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="mb-4">
                <feature.icon className="w-10 h-10 text-white/90" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl lg:text-3xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 text-base lg:text-lg">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
