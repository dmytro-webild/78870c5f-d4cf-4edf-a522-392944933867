import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Menu",
    "href": "#menu"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Directions",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Come Hungry",
    "href": "#come-hungry"
  },
  {
    "name": "Signature Dishes",
    "href": "#signature-dishes"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  { name: "Order Online", href: "/order" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },



];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Taste And See"
      ctaButton={{
        text: "Order Now",
        href: "/order",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="Taste And See"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Taste And See Soul Food Kitchen. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
