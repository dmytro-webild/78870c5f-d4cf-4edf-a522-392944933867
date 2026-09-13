// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import React from 'react';
import HeroSection from './ProductsPage/sections/Hero';
import ProductSection from './ProductsPage/sections/Product';
import ContactSection from './ProductsPage/sections/Contact';
import FooterSection from './ProductsPage/sections/Footer';

export default function ProductsPage(): React.JSX.Element {
  return (
<div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Taste & See"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Call 803-401-5671", href: "tel:8034015671" }}
      />

      <HeroSection />

      <ProductSection />

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Sides, Wings, Desserts & Drinks</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Sides A La Carte ($3.89 - $4.89)</h3>
            <p className="text-sm text-muted-foreground mb-4">Mattie's Mac and Cheese ($4.89), Queen's Candied Yams ($4.29), Uncle J's Collard Greens, Field Peas, Green Beans, Cabbage, French Fries, Potato Salad, Seasoned Rice & Gravy, Fried Okra, Corn Nuggets.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Wing Flavors & Combos</h3>
            <p className="text-sm text-muted-foreground mb-4">6 pc ($16.99) & 8 pc ($18.99) Cut Wing Combos with 2 sides. Flavors: Buffalo, Bang Bang, Bourbon, Lemon Pepper, Hot Honey, Honey Obay, Mango Habanero, Garlic Parm, Georgia Peach BBQ.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Desserts & Drinks</h3>
            <p className="text-sm text-muted-foreground mb-4">Cheesecakes ($9-$10), Red Velvet ($6), Peach Cobbler ($5.50), Banana Pudding ($4.29). Drinks ($2.99): Big Baby's Kool-Aid, Leo's Lemonade, Amir's Iced Tea.</p>
          </div>
        </div>
        <p className="text-xs text-center text-muted-foreground mt-6">Policy: No refunds or exchanges once payment has been made. Extra sauce $0.50.</p>
      </section>

      <ContactSection />

      <FooterSection />
    </div>
  );
}
