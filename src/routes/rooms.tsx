import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import roomSuite from "@/assets/room-suite.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — The Meera" },
      {
        name: "description",
        content:
          "Discover the heritage suites, royal courts and pavilion residences at The Meera, Jaipur.",
      },
      { property: "og:title", content: "Rooms & Suites — The Meera" },
      {
        property: "og:description",
        content:
          "A collection of fifty-two suites composed with quiet luxury and warm Indian hospitality.",
      },
    ],
  }),
  component: RoomsPage,
});

export const SUITES = [
  {
    slug: "heritage-suite",
    name: "Heritage Suite",
    size: "65 sqm",
    intro: "Carved wood, ivory linens, and a private verandah overlooking the central fountain.",
    image: roomSuite,
  },
  {
    slug: "royal-court-suite",
    name: "Royal Court Suite",
    size: "120 sqm",
    intro: "Two-bedroom residence with antique furnishings and a tranquil garden courtyard.",
    image: aboutInterior,
  },
  {
    slug: "maharaja-pavilion",
    name: "Maharaja Pavilion",
    size: "220 sqm",
    intro: "The grand pavilion suite — a private wing reserved for our most discerning guests.",
    image: gallery1,
  },
  {
    slug: "garden-villa",
    name: "Garden Villa",
    size: "180 sqm",
    intro: "A standalone villa wrapped in jasmine and frangipani with a private plunge pool.",
    image: gallery2,
  },
  {
    slug: "meera-residence",
    name: "Meera Residence",
    size: "260 sqm",
    intro: "A four-bedroom heritage residence ideal for families and intimate celebrations.",
    image: gallery3,
  },
];

function RoomsPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <main>
        {/* Page header */}
        <section className="hero-ambient relative pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-burgundy/50" />
              <span className="text-[11px] uppercase tracking-luxe text-burgundy">
                Rooms & Suites
              </span>
            </div>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] text-ink md:text-7xl">
              Fifty-two sanctuaries of <span className="italic text-burgundy">quiet luxury.</span>
            </h1>
            <p className="mt-8 max-w-xl leading-[1.9] text-ink/75">
              Each suite at The Meera is its own composition — antique carved doors, hand-loomed
              textiles and gentle courtyard light. Choose the residence that suits your stay.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] space-y-24 px-6 md:px-12">
            {SUITES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(80,20,20,0.3)]">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-[420px] w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.05] md:h-[560px]"
                  />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-luxe text-gold">{s.size}</div>
                  <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">{s.name}</h2>
                  <div className="hairline mt-8 w-20" />
                  <p className="mt-8 max-w-md leading-[1.9] text-ink/75">{s.intro}</p>
                  <Link
                    to="/rooms/$slug"
                    params={{ slug: s.slug }}
                    className="mt-10 inline-flex items-center gap-2 rounded-full border border-burgundy px-8 py-3 text-[11px] uppercase tracking-wider-luxe text-burgundy transition hover:bg-burgundy hover:text-ivory"
                  >
                    View Suite <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
