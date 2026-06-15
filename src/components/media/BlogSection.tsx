import { useTranslation } from "react-i18next";
import SectionHeading from "../../components/SectionHeading";
import { useEffect, useState } from "react";
import { blogPosts } from "../../data/blog";

export default function BlogSection() {
  const { t } = useTranslation();
  const [openPost, setOpenPost] = useState<number | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash === "#blog") {
        document.getElementById("blog")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const match = hash.match(/^#blog-post-(\d+)$/);
      if (!match) return;
      const postId = Number(match[1]);
      setOpenPost(postId);
      window.setTimeout(() => {
        document.getElementById(`blog-post-${postId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const togglePost = (id: number) => {
    setOpenPost(openPost === id ? null : id);
  };

  return (
    <section id="blog" className="mb-24 scroll-mt-28">
      <div className="mb-12">
        <SectionHeading
          title={t("media.blogTitle")}
          description={t("media.blogDescription")}
        />
      </div>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div
            id={`blog-post-${post.id}`}
            key={post.id}
            className={`border rounded-xl transition-all duration-300 overflow-hidden scroll-mt-28 ${
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
                  <span className="w-1 h-1 rounded-full bg-outline-variant" />
                  <span>{post.author}</span>
                </div>
              </div>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-surface-variant/30 text-primary transition-transform duration-300 ${
                  openPost === post.id ? "rotate-180" : ""
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
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
              <p className="text-on-surface-variant leading-relaxed">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
