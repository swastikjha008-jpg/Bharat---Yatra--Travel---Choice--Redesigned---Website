import Link from "next/link";
import Image from "next/image";
import { Camera, MapPin, Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-pine text-cream">
      <div className="container-edge grid gap-12 pt-16 pb-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/lockup.png"
              alt={`${SITE.name} logo`}
              width={124}
              height={131}
              className="h-16 w-auto rounded-lg"
            />
            <span className="font-display italic text-xl">Bharat Yatra Travel Choice</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
            A Lucknow-based travel partner for India tours, honeymoon getaways, family trips and
            religious journeys — planned like they matter.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-cream/60">
            <MapPin size={15} /> {SITE.city}
          </div>
        </div>

        <div>
          <p className="eyebrow text-cream/45">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-cream/80 transition-colors hover:text-marigold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cream/45">Get in touch</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-marigold"
              >
                <Camera size={15} /> Instagram
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-marigold"
              >
                <Mail size={15} /> {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2 eyebrow text-cream/40">
            <span className="rounded-full border border-cream/15 px-2.5 py-1">MSME Registered</span>
            <span className="rounded-full border border-cream/15 px-2.5 py-1">ISO 9001:2015</span>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-edge flex flex-col gap-2 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="eyebrow">MSME {SITE.msme} · GST {SITE.gst}</p>
        </div>
      </div>
    </footer>
  );
}
