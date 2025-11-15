import type { MetadataRoute } from 'next';
import { colors } from '../src/config/colors';
import { userData } from '../src/data';
import { makeAbsoluteSrc } from '../src/utils/makeAbsoluteSrc';
import type { ReadonlyDeep } from 'type-fest';

const getIcons = () => {
  return makeAbsoluteSrc<
    'src',
    {
      src: string;
      type?: string;
      sizes?: string;
      purpose?: 'any' | 'maskable' | 'monochrome';
    }
  >('src', [
    {
      src: import('./images/icon/ns-256.png'),
      type: 'image/png',
      sizes: '256x256',
    },
    {
      src: import('./images/icon/ns-128.png'),
      type: 'image/png',
      sizes: '128x128',
    },
    {
      src: import('./images/icon/64.png'),
      type: 'image/png',
      sizes: '64x64',
    },
    {
      src: import('./images/icon/32.png'),
      type: 'image/png',
      sizes: '32x32',
    },
    {
      src: import('./images/icon/16.png'),
      type: 'image/png',
      sizes: '16x16',
    },
  ]);
};

const getScreenshots = () => {
  return makeAbsoluteSrc<
    'src',
    {
      src: string;
      sizes: `${number}x${number}`;
      type: 'image/png' | 'image/jpeg';
      form_factor: 'wide' | 'narrow';
      label: string;
    }
  >('src', [
    // desktop screenshots
    {
      src: import('./images/screenshots/desktop/ns-1.jpg'),
      type: 'image/jpeg',
      sizes: '1280x640',
      form_factor: 'wide',
      label: 'About',
    },
    {
      src: import('./images/screenshots/desktop/ns-2.jpg'),
      type: 'image/jpeg',
      sizes: '1280x640',
      form_factor: 'wide',
      label: 'Resume',
    },
    {
      src: import('./images/screenshots/desktop/ns-3.jpg'),
      type: 'image/jpeg',
      sizes: '1280x640',
      form_factor: 'wide',
      label: 'Portfolio',
    },
    {
      src: import('./images/screenshots/desktop/ns-4.jpg'),
      type: 'image/jpeg',
      sizes: '1280x640',
      form_factor: 'wide',
      label: 'Blog',
    },

    // mobile screenshots
    {
      src: import('./images/screenshots/mobile/ns-1.jpg'),
      type: 'image/jpeg',
      sizes: '640x1385',
      form_factor: 'narrow',
      label: 'About',
    },
    {
      src: import('./images/screenshots/mobile/ns-2.jpg'),
      type: 'image/jpeg',
      sizes: '640x1385',
      form_factor: 'narrow',
      label: 'Resume',
    },
    {
      src: import('./images/screenshots/mobile/ns-3.jpg'),
      type: 'image/jpeg',
      sizes: '640x1385',
      form_factor: 'narrow',
      label: 'Portfolio',
    },
    {
      src: import('./images/screenshots/mobile/ns-4.jpg'),
      type: 'image/jpeg',
      sizes: '640x1385',
      form_factor: 'narrow',
      label: 'Blog',
    },
  ]);
};

const generateManifest = async (): Promise<
  ReadonlyDeep<MetadataRoute.Manifest>
> => {
  const [icons, screenshots] = await Promise.all([
    getIcons(),
    getScreenshots(),
  ]);
  return {
    name: `${userData.name}'s Personal Website`,
    short_name: userData.name,
    description: userData.intro[0],
    start_url: '/',
    display: 'standalone',
    background_color: colors.smokyBlack,
    theme_color: colors.smokyBlack,
    orientation: 'portrait',
    icons,
    screenshots,
  };
};

export const dynamic = 'force-static';

export default generateManifest;
