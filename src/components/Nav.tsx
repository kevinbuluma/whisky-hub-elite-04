import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Sun, Moon, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useTheme } from "@/lib/theme";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/shop?cat=Whisky", label: "Whisky" },
  { to: "/shop?cat=Wine", label: "Wines" },
  { to: "/shop?cat=Kenyan", label: "Kenyan" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const { count } = useCart();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="font-display text-2xl uppercase">
            <span className="text-amber">WHISKY HUB</span>{" "}
            <span className="text-foreground">RONGAI</span>
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-[11px] font-medium uppercase tracking-widest text-foreground/60">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-amber transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden sm:grid place-items-center size-10 rounded-full hover:bg-foreground/10 transition-colors"
          >
            <Search className="size-4" />
          </button>
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="grid place-items-center size-10 rounded-full hover:bg-foreground/10 transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-4 h-10 rounded-full bg-amber/10 border border-amber/20 text-amber font-mono text-sm hover:bg-amber/20 transition"
          >
            <ShoppingBag className="size-4" />
            <span>{count}</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid place-items-center size-10 rounded-full hover:bg-foreground/10"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-foreground/70 hover:text-amber py-2"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
