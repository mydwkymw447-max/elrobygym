import { gymInfo } from "@/data/gym";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 text-center sm:px-6">
        <span className="text-xl font-extrabold">
          <span className="text-ember">الروبي</span> جيم
        </span>
        <p className="text-sm text-muted-foreground">{gymInfo.slogan}</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} الروبي جيم — كل الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
