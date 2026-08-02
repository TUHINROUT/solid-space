import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import CTABanner from "@/components/home/CTABanner";
import OurClients from "@/components/home/OurClients";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <WhyChooseUs />
        <About />
        <Process />
        <CTABanner />
        <OurClients />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
