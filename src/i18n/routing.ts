import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  localeDetection: true,
  localeCookie: false,
  locales: ['en', 'se'],
  defaultLocale: 'en',
  domains: [
    {
      domain: 'hendrikpeter.net',
      defaultLocale: 'en',
      locales: ['en'],
    },
    {
      domain: 'sv.hendrikpeter.net',
      defaultLocale: 'se',
      locales: ['se'],
    },
  ],
});
