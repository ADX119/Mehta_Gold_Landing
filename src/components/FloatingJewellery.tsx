import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FloatingJewellery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-full pointer-events-none z-20 overflow-hidden">
      <motion.div
        style={{ y, rotate, scale }}
        className="absolute top-1/4 right-[10%] w-24 h-24 md:w-32 md:h-32"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-diamond rounded-full blur-xl opacity-60 animate-pulse"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-gold to-gold-light rounded-full shadow-elegant"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-gold-light to-gold rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-diamond rounded-full animate-shimmer"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingJewellery;
