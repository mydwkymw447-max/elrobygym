import { Phone, MessageCircle, Facebook, Instagram, MapPin, Clock } from "lucide-react";
import { gymInfo } from "@/data/gym";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const items = [
    {
      icon: Phone,
      label: "رقم الهاتف",
      value: gymInfo.phone,
      href: `tel:${gymInfo.phone}`,
    },
    {
      icon: Facebook,
      label: "فيسبوك",
      value: "الروبي جيم على فيسبوك",
      href: gymInfo.facebook,
    },
    {
      icon: Instagram,
      label: "انستجرام",
      value: "الروبي جيم على انستجرام",
      href: gymInfo.instagram,
    },
    {
      icon: MapPin,
      label: "العنوان",
      value: gymInfo.address,
      href: gymInfo.mapsUrl,
    },
    {
      icon: Clock,
      label: "مواعيد العمل",
      value: gymInfo.workingHours,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="قرب مننا"
          title="تواصل مع الروبي جيم"
          subtitle="كلمنا في أي وقت، فريقنا جاهز يرد على كل أسئلتك."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {items.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                      <Icon className="size-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted-foreground">{item.label}</span>
                      <span className="block truncate font-semibold">{item.value}</span>
                    </span>
                  </>
                );
                const classes =
                  "group flex h-full items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:glow-ember";
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={classes}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className={classes}>
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="surface-glass flex h-full flex-col items-center justify-center rounded-3xl p-9 text-center">
              <MessageCircle className="size-12 text-primary drop-shadow-[0_0_20px_oklch(0.62_0.2_38/0.7)]" />
              <h3 className="mt-5 text-2xl">كلمنا على واتساب</h3>
              <p className="mt-3 text-muted-foreground">
                احجز مكانك أو اسأل عن الاشتراكات والعروض في ثواني.
              </p>
              <a
                href={`https://wa.me/${gymInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[image:var(--gradient-ember)] px-9 py-4 text-lg font-extrabold text-primary-foreground shadow-[var(--glow-strong)] transition-transform duration-300 hover:scale-105"
              >
                <MessageCircle className="size-5" />
                تواصل على واتساب
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
