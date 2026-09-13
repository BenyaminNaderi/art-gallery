export type Artwork = {
  id: number;
  slug: string;
  title: string;
  category: "PORTRAIT" | "ARCHITECTURE" | "OBJECTS" | "AUTOMOTIVE";
  year: string;
  price: string;
  thumbnail: string;
  dimensions: string;
  technique: string;
  material: string;
  availability: string;
  description: string;
};

export const TELEGRAM_USERNAME = "Swanagirl";
export const CHANNEL_URL = "https://t.me/lunaswanw";

export const artworks: Artwork[] = [
  {
    id: 1,
    slug: "fashion-study-01",
    title: "FASHION STUDY 01",
    category: "PORTRAIT",
    year: "2024",
    price: "۳۰۰٬۰۰۰",
    thumbnail: "/obj1.jpg",
    dimensions: "50 × 70 cm",
    technique: "رنگ روغن روی بوم",
    material: "بوم پنبه‌ای / قاب چوبی",
    availability: "نسخه اصلی موجود",
    description:
      "مطالعه‌ای آرام درباره‌ی فرم، نور و حضور انسانی؛ اثری با کنتراست عمیق و حال‌وهوای سینمایی.",
  },
  {
    id: 2,
    slug: "concrete-light",
    title: "CONCRETE LIGHT",
    category: "ARCHITECTURE",
    year: "2024",
    price: "۳۰۰٬۰۰۰",
    thumbnail: "/obj22.jpg",
    dimensions: "60 × 80 cm",
    technique: "رنگ روغن روی بوم",
    material: "بوم لینن / قاب مشکی",
    availability: "نسخه اصلی موجود",
    description:
      "روایت نوری سخت و هندسی از معماری مدرن؛ جایی که سایه‌ها، ساختمان را به یک حجم شاعرانه تبدیل می‌کنند.",
  },
  {
    id: 3,
    slug: "object-03",
    title: "OBJECT / 03",
    category: "OBJECTS",
    year: "2024",
    price: "۳۵۰٬۰۰۰",
    thumbnail: "/obj3.jpg",
    dimensions: "40 × 60 cm",
    technique: "رنگ روغن و پاستل",
    material: "بوم پنبه‌ای",
    availability: "نسخه اصلی موجود",
    description:
      "ترکیبی مینیمال از حجم، بافت و سکوت؛ یک طبیعت بی‌جان معاصر برای فضاهای خلوت و دقیق.",
  },
  {
    id: 4,
    slug: "red-study",
    title: "RED STUDY",
    category: "PORTRAIT",
    year: "2024",
    price: "۳۰۰٬۰۰۰",
    thumbnail: "/obj4.jpg",
    dimensions: "50 × 50 cm",
    technique: "رنگ روغن روی بوم",
    material: "بوم لینن",
    availability: "نسخه اصلی موجود",
    description:
      "مطالعه‌ای فشرده از رنگ و میل؛ سرخِ خالص در برابر زمینه‌ای خاموش و گرافیکی.",
  },
  {
    id: 5,
    slug: "motion-05",
    title: "MOTION / 05",
    category: "AUTOMOTIVE",
    year: "2024",
    price: "۴۰۰٬۰۰۰",
    thumbnail: "/obj5.jpg",
    dimensions: "70 × 50 cm",
    technique: "رنگ روغن روی بوم",
    material: "بوم پنبه‌ای / قاب چوبی",
    availability: "نسخه اصلی موجود",
    description:
      "حرکت منجمدشده در یک قاب؛ مطالعه‌ای درباره‌ی سرعت، انعکاس و بدن فلزی یک شیء لوکس.",
  },
];

export function getArtwork(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getOrderUrl(artwork: Artwork) {
  return `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(
    `سلام، برای خرید اثر «${artwork.title}» با قیمت ${artwork.price} تومان پیام می‌دهم.`,
  )}`;
}