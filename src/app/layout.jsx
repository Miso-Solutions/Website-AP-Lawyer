import { Assistant } from 'next/font/google';
import I18nProvider from '@/i18n/I18nProvider';
import SkipLink from '@/components/layout/SkipLink';
import { BASE_URL, SITE_NAME_HE, SITE_NAME_EN } from '@/data/siteConfig';
import './globals.css';

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-main',
});

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME_HE,
  alternateName: SITE_NAME_EN,
  url: BASE_URL,
  inLanguage: ['he', 'en'],
};

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'אלון פרדו - עורך דין | Alon Pardo - Attorney at Law',
    template: '%s | אלון פרדו - עורך דין',
  },
  description: 'עורך דין אלון פרדו - ייצוג משפטי מקצועי בפלילי, תעבורה, מנהלי, דיני עבודה ונגישות',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#835e21',
};

export default function RootLayout({ children }) {
  return (
    <html
      dir="rtl"
      lang="he"
      className={assistant.variable}
      suppressHydrationWarning
    >
      <body className="bg-stone-50 text-stone-900 min-h-screen flex flex-col">
        <I18nProvider>
          <SkipLink />
          {children}
        </I18nProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
