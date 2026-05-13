import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { fmtKES, getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ArrowLeft, Minus, Plus, Star, ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-5xl uppercase text-amber mb-3">Bottle not found</h1>
        <Link to="/shop" className="text-foreground/60 underline">Back to shop</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background grid place-items-center px-6">
      <p className="text-foreground/70">{error.message}</p>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Bottle"} — Whisky Hub Rongai` },
      { name: "description", content: loaderData?.product.description ?? "Premium liquor delivered in Nairobi." },
      { property: "og:title", content: loaderData?.product.name ?? "Whisky Hub Rongai" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const onAdd = () => {
    add(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-amber">
          <ArrowLeft className="size-3" /> Back to Shop
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface border border-border">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-amber text-black text-xs font-bold px-3 py-1 rounded font-mono">
              {product.badge}
            </span>
          )}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-3">
            {product.category}
          </p>
          <h1 className="font-display text-4xl md:text-5xl uppercase leading-tight mb-3">
            {product.name}
          </h1>
          <p className="text-foreground/60 mb-6">{product.subtitle}</p>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1 text-amber">
              <Star className="size-4 fill-amber" />
              <span className="font-mono text-sm">{product.rating}</span>
            </div>
            <span className="text-foreground/30 text-sm">· In stock</span>
          </div>

          <div className="flex items-baseline gap-3 mb-8">
            <span className="font-mono text-3xl text-amber">{fmtKES(product.price)}</span>
            {product.oldPrice && (
              <span className="font-mono text-sm text-foreground/40 line-through">
                {fmtKES(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="text-foreground/70 leading-relaxed mb-8">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-surface border border-border rounded-full">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="size-11 grid place-items-center hover:text-amber">
                <Minus className="size-4" />
              </button>
              <span className="w-10 text-center font-mono">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="size-11 grid place-items-center hover:text-amber">
                <Plus className="size-4" />
              </button>
            </div>
            <button
              onClick={onAdd}
              className={`flex-1 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition ${
                added ? "bg-amber text-black" : "bg-foreground text-background hover:bg-amber"
              }`}
            >
              {added ? "✓ Added to Cart" : `Add ${qty} to Cart`}
            </button>
          </div>

          <a
            href={`https://wa.me/254700000000?text=Hi%20Whisky%20Hub%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-amber"
          >
            <MessageCircle className="size-4" /> Order via WhatsApp instead
          </a>

          <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-border">
            <div className="flex items-start gap-3">
              <Truck className="size-5 text-amber mt-1" />
              <div>
                <p className="text-sm font-medium">45-min Delivery</p>
                <p className="text-xs text-foreground/50">Free over KES 5,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="size-5 text-amber mt-1" />
              <div>
                <p className="text-sm font-medium">100% Authentic</p>
                <p className="text-xs text-foreground/50">Verified imports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 60} />)}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
