import { Instagram, Facebook, Music2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background/80 backdrop-blur-md border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" className="group">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                Emily <span className="text-primary">Hair Studio</span>
              </h3>
            </a>
            <p className="font-body text-sm text-muted-foreground">
              Peluquería especializada en Córdoba, Argentina
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://wa.me/5493512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors ml-2"
            >
              +54 9 351 234 5678
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex items-center justify-center gap-1">
          <p className="font-body text-xs text-muted-foreground/80">
            © 2025 Emily Hair Studio.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
