import React, { useState } from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";
import Button from "@/components/ui/Button";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    address: "",
    city: "",
    zip: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const items = [
    { name: "Pro Platform Plan (Annual)", price: "$290.00" },
    { name: "Priority Support Add-on", price: "$49.00" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Support", href: "/contact" }}
      />

      <main className="max-w-6xl mx-auto px-4 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
            <p className="text-sm text-muted-foreground mt-1">Complete your order details below.</p>
          </div>

          {submitted ? (
            <div className="p-6 bg-card rounded-xl border border-border text-center space-y-3">
              <span className="text-4xl">🎉</span>
              <h2 className="text-xl font-semibold">Order Confirmed!</h2>
              <p className="text-sm text-muted-foreground">Thank you for your purchase. We sent a receipt to your email.</p>
              <Button text="Return to Home" href="/" variant="primary" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border space-y-4">
                <h2 className="text-lg font-semibold border-b border-border pb-2">Account & Shipping</h2>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Email Address</label>
                    <input required type="email" placeholder="alex@example.com" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Full Name</label>
                    <input required type="text" placeholder="Alex Morgan" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Street Address</label>
                    <input required type="text" placeholder="123 Main St" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">City</label>
                      <input required type="text" placeholder="San Francisco" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">ZIP Code</label>
                      <input required type="text" placeholder="94103" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border space-y-4">
                <h2 className="text-lg font-semibold border-b border-border pb-2">Payment Details</h2>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Card Number</label>
                    <input required type="text" placeholder="4532 •••• •••• 8892" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none" value={formData.cardNumber} onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Expiry (MM/YY)</label>
                      <input required type="text" placeholder="08/26" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none" value={formData.expiry} onChange={(e) => setFormData({ ...formData, expiry: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">CVC</label>
                      <input required type="text" placeholder="123" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none" value={formData.cvc} onChange={(e) => setFormData({ ...formData, cvc: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full py-3 px-4 bg-primary-cta text-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm cursor-pointer">
                Complete Payment ($339.00)
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-card rounded-xl border border-border sticky top-24 space-y-4">
            <h2 className="text-lg font-semibold border-b border-border pb-2">Order Summary</h2>
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="font-medium">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>$339.00</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-border pt-2 text-foreground">
                <span>Total</span>
                <span>$339.00</span>
              </div>
            </div>
            <div className="p-3 bg-background rounded-lg text-xs text-muted-foreground flex items-center gap-2">
              <span>🔒</span>
              <span>256-bit encrypted secure checkout</span>
            </div>
          </div>
        </div>
      </main>

      <FooterMinimal brand="Webild" copyright="© 2025 Webild Inc. All rights reserved." />
    </div>
  );
}