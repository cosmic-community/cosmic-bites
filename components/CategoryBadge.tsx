import Link from 'next/link';
import { Category } from '@/types';

interface CategoryBadgeProps {
  category: Category;
}

const colorVariants = [
  'from-coral-400 to-coral-500',
  'from-ocean-400 to-ocean-500',
  'from-sage-400 to-sage-500',
  'from-purple-400 to-purple-500',
  'from-amber-400 to-amber-500',
];

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  // Generate consistent color based on category slug
  const colorIndex = category.slug.length % colorVariants.length;
  const colorClass = colorVariants[colorIndex];

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colorClass} text-white font-medium rounded-full text-sm hover:opacity-90 transition-opacity shadow-sm`}
    >
      {category.metadata.name}
    </Link>
  );
}