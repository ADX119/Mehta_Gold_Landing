import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Featured from "@/components/Featured";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FloatingJewellery from "@/components/FloatingJewellery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <FloatingJewellery />
      <Hero />
      <Collections />
      <Process />
      <Featured />
      <Testimonials />
      <Story />
      <Footer />
    </div>
  );
};

export default Index;
