import type { MetadataRoute } from 'next';
import src from '../src/utils/getImageUrl';
import { colors } from '../src/config/colors';
import { userData } from '../src/data';
import { getFullUrl } from '../src/utils/getFullUrl';
import type { ImportedImage, WithLooseDefault } from '../src/types';

interface Icon {
  src: string;
  type?: string;
  sizes?: string;
  purpose?: 'any' | 'maskable' | 'monochrome' | 'badge';
}

type Def<T extends { src: string }> = Omit<T, 'src'> & {
  src:
    | WithLooseDefault<ImportedImage>
    | Promise<WithLooseDefault<ImportedImage>>
    | (() =>
        | WithLooseDefault<ImportedImage>
        | Promise<WithLooseDefault<ImportedImage>>);
};

// FIXME: temporary hack fix, as Next.js is missing some necessary typings
interface ScreenShot {
  src: string;
  sizes: `${number}x${number}`;
  type: 'image/png' | 'image/jpeg';
  form_factor: 'wide' | 'narrow';
  label: string;
}

const makeAbsoluteSrc = <T extends { src: string }>(
  icons: Def<T>[],
): Promise<T[]> => {
  const promises = icons.map(async (icon) => {
    const url = icon.src;
    const urlObj = await (typeof url === 'function' ? url() : url);
    const fullUrl = getFullUrl(src(urlObj));
    return { ...icon, src: fullUrl } as T;
  });
  return Promise.all(promises);
};

const generateManifest = async (): Promise<MetadataRoute.Manifest> => {
  return {
    name: `${userData.name}'s Personal Website`,
    short_name: userData.name,
    description: userData.intro[0],
    start_url: '/',
    display: 'standalone',
    background_color: colors.smokyBlack,
    theme_color: colors.smokyBlack,
    orientation: 'portrait',
    icons: await makeAbsoluteSrc<Icon>([
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
    ]),
    screenshots: await makeAbsoluteSrc<ScreenShot>([
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
    ]),
  };
};

export default generateManifest;
