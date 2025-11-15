import { HeroWithBooking } from "../components/HeroWithBooking";
import { ConceptSection } from "../components/ConceptSection";
import { ModernCabinsGrid } from "../components/ModernCabinsGrid";
import { ExperiencesSection } from "../components/ExperiencesSection";
import { SocialProofSection } from "../components/SocialProofSection";
import { LocationSection } from "../components/LocationSection";
import { FinalCTA } from "../components/FinalCTA";

export function HomePage() {
  return (
    <>
      <HeroWithBooking />
      <ConceptSection />
      <ModernCabinsGrid />
      <ExperiencesSection />
      <SocialProofSection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
