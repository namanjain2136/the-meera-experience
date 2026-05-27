import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Weddings", href: "#weddings" },
  { label: "Dining", href: "#dining" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a
          href="#home"
          className={cn(
            "flex flex-col leading-none transition-colors",
            scrolled ? "text-ink" : "text-ivory",
          )}
        >
          <span className="font-serif text-2xl md:text-3xl tracking-wide">The Meera</span>
          <span className="mt-1 text-[10px] tracking-luxe uppercase opacity-70">
            Heritage · Hospitality
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-[12px] uppercase tracking-wider-luxe transition-colors hover:opacity-100",
                scrolled ? "text-ink/80 hover:text-burgundy" : "text-ivory/90 hover:text-ivory",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={cn(
            "hidden md:inline-flex items-center justify-center border px-6 py-3 text-[11px] uppercase tracking-wider-luxe transition-all duration-300",
            scrolled
              ? "border-burgundy text-burgundy hover:bg-burgundy hover:text-ivory"
              : "border-ivory/80 text-ivory hover:bg-ivory hover:text-ink",
          )}
        >
          Book Your Stay
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={cn("lg:hidden", scrolled ? "text-ink" : "text-ivory")}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-ivory transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-serif text-2xl text-ink">The Meera</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-ink">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-12 flex flex-col items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 border border-burgundy px-8 py-3 text-[11px] uppercase tracking-wider-luxe text-burgundy"
          >
            Book Your Stay
          </a>
        </nav>
      </div>
    </header>
  );
}
