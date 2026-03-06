import SubpageShell from '@/components/expertise/SubpageShell';
import { OG_IMAGE, SITE_NAME_HE } from '@/data/siteConfig';

export const metadata = {
  title: 'הצהרה משפטית | אלון פרדו',
  description: 'הצהרה משפטית של אתר עו"ד אלון פרדו - הגבלות, אחריות ודין חל.',
  alternates: {
    canonical: '/disclaimer',
    languages: { he: '/disclaimer', en: '/disclaimer?lang=en', 'x-default': '/disclaimer' },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'הצהרה משפטית | אלון פרדו',
    description: 'הצהרה משפטית של אתר עו"ד אלון פרדו - הגבלות, אחריות ודין חל.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    siteName: SITE_NAME_HE,
  },
};

export default function DisclaimerPage() {
  return <SubpageShell areaKey="disclaimer" isPolicy />;
}
