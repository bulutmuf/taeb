export interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Eczacılıkta İnovasyon ve Yeni Nesil Teknolojiler",
    content:
      "Yapay zeka ve dijital dönüşüm eczacılık sektörünü nasıl değiştiriyor? Geleneksel yaklaşımların dışına çıkarak kişiselleştirilmiş tedavilerin yükselişine hep birlikte tanıklık ediyoruz. Öğrenim sürecimizden hasta danışmanlık hizmetlerine kadar birçok alanda teknolojik devrimin parçası olmaya devam edeceğiz.",
    date: "14 Nisan 2026",
    author: "Ahmet Yılmaz",
  },
  {
    id: 2,
    title: "Amerika Birleşik Devletleri'nde Eczacılık Kariyeri",
    content:
      "Amerika'da eczacılık lisansı alma sürecinde dikkat edilmesi gereken temel adımlar, dil gereksinimleri ve sınav stratejileri. TAEB'in mentörlük hizmetleriyle FPGEC sürecinizi nasıl daha kolay bir şekilde atlatacağınızı öğrenin.",
    date: "28 Mart 2026",
    author: "Elif Demir",
  },
  {
    id: 3,
    title: "Geleceğin Sağlık Ekosistemi: Sürdürülebilirlik",
    content:
      "İlaç ve sağlık sektörünün oluşturduğu karbon ayak izine karşı yeni nesil çevreci eczacılık pratikleri. Sürdürülebilir atık yönetimi ve doğa dostu ambalaj materyalleri kullanımı artıyor. Ekoloji 101 projemiz kapsamında hazırlanan raporları bu yazımızda bulabilirsiniz.",
    date: "05 Mart 2026",
    author: "Zeynep Çelik",
  },
];

export const faqItems = [
  {
    id: "equivalency",
    questionKey: "media.faqEquivalency",
    blogPostId: 2,
  },
  {
    id: "internship",
    questionKey: "media.faqInternship",
    blogPostId: 2,
  },
  {
    id: "innovation",
    questionKey: "media.faqInnovation",
    blogPostId: 1,
  },
  {
    id: "sustainability",
    questionKey: "media.faqSustainability",
    blogPostId: 3,
  },
];
