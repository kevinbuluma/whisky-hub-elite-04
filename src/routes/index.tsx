import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, CATEGORY_IMAGE } from "@/lib/products";
import heroImg from "@/assets/hero-pour.jpg";
import {
  ArrowRight,
  Truck,
  Smartphone,
  MessageCircle,
  Sparkles,
  Wine,
  Beer,
  GlassWater,
} from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Whisky Hub Rongai — Premium Liquor Delivery" },
      {
        name: "description",
        content:
          "Premium whisky, wines, vodka, gin & Kenyan favorites delivered to your door in Rongai, Nairobi. 45-minute delivery. M-Pesa accepted.",
      },
    ],
  }),
});

const catIcons: Record<string, ComponentType<{ className?: string }>> = {
  Whisky: GlassWater,
  Vodka: GlassWater,
  Gin: GlassWater,
  Wine: Wine,
  Tequila: GlassWater,
  Champagne: Sparkles,
  Beer: Beer,
  Kenyan: Beer,
};

type ShopSearch = {
  cat?: string;
  q?: string;
  sort?: "popular" | "price-asc" | "price-desc" | "new";
};

function Home() {
  const featured = products.filter((p) => p.badge).slice(0, 4);
  const kenyan = products.filter((p) => p.category === "Kenyan").slice(0, 4);
  const whisky = products.filter((p) => p.category === "Whisky").slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Premium whisky pour"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl animate-fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-amber mb-6">
              ⚡ 45-min delivery · Rongai, Nairobi
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] mb-8">
              Rongai's Premium <br />
              <span className="text-amber">Liquor Experience</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-xl mb-10 leading-relaxed">
              Curated whisky, fine wines, and Kenyan favorites — delivered ice-cold to your door.
              Pay via M-Pesa, Card, or Cash.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 bg-amber text-black font-bold py-5 px-8 rounded-full text-sm uppercase tracking-widest hover:bg-gold transition-all"
              >
                Shop Collection
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 backdrop-blur-md py-5 px-8 rounded-full text-sm uppercase tracking-widest hover:bg-foreground/10 transition-all"
              >
                <MessageCircle className="size-4" />
                WhatsApp Order
              </a>
              <Link
                to="/offers"
                className="inline-flex items-center gap-2 py-5 px-2 text-sm uppercase tracking-widest text-foreground/60 hover:text-amber"
              >
                View Offers <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-amber/5">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Truck,
              title: "Rongai Express",
              body: "Under 45-min doorstep delivery across Rongai & environs.",
            },
            {
              icon: Smartphone,
              title: "M-Pesa Ready",
              body: "Pay instantly via M-Pesa, Card or Cash on Delivery.",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp Concierge",
              body: "Custom orders & party packages — message our dispatch.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-amber/10 border border-amber/20 grid place-items-center text-amber shrink-0">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="font-display uppercase text-xl text-amber">{title}</p>
                <p className="text-foreground/60 text-sm mt-1">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories rail */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl uppercase">Shop by Category</h2>
          <Link
            to="/shop"
            className="text-amber text-sm uppercase tracking-widest border-b border-amber pb-1"
          >
            All Spirits
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((c) => {
            const Icon = catIcons[c] ?? GlassWater;
            return (
              <Link
                key={c}
                to="/shop"
                search={{ cat: c } as ShopSearch}
                className="group relative overflow-hidden bg-surface border border-border rounded-xl aspect-square flex flex-col items-center justify-end p-4 hover:border-amber/50 transition-all"
              >
                <img
                  src={CATEGORY_IMAGE[c]}
                  alt={c}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="relative z-10 text-xs font-mono uppercase tracking-wider text-white group-hover:text-amber">
                  {c}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Weekly deals with countdown */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-amber mb-2">
              ⏰ Limited Time
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase">Weekly Deals</h2>
          </div>
          <Countdown />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* Whisky highlight */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-amber mb-2">
              Top Shelf
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase">Whisky Collection</h2>
          </div>
          <Link
            to="/shop"
            search={{ cat: "Whisky" } as ShopSearch}
            className="text-amber text-sm uppercase tracking-widest border-b border-amber pb-1"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whisky.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* Kenyan Favorites */}
      <section className="bg-surface/50 border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-amber mb-2">
                🇰🇪 Local Heroes
              </p>
              <h2 className="font-display text-3xl md:text-4xl uppercase">Kenyan Favorites</h2>
            </div>
            <Link
              to="/shop"
              search={{ cat: "Kenyan" } as ShopSearch}
              className="text-amber text-sm uppercase tracking-widest border-b border-amber pb-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kenyan.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Party packages CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber/20 via-surface to-background border border-amber/20 p-10 md:p-16">
          <div className="relative z-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">
              Party Packages
            </p>
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">
              Throwing a party?
              <br />
              <span className="text-amber">We've got you.</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-lg">
              Custom bundles for house parties, weddings, corporate events and clubs. Bulk pricing,
              fast delivery, and free glassware on orders over KES 25,000.
            </p>
            <a
              href="https://wa.me/254700000000?text=Hi%20Whisky%20Hub%2C%20I%27d%20like%20a%20party%20package%20quote"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-amber text-black font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest hover:bg-gold transition"
            >
              <MessageCircle className="size-4" /> Get a Quote
            </a>
          </div>
          <div className="absolute -right-20 -bottom-20 size-96 rounded-full bg-amber/10 blur-3xl" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Countdown() {
  const [t, setT] = useState({ h: 12, m: 45, s: 9 });
  useEffect(() => {
    const end = Date.now() + 1000 * 60 * 60 * 23;
    const id = setInterval(() => {
      const ms = Math.max(0, end - Date.now());
      const h = Math.floor(ms / 3.6e6);
      const m = Math.floor((ms % 3.6e6) / 60000);
      const s = Math.floor((ms % 60000) / 1000);
      setT({ h, m, s });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center gap-2 font-mono">
      {[
        { v: t.h, l: "Hrs" },
        { v: t.m, l: "Min" },
        { v: t.s, l: "Sec" },
      ].map((x) => (
        <div
          key={x.l}
          className="bg-surface border border-amber/20 rounded-lg px-4 py-2 text-center min-w-[64px]"
        >
          <div className="text-amber text-xl font-bold tabular-nums">{pad(x.v)}</div>
          <div className="text-[9px] uppercase text-foreground/40 tracking-widest">{x.l}</div>
        </div>
      ))}
    </div>
  );
}
