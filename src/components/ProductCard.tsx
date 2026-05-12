import { Star } from "lucide-react";
import { fmtKES, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className="group bg-surface rounded-2xl p-4 border border-border hover:border-amber/50 transition-all hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-xl bg-black/40">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-amber text-black text-[10px] font-bold px-2 py-1 rounded font-mono">
            {product.badge}
          </div>
        )}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md rounded px-2 py-1 text-[11px] text-amber font-mono">
          <Star className="size-3 fill-amber text-amber" />
          {product.rating}
        </div>
      </div>
      <p className="text-foreground/50 text-[10px] uppercase tracking-widest mb-1 font-mono">
        {product.category}
      </p>
      <h4 className="font-medium text-base mb-1 leading-tight">{product.name}</h4>
      <p className="text-foreground/40 text-xs mb-4">{product.subtitle}</p>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-lg font-mono text-amber">{fmtKES(product.price)}</span>
        {product.oldPrice && (
          <span className="text-xs text-foreground/30 line-through font-mono">
            {fmtKES(product.oldPrice)}
          </span>
        )}
      </div>
      <button
        onClick={onAdd}
        className={`w-full py-3 rounded-lg text-sm font-bold transition-colors ${
          added ? "bg-amber text-black" : "bg-foreground text-background hover:bg-amber"
        }`}
      >
        {added ? "✓ Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
