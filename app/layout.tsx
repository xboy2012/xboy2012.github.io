import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { cx } from '../src/utils/cx';
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
import type { WithLooseDefault, ImportedImage } from '../src/types';
import './globals.css';
import { BuyMeACoffee } from '../components/BuyMeACoffee';

const defineIcons = (
  icons: {
    url:
      | WithLooseDefault<ImportedImage>
      | Promise<WithLooseDefault<ImportedImage>>
      | (() =>
          | WithLooseDefault<ImportedImage>
          | Promise<WithLooseDefault<ImportedImage>>);
    type: string;
    sizes: string;
    rel?: string;
  }[],
): Promise<
  {
    url: string;
    type: string;
    sizes: string;
    rel?: string;
  }[]
> => {
  const promises = icons.map(async (icon) => {
    const url = icon.url;
    const urlObj = await (typeof url === 'function' ? url() : url);
    const fullUrl = getFullUrl(src(urlObj));
    return { ...icon, url: fullUrl };
  });
  return Promise.all(promises);
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
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
    icons: await defineIcons([
      // universal icons
      {
        url: import('./images/icon/ns-256.png'),
        type: 'image/png',
        sizes: '256x256',
      },
      {
        url: import('./images/icon/ns-128.png'),
        type: 'image/png',
        sizes: '128x128',
      },
      {
        url: import('./images/icon/64.png'),
        type: 'image/png',
        sizes: '64x64',
      },
      {
        url: import('./images/icon/32.png'),
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: import('./images/icon/16.png'),
        type: 'image/png',
        sizes: '16x16',
      },

      // apple icons
      {
        url: import('./images/icon/ns-180.png'),
        type: 'image/png',
        sizes: '180x180',
        rel: 'apple-touch-icon',
      },
      {
        url: import('./images/icon/ns-152.png'),
        type: 'image/png',
        sizes: '152x152',
        rel: 'apple-touch-icon',
      },
      {
        url: import('./images/icon/ns-120.png'),
        type: 'image/png',
        sizes: '120x120',
        rel: 'apple-touch-icon',
      },
      {
        url: import('./images/icon/ns-76.png'),
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
    <html
      lang="en"
      className={cx(noJsClassName, 'print:bg-white')}
      suppressHydrationWarning
    >
      <body className="bg-smokyBlack print:bg-white">
        {noJsScript}
        <ServiceWorkerRegister />
        <main
          className={cx(
            'mt-4 mb-19 mx-3 min-w-65 text-white2',
            'md:mt-15 md:mb-25 xl:mb-15',
            '2xl:max-w-300 2xl:mx-auto',
            'flex flex-col 2xl:flex-row 2xl:justify-center 2xl:items-stretch 2xl:gap-6',
            'print:text-black print:!m-0',
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
          <BuyMeACoffee />
        </main>
      </body>
    </html>
  );
}
