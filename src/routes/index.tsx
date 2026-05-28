import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

import heroPalace from "@/assets/hero-palace.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import weddings from "@/assets/weddings.jpg";
import dining from "@/assets/dining.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import ctaPalace from "@/assets/cta-palace.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {eyebrow && (
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-burgundy/50" />
            <span className="text-[11px] uppercase tracking-luxe text-burgundy">{eyebrow}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-ivory pt-28 md:pt-32"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center px-6 pb-20 md:px-12 md:pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden rounded-sm shadow-[0_30px_80px_-40px_rgba(40,20,10,0.35)]"
        >
          <img
            src={heroPalace}
            alt="The Meera — Indian heritage hospitality"
            className="h-[60vh] min-h-[420px] w-full object-cover md:h-[78vh] md:max-h-[760px]"
            width={1920}
            height={1280}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a0e08]/15" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
          className="mt-16 max-w-3xl text-center font-serif text-2xl italic leading-[1.3] text-burgundy md:mt-20 md:text-4xl"
        >
          Indian heritage reimagined as timeless luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 md:mt-14"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-burgundy"
          >
            <span className="relative">
              Discover The Meera
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-burgundy transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About The Meera">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
            A palace of warmth,<br />
            <span className="italic text-burgundy/80">crafted for the modern traveller.</span>
          </h2>
          <div className="hairline mt-10 w-24" />
          <p className="mt-10 max-w-lg text-base leading-[1.9] text-ink/75">
            Set amidst ivory courtyards and centuries-old gardens, The Meera is a living tribute to
            Rajasthan's regal past. Each arch, each fresco, each lamp tells a story of artisans who
            shaped a kingdom — now reimagined as an intimate sanctuary of fifty-two suites.
          </p>
          <p className="mt-6 max-w-lg text-base leading-[1.9] text-ink/75">
            From sunlit breakfasts on the marble verandah to candlelit dinners beneath the dome,
            every moment is composed with the quiet care of a home, and the grace of a palace.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
            <Stat n="52" label="Suites & Villas" />
            <Stat n="14" label="Acres of Gardens" />
            <Stat n="3" label="Restaurants" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <img
            src={aboutInterior}
            alt="The Meera grand lobby"
            loading="lazy"
            className="h-[600px] w-full object-cover md:h-[720px]"
          />
          <div className="absolute -bottom-8 -left-8 hidden bg-ivory px-10 py-8 shadow-sm md:block">
            <div className="font-serif text-3xl text-burgundy">Est. 1947</div>
            <div className="mt-1 text-[11px] uppercase tracking-luxe text-ink/60">
              A Heritage Address
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl text-burgundy md:text-5xl">{n}</div>
      <div className="mt-2 text-[11px] uppercase tracking-wider-luxe text-ink/60">{label}</div>
    </div>
  );
}

const rooms = [
  {
    name: "Heritage Suite",
    desc: "Carved wood, ivory linens, and a private verandah overlooking the central fountain.",
    size: "65 sqm",
  },
  {
    name: "Royal Court Suite",
    desc: "Two-bedroom residence with antique furnishings and a tranquil garden courtyard.",
    size: "120 sqm",
  },
  {
    name: "Maharaja Pavilion",
    desc: "The grand pavilion suite — a private wing reserved for our most discerning guests.",
    size: "220 sqm",
  },
];

function Rooms() {
  return (
    <Section id="rooms" eyebrow="Rooms & Accommodation" className="bg-cream">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <h2 className="max-w-xl font-serif text-4xl leading-[1.05] md:text-6xl">
          Suites composed with quiet luxury.
        </h2>
        <a
          href="#contact"
          className="text-[11px] uppercase tracking-wider-luxe text-burgundy underline-offset-8 hover:underline"
        >
          View all suites →
        </a>
      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="group overflow-hidden">
            <img
              src={roomSuite}
              alt="Heritage suite at The Meera"
              loading="lazy"
              className="h-[480px] w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03] md:h-[600px]"
            />
          </div>
          <div className="mt-6 flex items-end justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-luxe text-ink/50">Featured</div>
              <h3 className="mt-2 font-serif text-3xl">{rooms[0].name}</h3>
            </div>
            <div className="text-[11px] uppercase tracking-wider-luxe text-ink/60">
              {rooms[0].size}
            </div>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/70">{rooms[0].desc}</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {rooms.slice(1).map((r, i) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-border pt-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl">{r.name}</h3>
                <span className="text-[11px] uppercase tracking-wider-luxe text-ink/60">
                  {r.size}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{r.desc}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-luxe text-burgundy"
              >
                Enquire <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Weddings() {
  return (
    <section id="weddings" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[460px] lg:h-auto">
          <img
            src={weddings}
            alt="Wedding mandap at The Meera"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center bg-ivory px-6 py-24 md:px-20 md:py-32"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-burgundy/60" />
            <span className="text-[11px] uppercase tracking-luxe text-burgundy">
              Weddings & Celebrations
            </span>
          </div>
          <h2 className="mt-8 font-serif text-4xl leading-[1.05] md:text-5xl">
            A celebration as timeless as the palace itself.
          </h2>
          <p className="mt-8 max-w-md leading-[1.9] text-ink/75">
            From intimate ceremonies in the moonlit courtyard to grand processions through our
            arched corridors, The Meera composes weddings of singular elegance — carried by warm
            hospitality, honoured by tradition.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-y-3 text-sm text-ink/80">
            <li>· Heritage mandap settings</li>
            <li>· Sangeet & mehendi pavilions</li>
            <li>· Curated culinary journeys</li>
            <li>· Full-palace buy-outs</li>
          </ul>
          <a
            href="#contact"
            className="mt-12 inline-flex w-fit items-center justify-center border border-burgundy px-10 py-4 text-[11px] uppercase tracking-wider-luxe text-burgundy transition hover:bg-burgundy hover:text-ivory"
          >
            Plan Your Wedding
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Dining() {
  return (
    <Section id="dining" eyebrow="Dining & Hospitality">
      <div className="grid items-center gap-16 lg:grid-cols-5 lg:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
            A table set with stories.
          </h2>
          <p className="mt-8 leading-[1.9] text-ink/75">
            Three signature restaurants honour the traditions of the royal kitchens — slow-cooked
            khansamas' recipes, fresh garden produce, and the unhurried ritual of dining as it was
            meant to be.
          </p>

          <div className="mt-12 space-y-8">
            {[
              { n: "Aangan", k: "All-day Indian dining" },
              { n: "Marigold", k: "Heritage Rajasthani thali" },
              { n: "The Verandah", k: "Continental & afternoon tea" },
            ].map((d) => (
              <div key={d.n} className="flex items-baseline justify-between border-b border-border pb-4">
                <span className="font-serif text-2xl">{d.n}</span>
                <span className="text-[11px] uppercase tracking-wider-luxe text-ink/60">
                  {d.k}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <img
            src={dining}
            alt="Royal thali at The Meera"
            loading="lazy"
            className="h-[520px] w-full object-cover md:h-[680px]"
          />
        </motion.div>
      </div>
    </Section>
  );
}

function Gallery() {
  return (
    <Section id="gallery" eyebrow="The Palace in Frames" className="bg-cream">
      <div className="flex items-end justify-between">
        <h2 className="max-w-xl font-serif text-4xl leading-[1.05] md:text-5xl">
          Moments from The Meera.
        </h2>
        <a
          href="#"
          className="hidden text-[11px] uppercase tracking-wider-luxe text-burgundy md:inline-block"
        >
          View full gallery →
        </a>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
        <motion.img
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={gallery1}
          alt="Palace pool"
          loading="lazy"
          className="h-[420px] w-full object-cover md:h-[560px]"
        />
        <motion.img
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          src={gallery2}
          alt="Lanterns and arches"
          loading="lazy"
          className="h-[420px] w-full object-cover md:mt-16 md:h-[560px]"
        />
        <motion.img
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          src={gallery3}
          alt="Spa with rose petals"
          loading="lazy"
          className="h-[420px] w-full object-cover md:h-[560px]"
        />
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img
        src={ctaPalace}
        alt="The Meera at twilight"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a0e08]/65" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center text-ivory md:py-44">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-ivory/60" />
          <span className="text-[11px] uppercase tracking-luxe text-ivory/80">An Invitation</span>
          <span className="h-px w-10 bg-ivory/60" />
        </div>
        <h2 className="mt-8 font-serif text-4xl leading-[1.05] md:text-6xl">
          Begin your stay at <span className="italic">The Meera.</span>
        </h2>
        <p className="mt-8 mx-auto max-w-xl text-ivory/80 leading-[1.9]">
          Our concierge will compose a journey befitting your visit — from arrival blessings to
          private dining beneath the stars. We look forward to welcoming you.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:reservations@themeera.com"
            className="inline-flex items-center justify-center border border-ivory bg-ivory px-10 py-4 text-[11px] uppercase tracking-wider-luxe text-ink transition hover:bg-transparent hover:text-ivory"
          >
            Book Now
          </a>
          <a
            href="mailto:reservations@themeera.com"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-luxe text-ivory/90"
          >
            Send an Enquiry <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-12 text-xs tracking-wider-luxe text-ivory/60">
          +91 141 000 0000 · reservations@themeera.com
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Weddings />
        <Dining />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
