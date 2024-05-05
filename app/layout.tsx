import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { userData } from '../src/data';
import './globals.css';

export const metadata: Metadata = {
  title: userData.name,
  description: userData.intro.join(''),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-smokyBlack">{children}</body>
    </html>
  );
}
