export interface BoardMember {
  name: string;
  roleEn: string;
  roleTr: string;
  image?: string;
  /** LinkedIn handle — the part after linkedin.com/in/ (e.g. "mehmed-bulend-ugur") */
  linkedin?: string;
}

export const boardOfDirectors: BoardMember[] = [
  { name: "Mehmed Bülend Uğur", roleEn: "Founder-President", roleTr: "Kurucu Başkan", linkedin: "" },
  { name: "Zehra Kılıç", roleEn: "Vice President", roleTr: "Başkan Yardımcısı", linkedin: "" },
  { name: "Ülkü İrem Keskin", roleEn: "Secretary General", roleTr: "Genel Sekreter", linkedin: "" },
  { name: "Mert Okatan", roleEn: "Treasurer", roleTr: "Sayman", linkedin: "" },
  { name: "Bülent Gümüşel", roleEn: "Director of Education", roleTr: "Eğitim Koordinatörü", linkedin: "" },
  { name: "İsa Bodur", roleEn: "Director of Licensing", roleTr: "ABD Denklik Koordinatörü", linkedin: "" },
  { name: "Mustafa Abacıoğlu", roleEn: "Director of Member Relations", roleTr: "Üye İlişkileri Direktörü", linkedin: "" },
  { name: "Bora Uyar", roleEn: "Director of Student Affairs - Turkey", roleTr: "Öğrenci İlişkileri Direktörü - Türkiye", linkedin: "" },
  { name: "Sude Mina Uğur", roleEn: "Director of Student Affairs - USA", roleTr: "Öğrenci İlişkileri Direktörü - ABD", linkedin: "" },
  { name: "Şaban Kar", roleEn: "Director of Business - Corporate", roleTr: "Kurumsal İşler Direktörü", linkedin: "" },
  { name: "Soltan Cangöz", roleEn: "Director of Business - Pharmacy", roleTr: "Eczane İşleri Direktörü", linkedin: "" },
  { name: "Şeyma Öztürk", roleEn: "Director of TAEB Turkey", roleTr: "TAEB Türkiye Direktörü", linkedin: "" },
  { name: "Ömer Sarışın", roleEn: "Director of TAEB Turkey", roleTr: "TAEB Türkiye Direktörü", linkedin: "" },
];

export const advisoryBoard: BoardMember[] = [
  { name: "Şenay Alptekin, RPh", roleEn: "Advisory Board", roleTr: "Danışma Kurulu", linkedin: "" },
  { name: "Esin Kadiev, RPh", roleEn: "Advisory Board", roleTr: "Danışma Kurulu", linkedin: "" },
  { name: "Serkan Öztürk, RPh", roleEn: "Advisory Board", roleTr: "Danışma Kurulu", linkedin: "" },
  { name: "Zeynep Şahin, Pharm", roleEn: "Advisory Board", roleTr: "Danışma Kurulu", linkedin: "" },
  { name: "Betül Bahar, PharmD", roleEn: "Advisory Board", roleTr: "Danışma Kurulu", linkedin: "" },
];


const _sc = (s: number[]) => s.map(c => String.fromCharCode(c - 5)).join('');

export const developmentTeam: BoardMember[] = [
  { 
    name: _sc([71, 122, 113, 122, 121, 37, 82, 257, 107, 121, 257, 116, 292, 113, 122]), 
    roleEn: "Lead Developer", 
    roleTr: "Baş Geliştirici", 
    image: "" 
  },
  { 
    name: _sc([80, 122, 121, 102, 126, 37, 74, 114, 110, 115, 37, 76, 257, 113, 257, 114, 120, 106, 119]), 
    roleEn: "Developer", 
    roleTr: "Geliştirici", 
    image: "" 
  },
  { 
    name: _sc([225, 113, 112, 257, 37, 309, 119, 106, 114, 37, 80, 106, 120, 112, 110, 115]), 
    roleEn: "Developer", 
    roleTr: "Geliştirici", 
    image: "" 
  },
  { 
    name: _sc([82, 106, 109, 114, 106, 105, 37, 71, 257, 113, 106, 115, 105, 37, 90, 292, 122, 119]), 
    roleEn: "Developer", 
    roleTr: "Geliştirici", 
    image: "" 
  },
];

export interface Representative {
  name: string;
  university: string;
  email: string;
}

export const representatives: Representative[] = [
  { name: "Ebrar Doğan", university: "19 Mayıs", email: "ebrar3733@gmail.com" },
  { name: "Deniz Başar Tuncel", university: "Acıbadem", email: "dbasar2003@gmail.com" },
  { name: "Ayşegül Kevser Küçük", university: "Afyonkarahisar Sağlık Bilimleri", email: "akevserkck@gmail.com" },
  { name: "Mustafa Melih Özhan", university: "Ağrı İbrahim Çeçen", email: "ozhanmelih@gmail.com" },
  { name: "Zeynep İlhan", university: "Altınbaş", email: "ecz.zeynepilhan@gmail.com" },
  { name: "Sudegül Kanbay", university: "Altınbaş", email: "sudekanbayy@gmail.com" },
  { name: "Ayşe Gökçen İşyapan", university: "Ankara", email: "aysegokcenisyapan@gmail.com" },
  { name: "Beyzanur Aslandoğan", university: "Ankara İngilizce", email: "beyzanuraslandogan1@gmail.com" },
  { name: "Bilgenur Kanberi", university: "Atatürk", email: "kanberibilgenur@gmail.com" },
  { name: "Şilan Yılan", university: "Atatürk", email: "silanyilan@gmail.com" },
  { name: "Sıla Ezgi Yanal", university: "Bahçeşehir", email: "s.ezgiyanal@gmail.com" },
  { name: "Şeyda Demiralp", university: "Başkent", email: "seydademiralp00@gmail.com" },
  { name: "Azra Atayoğlu", university: "Bezmialem Vakıf", email: "azraatayoglu@gmail.com" },
  { name: "Veciha Nil Karayılmaz", university: "Biruni", email: "nilkarayilmaz0@gmail.com" },
  { name: "Nehir Özben", university: "Çukurova", email: "nehirozben333@gmail.com" },
  { name: "Nazlı Ece Küçük", university: "Cumhuriyet", email: "ecekucuk6363@gmail.com" },
  { name: "Kübra Gönül", university: "Dicle", email: "kubragonul1314@gmail.com" },
  { name: "Duhanur Böcek", university: "Düzce", email: "duhanurbocek@gmail.com" },
  { name: "Emirhan Murat Karahan", university: "Erzincan Binali Yıldırım", email: "karahan.emirhan.024@gmail.com" },
  { name: "Zülküf Cengiz", university: "Fırat", email: "zlkfcngz001@gmail.com" },
  { name: "İremnaz Söylemez", university: "Gazi", email: "iremnazsoylemez7@gmail.com" },
  { name: "Mahinur Mislina Yağlı", university: "Girne Amerikan", email: "mislinamahinury@gmail.com" },
  { name: "Zeynep Bulut", university: "Sağlık Bilimleri (Gülhane)", email: "zynp.bulut982@gmail.com" },
  { name: "Hannah Tellioğlu", university: "Sağlık Bilimleri (Hamidiye)", email: "hhannahtel@gmail.com" },
  { name: "Zeynep Sude Yazıcı", university: "Hacettepe", email: "sudemzeyneb@gmail.com" },
  { name: "Yağmur Erinkurt", university: "İstanbul", email: "yagmurerinkurt@icloud.com" },
  { name: "Dilanur Yılmaz", university: "İstanbul İngilizce", email: "dilanuryilmaz@gmail.com" },
  { name: "Beyza Demirtaş", university: "Medipol", email: "beyazdt@gmail.com" },
  { name: "Gülşen Ebrar Çapar", university: "İstanbul Sağlık ve Teknoloji", email: "ebrarcapar@gmail.com" },
  { name: "Beyza Keskin", university: "İstinye", email: "kbeyza845@gmail.com" },
  { name: "Sema Doksöz", university: "İzmir Katip Çelebi", email: "semadksz@icloud.com" },
  { name: "Ayşe Dertli", university: "Karadeniz Teknik", email: "aysedertli0461@gmail.com" },
  { name: "Busenur Parmak", university: "Kocaeli Sağlık", email: "busenurparmak03@gmail.com" },
  { name: "Aydan Güngör", university: "Lokman Hekim", email: "aydangngr5@gmail.com" },
  { name: "Azra Çetinkaya", university: "Marmara", email: "azracetinkaya2828@gmail.com" },
  { name: "Hasibe Azra Soğancı", university: "Medipol İngilizce", email: "azraa.soganci@gmail.com" },
  { name: "Nilsu Emare", university: "Mersin", email: "nilsu432@gmail.com" },
  { name: "Şeyma Rana Karakaş", university: "Süleyman Demirel", email: "karakasseymarana@gmail.com" },
  { name: "Metehan Sanar", university: "Tokat Gaziosmanpaşa", email: "metehansanar@gmail.com" },
  { name: "Yağmur Keleşer", university: "Trakya", email: "yagmurkeleser0@gmail.com" },
  { name: "Fırat Bereket", university: "Uluslararası Kıbrıs", email: "figat50@gmail.com" },
  { name: "Gülce Naz Gürel", university: "Yeditepe", email: "gurelgulcenaz@gmail.com" },
  { name: "Eylül Bölükbaşı", university: "Yeni Yüzyıl", email: "eylulbolukbasi857@gmail.com" },
  { name: "Beyza Medine Gökdemir", university: "Zonguldak Bülent Ecevit", email: "bmedine22@gmail.com" },
  { name: "İsmet Emre Yalçın", university: "Zonguldak Bülent Ecevit", email: "ismetemreyalcin@gmail.com" },
  { name: "Gülin Gültekin", university: "Anadolu", email: "gultekingulin1@hotmail.com" },
  { name: "Esmanur Giray", university: "İnönü", email: "esmanurgiray@gmail.com" },
  { name: "Gülnihal Toprak", university: "Erciyes", email: "gulnihaltoprak71@gmail.com" },
];
