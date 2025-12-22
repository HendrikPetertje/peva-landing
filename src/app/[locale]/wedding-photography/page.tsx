import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import MarkdownProxy from '@/components/organisms/MarkdownProxy/MarkdownProxy';
import { routing } from '@/i18n/routing';
import { getWeddingPhotographsIntroduction } from '@/repositories/weddingPhotograph';

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

const weddingPhotographsIntroduction = async (locale: string) => {
  const introTexts = await getWeddingPhotographsIntroduction();

  if (locale === 'en') return introTexts.en;
  return introTexts.se;
};

export default async function WeddingPage() {
  const t = await getTranslations('WeddingPage');
  const locale = await getLocale();

  const introText = await weddingPhotographsIntroduction(locale);

  return (
    <div>
      <h1 className="text-4xl leading-16 ">{t('wedding_photography')}</h1>
      <div>
        <MarkdownProxy>{introText}</MarkdownProxy>
      </div>
      <div>Pictures grid</div>
    </div>
  );
}
