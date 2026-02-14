import { motion } from "framer-motion";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Interior del salón Emily Hair Studio"
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "linear" 
          }}
        />

      </div>

      <div className="container ml-0 px-4 md:px-12 lg:px-24 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl bg-white/20 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/30 shadow-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-[#8a4d5b] font-bold mb-4"
          >
            Peluquería especializada en Córdoba
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-medium text-[#5a2d39] leading-tight mb-8"
            style={{ textShadow: "0px 0px 15px rgba(255,255,255,1), 0px 0px 10px rgba(255,255,255,1), 0px 0px 5px rgba(255,255,255,1)" }}
          >
            Transformamos tu cabello con <span className="italic">técnica, cuidado</span> y estilo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-lg text-[#5a2d39] leading-relaxed mb-8"
          >
            Coloración personalizada, alisados profesionales y tratamientos capilares
            diseñados especialmente para vos. Tu cabello merece lo mejor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#diagnostico"
              className="font-body font-semibold text-base px-8 py-4 rounded-full border-2 border-[#8a4d5b] bg-[#8a4d5b] text-white hover:bg-transparent hover:text-[#8a4d5b] transition-all duration-300 text-center"
            >
              Solicitar diagnóstico
            </a>

            <a
              href="https://wa.me/5493512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold text-base px-8 py-4 rounded-full border-2 border-[#8a4d5b] bg-transparent text-[#8a4d5b] hover:bg-[#8a4d5b] hover:text-white transition-all duration-300 text-center"
            >
              Reservar turno
            </a>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default HeroSection;
