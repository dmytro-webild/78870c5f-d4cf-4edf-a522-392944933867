import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import ProductQuantityCards from "@/components/sections/product/ProductQuantityCards";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { routes } from "@/routes";

const menuItems = [
  { name: "2 Tender Kids Meal", price: "$10.58", imageSrc: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80" },
  { name: "3 Pc Chicken Entree", price: "$19.06", imageSrc: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80" },
  { name: "3 Tender Basket", price: "$15.88", imageSrc: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80" },
  { name: "6 Pc Shrimp Meal", price: "$15.88", imageSrc: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80" },
  { name: "6 Pc Cut Wing Meal", price: "$18.00", imageSrc: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80" },
  { name: "8 Pc Shrimp Meal", price: "$18.00", imageSrc: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80" },
  { name: "8 Pc Cut Wing Meal", price: "$20.12", imageSrc: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80" },
  { name: "Amir's Iced Tea", price: "$3.16", imageSrc: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80" },
  { name: "Arnold Palmer", price: "$3.16", imageSrc: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" },
  { name: "Banana Pudding", price: "$4.22", imageSrc: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" },
  { name: "Big Baby's Kool Aid", price: "$3.16", imageSrc: "https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=600&q=80" },
  { name: "Black Eyed Peas", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" },
  { name: "Bottled Water", price: "$2.38", imageSrc: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80" },
  { name: "Cabbage", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" },
  { name: "Candied Yams", price: "$4.54", imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" },
  { name: "Canned Drinks", price: "$1.06", imageSrc: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },
  { name: "Corn Nuggets", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80" },
  { name: "Field Peas", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" },
  { name: "French Fries", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80" },
  { name: "Fried Fish (2 Pieces)", price: "$19.06", imageSrc: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80" },
  { name: "Fried Okra", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" },
  { name: "Fried Pork Chops", price: "$19.06", imageSrc: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80" },
  { name: "Fries", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80" },
  { name: "Garlic Mashed Potatoes", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=600&q=80" },
  { name: "Green Beans", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=600&q=80" },
  { name: "Hushpuppies (6 Count)", price: "$2.10", imageSrc: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80" },
  { name: "Hushpuppies (12 Count)", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80" },
  { name: "Leo's Lemonade", price: "$3.16", imageSrc: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" },
  { name: "Lima Beans", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" },
  { name: "Macaroni & Cheese", price: "$4.12", imageSrc: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80" }
];

export default function ProductsPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Delicious Kitchen"
        navItems={navItems}
        ctaButton={{ text: "Order Now", href: "/contact" }}
      />
      <HeroBillboard
        tag="Fresh & Hot"
        title="Our Full Menu"
        description="Explore our delicious entrees, baskets, drinks, and homemade sides."
        primaryButton={{ text: "View Products", href: "#products" }}
        secondaryButton={{ text: "Contact Us", href: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />
      <div id="products">
        <ProductQuantityCards
          tag="Menu Items"
          title="Delicious Meals & Drinks"
          description="Select your favorites and add them to your order."
          products={menuItems}
          textAnimation="slide-up"
        />
      </div>
      <FooterSimple
        brand="Delicious Kitchen"
        columns={[
          { title: "Navigation", items: navItems.map((item) => ({ label: item.name, href: item.href })) }
        ]}
        copyright="© 2025 Delicious Kitchen. All rights reserved."
        links={[{ label: "Privacy Policy", href: "#" }]}
      />
    </div>
  );
}