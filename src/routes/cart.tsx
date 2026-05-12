import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useCart } from "@/lib/cart";
import { fmtKES } from "@/lib/products";
import { Minus, Plus, X, MessageCircle, Smartphone, CreditCard, Truck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/cart")({
  component: Cart,
  head: () => ({ meta: [{ title: "Your Cart — Whisky Hub Rongai" }] }),
});

function Cart() {
  const { items, setQty, remove, total, clear } = useCart();
  const [pay, setPay] = useState<"mpesa" | "card" | "cod">("mpesa");
  const delivery = total > 5000 ? 0 : total > 0 ? 300 : 0;
  const grand = total + delivery;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <h1 className="font-display text-5xl uppercase mb-4">Your cart is empty</h1>
          <p className="text-foreground/60 mb-8">Find your next favorite bottle in our collection.</p>
          <Link to="/shop" className="inline-block bg-amber text-black font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest hover:bg-gold transition">
            Browse Spirits
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const checkout = () => {
    const summary = items.map((i) => `• ${i.qty}× ${i.product.name} — ${fmtKES(i.product.price * i.qty)}`).join("\n");
    const text = encodeURIComponent(
      `Hi Whisky Hub Rongai, I'd like to order:\n\n${summary}\n\nDelivery: ${fmtKES(delivery)}\nTotal: ${fmtKES(grand)}\nPayment: ${pay.toUpperCase()}`,
    );
    window.open(`https://wa.me/254700000000?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-4xl md:text-5xl uppercase mb-10">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-4 bg-surface border border-border rounded-2xl p-4">
                <div className="size-24 rounded-lg overflow-hidden bg-black/30 shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{product.category}</p>
                  <h3 className="font-medium truncate">{product.name}</h3>
                  <p className="text-amber font-mono text-sm mt-1">{fmtKES(product.price)}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => remove(product.id)} className="text-foreground/40 hover:text-destructive">
                    <X className="size-4" />
                  </button>
                  <div className="flex items-center gap-2 bg-background border border-border rounded-full">
                    <button onClick={() => setQty(product.id, qty - 1)} className="size-8 grid place-items-center hover:text-amber">
                      <Minus className="size-3" />
                    </button>
                    <span className="font-mono text-sm w-6 text-center">{qty}</span>
                    <button onClick={() => setQty(product.id, qty + 1)} className="size-8 grid place-items-center hover:text-amber">
                      <Plus className="size-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={clear} className="text-xs uppercase tracking-widest text-foreground/40 hover:text-destructive">
              Clear cart
            </button>
          </div>

          <aside className="bg-surface border border-border rounded-2xl p-6 h-fit lg:sticky lg:top-24 space-y-5">
            <h3 className="font-display text-2xl uppercase">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-foreground/60">Subtotal</span><span className="font-mono">{fmtKES(total)}</span></div>
              <div className="flex justify-between"><span className="text-foreground/60">Delivery (Rongai)</span><span className="font-mono">{delivery === 0 ? "FREE" : fmtKES(delivery)}</span></div>
              <div className="flex justify-between text-lg font-bold pt-3 border-t border-border"><span>Total</span><span className="font-mono text-amber">{fmtKES(grand)}</span></div>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-foreground/50">Payment Method</p>
              {[
                { v: "mpesa", icon: Smartphone, label: "M-Pesa" },
                { v: "card", icon: CreditCard, label: "Visa / Mastercard" },
                { v: "cod", icon: Truck, label: "Cash on Delivery" },
              ].map((opt) => (
                <button
                  key={opt.v}
                  onClick={() => setPay(opt.v as any)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border text-sm transition ${
                    pay === opt.v ? "border-amber bg-amber/10 text-amber" : "border-border hover:border-amber/40"
                  }`}
                >
                  <opt.icon className="size-4" /> {opt.label}
                </button>
              ))}
            </div>

            <button
              onClick={checkout}
              className="w-full bg-amber text-black font-bold py-4 rounded-full text-sm uppercase tracking-widest hover:bg-gold transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="size-4" /> Confirm via WhatsApp
            </button>
            <p className="text-[11px] text-foreground/40 text-center">
              You'll be redirected to WhatsApp to confirm with our dispatch team.
            </p>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
