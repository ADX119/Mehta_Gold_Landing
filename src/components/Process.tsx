import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Gem, Award, Heart } from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "Consultation",
    description: "Share your vision with our expert designers"
  },
  {
    icon: Sparkles,
    title: "Design",
    description: "Custom designs crafted to perfection"
  },
  {
    icon: Gem,
    title: "Craftsmanship",
    description: "Handcrafted by skilled artisans"
  },
  {
    icon: Award,
    title: "Delivery",
    description: "Receive your masterpiece with certification"
  }
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-gold">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to creation, every piece is crafted with care and precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 border-2 border-gold/30">
                <step.icon className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
