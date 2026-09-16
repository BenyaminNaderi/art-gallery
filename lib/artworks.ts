export type Artwork = {
  id: number;
  slug: string;
  title: string;
  category: "PORTRAIT" | "FANTASY" | "ANIMALS" | "OBJECTS" | "DRAWINGS";
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
    slug: "blue-hair",
    title: "BLUE HAIR",
    category: "PORTRAIT",
    year: "2026",
    price: "۳۰۰٬۰۰۰",
    thumbnail: "/artworks/blue-hair.jpg",
    dimensions: "18 × 24 cm",
    technique: "اکریلیک و رنگ روغن روی بوم",
    material: "بوم پنبه‌ای",
    availability: "نسخه اصلی موجود",
    description:
      "چهره‌ای آبی‌مو با کنتراست عمیق؛ اثری احساسی و سینمایی که با ترکیب اکریلیک و رنگ روغن، حس سکوت و حضور را منتقل می‌کند.",
  },
  {
    id: 2,
    slug: "swimmer",
    title: "SWIMMER",
    category: "FANTASY",
    year: "2026",
    price: "۳۰۰٬۰۰۰",
    thumbnail: "/artworks/swimmer.jpg",
    dimensions: "20 × 30 cm",
    technique: "رنگ روغن روی بوم",
    material: "بوم پنبه‌ای",
    availability: "نسخه اصلی موجود",
    description:
      "شناگری تنها در عمق آبی؛ اثری بافت‌دار و برجسته که حس غرق شدن در رنگ و سکوت را به تصویر می‌کشد.",
  },
  {
    id: 3,
    slug: "meow-cat",
    title: "MEOW",
    category: "ANIMALS",
    year: "2026",
    price: "۳۰۰٬۰۰۰",
    thumbnail: "/artworks/meow.jpg",
    dimensions: "20 × 20 cm",
    technique: "رنگ روغن روی بوم",
    material: "بوم پنبه‌ای",
    availability: "فروخته شده",
    description:
      "گربه‌ای خواب‌آلود در پس‌زمینه‌ای صورتی و درخشان؛ اثری کوچک، شیرین و پر از حس کودکانه که با رنگ روغن کار شده است.",
  },
  {
    id: 4,
    slug: "kind-fairy",
    title: "KIND FAIRY",
    category: "FANTASY",
    year: "2026",
    price: "۴۰۰٬۰۰۰",
    thumbnail: "/artworks/kind-fairy.jpg",
    dimensions: "20 × 30 cm",
    technique: "رنگ روغن و اکریلیک روی بوم",
    material: "بوم پنبه‌ای",
    availability: "نسخه اصلی موجود",
    description:
      "پریه‌ای مهربان نشسته بر قارچ؛ اثری لطیف و فانتزی با ترکیب رنگ روغن و اکریلیک که حس رویا و سکوت جنگل را منتقل می‌کند.",
  },
  {
    id: 5,
    slug: "swanlake-angel",
    title: "SWANLAKE ANGEL",
    category: "FANTASY",
    year: "2026",
    price: "۸۰۰٬۰۰۰",
    thumbnail: "/artworks/swanlake-angel.jpg",
    dimensions: "40 × 60 cm",
    technique: "اکریلیک روی بوم",
    material: "بوم پنبه‌ای",
    availability: "نسخه اصلی موجود",
    description:
      "فرشته‌ای خاموش در دل تاریکی؛ خطوط نرم بال‌ها و سکوت سوژه، حس تنهایی و رهایی را هم‌زمان به تصویر می‌کشد.",
  },
  {
    id: 6,
    slug: "frankenstein",
    title: "FRANKENSTEIN",
    category: "PORTRAIT",
    year: "2026",
    price: "۶۰۰٬۰۰۰",
    thumbnail: "/artworks/frankenstein.jpg",
    dimensions: "30 × 40 cm",
    technique: "رنگ روغن روی بوم",
    material: "بوم پنبه‌ای",
    availability: "نسخه اصلی موجود",
    description:
      "مواجهه‌ای سوررئال بین دو چهره؛ یکی از خاص‌ترین آثار مجموعه که با نور گرم و جزئیات دقیق، حس رمزآلود و عمیق را منتقل می‌کند.",
  },
  {
    id: 7,
    slug: "little-kid",
    title: "LITTLE KID",
    category: "PORTRAIT",
    year: "2026",
    price: "۳۰۰٬۰۰۰",
    thumbnail: "/artworks/little-kid.jpg",
    dimensions: "20 × 30 cm",
    technique: "رنگ روغن روی بوم",
    material: "بوم پنبه‌ای",
    availability: "فروخته شده",
    description:
      "دختربچه‌ای با چشمان درشت و موهای طلایی؛ اثری شیرین و کودکانه که با سادگی خطوط و رنگ‌های زنده، حس معصومیت را به تصویر می‌کشد.",
  },
  {
    id: 8,
    slug: "kowak-kowak",
    title: "KOWAK KOWAK",
    category: "ANIMALS",
    year: "2026",
    price: "۳۰۰٬۰۰۰",
    thumbnail: "/artworks/duck.jpg",
    dimensions: "20 × 20 cm",
    technique: "اکریلیک روی بوم",
    material: "بوم پنبه‌ای",
    availability: "فروخته شده",
    description:
      "پرتره‌ای شاد و رنگی از یک اردک؛ اثری کوچک و فانتزی که حس سرزندگی و سادگی را با تکنیک اکریلیک منتقل می‌کند.",
  },

  {
    id: 9,
    slug: "bloody-curls",
    title: "BLOODY CURLS",
    category: "DRAWINGS",
    year: "2026",
    price: "۲۰۰٬۰۰۰",
    thumbnail: "/artworks/lady-bleeding.jpg",
    dimensions: "ابعاد متغیر",
    technique: "نقاشی دستی روی کاغذ",
    material: "کاغذ",
    availability: "نسخه اصلی موجود",
    description:
      "پرتره‌ای احساسی با موهای فرفری و جزئیات قرمز؛ اثری خام و تأثیرگذار که حس درد و زیبایی را هم‌زمان منتقل می‌کند.",
  },
  {
    id: 10,
    slug: "golden-hair",
    title: "GOLDEN HAIR",
    category: "DRAWINGS",
    year: "2026",
    price: "۲۰۰٬۰۰۰",
    thumbnail: "/artworks/golden-hair.jpg",
    dimensions: "ابعاد متغیر",
    technique: "نقاشی دستی روی کاغذ",
    material: "کاغذ",
    availability: "نسخه اصلی موجود",
    description:
      "چهره‌ای آرام با موهای طلایی در پس‌زمینه‌ای تیره؛ سادگی خطوط و کنتراست رنگ، حس لطافت را برجسته می‌کند.",
  },
  {
    id: 11,
    slug: "colorful-hair",
    title: "COLORFUL HAIR",
    category: "DRAWINGS",
    year: "2026",
    price: "۲۰۰٬۰۰۰",
    thumbnail: "/artworks/colorful-hair.jpg",
    dimensions: "ابعاد متغیر",
    technique: "نقاشی دستی روی کاغذ",
    material: "کاغذ",
    availability: "نسخه اصلی موجود",
    description:
      "پرتره‌ای با موهای رنگی و بیان خاص؛ ترکیبی از فرم کلاسیک و رنگ‌های جسورانه.",
  },

  {
    id: 12,
    slug: "abstract-face",
    title: "ABSTRACT FACE",
    category: "DRAWINGS",
    year: "2026",
    price: "۲۰۰٬۰۰۰",
    thumbnail: "/artworks/abstract-face.jpg",
    dimensions: "ابعاد متغیر",
    technique: "نقاشی دستی روی کاغذ",
    material: "کاغذ",
    availability: "نسخه اصلی موجود",
    description:
      "چهره‌ای آبستره و رنگی؛ ترکیبی آزاد از فرم و رنگ که بیشتر حس را منتقل می‌کند تا واقعیت.",
  },
  {
  id: 13,
  slug: "what-is-love",
  title: "WHAT IS LOVE",
  category: "PORTRAIT",
  year: "2024",
  price: "۴۰۰٬۰۰۰",
  thumbnail: "/artworks/what-is-love.jpg",
  dimensions: "35 × 45 cm",
  technique: "رنگ روغن روی بوم",
  material: "بوم پنبه‌ای",
  availability: "فروخته شده",
  description:
    "لحظه‌ای صمیمی بین دو نفر؛ اثری رمانتیک و گرم با پس‌زمینه‌ای صورتی که حس عشق و نزدیکی را با سادگی و لطافت به تصویر می‌کشد.",
},

{
  id: 14,
  slug: "art-piece-01",
  title: "ART PIECE 01",
  category: "OBJECTS",
  year: "2024",
  price: "۳۰۰٬۰۰۰",
  thumbnail: "/artworks/art-piece.jpg",
  dimensions: "20 × 20 cm / 20 × 30 cm",
  technique: "رنگ روغن روی بوم",
  material: "بوم پنبه‌ای",
  availability: "نسخه اصلی موجود",
  description:
    "دو نسخه از یک اثر مینیمال با گرادیان نرم؛ یکی سبز و یکی صورتی. هر کدام یکتا و فقط یک‌بار ساخته شده‌اند.",
},
{
  id: 15,
  slug: "sea-circle",
  title: "SEA CIRCLE",
  category: "OBJECTS",
  year: "2026",
  price: "۴۰۰٬۰۰۰",
  thumbnail: "/artworks/sea-circle.jpg",
  dimensions: "30 × 30 cm",
  technique: "رنگ روغن روی بوم",
  material: "بوم پنبه‌ای",
  availability: "نسخه اصلی موجود",
  description:
    "موج‌هایی آرام در قابی دایره‌ای؛ اثری مینیمال و شاعرانه از دریا که با رنگ روغن روی بوم اجرا شده است.",
},
{
  id: 20,
  slug: "tree-light",
  title: "TREE LIGHT",
  category: "FANTASY",
  year: "2026",
  price: "۶۰۰٬۰۰۰",
  thumbnail: "/artworks/tree-light.jpg",
  dimensions: "متوسط",
  technique: "رنگ روغن روی بوم",
  material: "بوم پنبه‌ای",
  availability: "نسخه اصلی موجود",
  description:
    "نوری گرم در دل درخت؛ اثری شاعرانه و فانتزی که حس پناه و راز را با گل‌های آبی و تاریکی جنگل ترکیب می‌کند.",
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
