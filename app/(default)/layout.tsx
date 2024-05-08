import type { ReactNode } from 'react';
import { FixPageUrl } from '../../components/FixPageUrl';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <FixPageUrl />
      {children}
    </>
  );
}
