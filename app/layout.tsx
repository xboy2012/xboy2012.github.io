import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import cx from 'classnames';
import { colors } from '../src/config/colors';
import {
  APP_DEFAULT_TITLE,
  APP_TITLE_TEMPLATE,
  APP_DESCRIPTION,
} from '../src/config/app';
import { SideBar } from '../components/SideBar';
import { ServiceWorkerRegister } from '../components/ServiceWorkerRegister';
import { NavBar } from '../components/NavBar';
import { useNoJs } from '../src/hooks/useNoJs';
import src from '../src/utils/getImageUrl';
import { getFullUrl } from '../src/utils/getFullUrl';
import './globals.css';

const makeAbsoluteUrl = <T extends { url: string }>(items: T[]): T[] => {
  return items.map((item): T => {
    return {
      ...item,
      // convert to absolute url to avoid relative path issues
      url: getFullUrl(item.url),
    };
  });
};

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
  icons: makeAbsoluteUrl([
    // universal icons
    {
      url: src(require('./images/icon/256.png')),
      type: 'image/png',
      sizes: '256x256',
    },
    {
      url: src(require('./images/icon/128.png')),
      type: 'image/png',
      sizes: '128x128',
    },
    {
      url: src(require('./images/icon/64.png')),
      type: 'image/png',
      sizes: '64x64',
    },
    {
      url: src(require('./images/icon/32.png')),
      type: 'image/png',
      sizes: '32x32',
    },
    {
      url: src(require('./images/icon/16.png')),
      type: 'image/png',
      sizes: '16x16',
    },

    // apple icons
    {
      url: src(require('./images/icon/180.png')),
      type: 'image/png',
      sizes: '180x180',
      rel: 'apple-touch-icon',
    },
    {
      url: src(require('./images/icon/152.png')),
      type: 'image/png',
      sizes: '152x152',
      rel: 'apple-touch-icon',
    },
    {
      url: src(require('./images/icon/120.png')),
      type: 'image/png',
      sizes: '120x120',
      rel: 'apple-touch-icon',
    },
    {
      url: src(require('./images/icon/76.png')),
      type: 'image/png',
      sizes: '76x76',
      rel: 'apple-touch-icon',
    },

    // default favicon
    {
      url: '/favicon.ico',
      type: 'image/x-icon',
      sizes: '16x16 32x32 48x48 64x64 128x128',
    },
  ]),
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
  const { noJsClassName, noJsScript } = useNoJs();

  return (
    <html lang="en" className={noJsClassName} suppressHydrationWarning>
      <body className="bg-smokyBlack">
        {noJsScript}
        <ServiceWorkerRegister />
        <main
          className={cx(
            'mt-[15px] mb-[75px] mx-[12px] min-w-[259px]',
            'md:mt-[60px] md:mb-[100px] xl:mb-[60px]',
            '2xl:max-w-[1200px] 2xl:[margin-inline:auto]',
            'flex flex-col 2xl:flex-row 2xl:justify-center 2xl:items-stretch 2xl:gap-[25px]',
          )}
        >
          <div
            className={cx(
              'order-2',
              'xl:relative xl:w-max xl:m-auto',
              '2xl:min-w-[75%] 2xl:w-[75%] 2xl:m-0',
            )}
          >
            <NavBar />
            {children}
          </div>
          <SideBar />
        </main>
      </body>
    </html>
  );
}
