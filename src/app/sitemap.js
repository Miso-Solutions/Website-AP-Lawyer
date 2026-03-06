import { BASE_URL } from '@/data/siteConfig';
import { practiceAreas } from '@/data/practiceAreas';

export default function sitemap() {
  const lastModified = new Date('2026-03-06');

  const home = {
    url: BASE_URL,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1.0,
    alternates: {
      languages: { he: BASE_URL, en: `${BASE_URL}?lang=en` },
    },
  };

  const practices = practiceAreas.map(({ path }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
    alternates: {
      languages: {
        he: `${BASE_URL}${path}`,
        en: `${BASE_URL}${path}?lang=en`,
      },
    },
  }));

  return [home, ...practices];
}
