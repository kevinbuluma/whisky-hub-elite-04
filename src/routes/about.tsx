import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Award, Truck, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Whisky Hub Rongai" },
      {
        name: "description",
        content:
          "Whisky Hub Rongai is Nairobi's premium liquor destination — curated spirits, fast Rongai delivery, and a passion for Kenyan nightlife.",
      },
      { property: "og:title", content: "About Whisky Hub Rongai" },
      {
        property: "og:description",
        content: "Premium spirits, curated for Nairobi's modern drinker.",
      },
    ],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <header className="border-b border-border bg-gradient-to-br from-amber/10 via-surface to-background">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-amber mb-4">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9]">
            Crafted for the <span className="text-amber">Nairobi night.</span>
          </h1>
          <p className="text-foreground/70 mt-6 text-lg max-w-2xl">
            Whisky Hub Rongai began with a simple obsession — making world-class spirits effortlessly
            available to the people of Rongai and greater Nairobi. We curate every bottle, deliver
            in under 45 minutes, and treat every order like it's our own party.
          </p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl uppercase mb-4 text-amber">The Hub</h2>
          <p className="text-foreground/70 leading-relaxed">
            Tucked along Magadi Road in Rongai, our flagship store carries over 100 carefully
            selected bottles — from rare single malts to the lagers Kenyans grew up on. We work
            directly with importers and local breweries to keep prices honest and quality
            uncompromised.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl uppercase mb-4 text-amber">Our Promise</h2>
          <p className="text-foreground/70 leading-relaxed">
            Authentic bottles. Cold delivery. M-Pesa, card, or cash. Discreet packaging.
            Strict 18+ verification at the door. We're not just a liquor store — we're the
            concierge for Nairobi's smartest nights in.
          </p>
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border py-16">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, label: "100+ Curated Bottles" },
            { icon: Truck, label: "45-min Delivery" },
            { icon: ShieldCheck, label: "Authentic Guarantee" },
            { icon: Heart, label: "Locally Loved" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="bg-background border border-border rounded-2xl p-6 text-center">
              <div className="size-12 mx-auto rounded-full bg-amber/10 grid place-items-center text-amber mb-3">
                <Icon className="size-5" />
              </div>
              <p className="font-display uppercase text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">
          Pour something <span className="text-amber">unforgettable.</span>
        </h2>
        <p className="text-foreground/60 max-w-xl mx-auto mb-8">
          Browse our full collection or talk to our concierge for personal recommendations.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-amber text-black font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest hover:bg-gold transition"
        >
          Shop the Collection
        </Link>
      </section>

      <Footer />
    </div>
  );
}
