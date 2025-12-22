import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import MarkdownProxy from '@/components/organisms/MarkdownProxy/MarkdownProxy';
import { routing } from '@/i18n/routing';
import { getPhotographs, getPhotographsIntroduction } from '@/repositories/photograph';

export const generateStaticParams = async () => {
  return routing.locales.map((locale) => ({ locale }));
};

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('WeddingPage');

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
  };
};

const photographsIntroduction = async (locale: string) => {
  const introTexts = await getPhotographsIntroduction();

  if (locale === 'en') return introTexts.en;
  return introTexts.se;
};

export default async function WeddingPage() {
  const t = await getTranslations('WeddingPage');
  const locale = await getLocale();

  const introText = await photographsIntroduction(locale);
  const images = await getPhotographs();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl leading-16 ">{t('weddingPhotography')}</h1>
      <div>
        <MarkdownProxy>{introText}</MarkdownProxy>
      </div>
      <div>
        <ImageGallery images={images} />
        {/* <div className="w-[400px] h-[200px] bg-amber-200 block">hello</div> */}
      </div>
    </div>
  );
}
