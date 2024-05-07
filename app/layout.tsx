import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { colors } from '../src/config/colors';
import {
  APP_DEFAULT_TITLE,
  APP_TITLE_TEMPLATE,
  APP_DESCRIPTION,
} from '../src/config/app';
import { FixPageUrl } from '../components/FixPageUrl';
import { ServiceWorkerRegister } from '../components/ServiceWorkerRegister';
import './globals.css';

export const metadata: Metadata = {
  description: APP_DESCRIPTION,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: APP_DEFAULT_TITLE,
  },
  openGraph: {
    type: 'website',
    siteName: APP_DEFAULT_TITLE,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: colors.smokyBlack,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-smokyBlack">
        <FixPageUrl />
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
