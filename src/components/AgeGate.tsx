import { useEffect, useState } from "react";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("whr_age_ok")) setOpen(true);
  }, []);

  if (!open) return null;
  const accept = () => {
    localStorage.setItem("whr_age_ok", "1");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 text-center animate-fade-in">
      <div className="max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">
          Whisky Hub Rongai
        </p>
        <h1 className="font-display text-5xl uppercase mb-4 text-amber">Drink Responsibly</h1>
        <p className="text-foreground/60 mb-8">
          You must be 18 years or older to enter. Strictly no sale to underage persons. Delivery
          within Nairobi only.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={accept}
            className="bg-amber text-black font-bold py-4 px-12 rounded-full hover:bg-gold transition-colors"
          >
            I AM 18 OR OLDER
          </button>
          <a
            href="https://www.google.com"
            className="text-foreground/40 text-sm hover:text-foreground/70"
          >
            I am under 18
          </a>
        </div>
      </div>
    </div>
  );
}
