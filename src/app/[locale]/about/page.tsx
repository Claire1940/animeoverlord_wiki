import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.animeoverlord.wiki'
  const path = '/about'

  return {
    title: 'About Anime Overlord Wiki - Your Overlord Anime Resource',
    description: 'Learn about Anime Overlord Wiki, a community-driven resource hub providing comprehensive guides, watch order, character info, and lore for the Overlord dark fantasy isekai anime.',
    keywords: [
      'about Anime Overlord Wiki',
      'Overlord anime community',
      'Overlord anime wiki',
      'anime resource hub',
      'Overlord fan site',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Anime Overlord Wiki',
      title: 'About Anime Overlord Wiki',
      description: 'Learn about our mission to provide the best Overlord anime resources and guides.',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Anime Overlord Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Anime Overlord Wiki',
      description: 'Learn about our mission to provide the best Overlord anime resources.',
      images: [`${siteUrl}/og-image.jpg`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Anime Overlord Wiki
          </h1>
          <p className="text-slate-300 text-lg mb-2">
            Your community-driven resource center for Overlord
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Welcome to Anime Overlord Wiki</h2>
            <p>
              Anime Overlord Wiki is an <strong>unofficial, fan-made resource website</strong> dedicated to helping fans
              explore the dark fantasy isekai anime series "Overlord". We are a community-driven platform that provides comprehensive
              watch order guides, character profiles, season summaries, lore deep-dives, and novel adaptation info.
            </p>
            <p>
              Whether you're a first-time viewer wondering where to start or a longtime fan catching up on the Sacred Kingdom arc,
              Anime Overlord Wiki is here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: <strong>to provide Overlord fans with accurate, up-to-date information</strong>
              that helps them explore and enjoy the series. We strive to:
            </p>
            <ul>
              <li><strong>Provide reliable information:</strong> Keep our content updated with the latest anime news, movies, and official announcements</li>
              <li><strong>Build useful guides:</strong> Develop watch order guides, character wikis, and lore explanations that help fans navigate the series</li>
              <li><strong>Foster community:</strong> Create a welcoming space where fans can learn, share theories, and discuss the series</li>
              <li><strong>Stay accessible:</strong> Keep all resources free and easy to use for fans at any stage of watching</li>
            </ul>

            <h2>Our Vision</h2>
            <p>
              We envision Anime Overlord Wiki as the <strong>go-to destination</strong> for every Overlord fan seeking
              to deepen their understanding of the series. We want to be the resource that fans trust and rely on, whether they need
              a watch order guide, character background, or lore deep-dive.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">📺</div>
              <h3 className="text-xl font-semibold text-white mb-2">Watch Order Guides</h3>
              <p className="text-slate-300">
                Complete watch order guides explaining how to watch all 4 seasons and 3 movies in the right sequence.
                Never miss a moment of Ainz's conquest!
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">⚔️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Character Profiles</h3>
              <p className="text-slate-300">
                Detailed profiles for Ainz, Albedo, Shalltear, Demiurge, and all key characters.
                Explore their backgrounds, abilities, and roles in Nazarick.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🏰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lore & World-Building</h3>
              <p className="text-slate-300">
                Deep dives into Nazarick, the Sorcerer Kingdom, Slane Theocracy, and the Holy Kingdom.
                Understand the political and magical world of Overlord.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎬</div>
              <h3 className="text-xl font-semibold text-white mb-2">Season & Movie Guides</h3>
              <p className="text-slate-300">
                Season summaries, episode recaps, and Sacred Kingdom movie information.
                Know what to expect from each arc of the story.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">📚</div>
              <h3 className="text-xl font-semibold text-white mb-2">Novel Adaptation Guide</h3>
              <p className="text-slate-300">
                Find out which light novel volumes correspond to which anime seasons.
                Know exactly where to start reading after finishing the anime.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Multilingual Support</h3>
              <p className="text-slate-300">
                Content available in multiple languages including English, Russian, Portuguese,
                German, Spanish, Japanese, Korean, and French.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Community-Driven</h2>
            <p>
              Anime Overlord Wiki is built <strong>by fans, for fans</strong>. We welcome contributions,
              feedback, and suggestions from viewers at all stages of the series. Our content is constantly evolving based on:
            </p>
            <ul>
              <li><strong>Fan feedback:</strong> Your suggestions help us improve and expand our resources</li>
              <li><strong>Community insights:</strong> New theories, lore discoveries, and analysis shared by fans</li>
              <li><strong>Official announcements:</strong> We monitor official news and update our content accordingly</li>
              <li><strong>New releases:</strong> We track new seasons, movies, and novel volumes as they are announced</li>
            </ul>
            <p>
              <strong>Want to contribute?</strong> Whether you have a lore theory, found an error, found a translation note,
              or have suggestions for new guides, we'd love to hear from you! Reach out through our contact channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>About the Team</h2>
            <p>
              Anime Overlord Wiki is maintained by a dedicated team of passionate anime fans and developers who love
              Overlord as much as you do. We're fans first, constantly watching, analyzing the lore,
              and staying updated with the latest official news.
            </p>
            <p>
              Our team combines expertise in:
            </p>
            <ul>
              <li><strong>Anime analysis:</strong> Deep understanding of Overlord lore, characters, and story arcs</li>
              <li><strong>Web development:</strong> Building fast, user-friendly tools and interfaces</li>
              <li><strong>Content creation:</strong> Writing clear, helpful guides and wiki articles</li>
              <li><strong>Community management:</strong> Listening to fan feedback and fostering a positive environment</li>
            </ul>
            <p className="text-slate-400 italic text-sm">
              Project Codename: "Nazarick" – Exploring the Great Tomb together.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Important Disclaimer</h2>
            <p className="text-yellow-400/90">
              <strong>Anime Overlord Wiki is an unofficial fan-made website.</strong> We are NOT affiliated with,
              endorsed by, or associated with Kadokawa Corporation, Kugane Maruyama, or any official Overlord rights holders.
            </p>
            <p>
              All anime content, trademarks, characters, and assets are the property of their respective owners.
              We use anime-related content under fair use principles for informational and educational purposes only.
            </p>
            <p>
              Anime Overlord Wiki is a non-profit, community resource created by fans, for fans.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have questions, suggestions, found a bug, or just want to say hi:
            </p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                <a href="mailto:contact@animeoverlord.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contact@animeoverlord.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Bug Reports</h3>
                <a href="mailto:support@animeoverlord.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  support@animeoverlord.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Content Submissions</h3>
                <a href="mailto:contribute@animeoverlord.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contribute@animeoverlord.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                <a href="mailto:partnerships@animeoverlord.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  partnerships@animeoverlord.wiki
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest guides, tips, and Overlord news.
            Bookmark this site and check back regularly for new content!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[hsl(var(--nav-theme-light))] text-white font-semibold hover:opacity-90 transition"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
