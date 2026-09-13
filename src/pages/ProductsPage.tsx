import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import ProductVariantCards from "@/components/sections/product/ProductVariantCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ProductsPage() {
  const specials = [
    { name: "Oxtails (Sat/Sun)", variant: "Rice & Gravy + 2 Sides + Drink", price: "$26.99", imageSrc: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
    { name: "Lobster Lamb Chops", variant: "Rice & Gravy + 2 Sides + Drink", price: "$24.99", imageSrc: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80" },
    { name: "Blackened Salmon", variant: "Rice & Gravy + 2 Sides + Drink", price: "$24.99", imageSrc: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80" },
    { name: "Flounder Seafood Combo", variant: "2 pc Fish, 6 Shrimp, 2 Sides, Hushpuppies", price: "$25.99", imageSrc: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80" },
    { name: "3 pc Fried/Baked Chicken", variant: "Includes Rice, Gravy & 2 Sides", price: "$17.99", imageSrc: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80" },
    { name: "Smothered Pork Chops", variant: "Includes Rice, Gravy & 2 Sides", price: "$20.99", imageSrc: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Taste & See"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Call 803-401-5671", href: "tel:8034015671" }}
      />

      <HeroBillboard
        tag="6820 N Main St Ste E • Columbia, SC"
        title="Taste and See Soul Food Kitchen Menu"
        description="Serving mouthwatering traditional soul food, seafood combos, whole wing baskets, homemade sides, and desserts."
        primaryButton={{ text: "Call to Order: 803-401-5671", href: "tel:8034015671" }}
        secondaryButton={{ text: "Visit Location", href: "https://maps.google.com/?q=6820+N+Main+St+Ste+E+Columbia+SC" }}
        imageSrc="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <ProductVariantCards
        tag="Chef Specials & Favorites"
        title="Signature Soul Food Dishes"
        description="Includes Rice & Gravy, choice of 2 sides, bread, and a drink. Prices subject to change."
        products={specials}
        textAnimation="slide-up"
      />

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

      <ContactCta
        tag="Place Your Order"
        text="Visit us at 6820 N Main St Ste E, Columbia, SC or call ahead to order!"
        primaryButton={{ text: "Call 803-401-5671", href: "tel:8034015671" }}
        secondaryButton={{ text: "Get Directions", href: "https://maps.google.com/?q=6820+N+Main+St+Ste+E+Columbia+SC" }}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="Taste and See Soul Food"
        columns={[{ title: "Menu", items: [{ label: "Chef Specials", href: "#" }, { label: "Entrees", href: "#" }, { label: "Desserts", href: "#" }] }]}
        copyright="© 2025 Taste and See Soul Food Kitchen. All rights reserved."
        links={[{ label: "Terms", href: "#" }, { label: "Privacy", href: "#" }]}
      />
    </div>
  );
}