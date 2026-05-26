import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SUITES } from "./rooms";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const suite = SUITES.find((s) => s.slug === params.slug);
    if (!suite) throw notFound();
    return { suite };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.suite.name} — The Meera` },
          { name: "description", content: loaderData.suite.intro },
          { property: "og:title", content: `${loaderData.suite.name} — The Meera` },
          { property: "og:description", content: loaderData.suite.intro },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <div className="mx-auto max-w-xl px-6 py-40 text-center">
        <h1 className="font-serif text-4xl text-burgundy">Suite not found</h1>
        <Link to="/rooms" className="mt-8 inline-block text-[11px] uppercase tracking-wider-luxe text-burgundy">
          ← All Suites
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: SuiteDetail,
});

const amenities = [
  "King-size four-poster bed",
  "Private marble verandah",
  "Hand-loomed silk furnishings",
  "Curated minibar & afternoon tea",
  "Personal butler service",
  "Spa-grade bath amenities",
];

function SuiteDetail() {
  const { suite } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <main>
        <section className="relative pt-32 md:pt-40">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-luxe text-burgundy hover:text-wine"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Suites
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="overflow-hidden rounded-2xl shadow-[0_30px_80px_-40px_rgba(80,20,20,0.35)]"
              >
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="h-[480px] w-full object-cover md:h-[640px]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
              >
                <div className="text-[11px] uppercase tracking-luxe text-gold">{suite.size}</div>
                <h1 className="mt-3 font-serif text-5xl leading-[1.02] text-ink md:text-6xl">
                  {suite.name}
                </h1>
                <div className="hairline mt-8 w-24" />
                <p className="mt-8 leading-[1.9] text-ink/75">{suite.intro}</p>
                <p className="mt-6 leading-[1.9] text-ink/70">
                  Wake to filtered morning light through latticed jharokhas, take tea on the
                  verandah, and retreat in the evening to candlelit interiors arranged with the
                  quiet attention of our khansamas.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-y-3 border-t border-border pt-8 text-sm text-ink/80">
                  {amenities.map((a) => (
                    <div key={a}>· {a}</div>
                  ))}
                </div>

                <a
                  href="#enquire"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-burgundy bg-burgundy px-10 py-4 text-[11px] uppercase tracking-wider-luxe text-ivory transition hover:bg-transparent hover:text-burgundy"
                >
                  Enquire about this suite
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="enquire" className="bg-cream py-24 md:py-32">
          <div className="mx-auto grid max-w-[1100px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="text-[11px] uppercase tracking-luxe text-burgundy">An Invitation</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Reserve the <span className="italic text-burgundy">{suite.name}.</span>
              </h2>
              <p className="mt-8 max-w-md leading-[1.9] text-ink/75">
                Share your preferred dates and our concierge will craft a stay composed entirely
                around you.
              </p>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
