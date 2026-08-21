import { MapPin, Navigation } from "lucide-react";
import { gymInfo } from "@/data/gym";
import { Reveal, SectionHeading } from "./Reveal";

export function LocationSection() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="المكان" title="مستنيينك في الروبي جيم 💪" subtitle={gymInfo.address} />

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-500 hover:border-primary/40 hover:glow-ember">
            {gymInfo.mapsEmbedUrl ? (
              <iframe
                title="موقع الروبي جيم على الخريطة"
                src={gymInfo.mapsEmbedUrl}
                loading="lazy"
                className="aspect-16/9 w-full border-0 grayscale-[0.4]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="relative grid aspect-16/9 place-items-center bg-[image:var(--gradient-night)] text-center">
                <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(oklch(0.62_0.2_38/0.18)_1px,transparent_1px),linear-gradient(90deg,oklch(0.62_0.2_38/0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
                <div className="relative px-6">
                  <MapPin className="mx-auto size-12 text-primary drop-shadow-[0_0_20px_oklch(0.62_0.2_38/0.7)]" />
                  <p className="mt-4 text-xl font-extrabold">الخريطة هتتفعل قريبًا</p>
                  <p className="mt-2 text-muted-foreground">
                    ضع رابط جوجل مابس في ملف البيانات لعرض الخريطة هنا.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-7 flex justify-center">
          <a
            href={gymInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-primary/60 bg-background/60 px-8 py-3.5 font-bold transition-all duration-300 hover:scale-105 hover:glow-ember"
          >
            <Navigation className="size-5 text-primary" />
            افتح الموقع على الخريطة
          </a>
        </Reveal>
      </div>
    </section>
  );
}
