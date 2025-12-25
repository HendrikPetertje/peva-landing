import Logo from '@/components/atoms/Logo/Logo';
import { Link } from '@/i18n/navigation';

export default function LogoName() {
  return (
    <Link href="/" className="no-underline hover:opacity-70 transition-all">
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="italic font-bold text-4xl md:text-5xl transition-all">Hendrik Peter</h1>
      </div>
    </Link>
  );
}
