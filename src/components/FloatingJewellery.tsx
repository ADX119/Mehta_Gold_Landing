import { motion, useScroll, useTransform } from "framer-motion";
import floatingRing from "@/assets/floating-ring.png";

const FloatingJewellery = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.3, 1], ["-10%", "50%", "150%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 1], [0.6, 1.2, 0.9, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [1, 1, 0.5, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "20%", "80%"]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20 overflow-hidden">
      <motion.div
        style={{ y, x, rotate, scale, opacity }}
        className="absolute top-1/4 right-[10%] w-32 h-32 md:w-40 md:h-40"
      >
        <div className="relative w-full h-full">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-3xl opacity-60 animate-pulse"></div>
          
          {/* Ring Image */}
          <img 
            src={floatingRing} 
            alt="Floating luxury ring" 
            className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
          />
          
          {/* Sparkle highlights */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-primary/80 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingJewellery;
