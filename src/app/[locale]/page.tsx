import Slides from '@/components/organisms/Slides/Slides';
import { getSlides } from '@/repositories/slide';

type HomePageProps = {
  params: Promise<{ currentPath?: string }>;
};

export default async function HomePage(props: HomePageProps) {
  const { params } = props;
  const { currentPath } = await params;

  const slides = await getSlides();
  return <Slides slides={slides} currentPath={currentPath} />;
}
