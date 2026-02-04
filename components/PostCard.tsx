import Link from 'next/link';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
  showAuthor?: boolean;
}

export default function PostCard({ post, showAuthor = true }: PostCardProps) {
  const author = post.metadata.author;
  const category = post.metadata.category;
  const featuredImage = post.metadata.featured_image;

  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        {/* Image */}
        <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
          {featuredImage ? (
            <img
              src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-coral-100 to-ocean-100 flex items-center justify-center">
              <span className="text-6xl">🍽️</span>
            </div>
          )}
        </div>

        {/* Category & Location */}
        <div className="flex items-center gap-3 mb-2">
          {category && (
            <span className="text-xs font-semibold text-coral-500 uppercase tracking-wider">
              {category.metadata.name}
            </span>
          )}
          {post.metadata.location && (
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {post.metadata.location}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-coral-500 transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.metadata.excerpt && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {post.metadata.excerpt}
          </p>
        )}
      </Link>

      {/* Author */}
      {showAuthor && author && (
        <Link
          href={`/authors/${author.slug}`}
          className="flex items-center gap-2 text-sm hover:text-coral-500 transition-colors"
        >
          {author.metadata.profile_photo && (
            <img
              src={`${author.metadata.profile_photo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
              alt={author.metadata.name}
              className="w-6 h-6 rounded-full object-cover"
            />
          )}
          <span className="text-gray-600">{author.metadata.name}</span>
        </Link>
      )}
    </article>
  );
}