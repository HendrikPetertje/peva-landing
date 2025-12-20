import Slides from '@/components/organisms/Slides/Slides';
import { routing } from '@/i18n/routing';
import { getDefaultImage, getSlides } from '@/repositories/slide';

export const generateStaticParams = async () => {
  return routing.locales.map((locale) => ({ locale }));
};

export default async function HomePage() {
  const slides = await getSlides();
  const defaultImage = await getDefaultImage();
  return <Slides slides={slides} defaultImage={defaultImage} />;
}
