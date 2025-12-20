import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

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

export default function WeddingPage() {
  return 'This page is Work in progress';
}
