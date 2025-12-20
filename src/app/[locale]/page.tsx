import Slides from '@/components/organisms/Slides/Slides';
import { getSlides } from '@/repositories/slide';

export default async function HomePage() {
  const slides = await getSlides();
  return <Slides />;
}
