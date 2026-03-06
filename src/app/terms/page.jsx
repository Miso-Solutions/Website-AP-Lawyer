import SubpageShell from '@/components/expertise/SubpageShell';
import { OG_IMAGE, SITE_NAME_HE } from '@/data/siteConfig';

export const metadata = {
  title: 'תנאי שירות | אלון פרדו',
  description: 'תנאי השירות של אתר עו"ד אלון פרדו - שימוש באתר, הגבלות ודין חל.',
  alternates: {
    canonical: '/terms',
    languages: { he: '/terms', en: '/terms?lang=en', 'x-default': '/terms' },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'תנאי שירות | אלון פרדו',
    description: 'תנאי השירות של אתר עו"ד אלון פרדו - שימוש באתר, הגבלות ודין חל.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME_HE,
  },
};

export default function TermsPage() {
  return <SubpageShell areaKey="terms" isPolicy />;
}
