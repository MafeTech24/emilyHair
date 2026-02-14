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
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -15px rgba(138, 77, 91, 0.2)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-card border border-primary/5 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#5a2d39]/90 via-[#5a2d39]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-2xl font-semibold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
