import { useTranslation } from "react-i18next";
import SectionHeading from "../../components/SectionHeading";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Eczacılıkta İnovasyon ve Yeni Nesil Teknolojiler",
    content: "Yapay zeka ve dijital dönüşüm eczacılık sektörünü nasıl değiştiriyor? Geleneksel yaklaşımların dışına çıkarak kişiselleştirilmiş tedavilerin yükselişine hep birlikte tanıklık ediyoruz. Öğrenim sürecimizden hasta danışmanlık hizmetlerine kadar birçok alanda teknolojik devrimin parçası olmaya devam edeceğiz.",
    date: "14 Nisan 2026",
    author: "Ahmet Yılmaz"
  },
  {
    id: 2,
    title: "Amerika Birleşik Devletleri'nde Eczacılık Kariyeri",
    content: "Amerika'da eczacılık lisansı alma sürecinde dikkat edilmesi gereken temel adımlar, dil gereksinimleri ve sınav stratejileri. TAEB'in mentörlük hizmetleriyle FPGEC sürecinizi nasıl daha kolay bir şekilde atlatacağınızı öğrenin.",
    date: "28 Mart 2026",
    author: "Elif Demir"
  },
  {
    id: 3,
    title: "Geleceğin Sağlık Ekosistemi: Sürdürülebilirlik",
    content: "İlaç ve sağlık sektörünün oluşturduğu karbon ayak izine karşı yeni nesil çevreci eczacılık pratikleri. Sürdürülebilir atık yönetimi ve doğa dostu ambalaj materyalleri kullanımı artıyor. Ekoloji 101 projemiz kapsamında hazırlanan raporları bu yazımızda bulabilirsiniz.",
    date: "05 Mart 2026",
    author: "Zeynep Çelik"
  }
];

export default function BlogSection() {
  const { t } = useTranslation();
  const [openPost, setOpenPost] = useState<number | null>(null);

  const togglePost = (id: number) => {
    setOpenPost(openPost === id ? null : id);
  };

  return (
    <section className="mb-24">
      <div className="mb-12">
        <SectionHeading
          badge={t("media.blogBadge") || "BLOG"}
          title={t("media.blogTitle") || "En Güncel Yazılar"}
          description={t("media.blogDescription") || "Sektörel gelişmeler, akademik makaleler ve eczacılık dünyasından haberler."}
          badgeTheme="primary"
        />
      </div>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              openPost === post.id 
                ? "border-primary bg-surface shadow-md" 
                : "border-outline-variant/30 bg-surface-container-lowest hover:border-primary/50"
            }`}
          >
            <button
              onClick={() => togglePost(post.id)}
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
            >
              <div>
                <h3 className="text-xl font-bold text-on-surface">{post.title}</h3>
                <div className="text-sm font-medium text-on-surface-variant/70 mt-1 flex items-center gap-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span>{post.author}</span>
                </div>
              </div>
              <div 
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-surface-variant/30 text-primary transition-transform duration-300 ${
                  openPost === post.id ? "rotate-180" : ""
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            
            <div 
              className={`px-6 transition-all duration-300 ease-in-out origin-top ${
                openPost === post.id 
                  ? "py-5 border-t border-outline-variant/10 opacity-100 max-h-[500px]" 
                  : "max-h-0 py-0 opacity-0"
              }`}
            >
              <p className="text-on-surface-variant leading-relaxed">
                {post.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
