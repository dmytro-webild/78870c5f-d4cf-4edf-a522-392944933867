import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Utensils, Check, ArrowRight } from 'lucide-react';

const MAINS = [
  { id: 'turkey-wings', name: 'Turkey Wings', desc: 'Tender, slow-baked & savory', image: 'http://img.b2bpic.net/free-photo/family-sitting-table-with-backed-ham_23-2147947986.jpg' },
  { id: 'pork-chops', name: 'Pork Chops', desc: 'Golden seasoned & juicy', image: 'http://img.b2bpic.net/free-photo/pork-chop-steak_1339-5911.jpg' },
  { id: 'lamb-chops', name: 'Lamb Chops', desc: 'Premium seared chops', image: 'http://img.b2bpic.net/free-photo/cooked-lamb-ribs-front-view_23-2148516965.jpg' },
  { id: 'oxtails', name: 'Oxtails', desc: 'Rich gravy & slow-braised', image: 'http://img.b2bpic.net/free-photo/grilled-lamb-chops_1203-9879.jpg' },
  { id: 'fried-chicken', name: 'Southern Fried Chicken', desc: 'Crispy golden classic', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80' },
  { id: 'fried-fish', name: 'Fried Fish', desc: 'Seasoned & fried light', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80' },
];

const SIDES = [
  { id: 'mac', name: 'Baked Mac & Cheese', tag: 'Must-Have' },
  { id: 'collards', name: 'Collard Greens', tag: 'Traditional' },
  { id: 'yams', name: 'Candied Yams', tag: 'Sweet' },
  { id: 'green-beans', name: 'Southern Green Beans', tag: 'Classic' },
  { id: 'rice-gravy', name: 'Rice & Gravy', tag: 'Comfort' },
  { id: 'cabbage', name: 'Smothered Cabbage', tag: 'Savory' },
  { id: 'potato-salad', name: 'Homemade Potato Salad', tag: 'Fresh' },
];

const DESSERTS = [
  { id: 'cheesecake', name: 'Creamy Cheesecake', price: '+$5' },
  { id: 'poundcake', name: 'Homemade Pound Cake', price: '+$4' },
  { id: 'cobbler', name: 'Peach Cobbler', price: '+$5' },
];

export default function PlateBuilderSection() {
  const [selectedMain, setSelectedMain] = useState(MAINS[0]);
  const [selectedSides, setSelectedSides] = useState<string[]>(['mac', 'collards']);
  const [selectedDessert, setSelectedDessert] = useState<string | null>('cobbler');

  const toggleSide = (sideId: string) => {
    if (selectedSides.includes(sideId)) {
      if (selectedSides.length > 1) {
        setSelectedSides(selectedSides.filter(id => id !== sideId));
      }
    } else {
      if (selectedSides.length < 3) {
        setSelectedSides([...selectedSides, sideId]);
      } else {
        setSelectedSides([...selectedSides.slice(1), sideId]);
      }
    }
  };

  return (
    <section id="plate-builder" data-webild-section="plate-builder" className="py-24 bg-card/50 border-y border-foreground/10">
      <div className="w-content-width mx-auto px-4">
        <ScrollReveal variant="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 text-foreground text-xs font-semibold tracking-wider uppercase mb-4">
              <Utensils className="w-3.5 h-3.5 text-accent" />
              <span>Interactive Menu</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif tracking-tight">
              BUILD YOUR PERFECT PLATE
            </h2>
            <p className="text-accent mt-4 text-base md:text-lg">
              Pick your entrée, pair it with comforting Southern sides, and save room for dessert.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Choose Main */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-accent text-foreground flex items-center justify-center font-bold text-sm">1</span>
                <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">Choose Your Main</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {MAINS.map((main) => {
                  const isSelected = selectedMain.id === main.id;
                  return (
                    <button
                      key={main.id}
                      onClick={() => setSelectedMain(main)}
                      className={`text-left p-3 rounded-lg border transition-all relative overflow-hidden ${
                        isSelected
                          ? 'border-accent bg-accent/15 ring-2 ring-accent/40 shadow-sm'
                          : 'border-foreground/15 bg-background hover:border-accent/50'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-accent text-foreground flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <p className="font-semibold text-foreground text-sm leading-snug">{main.name}</p>
                      <p className="text-xs text-accent mt-1 line-clamp-1">{main.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Sides */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-accent text-foreground flex items-center justify-center font-bold text-sm">2</span>
                  <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">Choose Your Sides (Pick 2-3)</h3>
                </div>
                <span className="text-xs font-medium text-accent">Selected: {selectedSides.length}/3</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SIDES.map((side) => {
                  const isSelected = selectedSides.includes(side.id);
                  return (
                    <button
                      key={side.id}
                      onClick={() => toggleSide(side.id)}
                      className={`px-4 py-2.5 rounded-full border text-xs font-semibold transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'border-accent bg-accent text-foreground shadow-sm'
                          : 'border-foreground/15 bg-background text-foreground hover:border-accent/40'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                      <span>{side.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Sweet Treat */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-accent text-foreground flex items-center justify-center font-bold text-sm">3</span>
                <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">Add Something Sweet</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {DESSERTS.map((dessert) => {
                  const isSelected = selectedDessert === dessert.id;
                  return (
                    <button
                      key={dessert.id}
                      onClick={() => setSelectedDessert(isSelected ? null : dessert.id)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        isSelected
                          ? 'border-accent bg-accent/20 ring-1 ring-accent text-foreground font-bold'
                          : 'border-foreground/15 bg-background text-foreground hover:border-accent/40'
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-semibold">{dessert.name}</p>
                      <p className="text-xs text-accent mt-0.5">{dessert.price}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Plate Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="card p-6 sm:p-8 rounded-xl border border-foreground/15 shadow-xl bg-card space-y-6">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-foreground/5 border border-foreground/10">
                <img
                  src={selectedMain.image}
                  alt={selectedMain.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-accent text-foreground px-2 py-0.5 rounded">
                    Your Plate
                  </span>
                  <h4 className="text-xl font-bold font-serif text-white mt-1">{selectedMain.name} Dinner</h4>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground border-b border-foreground/10 pb-2">
                  Plate Breakdown
                </h4>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center text-foreground">
                    <span className="font-semibold">Main Entrée:</span>
                    <span className="text-accent font-medium">{selectedMain.name}</span>
                  </div>

                  <div className="flex justify-between items-start text-foreground">
                    <span className="font-semibold">Sides:</span>
                    <div className="text-right text-accent font-medium">
                      {selectedSides.map(id => SIDES.find(s => s.id === id)?.name).join(', ')}
                    </div>
                  </div>

                  {selectedDessert && (
                    <div className="flex justify-between items-center text-foreground">
                      <span className="font-semibold">Dessert:</span>
                      <span className="text-accent font-medium">
                        {DESSERTS.find(d => d.id === selectedDessert)?.name}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-foreground/10">
                  <a
                    href="#order"
                    className="primary-button w-full py-3.5 px-6 rounded-lg font-bold text-center flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform text-sm uppercase tracking-wider"
                  >
                    <span>ORDER THIS PLATE NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-center text-accent mt-2">
                    Prepared fresh to order with authentic Southern seasonings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}