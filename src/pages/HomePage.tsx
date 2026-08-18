import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="Columbia, South Carolina"
      title="SOUL FOOD MADE TO TASTE LIKE HOME."
      description="Comforting Southern favorites, generous plates, and homemade flavor served with love in Columbia, SC."
      primaryButton={{
        text: "Order Now",
        href: "#order",
      }}
      secondaryButton={{
        text: "View Menu",
        href: "#menu",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/bacon-spaghetti-mushrooms-pasta_1417-169.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="come-hungry" data-section="come-hungry">
    <SectionErrorBoundary name="come-hungry">
          <AboutTextSplit
      title="COME HUNGRY. LEAVE HAPPY."
      descriptions={[
        "At Taste And See Soul Food Kitchen, we believe good food should feel like home. We specialize in authentic Southern hospitality and recipes passed down through generations.",
        "From hearty soul-food plates to Southern favorites and unforgettable sides, every meal is made from scratch with care to satisfy your deepest craving.",
      ]}
      primaryButton={{
        text: "See The Menu",
        href: "#menu",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="signature-dishes" data-section="signature-dishes">
    <SectionErrorBoundary name="signature-dishes">
          <FeaturesImageBento
      tag="Our Favorites"
      title="THE PLATES PEOPLE COME BACK FOR"
      description="Explore the signature dishes that make Taste And See a local favorite in Columbia."
      items={[
        {
          title: "Turkey Wings",
          description: "Tender, flavorful wings with classic sides.",
          imageSrc: "http://img.b2bpic.net/free-photo/family-sitting-table-with-backed-ham_23-2147947986.jpg",
        },
        {
          title: "Pork Chops",
          description: "Hearty chops with Southern seasoning.",
          imageSrc: "http://img.b2bpic.net/free-photo/pork-chop-steak_1339-5911.jpg",
        },
        {
          title: "Lamb Chops",
          description: "Premium soul food, cooked to perfection.",
          imageSrc: "http://img.b2bpic.net/free-photo/cooked-lamb-ribs-front-view_23-2148516965.jpg",
        },
        {
          title: "Oxtails",
          description: "Slow-cooked savory, rich comfort food.",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-lamb-chops_1203-9879.jpg",
        },
        {
          title: "Mac & Cheese",
          description: "Creamy, baked-to-order Southern style.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-pasta-soup-from-spiral-italian-pasta-with-greens-dark-desk-dish-italian-pasta-dinner-sauce-soup_140725-110055.jpg",
        },
        {
          title: "Rice & Gravy",
          description: "The ultimate Southern comfort staple.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-high-protein-vegan-meal_23-2149039362.jpg",
        },
        {
          title: "Cornbread",
          description: "Golden, moist, and freshly baked.",
          imageSrc: "http://img.b2bpic.net/free-photo/buckwheat-with-meat-vegetables-tomato-sauce_140725-6521.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Kind Words"
      title="THE TASTE OF COLUMBIA"
      testimonials={[
        {
          name: "Sarah J.",
          role: "Local Foodie",
          quote: "Best turkey wings I've had in South Carolina. Hands down.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-indoors_23-2151038687.jpg",
        },
        {
          name: "Michael D.",
          role: "Regular",
          quote: "Taste And See feels like Sunday dinner every day.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-taking-selfie_23-2149250086.jpg",
        },
        {
          name: "Emily R.",
          role: "Visitor",
          quote: "The oxtails were incredible. Truly soul-satisfying cooking.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-having-fun-while-sitting-with-her-friends-dining-table-eating-dessert_637285-3239.jpg",
        },
        {
          name: "David K.",
          role: "Local",
          quote: "Mac and cheese perfection. Don't skip the yams!",
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-chef-worried-expression_1194-1351.jpg",
        },
        {
          name: "Lisa T.",
          role: "Regular",
          quote: "Homemade love in every bite. Such friendly service.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-caucasian-male-barber-wearing-glasses-wavy-hair-band-uniform-standing-profile-view-doing-ok-sign_141793-98540.jpg",
        },
      ]}
      textAnimation="slide-up"
      description="See why our neighbors call us the best soul food spot in town."
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="OUR STORY"
      descriptions={[
        "Located in the heart of Columbia, Taste And See was founded on the belief that real soul food is about more than just nutrition—it's about connection.",
        "Our kitchen is a labor of love, bringing authentic Southern recipes to our community.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Information"
      title="NEED TO KNOW"
      categories={[
        {
          name: "Visiting",
          items: [
            {
              question: "Where are you located?",
              answer: "We are located right in the heart of Columbia, South Carolina.",
            },
            {
              question: "Are you open on Sundays?",
              answer: "Yes, we serve fresh soul food all week long.",
            },
          ],
        },
        {
          name: "Ordering",
          items: [
            {
              question: "Do you offer catering?",
              answer: "Absolutely, reach out to us for your next event.",
            },
            {
              question: "Can I order online?",
              answer: "Yes, use our website to place your order.",
            },
          ],
        },
      ]}
      textAnimation="fade-blur"
      description="Common questions about our kitchen and how to get your hands on our food."
    />
    </SectionErrorBoundary>
  </div>

  <div id="conversion" data-section="conversion">
    <SectionErrorBoundary name="conversion">
          <ContactCta
      tag="Quick Actions"
      text="Ready to eat? Order online, check our menu, or find your way to us."
      primaryButton={{
        text: "Order Now",
        href: "#order",
      }}
      secondaryButton={{
        text: "Get Directions",
        href: "#contact",
      }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Let's Talk"
      text="Have a large order or catering request? Get in touch today."
      primaryButton={{
        text: "Call Us",
        href: "tel:5550000000",
      }}
      secondaryButton={{
        text: "Get Directions",
        href: "https://maps.google.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
