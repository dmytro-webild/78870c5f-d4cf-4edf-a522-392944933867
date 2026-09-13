import { routes } from "@/routes";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSimple from "@/components/sections/faq/FaqSimple";
export default function ContactPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-svh bg-background text-foreground">
      <main className="">
        <ContactSplitForm
          tag="Get In Touch"
          title="Visit Us or Send a Message"
          description="Taste & See Soul Food Kitchen is located at 6820 N Main St Ste E, Columbia, SC. Call 803-401-5671 for pickup orders, catering inquiries, or general questions!"
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address or Phone Number", required: true },
            { name: "subject", type: "text", placeholder: "Subject (e.g. Catering, Feedback)", required: false },
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your event or inquiry...", rows: 5, required: true }}
          buttonText="Send Inquiries"
          imageSrc="https://picsum.photos/seed/1634594426/1200/800"
          textAnimation="slide-up"
        />
        <FaqSimple
          tag="Taste & See Info"
          title="Frequently Asked Questions"
          description="Got questions about our hours, location, or catering services? Find quick answers right here."
          items={[
            { question: "Where is Taste & See Soul Food Kitchen located?", answer: "We are located at 6820 N Main St Ste E, Columbia, SC 29203." },
            { question: "How can I place an order for pickup?", answer: "Call us directly at (803) 401-5671 to place your order for quick takeout pickup." },
            { question: "Do you offer catering for private events?", answer: "Yes! We cater family reunions, church functions, corporate events, and parties. Contact us via the form above or call us for custom catering menus." },
            { question: "What are your operating hours?", answer: "We are open Tuesday through Saturday from 11:30 AM to 7:00 PM, and Sunday from 12:00 PM to 6:00 PM. Closed Mondays." },
          ]}
          textAnimation="fade-blur"
        />
      </main>
    </div>
  );
}