'use client';

import type { ReactNode } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="text-white">
      <h2>This is layout content</h2>
      {children}
    </div>
  );
}
