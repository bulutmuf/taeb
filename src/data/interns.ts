export interface Intern {
  name: string;
  university?: string;
  year?: string;
  scholarship?: string;
  image: string;
}

export const upcomingInterns: Intern[] = [
  { name: "Almila Tulu", university: "Trakya University", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Aybuke Ergin", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Ilayda Camlitepe", university: "Trakya University", scholarship: "$10,000 Master's Scholarship + Internship", image: "" },
  { name: "Ozlem Cay", university: "Ataturk University, 5th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Taha Ozturk", university: "Erzincan University, 3rd year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Mustafa Emre Erguler", university: "Marmara University, 2nd year", scholarship: "$5,000 Master's Scholarship + Internship", image: "" },
  { name: "Melike Sena Kolip", university: "Ataturk University, 5th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Yagmur Selin Aslan", university: "Ankara Medipol University, 5th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Iremnaz Soylemez", university: "Gazi University, 2nd year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Rozerin Gunduz", university: "Istanbul Saglik ve Teknoloji University", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Zeynep Mutlu", university: "Biruni University", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Humeyra Koroglu", university: "Istinye University", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Beyza Eksim", university: "Istanbul Medipol University, 4th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Elif Osmanoglu", university: "Istanbul Saglik ve Teknoloji University, 2nd year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Yusuf Tuna Erkan", university: "International Kibris University", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Irem Naz Baspinar", university: "Cumhuriyet University, 4th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Ezgi Ece Gokmen", university: "Ankara University", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Zeynep Eda Karik", university: "Biruni University, 4th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Berfin Aladag", university: "Ataturk University, 4th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Nil Zeynel", university: "Saglik Bilimleri University, 4th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Ayse Sude Can", university: "Ataturk University, 5th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Silan Yilan", university: "Ataturk University, 4th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Sila Rengin Safak", university: "Acibadem University, 5th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Selim Enes Gezer", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Ruya Gunes", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Zeynep Ebrar Yolcu", university: "Istanbul University", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Kerem Unsal", university: "Trakya University, 5th year", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Utku Payas", scholarship: "1-month fully funded internship 2026", image: "" },
  { name: "Sumeyye Basar", scholarship: "Paid Intern", image: "" },
];

export interface Testimonial {
  quote: string;
  name: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "TAEB is the kind of community you wish you had earlier. From mentorship to real guidance, TAEB makes ambitious goals feel less intimidating and a lot more possible.",
    name: "Ecz. Ulku Irem Keskin",
    image: "",
  },
  {
    quote: "The experience equipped me with strong pharmacy business foundations that continue to influence my approach as a pharmacy owner.",
    name: "Ecz. Cagla Mengulluoglu",
    image: "",
  },
  {
    quote: "Through the TAEB's guidance, mentorship, and a genuinely supportive community, TAEB makes big goals feel achievable and you never feel like you're figuring it out alone.",
    name: "Ecz. Arif Cinkaya",
    image: "",
  },
  {
    quote: "During this internship, I strengthened my understanding of pharmacy business processes.",
    name: "Ecz. Mertcan Okatan",
    image: "",
  },
];

export const pastInterns: Intern[] = [
  { name: "Cagla Mengulluoglu", year: "2019", image: "" },
  { name: "Arif Cinkaya", year: "2019", image: "" },
  { name: "Dilara Ayan", year: "2019", image: "" },
  { name: "Yesim Busra Izol", year: "2019", image: "" },
  { name: "Zeynep Ozturk Yalcin", year: "2019", image: "" },
  { name: "Meliha Duman", year: "2019", image: "" },
  { name: "Bilge Salar Tas", year: "2019", image: "" },
  { name: "Merve A.", year: "2019", image: "" },
  { name: "Zeynep Tacir", year: "2019", image: "" },
  { name: "Ozlem C.", year: "2019", image: "" },
  { name: "Ece Gizem Ikiz", year: "2019", image: "" },
  { name: "Gulsum Ozbek", year: "2019", image: "" },
  { name: "Irem Keskin", year: "2019", image: "" },
  { name: "Ali Akkaya", year: "2019", image: "" },
  { name: "Seyma Ozturk", year: "2019", image: "" },
  { name: "Ayca Acar", year: "2019", image: "" },
  { name: "Hediye Kose", year: "2019", image: "" },
  { name: "Furkan Alagoz", year: "2019", image: "" },
  { name: "Fjolla Ahmeti", year: "2019", image: "" },
  { name: "Mert Okatan", year: "2019", image: "" },
];
