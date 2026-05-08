'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/skills', label: 'SKILLS' },
  { href: '/marketplace', label: 'MARKETPLACE' },
  { href: '/league', label: 'LEAGUE' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-red">
      <nav className="flex items-center justify-between px-6 lg:px-12 h-20">
        <Link
          href="/"
          className="font-khand text-white text-xl sm:text-2xl lg:text-3xl tracking-wide uppercase"
        >
          Hacky Sack Central
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover-underline font-khand uppercase tracking-widest text-base ${
                    active ? 'text-red is-active' : 'text-white hover:text-red'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-7 h-[2px] bg-white transition-transform duration-200 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-7 h-[2px] bg-white transition-opacity duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-7 h-[2px] bg-white transition-transform duration-200 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 top-20 bg-black z-40">
          <ul className="flex flex-col items-center justify-center gap-10 pt-20 px-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-khand uppercase tracking-widest text-4xl ${
                      active ? 'text-red' : 'text-white hover:text-red'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
