import type { Metadata } from "next";
import { Camera, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import AccordionGallery from "@/components/AccordionGallery";
import TestimonialCard from "@/components/TestimonialCard";
import { PHOTOS, SITE, unsplash } from "@/lib/site";
import { SAMPLE_TESTIMONIALS } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Satisfied Customers",
  description: "Real journeys and reviews from Bharat Yatra Travel Choice customers.",
};

const NAMES_WITHOUT_QUOTES = ["Eurocare Enterprises", "Ragini Choudhary", "Aman Kumar"];

const JOURNEY_ITEMS = [
  { image: unsplash(PHOTOS.ayodhyaSaryu, 1000), label: "Ayodhya" },
  { image: unsplash(PHOTOS.varanasiGhat, 1000), label: "Varanasi" },
  { image: unsplash(PHOTOS.kedarnathStream, 1000), label: "Kedarnath" },
  { image: unsplash(PHOTOS.manaliSissu, 1000), label: "Manali" },
  { image: unsplash(PHOTOS.shimlaTown, 1000), label: "Shimla" },
];

export default function CustomersPage() {
  return (
    <>
      <section className="bg-pine pb-16 pt-10 text-cream">
        <div className="container-edge">
          <p className="eyebrow text-marigold">Where we've taken people</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight sm:text-6xl">
            Real journeys. <em className="italic">Real memories.</em>
          </h1>
          <p className="mt-5 max-w-xl text-cream/75">
            The places our travellers went, and the moments they brought home.
          </p>
        </div>
      </section>

      {/* HONEST STATE NOTICE */}
      <section className="bg-paper-soft py-14">
        <div className="container-edge">
          <Reveal className="rounded-2xl border border-line bg-cream p-7 sm:p-8">
            <p className="eyebrow text-indigo">A note on this page</p>
            <p className="mt-3 max-w-2xl leading-relaxed text-sm text-ink/70">
              The reviews below are sample content — placeholders that show how real testimonials
              will look, clearly marked "Sample review." The one exception is the quote further
              down from Santosh Jha, which is a genuine publicly listed review. Samples will be
              replaced with verified customer reviews as they come in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SAMPLE TESTIMONIALS */}
      <section className="bg-paper-soft pb-24">
        <div className="container-edge">
          <Reveal>
            <p className="eyebrow text-indigo">What travellers are saying</p>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              A few kind words <em className="italic">(sample content)</em>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_TESTIMONIALS.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.05}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>

          {/* VERIFIED REVIEW */}
          <Reveal delay={0.1} className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-marigold/60 bg-cream p-7">
              <div className="flex items-center justify-between gap-3">
                <Quote size={18} className="text-vermilion" />
                <span className="eyebrow rounded-full bg-marigold/15 px-2.5 py-1 text-marigold-deep">
                  Verified public review
                </span>
              </div>
              <p className="mt-4 font-display text-xl italic text-ink">"Excellent service"</p>
              <p className="mt-3 eyebrow text-ink/45">Santosh Jha · publicly listed review</p>
            </div>
            <div className="rounded-2xl border border-dashed border-line p-7">
              <p className="eyebrow text-ink/40">Also publicly listed, no quote text available</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink/60">
                {NAMES_WITHOUT_QUOTES.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHERE WE'VE TAKEN PEOPLE — real destination photography */}
      <section className="bg-pine py-24">
        <div className="container-edge">
          <Reveal>
            <p className="eyebrow text-marigold">The trips</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              Real destinations, real routes
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <AccordionGallery
              items={JOURNEY_ITEMS}
              defaultIndex={1}
              accentColor="#f5b800"
              overlayColor="#0a1f2c"
              height={420}
              expandRatio={0.46}
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="container-edge">
          <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-lg font-display text-3xl text-ink sm:text-4xl">
                Traveled with us? <em className="italic">We'd love to feature it.</em>
              </h2>
              <p className="mt-3 max-w-md text-ink/65">
                Tag or DM your trip photos on Instagram — real journeys are what belong here.
              </p>
            </div>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-vermilion px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              <Camera size={16} /> Share on Instagram
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
