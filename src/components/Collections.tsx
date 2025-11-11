import goldImage from "@/assets/gold-collection.jpg";
import silverImage from "@/assets/silver-collection.jpg";
import diamondImage from "@/assets/diamond-collection.jpg";

const collections = [
  {
    title: "Gold",
    description: "Timeless elegance in every piece",
    image: goldImage,
    color: "gold"
  },
  {
    title: "Silver",
    description: "Modern sophistication refined",
    image: silverImage,
    color: "silver"
  },
  {
    title: "Diamond",
    description: "Brilliance that captivates",
    image: diamondImage,
    color: "diamond"
  }
];

const Collections = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-gold">Collections</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each piece is crafted with precision and passion, designed to celebrate life's most precious moments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
