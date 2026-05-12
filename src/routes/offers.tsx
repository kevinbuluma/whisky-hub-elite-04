import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/offers")({
  component: Offers,
  head: () => ({ meta: [{ title: "Weekly Offers — Whisky Hub Rongai" }] }),
});

function Offers() {
  const deals = products.filter((p) => p.oldPrice || p.badge);
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <header className="border-b border-border bg-gradient-to-br from-amber/10 via-surface to-background">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-3">⏰ This Week</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase">Weekly Offers</h1>
          <p className="text-foreground/60 mt-4 max-w-xl">Limited-time deals on our most-loved bottles. Stock up before the weekend.</p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deals.map((p, i) => <ProductCard key={p.id} product={p} delay={(i % 8) * 50} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
