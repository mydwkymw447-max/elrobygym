import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      {eyebrow ? (
        <span className="mb-3 inline-block text-sm font-semibold tracking-[0.25em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      <div className="ember-rule mx-auto mt-5" />
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
