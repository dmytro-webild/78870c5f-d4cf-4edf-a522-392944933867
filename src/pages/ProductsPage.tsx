import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";
import ProductQuantityCards from "@/components/sections/product/ProductQuantityCards";

export default function ProductsPage() {
  return (
    <>
      <div data-webild-section="HeroBillboard"><section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30"><HeroBackgroundSlot /><div className="flex flex-col gap-12 md:gap-15 w-content-width mx-auto"><div className="flex flex-col items-center gap-3 text-center"><AvatarGroup avatarsSrc={["https://img.freepik.com/free-photo/portrait-smiling-woman_23-2148213400.jpg","https://img.freepik.com/free-photo/cheerful-man-portrait_23-2149022635.jpg","https://img.freepik.com/free-photo/happy-senior-man_23-2149170889.jpg"]} label="2,500+ satisfied Southern food lovers" className="mb-1" /><TextAnimation text="Hearty Southern Favorites Made Fresh Daily" variant="slide-up" gradientText={true} tag="h1" className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance" /><TextAnimation text="Explore our full menu of crispy fried chicken, tender baskets, golden fried fish, homestyle sides, and sweet specialty drinks. Made fresh with love and authentic Southern flavor." variant="slide-up" gradientText={false} tag="p" className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="View Menu" href="#menu" variant="primary" /><Button text="Order Pickup" href="#order" variant="secondary" animationDelay={0.1} /></div></div><ScrollReveal variant="fade" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden"><ImageOrVideo imageSrc="https://img.freepik.com/free-photo/crispy-fried-chicken-legs-wooden-board_1150-18884.jpg" className="aspect-4/5 md:aspect-video" /></ScrollReveal></div></section></div>
      <div data-webild-section="ProductQuantityCards"><ProductQuantityCards
        tag="Southern Kitchen Menu"
        title="Fresh Cooked Comfort Plates"
        description="Hearty fried entrees, golden basket combos, homestyle sides, and sweet specialty drinks made fresh with authentic flavor."
        textAnimation="slide-up"
        primaryButton={{"text":"Order for Pickup","href":"/ordering"}}
        secondaryButton={{"text":"View All Sides","href":"#sides"}}
        products={[{"name":"3 Pc Chicken Entree","price":"$19.06","imageSrc":"https://img.freepik.com/free-photo/crispy-fried-chicken-plate_144627-24543.jpg"},{"name":"3 Tender Basket","price":"$15.88","imageSrc":"https://img.freepik.com/free-photo/crispy-chicken-fingers-french-fries_144627-24538.jpg"},{"name":"Fried Fish (2 Pieces)","price":"$19.06","imageSrc":"https://img.freepik.com/free-photo/crispy-fried-fish-fillet-french-fries_144627-24560.jpg"},{"name":"6 Pc Shrimp Meal","price":"$15.88","imageSrc":"https://img.freepik.com/free-photo/crispy-fried-shrimp-basket_144627-24580.jpg"},{"name":"8 Pc Cut Wing Meal","price":"$20.12","imageSrc":"https://img.freepik.com/free-photo/spicy-chicken-wings-sauce_144627-24550.jpg"},{"name":"Fried Pork Chops","price":"$19.06","imageSrc":"https://img.freepik.com/free-photo/grilled-pork-chops-plate_144627-24520.jpg"},{"name":"2 Tender Kids Meal","price":"$10.58","imageSrc":"https://img.freepik.com/free-photo/chicken-tenders-fries-basket_144627-24535.jpg"},{"name":"Candied Yams","price":"$4.54","imageSrc":"https://img.freepik.com/free-photo/sweet-roasted-yams-dish_144627-24515.jpg"},{"name":"Leo’s Lemonade","price":"$3.16","imageSrc":"https://img.freepik.com/free-photo/iced-lemonade-glass-citrus-slice_144627-24590.jpg"},{"name":"Banana Pudding","price":"$4.22","imageSrc":"https://img.freepik.com/free-photo/sweet-banana-pudding-dessert-glass_144627-24600.jpg"}]}
      /></div>
    </>
  );
}
