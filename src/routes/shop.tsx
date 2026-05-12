import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, type Category } from "@/lib/products";
import { useMemo, useState } from "react";
import { z } from "zod";

const search = z.object({
  cat: z.string().optional(),
  q: z.string().optional(),
  sort: z.enum(["popular", "price-asc", "price-desc", "new"]).optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: search,
  component: Shop,
  head: () => ({
    meta: [
      { title: "Shop Spirits — Whisky Hub Rongai" },
      { name: "description", content: "Browse premium whisky, vodka, gin, wine, tequila, champagne and Kenyan favorites. Fast Nairobi delivery." },
    ],
  }),
});

function Shop() {
  const sp = Route.useSearch();
  const navigate = Route.useNavigate();
  const cat = (sp.cat as Category | undefined) ?? undefined;
  const [q, setQ] = useState(sp.q ?? "");
  const sort = sp.sort ?? "popular";

  const filtered = useMemo(() => {
    let list = products;
    if (cat) list = list.filter((p) => p.category === cat);
    if (q) {
      const Q = q.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(Q) || p.subtitle.toLowerCase().includes(Q));
    }
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "popular") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort]);

  const setCat = (c?: Category) => navigate({ search: (s: any) => ({ ...s, cat: c }) });
  const setSort = (s: any) => navigate({ search: (sp: any) => ({ ...sp, sort: s }) });

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <header className="border-b border-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-3">The Collection</p>
          <h1 className="font-display text-5xl md:text-6xl uppercase">{cat ?? "All Spirits"}</h1>
          <p className="text-foreground/60 mt-3">{filtered.length} bottles available · Free delivery over KES 5,000</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => setCat(undefined)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium border transition ${
              !cat ? "bg-amber text-black border-amber" : "border-border text-foreground/60 hover:text-amber hover:border-amber/40"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium border transition ${
                cat === c ? "bg-amber text-black border-amber" : "border-border text-foreground/60 hover:text-amber hover:border-amber/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for a bottle..."
            className="flex-1 min-w-[200px] bg-surface border border-border rounded-full px-5 h-11 text-sm focus:outline-none focus:border-amber/50"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-surface border border-border rounded-full px-5 h-11 text-sm focus:outline-none focus:border-amber/50"
          >
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="new">New Arrivals</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-foreground/50">No bottles match — try another category.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => <ProductCard key={p.id} product={p} delay={(i % 8) * 50} />)}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
