import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Camera, X, Image as ImageIcon } from "lucide-react";

const DiagnosisForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    largoCabello: "",
    tinturaPrevia: "",
    comentarios: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 3)); // Limit to 3 photos
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `¡Hola! Mi nombre es ${formData.nombre}. Envío mi diagnóstico capilar:
- Servicio: ${formData.servicio}
- Largo: ${formData.largoCabello}
- Tintura previa: ${formData.tinturaPrevia}
- Comentarios: ${formData.comentarios || "Sin comentarios"}
${files.length > 0 ? `\n(Te enviaré ${files.length} fotos de mi cabello a continuación)` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5493512345678?text=${encodedMessage}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 2500);
  };

  if (submitted) {
    return (
      <section id="diagnostico" className="py-20 md:py-28 gradient-warm">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card rounded-2xl p-12 shadow-card border border-border/50"
          >
            <div className="w-16 h-16 rounded-full gradient-rose flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              ¡Gracias por confiar en nosotras!
            </h3>
            <p className="font-body text-muted-foreground">
              Se está abriendo tu WhatsApp para enviar el diagnóstico.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Diagnóstico capilar
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-4">
            Contanos sobre tu cabello
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Completá el formulario y te asesoramos de forma personalizada.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-medium text-foreground">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                maxLength={100}
                placeholder="Tu nombre"
                className="font-body text-sm px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-medium text-foreground">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                maxLength={20}
                placeholder="Tu número de WhatsApp"
                className="font-body text-sm px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-medium text-foreground">Servicio deseado</label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
                className="font-body text-sm px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              >
                <option value="">Seleccioná un servicio</option>
                <option value="corte">Corte de diseño</option>
                <option value="coloracion">Coloración personalizada</option>
                <option value="alisado">Alisado profesional</option>
                <option value="tratamiento">Tratamiento capilar</option>
                <option value="peinado">Peinado social</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-medium text-foreground">Largo del cabello</label>
              <select
                name="largoCabello"
                value={formData.largoCabello}
                onChange={handleChange}
                required
                className="font-body text-sm px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              >
                <option value="">Seleccioná el largo</option>
                <option value="corto">Corto</option>
                <option value="medio">Medio</option>
                <option value="largo">Largo</option>
                <option value="muy-largo">Muy largo</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-body text-sm font-medium text-foreground">
                ¿Tenés tintura previa?
              </label>
              <div className="flex gap-4">
                {["Sí", "No", "No estoy segura"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tinturaPrevia"
                      value={option}
                      checked={formData.tinturaPrevia === option}
                      onChange={handleChange}
                      className="w-4 h-4 accent-rose-gold focus:ring-0"
                    />
                    <span className="font-body text-sm text-muted-foreground">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-body text-sm font-medium text-foreground">
                Comentarios o consultas
              </label>
              <textarea
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                maxLength={1000}
                rows={4}
                placeholder="Contanos qué tenés en mente, qué resultado buscás, o cualquier duda..."
                className="font-body text-sm px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
            </div>

            {/* Photo Upload Section */}
            <div className="flex flex-col gap-3 md:col-span-2 mt-4">
              <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                <Camera className="w-4 h-4 text-primary" />
                Fotos de tu cabello (Opcional)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <AnimatePresence>
                  {files.map((file, index) => (
                    <motion.div
                      key={`${file.name}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="relative aspect-square rounded-xl overflow-hidden border border-border bg-muted/30 group"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="absolute top-1 right-1 w-6 h-6 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </motion.div>
                  ))}
                  {files.length < 3 && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary"
                    >
                      <ImageIcon className="w-6 h-6" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">Subir foto</span>
                    </button>
                  )}
                </AnimatePresence>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="hidden"
              />
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 flex items-start gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  <strong className="text-foreground block mb-0.5">Tu privacidad es prioridad</strong>
                  Tus fotos serán utilizadas exclusivamente por nuestro equipo profesional para evaluar tu cabello y brindarte un presupuesto exacto. No serán compartidas ni publicadas.
                </p>
              </div>
              <p className="text-[10px] text-muted-foreground italic pl-1">
                * Podrás adjuntar las fotos seleccionadas una vez que se abra el chat de WhatsApp.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full font-body font-semibold text-base px-8 py-4 rounded-full border-2 border-[#8a4d5b] bg-[#8a4d5b] text-white shadow-elevated hover:bg-transparent hover:text-[#8a4d5b] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Enviar diagnóstico por WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default DiagnosisForm;
