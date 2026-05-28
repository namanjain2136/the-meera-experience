import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/meera-logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Weddings", href: "#weddings" },
  { label: "Facility", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
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
          : "bg-ivory/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12 md:py-5">
        <a href="#home" aria-label="The Meera — Home" className="flex flex-col items-start leading-none">
          <img
            src={logo}
            alt="The Meera"
            className="h-12 w-auto md:h-14"
            width={180}
            height={56}
          />
          <span className="mt-2 text-[10px] tracking-luxe uppercase text-ink/60">
            A Luxury Experience
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase tracking-wider-luxe text-ink/75 transition-colors duration-300 hover:text-burgundy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden text-ink"
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
        <div className="flex items-center justify-between px-6 py-4">
          <img src={logo} alt="The Meera" className="h-10 w-auto" />
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
              className="font-serif text-3xl text-ink hover:text-burgundy transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
