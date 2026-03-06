import SubpageShell from '@/components/expertise/SubpageShell';
import { OG_IMAGE, SITE_NAME_HE } from '@/data/siteConfig';

export const metadata = {
  title: 'הצהרת נגישות | אלון פרדו',
  description: 'הצהרת הנגישות של אתר עו"ד אלון פרדו - תקן WCAG 2.2 AA, תכונות נגישות ויצירת קשר.',
  alternates: {
    canonical: '/accessibility-statement',
    languages: { he: '/accessibility-statement', en: '/accessibility-statement?lang=en', 'x-default': '/accessibility-statement' },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'הצהרת נגישות | אלון פרדו',
    description: 'הצהרת הנגישות של אתר עו"ד אלון פרדו - תקן WCAG 2.2 AA, תכונות נגישות ויצירת קשר.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME_HE,
  },
};

export default function AccessibilityStatementPage() {
  return <SubpageShell areaKey="accessibility_statement" isPolicy />;
}
