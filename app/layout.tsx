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
        <ServiceWorkerRegister />
        <main
          className={cx(
            'mt-[15px] mb-[75px] mx-[12px] min-w-[259px]',
            'md:mt-[60px] md:mb-[100px] xl:mb-[60px]',
            '2xl:max-w-[1200px] 2xl:[margin-inline:auto]',
            '2xl:flex 2xl:justify-center 2xl:items-stretch 2xl:gap-[25px]',
          )}
        >
          <SideBar />
          <div
            className={cx(
              'xl:relative xl:w-max xl:m-auto',
              '2xl:min-w-[75%] 2xl:w-[75%] 2xl:m-0',
            )}
          >
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
