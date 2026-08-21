import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "الرئيسية", href: "#hero" },
  { label: "عن الروبي جيم", href: "#about" },
  { label: "صور الجيم", href: "#gallery" },
  { label: "العروض", href: "#offers" },
  { label: "تواصل معنا", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "surface-glass shadow-[0_10px_40px_-20px_black]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            <span className="text-ember">الروبي</span> جيم
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#offers"
            className="mr-3 rounded-full border border-primary/50 bg-background/60 px-5 py-2 text-sm font-bold text-foreground transition-all duration-300 hover:scale-105 hover:glow-ember"
          >
            ابدأ رحلتك
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-xl border border-primary/30 text-foreground transition-colors hover:bg-primary/10 md:hidden"
        >
          <motion.span
            key={open ? "x" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </motion.span>
        </button>
      </div>

      <motion.div
        className="h-px origin-right"
        style={{ backgroundImage: "var(--gradient-ember)" }}
        initial={false}
        animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="surface-glass overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground/90 transition-colors hover:bg-primary/10 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
