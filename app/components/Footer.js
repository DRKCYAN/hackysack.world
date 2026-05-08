import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/skills', label: 'SKILLS' },
  { href: '/marketplace', label: 'MARKETPLACE' },
  { href: '/league', label: 'LEAGUE' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-red">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center gap-6 text-center">
        <div className="font-khand uppercase text-3xl lg:text-5xl tracking-wide">
          Hacky Sack Central
        </div>
        <div className="font-khand uppercase text-base lg:text-lg text-red tracking-[0.3em]">
          The Home of Hacky Sack.
        </div>
        <div className="w-24 h-[2px] bg-red" />
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-khand uppercase tracking-widest text-sm">
          {FOOTER_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-red transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="font-switzer text-xs uppercase tracking-[0.25em] opacity-75 pt-4">
          © 2025 Hacky Sack Central
        </div>
      </div>
    </footer>
  );
}
