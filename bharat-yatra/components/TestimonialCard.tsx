import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-cream p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={15}
              className={i < t.rating ? "fill-marigold text-marigold" : "text-line"}
            />
          ))}
        </div>
        {t.isSample && (
          <span className="eyebrow rounded-full bg-indigo/10 px-2.5 py-1 text-indigo">
            Sample review
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink/75">"{t.review}"</p>

      <p className="mt-5 text-sm font-medium text-ink">{t.name}</p>
      <p className="eyebrow mt-0.5 text-ink/40">
        {t.destination} · {t.context}
      </p>
    </div>
  );
}
