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
        className="absolute top-1/4 right-[10%] w-32 h-32 md:w-40 md:h-40"
      >
        <div className="relative w-full h-full">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-diamond via-blue-200 to-purple-200 blur-2xl opacity-50 animate-pulse"></div>
          
          {/* Diamond shape using clip-path */}
          <div className="absolute inset-8 bg-gradient-to-br from-white via-diamond to-blue-100 shadow-2xl" 
               style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
            {/* Top facets */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-transparent" 
                 style={{ clipPath: 'polygon(50% 0%, 75% 30%, 50% 45%, 25% 30%)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/60 to-transparent" 
                 style={{ clipPath: 'polygon(75% 30%, 100% 38%, 50% 45%)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-transparent" 
                 style={{ clipPath: 'polygon(0% 38%, 25% 30%, 50% 45%)' }}></div>
            
            {/* Bottom facets */}
            <div className="absolute inset-0 bg-gradient-to-t from-diamond/80 to-transparent" 
                 style={{ clipPath: 'polygon(50% 45%, 82% 100%, 18% 100%)' }}></div>
            
            {/* Sparkle highlights */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full blur-sm animate-pulse"></div>
            <div className="absolute top-[35%] left-[60%] w-1.5 h-1.5 bg-blue-200 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-[40%] left-[35%] w-1 h-1 bg-purple-200 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          {/* Prismatic light rays */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/2 w-1 h-20 bg-gradient-to-b from-blue-300/40 to-transparent blur-sm rotate-12 animate-shimmer"></div>
            <div className="absolute top-1/4 left-1/2 w-1 h-16 bg-gradient-to-b from-purple-300/30 to-transparent blur-sm -rotate-12 animate-shimmer" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingJewellery;
