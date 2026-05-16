import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import About from "@/components/About/About";
import Products from "@/components/Products/Products";
import WhyUs from "@/components/WhyUs/WhyUs";
import Industries from "@/components/Industries/Industries";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <WhyUs />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
