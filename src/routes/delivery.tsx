import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Truck, Clock, MapPin, Smartphone, ShieldCheck, Package } from "lucide-react";

export const Route = createFileRoute("/delivery")({
  component: Delivery,
  head: () => ({
    meta: [
      { title: "Delivery & Payment — Whisky Hub Rongai" },
      {
        name: "description",
        content:
          "45-minute delivery across Rongai & Nairobi. Pay with M-Pesa, card, or cash on delivery. Free over KES 5,000.",
      },
    ],
  }),
});

function Delivery() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <header className="border-b border-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-amber mb-3">
            Logistics
          </p>
          <h1 className="font-display text-5xl md:text-6xl uppercase">Delivery & Payment</h1>
          <p className="text-foreground/60 mt-3 max-w-xl">
            Fast, cold, and discreet. Here's how we get your order to your door.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Clock, title: "45-Minute Delivery", body: "Across Rongai, Ongata, Kiserian, Karen and surrounding estates — most orders arrive in under 45 minutes." },
          { icon: MapPin, title: "Coverage", body: "Rongai · Ongata · Kiserian · Karen · Langata · Galleria · Bomas · Hardy. CBD orders by special arrangement." },
          { icon: Truck, title: "Free Over KES 5,000", body: "Orders above KES 5,000 ship free anywhere in our delivery zone. Below that, a flat KES 200 fee applies." },
          { icon: Smartphone, title: "M-Pesa First", body: "Pay via M-Pesa Paybill, card on delivery, or cash. We send an instant receipt for every order." },
          { icon: ShieldCheck, title: "ID at the Door", body: "We verify 18+ on every delivery. Have your ID ready. No exceptions — keeps everyone safe." },
          { icon: Package, title: "Discreet Packaging", body: "Plain, unmarked boxes. Cold-chain insulation for chilled orders. Nothing screams 'liquor delivery'." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-surface border border-border rounded-2xl p-6 hover:border-amber/40 transition">
            <div className="size-12 rounded-full bg-amber/10 grid place-items-center text-amber mb-4">
              <Icon className="size-5" />
            </div>
            <h3 className="font-display uppercase text-xl text-amber mb-2">{title}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </section>

      <section className="bg-surface/40 border-y border-border py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-8">Delivery Hours</h2>
          <div className="grid sm:grid-cols-2 gap-4 font-mono text-sm">
            {[
              ["Monday – Thursday", "10:00 AM – 11:00 PM"],
              ["Friday – Saturday", "10:00 AM – 2:00 AM"],
              ["Sunday", "12:00 PM – 10:00 PM"],
              ["Public Holidays", "12:00 PM – 11:00 PM"],
            ].map(([day, hrs]) => (
              <div key={day} className="flex items-center justify-between bg-background border border-border rounded-xl px-5 py-4">
                <span className="text-foreground/70">{day}</span>
                <span className="text-amber">{hrs}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
