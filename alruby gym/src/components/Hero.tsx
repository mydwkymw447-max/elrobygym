import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import { gymInfo } from "@/data/gym";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <div
        className="absolute inset-0 -z-20 will-change-transform"
        style={{ transform: `translate3d(0, ${offset * 0.28}px, 0) scale(1.12)` }}
      >
        <img
          src={heroImage}
          alt="داخل الروبي جيم بإضاءة سينمائية"
          width={1920}
          height={1088}
          className="size-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_20%,transparent,oklch(0.12_0_0/0.85)_60%,oklch(0.1_0_0)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-background/55" />

      <div className="mx-auto w-full max-w-5xl px-5 py-28 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block rounded-full border border-primary/40 bg-background/50 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-primary backdrop-blur-sm sm:text-sm"
        >
          {gymInfo.slogan}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 text-5xl leading-[1.15] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-ember drop-shadow-[0_0_40px_oklch(0.62_0.2_38/0.45)]">الروبي</span>{" "}
          جيم
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 sm:text-2xl"
        >
          {gymInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#offers"
            className="group relative inline-flex items-center gap-3 rounded-full border border-primary/60 bg-background/70 px-10 py-4 text-lg font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:glow-ember focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            ابدأ رحلتك
            <span className="size-2 rounded-full bg-primary shadow-[0_0_14px_var(--primary)] transition-transform duration-300 group-hover:scale-150" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="انزل لأسفل"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2.4 } }}
        className="absolute inset-x-0 bottom-8 mx-auto grid size-11 place-items-center rounded-full border border-primary/40 text-primary"
      >
        <ChevronDown className="size-5" />
      </motion.a>
    </section>
  );
}
