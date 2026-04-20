export interface BoardMember {
  name: string;
  roleEn: string;
  roleTr: string;
  image: string;
}

export const boardOfDirectors: BoardMember[] = [
  { name: "Mehmed Bulend Ugur", roleEn: "Founder-President", roleTr: "Kurucu Baskan", image: "" },
  { name: "Zehra Kilic", roleEn: "Vice President", roleTr: "Baskan Yardimcisi", image: "" },
  { name: "Ulku Irem Keskin", roleEn: "Secretary General", roleTr: "Genel Sekreter", image: "" },
  { name: "Mert Okatan", roleEn: "Treasurer", roleTr: "Sayman", image: "" },
  { name: "Bulent Gumusel", roleEn: "Director of Education", roleTr: "Egitim Koordinatoru", image: "" },
  { name: "Isa Bodur", roleEn: "Director of Licensing", roleTr: "ABD Denklik Koordinatoru", image: "" },
  { name: "Mustafa Abacioglu", roleEn: "Director of Member Relations", roleTr: "Uye Iliskileri Direktoru", image: "" },
  { name: "Bora Uyar", roleEn: "Director of Student Affairs - Turkey", roleTr: "Ogrenci Iliskileri Direktoru - Turkiye", image: "" },
  { name: "Mina Ugur", roleEn: "Director of Student Affairs - USA", roleTr: "Ogrenci Iliskileri Direktoru - ABD", image: "" },
  { name: "Saban Kar", roleEn: "Director of Business - Corporate", roleTr: "Kurumsal Isler Direktoru", image: "" },
  { name: "Soltan Cangoz", roleEn: "Director of Business - Pharmacy", roleTr: "Eczane Isleri Direktoru", image: "" },
  { name: "Seyma Ozturk", roleEn: "Director of TAEB Turkey", roleTr: "TAEB Turkiye Direktoru", image: "" },
  { name: "Omer Sarisin", roleEn: "Director of TAEB Turkey", roleTr: "TAEB Turkiye Direktoru", image: "" },
];

export const advisoryBoard: BoardMember[] = [
  { name: "Senay Alptekin, RPh", roleEn: "Advisory Board", roleTr: "Danisma Kurulu", image: "" },
  { name: "Esin Kadiev, RPh", roleEn: "Advisory Board", roleTr: "Danisma Kurulu", image: "" },
  { name: "Serkan Ozturk, RPh", roleEn: "Advisory Board", roleTr: "Danisma Kurulu", image: "" },
  { name: "Zeynep Sahin, Pharm", roleEn: "Advisory Board", roleTr: "Danisma Kurulu", image: "" },
  { name: "Betul Bahar, PharmD", roleEn: "Advisory Board", roleTr: "Danisma Kurulu", image: "" },
];

export interface Representative {
  name: string;
  university: string;
}

export const representatives: Representative[] = [
  { name: "Ebrar Dogan", university: "19 Mayis" },
  { name: "Deniz Basar Tuncel", university: "Acibadem" },
  { name: "Aysegul Kevser Kucuk", university: "Afyonkarahisar Saglik Bilimleri" },
  { name: "Mustafa Melih Ozhan", university: "Agri Ibrahim Cecen" },
  { name: "Zeynep Ilhan", university: "Altinbas" },
  { name: "Sudegul Kanbay", university: "Altinbas" },
  { name: "Ayse Gokcen Isyapan", university: "Ankara" },
  { name: "Beyzanur Aslandogan", university: "Ankara (English)" },
  { name: "Bilgenur Kanberi", university: "Ataturk" },
  { name: "Silan Yilan", university: "Ataturk" },
  { name: "Sila Ezgi Yanal", university: "Bahcesehir" },
  { name: "Seyda Demiralp", university: "Baskent" },
  { name: "Azra Atayoglu", university: "Bezmialem Vakif" },
  { name: "Veciha Nil Karayilmaz", university: "Biruni" },
  { name: "Nehir Ozben", university: "Cukurova" },
  { name: "Nazli Ece Kucuk", university: "Cumhuriyet" },
  { name: "Kubra Gonul", university: "Dicle" },
  { name: "Duhanur Bocek", university: "Duzce" },
  { name: "Emirhan Murat Karahan", university: "Erzincan Binali Yildirim" },
  { name: "Zulkuf Cengiz", university: "Firat" },
  { name: "Iremnaz Soylemez", university: "Gazi" },
  { name: "Mahinur Mislina Yagli", university: "Girne Amerikan" },
  { name: "Zeynep Bulut", university: "Saglik Bilimleri (Gulhane)" },
  { name: "Hannah Tellioglu", university: "Saglik Bilimleri (Hamidiye)" },
  { name: "Zeynep Sude Yazici", university: "Hacettepe" },
  { name: "Yagmur Erinkurt", university: "Istanbul" },
  { name: "Dilanur Yilmaz", university: "Istanbul (English)" },
  { name: "Beyza Demirtas", university: "Medipol" },
  { name: "Gulsen Ebrar Capar", university: "Istanbul Saglik ve Teknoloji" },
  { name: "Beyza Keskin", university: "Istinye" },
  { name: "Sema Doksoz", university: "Izmir Katip Celebi" },
  { name: "Ayse Dertli", university: "Karadeniz Teknik" },
  { name: "Busenur Parmak", university: "Kocaeli Saglik" },
  { name: "Aydan Gungor", university: "Lokman Hekim" },
  { name: "Azra Cetinkaya", university: "Marmara" },
  { name: "Hasibe Azra Soganci", university: "Medipol (English)" },
  { name: "Nilsu Emare", university: "Mersin" },
  { name: "Seyma Rana Karakas", university: "Suleyman Demirel" },
  { name: "Metehan Sanar", university: "Tokat Gaziosmanpasa" },
  { name: "Yagmur Keleser", university: "Trakya" },
  { name: "Firat Bereket", university: "Uluslararasi Kibris" },
  { name: "Gulce Naz Gurel", university: "Yeditepe" },
  { name: "Eylul Bolukbasi", university: "Yeni Yuzyil" },
  { name: "Beyza Medine Gokdemir", university: "Zonguldak Bulent Ecevit" },
  { name: "Ismet Emre Yalcin", university: "Zonguldak Bulent Ecevit" },
  { name: "Gulin Gultekin", university: "Anadolu" },
  { name: "Esmanur Giray", university: "Inonu" },
  { name: "Gulnihal Toprak", university: "Erciyes" },
];
