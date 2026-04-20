'use client';

import Link from 'next/link';
import type { CSSProperties, MouseEventHandler } from 'react';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  ariaLabel?: string;
}

export default function NavigationLink({ href, children, className, style, onClick, ariaLabel }: NavigationLinkProps) {
  return (
    <Link href={href} className={className} style={style} onClick={onClick} aria-label={ariaLabel} scroll>
      {children}
    </Link>
  );
}
