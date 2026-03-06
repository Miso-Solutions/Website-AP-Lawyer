import SubpageShell from '@/components/expertise/SubpageShell';
import { OG_IMAGE, SITE_NAME_HE } from '@/data/siteConfig';

export const metadata = {
  title: 'מדיניות פרטיות | אלון פרדו',
  description: 'מדיניות הפרטיות של אתר עו"ד אלון פרדו - איסוף מידע, שמירה, אבטחה וזכויותיך.',
  alternates: {
    canonical: '/privacy',
    languages: { he: '/privacy', en: '/privacy?lang=en', 'x-default': '/privacy' },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'מדיניות פרטיות | אלון פרדו',
    description: 'מדיניות הפרטיות של אתר עו"ד אלון פרדו - איסוף מידע, שמירה, אבטחה וזכויותיך.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME_HE,
  },
};

export default function PrivacyPage() {
  return <SubpageShell areaKey="privacy" isPolicy />;
}
