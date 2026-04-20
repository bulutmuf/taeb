export interface Event {
  id: string;
  date: string;
  month: string;
  year: string;
  day: string;
  titleKey: string;
  titleEn: string;
  titleTr: string;
  descriptionEn: string;
  descriptionTr: string;
  type: string;
  time: string;
  location: string;
  image?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "visa-info-day",
    date: "2026-05-03",
    month: "MAY",
    year: "2026",
    day: "03",
    titleKey: "visaInfoDay",
    titleEn: "Visa & Job Opportunities Information Day",
    titleTr: "Vize ve İş Fırsatları Bilgi Günü",
    descriptionEn: "Information session on H-1B, J-1 and other visa types and career opportunities in the USA.",
    descriptionTr: "H-1B, J-1 ve diğer vize türleri ile ABD'de kariyer fırsatları üzerine bilgilendirme.",
    type: "Webinar",
    time: "18:00 EST",
    location: "Online",
  },
  {
    id: "student-meeting",
    date: "2026-05-17",
    month: "MAY",
    year: "2026",
    day: "17",
    titleKey: "studentMeeting",
    titleEn: "Turkey General Student Meeting",
    titleTr: "Türkiye Genel Öğrenci Buluşması",
    descriptionEn: "A nationwide gathering for all pharmacy students across Turkey.",
    descriptionTr: "Türkiye genelinde tüm eczacılık öğrencileri için buluşma.",
    type: "Hybrid",
    time: "14:00 EST",
    location: "Hybrid",
  },
  {
    id: "naplex-seminar",
    date: "2026-06-08",
    month: "JUN",
    year: "2026",
    day: "08",
    titleKey: "naplexSeminar",
    titleEn: "NAPLEX Preparation Seminar",
    titleTr: "NAPLEX Hazırlık Semineri",
    descriptionEn: "Expert-led workshop covering NAPLEX exam strategies and preparation tips.",
    descriptionTr: "NAPLEX sınav stratejileri ve hazırlık ipuçları üzerine uzman atölyesi.",
    type: "Webinar",
    time: "20:00 EST",
    location: "Online",
  },
];

export const pastEvents: Event[] = [
  {
    id: "president-taeb",
    date: "2026-01",
    month: "JAN",
    year: "2026",
    day: "",
    titleKey: "presidentTaeb",
    titleEn: "PRESIDENT OF THE TURKISH REPUBLIC & TAEB",
    titleTr: "PRESIDENT OF THE TURKISH REPUBLIC & TAEB",
    descriptionEn: "Vision meeting and strategic cooperation talks held under the auspices of the Presidency.",
    descriptionTr: "Cumhurbaşkanlığı himayesinde gerçekleştirilen vizyon toplantısı ve stratejik iş birliği görüşmeleri.",
    type: "Summit",
    time: "",
    location: "Ankara",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhB7NCqnKlUnwc1smV3s4aTmFkW2LyW_Jz-kw-IIGu3ofEKzlnMoypc7K5ftuu_uWmkv9-luFmb1KZNxd81WoF2B7JoVUh_CayCPO5NXhoIcuvW1YbVX5HIwjrtJRyPTT-P6Zq2CKyf6n0U4AhRroLIY11ZgAYJb2-otMEIwoQh_Y6-EK7k108SfI6LTXGQz3uCHOquRIBti9m5QUbdmFUu4UYUao1M9sKPK1CBTyk9CaETHkigumDBYfBObWZcszflfzKmBfYPRM",
  },
  {
    id: "flying-pharmacists-event",
    date: "2026-03",
    month: "MAR",
    year: "2026",
    day: "",
    titleKey: "flyingPharmacistsEvent",
    titleEn: "FLYING PHARMACISTS",
    titleTr: "FLYING PHARMACISTS",
    descriptionEn: "Innovation summit where the discipline of pharmacy meets aviation and space sciences.",
    descriptionTr: "Eczacılık disiplininin havacılık ve uzay bilimleri ile buluştuğu inovasyon zirvesi.",
    type: "Summit",
    time: "",
    location: "Istanbul",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8UjoxTvRoftVq33kobTAiakmc0buf9fJqB9FDAODdQ-5vcnYphht-FdDWvx1cvJO0IAwt3x9zDs42YXOFQ7CBsiS7UdNOR_kc376L3paQUg2aEldaGr8iMl5CYz3xvqfIJmR-OHah4XAGBfAS3HxPLd8P1SJZ1H1tliE2GyzSn7yq6BTFfjY6xFQkyIO3MeHgVmwd-oAyoBBwraL4_pTPBJcbmbas4WQR9qD3zqrE4NEKUB24RxLFcdN_qmirVpYHebVgrggL-AU",
  },
  {
    id: "american-dream-event",
    date: "2026-05",
    month: "MAY",
    year: "2026",
    day: "",
    titleKey: "americanDreamEvent",
    titleEn: "AMERICAN DREAM WITH TAEB",
    titleTr: "AMERICAN DREAM WITH TAEB",
    descriptionEn: "International webinar series on career and academic development opportunities in the USA.",
    descriptionTr: "ABD'de kariyer ve akademik gelişim fırsatlarını ele alan uluslararası webinar serisi.",
    type: "Webinar",
    time: "",
    location: "USA / Online",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN_Cb0x_UlbiE38rKSztRDICV8YjYoKkqV07wWsUBQm5pwJgv40buUH6hxZIMyYC4p38vhTvSA8n0ORzKVMJj3w5PbTolGmcp6soR1qRgXS26fLPA5mOfbBy87QOeR__Lb7hLe17BcWwdyY5qDa-Xr77NtcqbiK197YWhgAFHqaZsYPRxooqJ7f6PCG5V9fjzkm4AcYVV4bjS9gimUV78pUMKkKgxcu4DTOAZZZUwyJG2qsRJQYy6XgVYtAFb_VtxBl3YqxWxFY-U",
  },
  {
    id: "nyc-spirit-event",
    date: "2026-06",
    month: "JUN",
    year: "2026",
    day: "",
    titleKey: "nycSpiritEvent",
    titleEn: "NYC SPIRIT",
    titleTr: "NYC SPIRIT",
    descriptionEn: "Professional networking and cultural interaction program held in the dynamic structure of New York.",
    descriptionTr: "New York'un dinamik yapısında gerçekleştirilen mesleki ağ kurma ve kültürel etkileşim programı.",
    type: "Networking",
    time: "",
    location: "New York",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYBi3R5bRJsUiipQXxnSAhXucp9A9duqojioS6no5ilotD5gsCDELY25q8fw-TaGh8lcxAX1tgrFVnFbgKDxMWZhzb-74r4GqX_2-5nRSGZXeCzlGRPsLUwkLHiZaxPbn_eZ3cJ-WVjs4R-Hch0KndJgpAwy3G8E5VuFcwZ1NTmeRsOw964IFML2TZklCFpeMdGMuXbcUkHrzzun0B_UvskB74xG-iJDNlb4pl4A-a-w8OocAekgtrBNxJwlKnemKI9eDug3stBVQ",
  },
];

export const featuredEvent = {
  date: "2026-02-23",
  day: "23",
  month: "FEB",
  monthTr: "SUBAT",
  titleEn: "TAEB Student Representative Elections",
  titleTr: "TAEB Ogrenci Temsilci Secimleri",
  descriptionEn: "We are choosing the leaders of the future. We come together to determine our representatives who will take part in the TAEB student council.",
  descriptionTr: "Gelecegin liderlerini seciyoruz. TAEB'in ogrenci konseyinde yer alacak temsilcilerimizi belirlemek uzere bir araya geliyoruz.",
  location: "Ankara, Turkey / Hybrid",
  time: "10:00 - 17:00 (GMT+3)",
};
