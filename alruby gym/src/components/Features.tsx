import { Dumbbell, Flame, HandHeart, TrendingUp } from "lucide-react";
import { features, type Feature } from "@/data/gym";
import { Reveal, SectionHeading } from "./Reveal";

const iconMap: Record<Feature["icon"], typeof Dumbbell> = {
  dumbbell: Dumbbell,
  flame: Flame,
  handshake: HandHeart,
  trending: TrendingUp,
};

export function Features() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="ليه الروبي جيم"
          title="مميزات تخليك تكمل"
          subtitle="كل حاجة هنا متظبطة عشان توصل لهدفك من غير ما تفقد حماسك."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.title} delay={i * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:glow-ember">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(80%_60%_at_50%_0%,oklch(0.62_0.2_38/0.18),transparent)]" />
                  <div className="relative mb-5 grid size-14 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="relative text-xl">{feature.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
