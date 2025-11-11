import goldCollection from "@/assets/gold-collection.jpg";
import silverCollection from "@/assets/silver-collection.jpg";
import diamondCollection from "@/assets/diamond-collection.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const collections = [
  {
    title: "Gold",
    description: "Timeless elegance in every piece",
    image: goldCollection,
    color: "gold"
  },
  {
    title: "Silver",
    description: "Modern sophistication refined",
    image: silverCollection,
    color: "silver"
  },
  {
    title: "Diamond",
    description: "Brilliance that captivates",
    image: diamondCollection,
    color: "diamond"
  }
];

const Collections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Our Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of fine jewellery, each piece telling its own story
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={`${collection.title} collection`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-playfair text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {collection.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
