export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

export interface FileMetafield {
  url: string;
  imgix_url: string;
}

export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name: string;
    bio?: string;
    profile_photo?: FileMetafield;
    instagram?: string;
  };
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
  };
}

export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    excerpt?: string;
    content: string;
    featured_image?: FileMetafield;
    author?: Author;
    category?: Category;
    location?: string;
  };
}

export interface AboutPage extends CosmicObject {
  type: 'about-page';
  metadata: {
    headline: string;
    subheadline?: string;
    hero_image?: FileMetafield;
    content: string;
    mission_title?: string;
    mission_description?: string;
  };
}

// Simple error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}