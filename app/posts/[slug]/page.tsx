// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getPosts } from '@/lib/cosmic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = post.metadata.author;
  const category = post.metadata.category;

  return (
    <article>
      {/* Hero */}
      <header className="relative">
        {post.metadata.featured_image && (
          <div className="aspect-[21/9] md:aspect-[3/1]">
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="inline-block px-3 py-1 bg-coral-500 text-white text-sm font-medium rounded-full mb-4 hover:bg-coral-600 transition-colors"
              >
                {category.metadata.name}
              </Link>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            {post.metadata.location && (
              <p className="text-white/80 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {post.metadata.location}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Author Info */}
        {author && (
          <Link
            href={`/authors/${author.slug}`}
            className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            {author.metadata.profile_photo && (
              <img
                src={`${author.metadata.profile_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                alt={author.metadata.name}
                className="w-14 h-14 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-gray-900">{author.metadata.name}</p>
              {author.metadata.instagram && (
                <p className="text-sm text-coral-500">{author.metadata.instagram}</p>
              )}
            </div>
          </Link>
        )}

        {/* Excerpt */}
        {post.metadata.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-coral-300 pl-4">
            {post.metadata.excerpt}
          </p>
        )}

        {/* Article Content */}
        <div className="prose max-w-none">
          <ReactMarkdown>{post.metadata.content}</ReactMarkdown>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-coral-500 hover:text-coral-600 font-medium"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all stories
          </Link>
        </div>
      </div>
    </article>
  );
}