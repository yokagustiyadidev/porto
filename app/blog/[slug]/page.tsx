import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/app/components/Markdown";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllSlugs().map((slug: string) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Tulisan tidak ditemukan" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="blog-page">
      <article className="blog-post">
        <div className="wrap">
          <header className="blog-post-header">
            <nav className="blog-breadcrumb">
              <Link href="/">Beranda</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span className="blog-breadcrumb-current">{post.title}</span>
            </nav>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <time dateTime={post.date}>{post.date}</time>
              {post.tags.map((t) => (
                <span key={t} className="blog-tag">
                  {t}
                </span>
              ))}
            </div>
          </header>
          <div className="blog-post-body">
            <Markdown content={post.body} />
          </div>
          <footer className="blog-post-footer">
            <Link href="/blog" className="blog-back-link">
              ← Semua tulisan
            </Link>
          </footer>
        </div>
      </article>
    </main>
  );
}
