import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, ShieldCheck, BadgeCheck } from "lucide-react";
import WaterRippleImage from "@/components/WaterRippleImage";
import AccordionGallery from "@/components/AccordionGallery";
import TicketCard from "@/components/TicketCard";
import Reveal from "@/components/Reveal";
import { PACKAGES } from "@/lib/packages";
import { PHOTOS, SERVICES, SITE, unsplash } from "@/lib/site";

const GALLERY_ITEMS = [
  { image: unsplash(PHOTOS.kedarnathStream, 1000), label: "Kedarnath" },
  { image: unsplash(PHOTOS.varanasiGhat, 1000), label: "Varanasi" },
  { image: unsplash(PHOTOS.ayodhyaSaryu, 1000), label: "Ayodhya" },
  { image: unsplash(PHOTOS.manaliSissu, 1000), label: "Manali" },
  { image: unsplash(PHOTOS.shimlaTown, 1000), label: "Shimla" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[85svh] min-h-[560px] w-full overflow-hidden bg-pine">
        <div className="absolute inset-0">
          <WaterRippleImage src={unsplash(PHOTOS.heroOcean, 2000)} blueish={0.62} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/10" />

        <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-20 pt-16">
          <p className="eyebrow text-marigold">{SITE.city} · Travel Partner</p>
          <h1 className="mt-4 max-w-3xl font-display text-[10vw] leading-[1.02] text-cream sm:text-6xl md:text-7xl">
            Journeys, planned <em className="italic text-marigold">like they matter.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base text-cream/80 sm:text-lg">
            {SITE.tagline} India tours, honeymoons, family trips and religious
            journeys — handled door to door.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Explore Packages <ArrowUpRight size={16} />
            </Link>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              <Camera size={16} /> View Our Journeys
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-paper-soft py-24">
        <div className="container-edge grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow text-indigo">Who we are</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Rooted in Lucknow, <em className="italic">built for the whole map.</em>
            </h2>
            <p className="mt-6 max-w-md text-ink/70 leading-relaxed">
              Bharat Yatra Travel Choice is a Lucknow-based travel company handling holiday
              planning end to end — domestic and international flights, hotel bookings, and
              curated tours across India, from spiritual circuits to honeymoon escapes.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-ink/70">
                <ShieldCheck size={18} className="text-indigo" /> MSME Registered
              </div>
              <div className="flex items-center gap-2 text-sm text-ink/70">
                <BadgeCheck size={18} className="text-indigo" /> ISO 9001:2015
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] w-full overflow-hidden rounded-[26px]">
            <Image
              src={unsplash(PHOTOS.lucknowRumi, 1200)}
              alt="Rumi Darwaza, Lucknow"
              fill
              sizes="(min-width: 768px) 46vw, 92vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="border-y border-line bg-cream py-10">
        <div className="container-edge flex flex-wrap items-center gap-x-3 gap-y-3">
          {SERVICES.map((service, i) => (
            <span key={service} className="flex items-center gap-3">
              <span className="text-sm font-medium text-ink/75 whitespace-nowrap">{service}</span>
              {i < SERVICES.length - 1 && <span className="h-1.5 w-1.5 rounded-full bg-indigo/40" />}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="bg-paper-soft py-24">
        <div className="container-edge">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-indigo">Where you can go</p>
              <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Featured packages</h2>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo hover:text-vermilion"
            >
              View all packages <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 0.06}>
                <TicketCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink/40">
            * Prices are starting fares sourced from third-party listings and pending confirmation
            with Bharat Yatra Travel Choice — always verify current pricing before booking.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-pine py-24">
        <div className="container-edge">
          <Reveal>
            <p className="eyebrow text-marigold">Spiritual & scenic</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              A few frames from the road
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <AccordionGallery
              items={GALLERY_ITEMS}
              defaultIndex={2}
              accentColor="#f5b800"
              overlayColor="#0a1f2c"
              height={440}
              expandRatio={0.46}
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24">
        <div className="container-edge">
          <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
                Follow the journey <em className="italic">before you book it.</em>
              </h2>
              <p className="mt-4 max-w-md text-ink/65">
                Real trips, real routes — posted as they happen on Instagram.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-vermilion px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
              >
                <Camera size={16} /> Follow on Instagram
              </a>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-full border border-indigo/30 px-6 py-3.5 text-sm font-semibold text-indigo transition-colors hover:bg-indigo/5"
              >
                Plan your journey <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
