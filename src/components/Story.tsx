import { Heart } from "lucide-react";

const Story = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center animate-fade-in">
          <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Crafted with <span className="text-gradient-gold">Passion</span>
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              For over three generations, Lumière Jewels has been synonymous with exceptional craftsmanship and timeless design. Each piece in our collection is meticulously handcrafted by master artisans who pour their heart and soul into creating jewellery that transcends trends.
            </p>
            <p>
              We believe that true luxury lies not just in precious metals and stones, but in the stories they tell and the moments they commemorate. From engagement rings that mark the beginning of forever to heirloom pieces passed down through generations, our jewellery becomes part of your legacy.
            </p>
            <p className="text-primary font-semibold">
              Every gemstone is ethically sourced, every design purposefully created, and every piece made to last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
