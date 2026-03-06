import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import HeroSection from '@/components/home/HeroSection';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/contact/ContactSection';
import { BASE_URL, OG_IMAGE, SITE_NAME_HE, SITE_NAME_EN, PHONE, WHATSAPP_URL } from '@/data/siteConfig';

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'Attorney'],
  '@id': `${BASE_URL}/#legal-service`,
  name: SITE_NAME_HE,
  alternateName: SITE_NAME_EN,
  description: 'ייצוג משפטי אישי בתחומי הפלילי, תעבורה, מינהלי, עבודה ונגישות',
  telephone: PHONE,
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  address: { '@type': 'PostalAddress', addressCountry: 'IL', addressLocality: 'Israel' },
  areaServed: { '@type': 'Country', name: 'Israel' },
  priceRange: '$$',
  serviceType: ['Criminal Law', 'Traffic Law', 'Administrative Law', 'Labour Law', 'Accessibility Law'],
  knowsAbout: ['משפט פלילי', 'דיני תעבורה', 'משפט מנהלי', 'דיני עבודה', 'נגישות'],
  availableLanguage: [
    { '@type': 'Language', name: 'Hebrew', alternateName: 'he' },
    { '@type': 'Language', name: 'English', alternateName: 'en' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: PHONE,
    availableLanguage: ['Hebrew', 'English'],
  },
  image: OG_IMAGE,
  sameAs: [WHATSAPP_URL],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'דף הבית', item: BASE_URL },
  ],
};

export const metadata = {
  title: 'אלון פרדו | עורך דין',
  description: 'עו"ד אלון פרדו - ייצוג אישי בתחומי המשפט הפלילי, תעבורה, מינהלי, עבודה ונגישות. ייעוץ ראשוני ישיר ולא מחייב.',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
    languages: { he: '/', en: '/?lang=en', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    alternateLocale: 'en_US',
    url: BASE_URL,
    title: 'אלון פרדו | עורך דין',
    description: 'ייצוג אישי בתחומי המשפט הפלילי, תעבורה, מינהלי, עבודה ונגישות.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME_HE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אלון פרדו | עורך דין',
    description: 'ייצוג אישי בתחומי המשפט הפלילי, תעבורה, מינהלי, עבודה ונגישות.',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-grow">
        <HeroSection />
        <ExpertiseSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
