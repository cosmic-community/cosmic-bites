import { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getAboutPage } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'About | Wanderlust Bites',
  description: 'Learn about our mission to explore culinary adventures from around the world.',
};

export default async function AboutPage() {
  const aboutPage = await getAboutPage();

  // Fallback content if no Cosmic content exists yet
  if (!aboutPage) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Content coming soon. Please add an About Page object in your Cosmic dashboard.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-coral-500 hover:text-coral-600 font-medium mt-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>
      </div>
    );
  }

  const heroImageUrl = aboutPage.metadata.hero_image?.imgix_url
    ? `${aboutPage.metadata.hero_image.imgix_url}?w=1920&h=600&fit=crop&auto=format,compress`
    : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop&auto=format,compress';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white min-h-[400px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
        />
        {/* Black Opacity Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 py-20 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {aboutPage.metadata.headline}
          </h1>
          {aboutPage.metadata.subheadline && (
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {aboutPage.metadata.subheadline}
            </p>
          )}
        </div>
      </section>

      {/* Mission Section */}
      {aboutPage.metadata.mission_title && aboutPage.metadata.mission_description && (
        <section className="bg-gradient-to-r from-coral-500 to-ocean-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {aboutPage.metadata.mission_title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {aboutPage.metadata.mission_description}
            </p>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <ReactMarkdown>{aboutPage.metadata.content}</ReactMarkdown>
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
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}