/**
 * ملف بيانات الروبي جيم
 * عدّل من هنا: الصور، العروض، المميزات، بيانات التواصل.
 */
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const gymInfo = {
  name: "الروبي جيم",
  tagline: "ابدأ رحلتك... وابني النسخة الأقوى منك 💪",
  slogan: "الروبي جيم مش مجرد جيم... دي عيلة.",
  phone: "01223304145",
  whatsapp: "201223304145", // رقم الواتساب بصيغة دولية بدون +
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  address: "العنوان هيتحدد قريبًا — اكتب عنوان الجيم هنا",
  mapsUrl: "https://maps.google.com/",
  mapsEmbedUrl: "", // ضع هنا رابط الـ embed من جوجل مابس لتفعيل الخريطة
  workingHours: " من 10 صباحًا الى 2 مساءا",
} as const;

export const welcomeMessage = `السلام عليكم يافندم

اهلا بيك فى عيلة الروبى جيم 🧑‍🧑‍🧒‍🧒

نحب أولا نشكرك على ثقتك فى الروبى جيم 🫡

كمان نحب نعبر عن سعادتنا بتشريفك لينا بانضمامك لأسرة الروبى جيم 🤍

وكإدارة وفريق عمل طموحين و شغوفين اننا نقدملك كل الدعم والخدمات اللى تساعدك توصل لهدفك 👌

يللا بينا يا بطل ننجح مع بعض 💪`;

export type Feature = {
  icon: "dumbbell" | "flame" | "handshake" | "trending";
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "dumbbell",
    title: "أجهزة ومعدات قوية",
    description: "أحدث المعدات لمساعدتك على تحقيق أفضل أداء.",
  },
  {
    icon: "flame",
    title: "بيئة محفزة",
    description: "مكان يخليك متحمس تكمل وتطور من نفسك.",
  },
  {
    icon: "handshake",
    title: "دعم مستمر",
    description: "فريق يساعدك ويوجهك لتحقيق أهدافك.",
  },
  {
    icon: "trending",
    title: "رحلة تطور حقيقية",
    description: "كل تمرينة خطوة أقرب للنسخة الأقوى منك.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  /** tall = صورة طولية في الشبكة */
  tall?: boolean;
};

/** أضف صور الجيم هنا — ضع الصور في src/assets واستوردها بالأعلى */
export const galleryImages: GalleryImage[] = [
  { src: gallery3, alt: "تمرين رفع أثقال في الروبي جيم", tall: true },
  { src: gallery2, alt: "منطقة الكارديو في الروبي جيم" },
  { src: gallery4, alt: "منطقة الأوزان الحرة في الروبي جيم" },
  { src: gallery1, alt: "أوزان وأقراص حديد في الروبي جيم", tall: true },
  { src: gallery5, alt: "ركن الملاكمة في الروبي جيم", tall: true },
  { src: gallery6, alt: "أجهزة كابل حديثة في الروبي جيم" },
];

export type Offer = {
  id: string;
  title: string;
  description: string;
  oldPrice?: string;
  newPrice?: string;
  discount?: string;
  image?: string;
  validity?: string;
  ctaLabel?: string;
};

/** أضف أو احذف العروض من هنا — لو الليستة فاضية هيظهر مكانها رسالة أنيقة */
export const offers: Offer[] = [
  {
    id: "summer",
    title: "عرض الصيف 🔥",
    description: "اشترك انت واتنين من صحابك وهتاخد 50% على اشتراكك.",
    discount: "50%",
    image: gallery4,
    validity: "ساري حتى نهاية الشهر",
    ctaLabel: "اشترك دلوقتي",
  },
];
