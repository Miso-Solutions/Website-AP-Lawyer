import SubpageShell from '@/components/expertise/SubpageShell';
import { OG_IMAGE, SITE_NAME_HE } from '@/data/siteConfig';

export const metadata = {
  title: 'מדיניות עוגיות | אלון פרדו',
  description: 'מדיניות העוגיות של אתר עו"ד אלון פרדו - סוגי עוגיות, שימוש והגדרות.',
  alternates: {
    canonical: '/cookies',
    languages: { he: '/cookies', en: '/cookies?lang=en', 'x-default': '/cookies' },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'מדיניות עוגיות | אלון פרדו',
    description: 'מדיניות העוגיות של אתר עו"ד אלון פרדו - סוגי עוגיות, שימוש והגדרות.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME_HE,
  },
};

export default function CookiesPage() {
  return <SubpageShell areaKey="cookies" isPolicy />;
}
