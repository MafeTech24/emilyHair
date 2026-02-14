import { motion } from "framer-motion";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const galleryItems = [
  {
    image: beforeAfter1,
    title: "Coloración fantasía",
    description: "Transformación con técnica de color personalizada",
  },
  {
    image: beforeAfter2,
    title: "Balayage caramelo",
    description: "Reflejos cálidos para un look natural y luminoso",
  },
  {
    image: beforeAfter3,
    title: "Alisado con keratina",
    description: "Cabello liso, brillante y saludable",
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Nuestro trabajo
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-4">
            Resultados que hablan
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Cada transformación refleja nuestro compromiso con la calidad y el cuidado del cabello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
