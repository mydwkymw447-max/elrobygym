import { CalendarClock, Flame } from "lucide-react";
import { offers, gymInfo, type Offer } from "@/data/gym";
import { Reveal, SectionHeading } from "./Reveal";

function OfferCard({ offer }: { offer: Offer }) {
  const waLink = `https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(`عايز أعرف تفاصيل ${offer.title}`)}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:glow-ember">
      {offer.image ? (
        <div className="relative overflow-hidden">
          <img
            src={offer.image}
            alt={offer.title}
            loading="lazy"
            className="aspect-16/9 w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          {offer.discount ? (
            <span className="absolute end-4 top-4 rounded-full bg-[image:var(--gradient-ember)] px-4 py-1.5 text-sm font-extrabold text-primary-foreground shadow-[var(--glow-strong)]">
              خصم {offer.discount}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl">{offer.title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{offer.description}</p>

        {offer.newPrice ? (
          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl font-extrabold text-ember">{offer.newPrice}</span>
            {offer.oldPrice ? (
              <span className="pb-1 text-lg text-muted-foreground line-through">{offer.oldPrice}</span>
            ) : null}
          </div>
        ) : null}

        {offer.validity ? (
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarClock className="size-4 text-primary" />
            {offer.validity}
          </p>
        ) : null}

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center rounded-full border border-primary/60 bg-background/60 px-6 py-3 font-bold text-foreground transition-all duration-300 hover:scale-[1.03] hover:glow-ember"
        >
          {offer.ctaLabel ?? "اشترك دلوقتي"}
        </a>
      </div>
    </article>
  );
}

export function Offers() {
  return (
    <section id="offers" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 end-0 -z-10 size-[28rem] rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="وفر أكتر"
          title="العروض 🔥"
          subtitle="اشترك في التوقيت الصح واستفيد بأقوى الأسعار."
        />

        {offers.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <Reveal key={offer.id} delay={i * 0.1}>
                <OfferCard offer={offer} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="surface-glass mx-auto flex max-w-2xl flex-col items-center rounded-3xl px-8 py-16 text-center">
              <Flame className="size-10 text-primary drop-shadow-[0_0_18px_oklch(0.62_0.2_38/0.7)]" />
              <p className="mt-5 text-2xl font-extrabold">استنوا أقوى العروض قريبًا 🔥</p>
              <p className="mt-3 text-muted-foreground">
                تابعنا عشان متفوتكش أي عرض من عروض الروبي جيم.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
