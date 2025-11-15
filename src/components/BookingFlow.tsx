import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { X, Calendar, Users, Plus, Minus, Check, ArrowRight, ArrowLeft, CreditCard, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BookingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCabin?: string;
}

const cabins = [
  {
    id: "canopee",
    name: "La Canopée",
    price: 320,
    capacity: "2-4 personnes",
    image: "https://images.unsplash.com/photo-1696482280456-00654f9bc25a?w=400"
  },
  {
    id: "nid",
    name: "Le Nid Perché",
    price: 290,
    capacity: "2 personnes",
    image: "https://images.unsplash.com/photo-1598721987126-0e7bee3ba71f?w=400"
  },
  {
    id: "observatoire",
    name: "L'Observatoire",
    price: 380,
    capacity: "2-4 personnes",
    image: "https://images.unsplash.com/photo-1610477101678-e8658d018a12?w=400"
  }
];

const experiences = [
  { id: "breakfast", name: "Petit-déjeuner suspendu", price: 35 },
  { id: "dinner", name: "Dîner romantique", price: 95 },
  { id: "massage", name: "Massage en cabane", price: 90 },
  { id: "yoga", name: "Yoga matinal", price: 50 }
];

export function BookingFlow({ isOpen, onClose, preselectedCabin }: BookingFlowProps) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    cabin: preselectedCabin || "",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    experiences: [] as string[],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const selectedCabin = cabins.find(c => c.id === bookingData.cabin);
  
  // Calculate nights and total
  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const diffTime = new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const cabinTotal = selectedCabin ? selectedCabin.price * nights : 0;
  const experiencesTotal = bookingData.experiences.reduce((sum, expId) => {
    const exp = experiences.find(e => e.id === expId);
    return sum + (exp?.price || 0);
  }, 0);
  const total = cabinTotal + experiencesTotal;

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleExperience = (expId: string) => {
    setBookingData(prev => ({
      ...prev,
      experiences: prev.experiences.includes(expId)
        ? prev.experiences.filter(id => id !== expId)
        : [...prev.experiences, expId]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return bookingData.cabin !== "";
      case 2:
        return bookingData.checkIn && bookingData.checkOut && nights > 0;
      case 4:
        return bookingData.firstName && bookingData.lastName && bookingData.email && bookingData.phone;
      default:
        return true;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#2C5F2D] text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif mb-1">Réservation</h2>
            <p className="text-white/80 text-sm">Étape {step} sur 5</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-100 h-2">
          <div 
            className="bg-[#2C5F2D] h-full transition-all duration-500"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {/* Step 1: Choose Cabin */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl text-[#1A1A1A] mb-6">Choisissez votre cabane</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {cabins.map(cabin => (
                    <button
                      key={cabin.id}
                      onClick={() => setBookingData({ ...bookingData, cabin: cabin.id })}
                      className={`relative rounded-2xl overflow-hidden border-2 transition-all ${
                        bookingData.cabin === cabin.id
                          ? 'border-[#2C5F2D] ring-2 ring-[#2C5F2D]/20'
                          : 'border-gray-200 hover:border-[#2C5F2D]/50'
                      }`}
                    >
                      <div className="relative h-48">
                        <img src={cabin.image} alt={cabin.name} className="w-full h-full object-cover" />
                        {bookingData.cabin === cabin.id && (
                          <div className="absolute top-4 right-4 w-8 h-8 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                      <div className="p-4 text-left">
                        <h4 className="text-lg text-[#1A1A1A] mb-1">{cabin.name}</h4>
                        <p className="text-sm text-[#1A1A1A]/60 mb-2">{cabin.capacity}</p>
                        <p className="text-[#2C5F2D]">À partir de {cabin.price}€/nuit</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Dates & Guests */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl text-[#1A1A1A] mb-6">Dates et voyageurs</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">Date d'arrivée</label>
                    <Input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">Date de départ</label>
                    <Input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                      className="w-full"
                    />
                  </div>
                </div>

                {nights > 0 && (
                  <div className="bg-[#2C5F2D]/5 rounded-2xl p-4 text-sm text-[#1A1A1A]">
                    Durée du séjour : <span className="font-medium">{nights} nuit{nights > 1 ? 's' : ''}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#FAF8F5] rounded-2xl">
                    <div>
                      <div className="text-[#1A1A1A]">Adultes</div>
                      <div className="text-sm text-[#1A1A1A]/60">À partir de 12 ans</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setBookingData({ ...bookingData, adults: Math.max(1, bookingData.adults - 1) })}
                        className="w-10 h-10 rounded-full border-2 border-[#2C5F2D] text-[#2C5F2D] flex items-center justify-center hover:bg-[#2C5F2D] hover:text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-lg">{bookingData.adults}</span>
                      <button
                        onClick={() => setBookingData({ ...bookingData, adults: Math.min(4, bookingData.adults + 1) })}
                        className="w-10 h-10 rounded-full border-2 border-[#2C5F2D] text-[#2C5F2D] flex items-center justify-center hover:bg-[#2C5F2D] hover:text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#FAF8F5] rounded-2xl">
                    <div>
                      <div className="text-[#1A1A1A]">Enfants</div>
                      <div className="text-sm text-[#1A1A1A]/60">2-11 ans</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setBookingData({ ...bookingData, children: Math.max(0, bookingData.children - 1) })}
                        className="w-10 h-10 rounded-full border-2 border-[#2C5F2D] text-[#2C5F2D] flex items-center justify-center hover:bg-[#2C5F2D] hover:text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-lg">{bookingData.children}</span>
                      <button
                        onClick={() => setBookingData({ ...bookingData, children: Math.min(2, bookingData.children + 1) })}
                        className="w-10 h-10 rounded-full border-2 border-[#2C5F2D] text-[#2C5F2D] flex items-center justify-center hover:bg-[#2C5F2D] hover:text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Experiences */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl text-[#1A1A1A] mb-2">Personnalisez votre séjour</h3>
                <p className="text-[#1A1A1A]/70 mb-6">Ajoutez des expériences (optionnel)</p>
                
                <div className="space-y-3">
                  {experiences.map(exp => (
                    <button
                      key={exp.id}
                      onClick={() => toggleExperience(exp.id)}
                      className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                        bookingData.experiences.includes(exp.id)
                          ? 'border-[#2C5F2D] bg-[#2C5F2D]/5'
                          : 'border-gray-200 hover:border-[#2C5F2D]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-[#1A1A1A] mb-1">{exp.name}</div>
                          <div className="text-[#2C5F2D]">{exp.price}€</div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          bookingData.experiences.includes(exp.id)
                            ? 'border-[#2C5F2D] bg-[#2C5F2D]'
                            : 'border-gray-300'
                        }`}>
                          {bookingData.experiences.includes(exp.id) && (
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Personal Info */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl text-[#1A1A1A] mb-6">Vos coordonnées</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">Prénom *</label>
                    <Input
                      value={bookingData.firstName}
                      onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">Nom *</label>
                    <Input
                      value={bookingData.lastName}
                      onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Email *</label>
                  <Input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Téléphone *</label>
                  <Input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Message (optionnel)</label>
                  <Textarea
                    value={bookingData.message}
                    onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                    placeholder="Occasion spéciale, demandes particulières..."
                    rows={4}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 5: Payment */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl text-[#1A1A1A] mb-6">Récapitulatif et paiement</h3>

                {/* Summary */}
                <div className="bg-[#FAF8F5] rounded-2xl p-6 space-y-4">
                  <div>
                    <div className="text-sm text-[#1A1A1A]/60 mb-1">Cabane</div>
                    <div className="text-[#1A1A1A]">{selectedCabin?.name}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-[#1A1A1A]/60 mb-1">Arrivée</div>
                      <div className="text-[#1A1A1A]">{new Date(bookingData.checkIn).toLocaleDateString('fr-FR')}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#1A1A1A]/60 mb-1">Départ</div>
                      <div className="text-[#1A1A1A]">{new Date(bookingData.checkOut).toLocaleDateString('fr-FR')}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#1A1A1A]/60 mb-1">Voyageurs</div>
                    <div className="text-[#1A1A1A]">
                      {bookingData.adults} adulte{bookingData.adults > 1 ? 's' : ''}
                      {bookingData.children > 0 && `, ${bookingData.children} enfant${bookingData.children > 1 ? 's' : ''}`}
                    </div>
                  </div>
                  {bookingData.experiences.length > 0 && (
                    <div>
                      <div className="text-sm text-[#1A1A1A]/60 mb-2">Expériences</div>
                      <div className="space-y-1">
                        {bookingData.experiences.map(expId => {
                          const exp = experiences.find(e => e.id === expId);
                          return (
                            <div key={expId} className="text-sm text-[#1A1A1A] flex justify-between">
                              <span>{exp?.name}</span>
                              <span>{exp?.price}€</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-[#1A1A1A]/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#1A1A1A]/70">Sous-total cabane ({nights} nuits)</span>
                      <span className="text-[#1A1A1A]">{cabinTotal}€</span>
                    </div>
                    {experiencesTotal > 0 && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#1A1A1A]/70">Expériences</span>
                        <span className="text-[#1A1A1A]">{experiencesTotal}€</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-xl pt-2 border-t border-[#1A1A1A]/10">
                      <span className="text-[#1A1A1A]">Total</span>
                      <span className="text-[#2C5F2D]">{total}€</span>
                    </div>
                  </div>
                </div>

                {/* Payment Form (Non-functional) */}
                <div className="space-y-4">
                  <h4 className="text-lg text-[#1A1A1A]">Informations de paiement</h4>
                  
                  <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">Numéro de carte</label>
                    <div className="relative">
                      <Input placeholder="1234 5678 9012 3456" className="pl-12" disabled />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A1A]/40" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#1A1A1A] mb-2">Date d'expiration</label>
                      <Input placeholder="MM/AA" disabled />
                    </div>
                    <div>
                      <label className="block text-sm text-[#1A1A1A] mb-2">CVV</label>
                      <Input placeholder="123" disabled />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                    <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <div className="font-medium mb-1">Paiement sécurisé</div>
                      <div className="text-blue-700">
                        Cette page de paiement est une démonstration. Aucune transaction réelle ne sera effectuée.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-200 p-6 flex items-center justify-between bg-white">
          <Button
            variant="outline"
            onClick={step === 1 ? onClose : prevStep}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {step === 1 ? 'Annuler' : 'Retour'}
          </Button>

          <div className="flex items-center gap-3">
            {selectedCabin && nights > 0 && step > 1 && (
              <div className="text-right mr-4">
                <div className="text-sm text-[#1A1A1A]/60">Total</div>
                <div className="text-xl text-[#2C5F2D]">{total}€</div>
              </div>
            )}
            <Button
              onClick={step === 5 ? () => {
                alert('Réservation confirmée ! (Démonstration)');
                onClose();
              } : nextStep}
              disabled={!canProceed()}
              className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white gap-2"
            >
              {step === 5 ? 'Confirmer la réservation' : 'Continuer'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
