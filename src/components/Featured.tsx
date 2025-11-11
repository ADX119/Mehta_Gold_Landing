import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-6">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Featured Piece</span>
            <Sparkles className="h-5 w-5" />
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            The Royal <span className="text-gradient-gold shimmer">Crown</span> Collection
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            An exclusive collection featuring the finest diamonds set in 18K gold, inspired by royal heritage and modern elegance. Each piece tells a story of timeless beauty.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">18K</div>
              <div className="text-sm text-muted-foreground">Gold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">VVS1</div>
              <div className="text-sm text-muted-foreground">Clarity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Carat</div>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            View Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
