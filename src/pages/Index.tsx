import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Featured from "@/components/Featured";
import Story from "@/components/Story";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Hero />
      <Collections />
      <Featured />
      <Story />
      <Footer />
    </div>
  );
};

export default Index;
