import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Camera, X as XIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PACKAGES } from "@/lib/packages";
import { SITE, unsplash } from "@/lib/site";

export const metadata: Metadata = {
  title: "Travel Packages",
  description:
    "Ayodhya, Manali, Varanasi and Shimla tour packages from Bharat Yatra Travel Choice — Lucknow-based travel agency.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="bg-pine pb-16 pt-10 text-cream">
        <div className="container-edge">
          <p className="eyebrow text-marigold">Where you can go</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl sm:text-6xl">Travel Packages</h1>
          <p className="mt-5 max-w-xl text-cream/75">
            Every itinerary below started as a real listing — cab transfers, sightseeing and stays
            bundled for the road. Prices are starting fares pending confirmation with the company;
            treat them as a starting point for a conversation, not a locked-in quote.
          </p>
        </div>
      </section>

      <section className="bg-paper-soft py-20">
        <div className="container-edge flex flex-col gap-24">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={0.04}>
              <article
                id={pkg.slug}
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px]">
                  <Image
                    src={unsplash(pkg.photo, 1400)}
                    alt={`${pkg.destination} — travel package`}
                    fill
                    sizes="(min-width: 768px) 46vw, 92vw"
                    className="object-cover"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 eyebrow text-ink/80">
                    {pkg.duration}
                  </span>
                </div>

                <div className="rounded-[26px] bg-cream p-8 shadow-[0_20px_50px_-30px_rgba(26,22,13,0.5)] ring-1 ring-ink/[0.06] sm:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-3xl text-ink sm:text-4xl">
                        Explore {pkg.destination}
                      </h2>
                      <p className="mt-1 eyebrow text-ink/45">{pkg.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="eyebrow text-ink/40">Starting from</p>
                      <p className="font-mono text-2xl font-medium text-ink">{pkg.startingPrice}*</p>
                    </div>
                  </div>

                  <p className="mt-7 eyebrow text-indigo">Highlights</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {pkg.highlights.join(" · ")}
                  </p>

                  <p className="mt-6 eyebrow text-indigo">Itinerary</p>
                  <ol className="mt-3 space-y-2">
                    {pkg.itinerary.map((step) => (
                      <li key={step.day} className="flex gap-3 text-sm text-ink/75">
                        <span className="font-mono text-ink/40">{step.day}</span>
                        <span>{step.plan}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow text-indigo">Inclusions</p>
                      <ul className="mt-3 space-y-1.5">
                        {pkg.inclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-ink/75">
                            <Check size={14} className="mt-0.5 shrink-0 text-marigold-deep" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {pkg.exclusions && (
                      <div>
                        <p className="eyebrow text-ink/40">Exclusions</p>
                        <ul className="mt-3 space-y-1.5">
                          {pkg.exclusions.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ink/50">
                              <XIcon size={14} className="mt-0.5 shrink-0 text-ink/30" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-vermilion px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
                  >
                    Enquire about this trip <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-edge">
          <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-lg font-display text-3xl text-ink sm:text-4xl">
                Don't see your route? <em className="italic">Ask us anyway.</em>
              </h2>
              <p className="mt-3 max-w-md text-ink/65">
                Custom itineraries, group tours and international packages are handled directly —
                reach out on Instagram to start planning.
              </p>
            </div>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-vermilion px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              <Camera size={16} /> Message on Instagram
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
