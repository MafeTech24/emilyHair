import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Droplets, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte de diseño",
    description: "Cortes personalizados que realzan tu estilo y la estructura natural de tu cabello.",
    duration: "45 min aprox.",
  },
  {
    icon: Palette,
    title: "Coloración personalizada",
    description: "Técnicas de color a medida: balayage, mechas, reflejos y color completo con productos premium.",
    duration: "2 a 3 hs aprox.",
  },
  {
    icon: Sparkles,
    title: "Alisado profesional",
    description: "Alisados con keratina y tratamientos progresivos para un cabello liso, brillante y saludable.",
    duration: "2 a 4 hs aprox.",
  },
  {
    icon: Droplets,
    title: "Tratamientos capilares",
    description: "Hidratación profunda, reconstrucción y nutrición capilar para devolver la vitalidad a tu pelo.",
    duration: "1 h aprox.",
  },
  {
    icon: Crown,
    title: "Peinados sociales",
    description: "Peinados elegantes para eventos especiales, bodas, quinceañeras y celebraciones.",
    duration: "1 a 2 hs aprox.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Nuestros servicios
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-4">
            Cuidamos cada detalle
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Cada servicio está pensado para ofrecerte una experiencia única y resultados profesionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(138, 77, 91, 0.1), 0 10px 10px -5px rgba(138, 77, 91, 0.04)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-card border border-border/50 hover:border-primary/20 transition-all duration-500 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-rose-gold-light/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-body text-primary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {service.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
