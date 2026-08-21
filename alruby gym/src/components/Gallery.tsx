import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/gym";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft") setIndex((i) => ((i ?? 0) + 1) % galleryImages.length);
      if (e.key === "ArrowRight")
        setIndex((i) => ((i ?? 0) - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="gallery" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 size-[30rem] rounded-full bg-primary/8 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="من جوه"
          title="جيم الروبي من جوه"
          subtitle="خد جولة سريعة جوه المكان اللي هتبني فيه النسخة الأقوى منك."
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src + i} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`تكبير الصورة: ${image.alt}`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:border-primary/60 hover:glow-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110",
                    image.tall ? "aspect-3/4" : "aspect-4/3",
                  )}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute inset-x-0 bottom-0 p-5 text-start text-sm font-semibold text-foreground/0 transition-all duration-500 group-hover:text-foreground">
                  {image.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-background/95 p-4 backdrop-blur-xl"
            onClick={() => setIndex(null)}
          >
            <motion.img
              key={index}
              src={galleryImages[index ?? 0]?.src}
              alt={galleryImages[index ?? 0]?.alt ?? ""}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85svh] w-auto max-w-full rounded-2xl border border-primary/30 object-contain shadow-[var(--glow-strong)]"
            />

            <button
              type="button"
              aria-label="إغلاق"
              onClick={() => setIndex(null)}
              className="absolute end-5 top-5 grid size-11 place-items-center rounded-full border border-primary/40 text-foreground transition-colors hover:bg-primary/15"
            >
              <X className="size-5" />
            </button>

            <button
              type="button"
              aria-label="الصورة السابقة"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => ((i ?? 0) + 1) % galleryImages.length);
              }}
              className="absolute start-3 grid size-11 place-items-center rounded-full border border-primary/40 text-foreground transition-colors hover:bg-primary/15 sm:start-8"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="الصورة التالية"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => ((i ?? 0) - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute end-3 top-1/2 grid size-11 place-items-center rounded-full border border-primary/40 text-foreground transition-colors hover:bg-primary/15 sm:end-8"
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
