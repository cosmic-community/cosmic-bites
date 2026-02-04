// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug, getPostsByCategory, getCategories } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(category.id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-4"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-2 bg-gradient-to-r from-coral-500 to-ocean-500 text-white font-medium rounded-full">
            {category.metadata.name}
          </span>
        </div>
        {category.metadata.description && (
          <p className="text-xl text-gray-600 max-w-2xl">
            {category.metadata.description}
          </p>
        )}
      </div>

      {/* Posts */}
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No stories in this category yet.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-coral-500 hover:text-coral-600 font-medium mt-4"
          >
            Explore all stories
          </Link>
        </div>
      )}
    </div>
  );
}