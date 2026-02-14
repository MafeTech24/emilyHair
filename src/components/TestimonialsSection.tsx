import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Valentina R.",
    text: "Emily es una genia. Me hizo un balayage espectacular y me asesoró perfecto sobre el tono que me quedaba mejor. ¡Mi pelo nunca estuvo tan lindo!",
    rating: 5,
    service: "Coloración",
  },
  {
    name: "Camila P.",
    text: "El alisado con keratina me cambió la vida. Mi pelo quedó súper suave y brillante. Además el salón es hermoso y te sentís muy cómoda.",
    rating: 5,
    service: "Alisado",
  },
  {
    name: "Sofía M.",
    text: "Fui para mi casamiento y me hizo un peinado increíble. Todas me preguntaban dónde me había peinado. Súper profesional y cálida.",
    rating: 5,
    service: "Peinado social",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Testimonios
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-4">
            Lo que dicen nuestras clientas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-rose flex items-center justify-center text-primary-foreground font-body font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{testimonial.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
