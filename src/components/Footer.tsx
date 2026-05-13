import { Instagram, Facebook, Twitter, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-border pt-20 pb-10 px-6 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-display text-3xl uppercase text-amber">
              WHISKY HUB <span className="text-foreground">RONGAI</span>
            </span>
            <p className="text-foreground/40 mt-6 max-w-sm leading-relaxed">
              Rongai's premier destination for premium spirits. Curated selection, lightning-fast
              delivery, and a taste experience worth raising a glass to.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 rounded-full border border-border grid place-items-center hover:border-amber hover:text-amber transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 uppercase text-[11px] tracking-widest">Delivery Hours</h5>
            <ul className="text-foreground/50 text-sm space-y-2">
              <li>Mon – Thu · 10AM – 11PM</li>
              <li>Fri – Sat · 10AM – 3AM</li>
              <li>Sun · 12PM – 10PM</li>
            </ul>
            <p className="text-amber font-mono text-xs mt-4">⚡ 45-min Rongai delivery</p>
          </div>
          <div>
            <h5 className="font-bold mb-6 uppercase text-[11px] tracking-widest">
              Visit / Contact
            </h5>
            <ul className="text-foreground/50 text-sm space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-amber shrink-0 mt-0.5" /> Magadi Road, Rongai,
                Nairobi
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-amber" /> +254 700 000 000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-amber" /> hello@whiskyhub.co.ke
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] text-foreground/30 uppercase tracking-widest">
            © 2026 Whisky Hub Rongai · Excessive consumption of alcohol is harmful to your health ·
            Strictly 18+
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-foreground/30">
            <a href="#" className="hover:text-amber">
              Terms
            </a>
            <a href="#" className="hover:text-amber">
              Privacy
            </a>
            <a href="#" className="hover:text-amber">
              Responsible Drinking
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
