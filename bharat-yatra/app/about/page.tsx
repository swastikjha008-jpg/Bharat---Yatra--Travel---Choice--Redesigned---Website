import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PHOTOS, SERVICES, SITE, unsplash } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bharat Yatra Travel Choice is a Lucknow-based travel company offering India tours, honeymoon packages, family tours and religious journeys.",
};

const TRUST = [
  { icon: ShieldCheck, label: "MSME Registered", value: SITE.msme },
  { icon: BadgeCheck, label: "ISO 9001:2015 Certified", value: SITE.iso },
  { icon: FileCheck2, label: "GST Registered", value: SITE.gst },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[56svh] min-h-[420px] items-end overflow-hidden bg-pine">
        <Image
          src={unsplash(PHOTOS.lucknowRumi, 1800)}
          alt="Rumi Darwaza, Lucknow"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/0" />
        <div className="container-edge relative z-10 pb-16 pt-10">
          <p className="eyebrow text-marigold">Who we are</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl text-cream sm:text-6xl">
            About Bharat Yatra <em className="italic">Travel Choice</em>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper-soft py-24">
        <div className="container-edge grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug text-ink sm:text-4xl">
              A Lucknow-based travel company providing travel and holiday services —
              <em className="italic"> planned with the same care you'd give your own family's trip.</em>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/70">
              From spiritual circuits like Ayodhya and Varanasi to mountain escapes in Manali and
              Shimla, Bharat Yatra Travel Choice puts together the cab transfers, stays and
              sightseeing so the only thing you have to plan is who's coming with you.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-indigo">What we handle</p>
            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-line bg-cream py-20">
        <div className="container-edge">
          <Reveal>
            <p className="eyebrow text-indigo">Trust indicators</p>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">On the record</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TRUST.map((t, i) => (
              <Reveal
                key={t.label}
                delay={i * 0.08}
                className="rounded-2xl border border-line bg-paper-soft p-6"
              >
                <t.icon size={22} className="text-indigo" />
                <p className="mt-4 font-medium text-ink">{t.label}</p>
                <p className="mt-1 font-mono text-sm text-ink/50">{t.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-pine py-24 text-cream">
        <div className="container-edge">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-marigold">Travel philosophy</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Discover, plan, experience, <em className="italic">remember.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-cream/75">
                Every itinerary starts with where you want to feel something — a temple town, a
                snowline, a river ghat at dawn — and works backward from there. We handle the
                logistics quietly so the trip itself stays the whole story.
              </p>
              <Link
                href="/packages"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                View our packages <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
