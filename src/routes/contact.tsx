import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact — Whisky Hub Rongai" }] }),
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-3">Get In Touch</p>
        <h1 className="font-display text-5xl md:text-7xl uppercase mb-12">Visit Us in Rongai</h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Location", body: "Magadi Road, Rongai, Nairobi, Kenya" },
              { icon: Phone, title: "Phone", body: "+254 700 000 000" },
              { icon: Mail, title: "Email", body: "hello@whiskyhub.co.ke" },
              {
                icon: Clock,
                title: "Hours",
                body: "Mon–Thu 10AM–11PM · Fri–Sat 10AM–3AM · Sun 12PM–10PM",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-5"
              >
                <div className="size-12 rounded-full bg-amber/10 grid place-items-center text-amber shrink-0">
                  <x.icon className="size-5" />
                </div>
                <div>
                  <p className="font-display uppercase text-lg text-amber">{x.title}</p>
                  <p className="text-foreground/70 text-sm mt-1">{x.body}</p>
                </div>
              </div>
            ))}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-amber text-black font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest hover:bg-gold transition"
            >
              <MessageCircle className="size-4" /> Message on WhatsApp
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border min-h-[400px]">
            <iframe
              title="Whisky Hub Rongai Location"
              src="https://www.google.com/maps?q=Rongai,+Nairobi&output=embed"
              className="w-full h-full min-h-[400px] grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
