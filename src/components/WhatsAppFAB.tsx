import { MessageCircle } from "lucide-react";

const WA_NUMBER = "254700000000";
const WA_MSG = encodeURIComponent("Hi Whisky Hub Rongai, I'd like to place an order:");

export function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white px-5 h-14 rounded-full shadow-2xl hover:scale-105 transition-transform animate-glow"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline font-bold text-sm uppercase tracking-wide">Order on WhatsApp</span>
    </a>
  );
}
