import { useLocale } from 'next-intl';
import type { CSSProperties } from 'react';
import { Link, useRouter } from '@/i18n/navigation';
import LogoName from '../LogoName/LogoName';
import flagImagesStyle from './flagImages.module.css';
import contactImage from './images/contact.png';
import englishFlag from './images/english.jpg';
import swedishFlag from './images/swedish.jpg';

export default function PageHeader() {
  const locale = useLocale();

  const imageVars = {
    '--active-flag-image': `url('${locale === 'en' ? englishFlag.src : swedishFlag.src}')`,
    '--inactive-flag-image': `url('${locale === 'en' ? swedishFlag.src : englishFlag.src}')`,
  } as CSSProperties;

  return (
    <div className="block md:flex flex-row-reverse justify-between pt-8 px-8">
      <div className="flex justify-between items-center gap-3 pl-[96px] md:pl-0 mb-[-20px] md:mb-0">
        <div className="">
          <img src={contactImage.src} alt="contact" className="h-[16px]" />
        </div>
        <Link
          href="/"
          locale={locale === 'en' ? 'se' : 'en'}
          className={`bg-cover h-[24px] w-[24px] rounded-[12px] ${flagImagesStyle.activator}`}
          style={imageVars}
          title="Change language | Byt språk"
        />
      </div>
      <LogoName />
    </div>
  );
}
