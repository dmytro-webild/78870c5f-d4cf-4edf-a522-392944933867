import React, { useState } from "react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { Plus, Minus } from "lucide-react";

export type ProductItem = {
  name: string;
  price: string;
  imageSrc: string;
  onAddToCart?: (quantity: number) => void;
};

export type ProductQuantityCardsProps = {
  tag?: string;
  title?: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation?: "slide-up" | "fade-blur" | "fade";
  products?: ProductItem[];
};

const defaultProducts: ProductItem[] = [
  {
    name: "Classic Soul Food Combo",
    price: "$18.99",
    imageSrc: "",
  },
  {
    name: "Crispy Fried Chicken Box",
    price: "$15.99",
    imageSrc: "",
  },
  {
    name: "Smoked BBQ Ribs Plate",
    price: "$22.99",
    imageSrc: "",
  },
  {
    name: "Baked Mac & Cheese Side",
    price: "$6.99",
    imageSrc: "",
  },
];

export default function ProductQuantityCardsSection({
  tag = "Order Summary",
  title = "Your Selected Items",
  description = "Adjust quantities and review your meal selection before finalizing your checkout.",
  primaryButton = { text: "Proceed to Checkout", href: "#checkout-form" },
  secondaryButton = { text: "Back to Menu", href: "/#menu" },
  textAnimation = "slide-up",
  products = defaultProducts,
}: ProductQuantityCardsProps): React.JSX.Element {
  const [quantities, setQuantities] = useState<number[]>(() =>
    products.map(() => 1)
  );

  const updateQuantity = (index: number, delta: number) => {
    setQuantities((prev) => {
      const next = [...prev];
      next[index] = Math.max(1, (next[index] || 1) + delta);
      return next;
    });
  };

  return (
    <section aria-label="Product quantity cards section" className="bg-background">
      <div className="flex flex-col gap-8 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-2 text-center">
          {tag && (
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>
          )}

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-4xl md:text-6xl font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance text-accent"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && (
                <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
              )}
              {secondaryButton && (
                <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" />
              )}
            </div>
          )}
        </div>

        <ScrollReveal variant="fade">
          <GridOrCarousel>
            {products.map((product, idx) => (
              <div
                key={product.name + idx}
                className="flex flex-col justify-between p-6 xl:p-7 card rounded gap-5 h-full"
              >
                {product.imageSrc ? (
                  <div className="w-full h-48 rounded overflow-hidden relative">
                    <ImageOrVideo imageSrc={product.imageSrc} className="w-full h-full object-cover" />
                  </div>
                ) : null}

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                    <span className="text-lg font-bold text-accent">{product.price}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-accent/20">
                  <span className="text-sm text-accent">Quantity</span>
                  <div className="flex items-center gap-3 bg-secondary-cta/50 px-3 py-1.5 rounded">
                    <button
                      type="button"
                      onClick={() => updateQuantity(idx, -1)}
                      className="text-foreground hover:text-accent transition-colors p-1"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-semibold text-foreground min-w-[1.5rem] text-center">
                      {quantities[idx] || 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(idx, 1)}
                      className="text-foreground hover:text-accent transition-colors p-1"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {product.onAddToCart && (
                  <Button
                    text="Add to Order"
                    variant="primary"
                    onClick={() => product.onAddToCart?.(quantities[idx] || 1)}
                    className="w-full mt-2"
                  />
                )}
              </div>
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}