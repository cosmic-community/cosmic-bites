import Link from 'next/link';
import { getPosts, getCategories } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';
import CategoryBadge from '@/components/CategoryBadge';

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  // Get a hero image from the featured post or use a default food image
  const heroImageUrl = featuredPost?.metadata?.featured_image?.imgix_url
    ? `${featuredPost.metadata.featured_image.imgix_url}?w=1920&h=800&fit=crop&auto=format,compress`
    : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=800&fit=crop&auto=format,compress';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
        />
        {/* Black Opacity Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Wanderlust Bites
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Discover the world through its flavors. From street food markets to hidden patisseries, we explore the stories behind every dish.
          </p>
          <Link
            href="#latest"
            className="inline-flex items-center gap-2 bg-white text-coral-600 px-6 py-3 rounded-full font-medium hover:bg-coral-50 transition-colors"
          >
            Explore Stories
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Explore by Category
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <CategoryBadge key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Featured Story
          </h2>
          <Link href={`/posts/${featuredPost.slug}`} className="group block">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              {featuredPost.metadata.featured_image && (
                <img
                  src={`${featuredPost.metadata.featured_image.imgix_url}?w=1400&h=600&fit=crop&auto=format,compress`}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                {featuredPost.metadata.category && (
                  <span className="inline-block px-3 py-1 bg-coral-500 text-white text-sm font-medium rounded-full mb-3">
                    {featuredPost.metadata.category.metadata.name}
                  </span>
                )}
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {featuredPost.title}
                </h3>
                {featuredPost.metadata.excerpt && (
                  <p className="text-white/80 text-lg max-w-2xl">
                    {featuredPost.metadata.excerpt}
                  </p>
                )}
                {featuredPost.metadata.location && (
                  <p className="text-white/60 text-sm mt-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {featuredPost.metadata.location}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Latest Posts */}
      <section id="latest" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Latest Stories
        </h2>
        {recentPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No additional stories yet. Check back soon!</p>
        )}
      </section>
    </div>
  );
}