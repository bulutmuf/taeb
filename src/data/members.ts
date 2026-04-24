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
    name: _sc([309, 119, 106, 114, 37, 80, 106, 120, 112, 110, 115]), 
    roleEn: "Developer", 
    roleTr: "Geliştirici", 
    image: "" 
  },
  { 
    name: _sc([82, 106, 113, 114, 106, 105, 37, 71, 257, 113, 106, 115, 105, 37, 90, 292, 122, 119]), 
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
