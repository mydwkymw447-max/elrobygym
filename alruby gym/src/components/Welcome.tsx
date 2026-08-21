import { motion } from "motion/react";
import { welcomeMessage, gymInfo } from "@/data/gym";
import { SectionHeading } from "./Reveal";

const lines = welcomeMessage.split("\n").filter((l) => l.trim().length > 0);

export function Welcome() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading eyebrow="أهلاً بيك" title="عن الروبي جيم" subtitle={gymInfo.slogan} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="surface-glass relative rounded-3xl p-7 shadow-[var(--shadow-deep)] sm:p-12"
        >
          <div className="absolute inset-x-10 -top-px h-px bg-[image:var(--gradient-ember)] opacity-70" />
          <div className="space-y-5 text-center">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
                className={
                  i === 0
                    ? "font-display text-2xl font-extrabold text-ember sm:text-3xl"
                    : "text-lg leading-loose text-foreground/85 sm:text-xl"
                }
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
