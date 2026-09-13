import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ContactPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Webild"
        navItems={navItems}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      <main className="pt-16">
        <ContactSplitForm
          tag="Contact Us"
          title="We'd love to hear from you"
          description="Send us a message and our dedicated team will get back to you within 24 hours."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "you@example.com", required: true },
            { name: "subject", type: "text", placeholder: "Subject", required: false },
          ]}
          textarea={{ name: "message", placeholder: "Tell us how we can help...", rows: 5, required: true }}
          buttonText="Send Message"
          imageSrc="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />
        <FaqSimple
          tag="FAQ"
          title="Frequently Asked Questions"
          description="Have questions before reaching out? Find quick answers right here."
          items={[
            { question: "What are your support hours?", answer: "Our support team is available Monday through Friday, 9:00 AM to 6:00 PM EST." },
            { question: "How fast can I expect a response?", answer: "We aim to respond to all inquiries within 24 business hours." },
            { question: "Where is your main office located?", answer: "Our headquarters are based in San Francisco, CA with remote teams globally." },
          ]}
          textAnimation="fade-blur"
        />
      </main>
      <FooterSimple
        brand="Webild"
        columns={[
          {
            title: "Navigation",
            items: [
              { label: "Home", href: "/" },
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ],
          },
          {
            title: "Support",
            items: [
              { label: "Help Center", href: "#" },
              { label: "Documentation", href: "#" },
              { label: "System Status", href: "#" },
            ],
          },
        ]}
        copyright="© 2025 Webild Inc. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
        ]}
      />
    </div>
  );
}