import NavbarDemo from "./components/ui/NavbarDemo";
import { Hero } from "./components/ui/Hero";
import ProductCard from "./components/ui/ProductCard";
import Testimonials from "./components/ui/Testimonials";
import { Footer } from "./components/ui/Footer";

export default function Page() {
  return (
    <div>
      <NavbarDemo />
      <Hero />

      <section className="py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ProductCard 
          id={1}
          title="Fresh Cow Milk"
          price="70 BDT / L"
          img="/milk1.jpg"
        />
        <ProductCard 
          id={2}
          title="Buffalo Milk"
          price="90 BDT / L"
          img="/milk2.jpg"
        />
        <ProductCard 
          id={3}
          title="Ghee (Clarified Butter)"
          price="850 BDT"
          img="/ghee.jpg"
        />
      </section>

      <Testimonials />

      <Footer />
    </div>
  );
}
