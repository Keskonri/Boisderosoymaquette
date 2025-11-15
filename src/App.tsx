import { useState } from "react";
import { ModernHeader } from "./components/ModernHeader";
import { ModernFooter } from "./components/ModernFooter";
import { BookingFlow } from "./components/BookingFlow";
import { HomePage } from "./pages/HomePage";
import { CabanesPage } from "./pages/CabanesPage";
import { ExperiencesPage } from "./pages/ExperiencesPage";
import { SpaPage } from "./pages/SpaPage";
import { LocalisationPage } from "./pages/LocalisationPage";
import { ContactPage } from "./pages/ContactPage";

type Page = "home" | "cabanes" | "experiences" | "spa" | "localisation" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedCabin, setPreselectedCabin] = useState<string | undefined>(undefined);

  // Simple navigation handler
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Open booking flow
  const handleOpenBooking = (cabinId?: string) => {
    setPreselectedCabin(cabinId);
    setBookingOpen(true);
  };

  // Expose navigation and booking globally for components
  if (typeof window !== "undefined") {
    (window as any).navigateTo = handleNavigate;
    (window as any).openBooking = handleOpenBooking;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "cabanes":
        return <CabanesPage />;
      case "experiences":
        return <ExperiencesPage />;
      case "spa":
        return <SpaPage />;
      case "localisation":
        return <LocalisationPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {renderPage()}
      </main>

      <ModernFooter onNavigate={handleNavigate} />

      <BookingFlow 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)}
        preselectedCabin={preselectedCabin}
      />
    </div>
  );
}