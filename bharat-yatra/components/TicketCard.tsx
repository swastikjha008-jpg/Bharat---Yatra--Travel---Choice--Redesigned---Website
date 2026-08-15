import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { unsplash } from "@/lib/site";
import type { Package } from "@/lib/packages";

export default function TicketCard({ pkg }: { pkg: Package }) {
  return (
    <Link
      href={`/packages#${pkg.slug}`}
      className="group flex flex-col overflow-hidden rounded-[22px] bg-cream shadow-[0_18px_40px_-24px_rgba(26,22,13,0.45)] ring-1 ring-ink/[0.06] transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={unsplash(pkg.photo, 900)}
          alt={`${pkg.destination} — Bharat Yatra Travel Choice package`}
          fill
          sizes="(min-width: 768px) 380px, 92vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1 eyebrow text-ink/80">
          <MapPin size={11} /> {pkg.destination}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">Explore {pkg.destination}</h3>
        <p className="mt-1 eyebrow text-ink/50">{pkg.duration}</p>

        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          {pkg.highlights.slice(0, 3).join(" · ")}
        </p>

        <div className="mt-auto flex items-end justify-between pt-6">
          <div>
            <p className="eyebrow text-ink/40">Starting from</p>
            <p className="font-mono text-xl font-medium text-ink">
              {pkg.startingPrice}
              {!pkg.verified && <sup className="ml-1 text-[10px] font-normal text-ink/40">*</sup>}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo px-4 py-2 text-sm font-medium text-cream transition-colors group-hover:bg-vermilion">
            View package
            <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
