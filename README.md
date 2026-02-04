# Wanderlust Bites

![Wanderlust Bites](https://imgix.cosmicjs.com/440d6a00-0213-11f1-8a26-c3abee9ef662-photo-1504674900247-0877df9cc836-1770241719367.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautifully minimal food travel blog built with Next.js 16 and Cosmic CMS. Explore culinary adventures from around the world with stunning imagery, author profiles, and category-based navigation.

## Features

- 🍜 **Dynamic Blog Posts** - Rich markdown content with featured images
- 👨‍🍳 **Author Profiles** - Photos, bios, and Instagram links
- 🏷️ **Category System** - Filter posts by cuisine type or region
- 📍 **Location Tags** - See where each food adventure takes place
- 📱 **Mobile Navigation** - Smooth slide-out drawer menu
- ⚡ **Server Components** - Optimal performance with React Server Components
- 🎨 **Colorful Design** - Vibrant accents with minimal aesthetics
- 🔤 **Inter Font** - Modern, clean typography throughout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6983be68fcd45d052674d70c&clone_repository=6983bfd3fcd45d052674d840)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: A food travel blog with posts, authors, and categories
>
> Use the install_content_model action to create ALL object types AND demo content in one step. Include:
> 1. All necessary object types with appropriate metafields
> 2. 2-3 demo objects for each type with realistic content
> 3. Unsplash image URLs for thumbnails and file metafields (use real URLs like https://images.unsplash.com/photo-...)
>
> Remember to create types that are referenced by others FIRST (e.g., categories and authors before blog posts)."

### Code Generation Prompt

> "Next.js, minimal, inter font, responsive, mobile nav, colorful"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your food travel blog content

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your food travel blog.

## Cosmic SDK Examples

### Fetching Posts with Author and Category

```typescript
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching a Single Post by Slug

```typescript
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'bangkok-night-market-guide' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This blog uses three content types from your Cosmic bucket:

| Content Type | Purpose |
|--------------|---------|
| **Posts** | Blog articles with content, images, and metadata |
| **Authors** | Writer profiles with photos and social links |
| **Categories** | Topic organization for filtering posts |

Learn more in the [Cosmic documentation](https://www.cosmicjs.com/docs).

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set the build command to `bun run build`
4. Add your environment variables
5. Deploy!

<!-- README_END -->