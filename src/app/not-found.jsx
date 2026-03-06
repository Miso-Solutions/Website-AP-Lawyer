import NotFoundContent from '@/components/shared/NotFoundContent';
import { SITE_NAME_HE } from '@/data/siteConfig';

export const metadata = {
  title: `404 | ${SITE_NAME_HE}`,
  description: 'הדף שחיפשת לא נמצא. The page you were looking for could not be found.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundContent />;
}
