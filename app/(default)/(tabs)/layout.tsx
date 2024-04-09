'use client';

import type { ReactNode } from 'react';
import { NavBar } from '../../../components/NavBar';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
