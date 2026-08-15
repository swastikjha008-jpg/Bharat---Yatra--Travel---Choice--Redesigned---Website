"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Camera, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const activeIndex = Math.max(
    NAV_LINKS.findIndex((l) => l.href === pathname),
    0
  );

  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const measure = () => {
    const active = itemRefs.current[activeIndex];
    const nav = navRef.current;
    if (!active || !nav) return;
    const navBox = nav.getBoundingClientRect();
    const itemBox = active.getBoundingClientRect();
    // clamp so the pill can never sit (or animate) past the nav's own edges
    const left = Math.max(0, itemBox.left - navBox.left);
    const width = Math.min(itemBox.width, navBox.width - left);
    setPill({ left, width });
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    let ro: ResizeObserver | undefined;
    if (navRef.current) {
      ro = new ResizeObserver(() => measure());
      ro.observe(navRef.current);
    }
    // custom fonts can shift link widths after first paint — recheck once loaded
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => measure());
    }
    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="container-edge flex h-20 items-center justify-between">
        <Link href="/" aria-label={`${SITE.name} — Home`} className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo/lockup.png"
            alt={`${SITE.name} logo`}
            width={124}
            height={131}
            priority
            className="h-14 w-auto rounded-lg"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display italic text-lg text-ink">Bharat Yatra</span>
            <span className="eyebrow text-ink/45 -mt-0.5">Travel Choice</span>
          </span>
        </Link>

        <nav
          ref={navRef}
          className="relative hidden md:flex items-center gap-1 overflow-hidden rounded-full border border-line bg-white/70 px-2 py-1.5"
          aria-label="Primary"
        >
          {pill && (
            <span
              aria-hidden="true"
              className="absolute top-1.5 bottom-1.5 z-0 rounded-full bg-marigold transition-[left,width] duration-300 ease-in-out"
              style={{ left: pill.left, width: pill.width }}
            />
          )}
          {NAV_LINKS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeIndex === index ? "text-ink" : "text-ink/65 hover:text-ink"
              }`}
              aria-current={activeIndex === index ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-vermilion px-4 py-2 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            <Camera size={16} strokeWidth={2} />
            Instagram
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-cream px-5 pb-6 pt-2">
          <nav className="flex flex-col" aria-label="Primary mobile">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-line py-3 text-base font-medium ${
                  pathname === item.href ? "text-indigo" : "text-ink/75"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-vermilion px-4 py-2 text-sm font-semibold text-cream"
          >
            <Camera size={16} /> Follow on Instagram
          </a>
        </div>
      )}
    </header>
  );
}
