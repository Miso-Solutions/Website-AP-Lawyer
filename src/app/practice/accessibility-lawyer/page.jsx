import SubpageShell from '@/components/expertise/SubpageShell';
import { BASE_URL, OG_IMAGE, SITE_NAME_HE } from '@/data/siteConfig';
const PAGE_PATH = '/practice/accessibility-lawyer';

const practiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${BASE_URL}${PAGE_PATH}#legal-service`,
  name: 'עורך דין נגישות - אלון פרדו',
  alternateName: 'Accessibility Law Lawyer - Alon Pardo',
  description: 'עורך דין נגישות - ייעוץ, ציות ותביעות נגישות לעסקים ויחידים. הנחיה מעשית ותיקון.',
  url: `${BASE_URL}${PAGE_PATH}`,
  parentOrganization: { '@id': `${BASE_URL}/#legal-service` },
  serviceType: 'Accessibility Law',
  areaServed: { '@type': 'Country', name: 'Israel' },
  image: OG_IMAGE,
  availableLanguage: [
    { '@type': 'Language', name: 'Hebrew', alternateName: 'he' },
    { '@type': 'Language', name: 'English', alternateName: 'en' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'דף הבית', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'עורך דין נגישות', item: `${BASE_URL}${PAGE_PATH}` },
  ],
};

export const metadata = {
  title: 'עורך דין נגישות | אלון פרדו',
  description: 'עורך דין נגישות - ייעוץ, ציות ותביעות נגישות לעסקים ויחידים. הנחיה מעשית ותיקון.',
  alternates: {
    canonical: PAGE_PATH,
    languages: { he: PAGE_PATH, en: `${PAGE_PATH}?lang=en`, 'x-default': PAGE_PATH },
  },
  robots: 'index, follow',
  openGraph: {
    title: 'עורך דין נגישות | אלון פרדו',
    description: 'עורך דין נגישות - ייעוץ, ציות ותביעות נגישות לעסקים ויחידים.',
    url: `${BASE_URL}${PAGE_PATH}`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME_HE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'עורך דין נגישות | אלון פרדו',
    description: 'עורך דין נגישות - ייעוץ, ציות ותביעות נגישות לעסקים ויחידים.',
  },
};

export default function AccessibilityLawyerPage() {
  return (
    <>
      <SubpageShell areaKey="accessibility" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
