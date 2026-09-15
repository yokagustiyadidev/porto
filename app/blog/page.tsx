import { getPosts } from "@/lib/blog";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default function BlogIndexPage() {
  const posts = getPosts().filter((p) => !p.draft);
  const sorted = [...posts].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="wrap">
          <span className="sec-label">Blog</span>
          <h1 className="blog-hero-title">Catatan &amp; Cerita</h1>
          <p className="blog-hero-sub">
            Cerita di balik proyek, keputusan teknis, dan hal yang sedang
            saya pelajari.
          </p>
        </div>
      </section>

      <section className="blog-list-wrap">
        <div className="wrap">
          {sorted.length === 0 ? (
            <p className="blog-empty">Belum ada tulisan.</p>
          ) : (
            <div className="blog-list">
              {sorted.map((post) => (
                <article key={post.slug} className="blog-card">
                  <a
                    href={`/blog/${post.slug}`}
                    className="blog-card-inner"
                  >
                    <div className="blog-card-meta">
                      <time dateTime={post.date}>{post.date}</time>
                      {post.tags.map((t) => (
                        <span key={t} className="blog-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-desc">{post.description}</p>
                    <span className="blog-card-cta">Baca selengkapnya →</span>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
