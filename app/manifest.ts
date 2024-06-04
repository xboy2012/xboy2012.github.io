import type { MetadataRoute } from 'next';
import src from '../src/utils/getImageUrl';
import { colors } from '../src/config/colors';
import { userData } from '../src/data';
import { getFullUrl } from '../src/utils/getFullUrl';

interface Icon {
  src: string;
  type?: string;
  sizes?: string;
  purpose?: 'any' | 'maskable' | 'monochrome' | 'badge';
}

// FIXME: temporary hack fix, as Next.js is missing some necessary typings
interface ScreenShot {
  src: string;
  sizes: `${number}x${number}`;
  type: 'image/png' | 'image/jpeg';
  form_factor: 'wide' | 'narrow';
  label: string;
}

const makeAbsoluteSrc = <T extends { src: string }>(items: T[]): T[] => {
  return items.map((item): T => {
    return {
      ...item,
      // convert to absolute url to avoid relative path issues
      src: getFullUrl(item.src),
    };
  });
};

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${userData.name}'s Personal Website`,
    short_name: userData.name,
    description: userData.intro[0],
    start_url: '/',
    display: 'standalone',
    background_color: colors.smokyBlack,
    theme_color: colors.smokyBlack,
    orientation: 'portrait',
    icons: makeAbsoluteSrc<Icon>([
      {
        src: src(require('./images/icon/256.png')),
        type: 'image/png',
        sizes: '256x256',
      },
      {
        src: src(require('./images/icon/128.png')),
        type: 'image/png',
        sizes: '128x128',
      },
      {
        src: src(require('./images/icon/64.png')),
        type: 'image/png',
        sizes: '64x64',
      },
      {
        src: src(require('./images/icon/32.png')),
        type: 'image/png',
        sizes: '32x32',
      },
      {
        src: src(require('./images/icon/16.png')),
        type: 'image/png',
        sizes: '16x16',
      },
    ]),
    screenshots: makeAbsoluteSrc<ScreenShot>([
      // desktop screenshots
      {
        src: src(require('./images/screenshots/desktop/1.jpg')),
        type: 'image/jpeg',
        sizes: '1280x640',
        form_factor: 'wide',
        label: 'About',
      },
      {
        src: src(require('./images/screenshots/desktop/2.jpg')),
        type: 'image/jpeg',
        sizes: '1280x640',
        form_factor: 'wide',
        label: 'Resume',
      },
      {
        src: src(require('./images/screenshots/desktop/3.jpg')),
        type: 'image/jpeg',
        sizes: '1280x640',
        form_factor: 'wide',
        label: 'Portfolio',
      },
      {
        src: src(require('./images/screenshots/desktop/4.jpg')),
        type: 'image/jpeg',
        sizes: '1280x640',
        form_factor: 'wide',
        label: 'Blog',
      },

      // mobile screenshots
      {
        src: src(require('./images/screenshots/mobile/1.jpg')),
        type: 'image/jpeg',
        sizes: '640x1385',
        form_factor: 'narrow',
        label: 'About',
      },
      {
        src: src(require('./images/screenshots/mobile/2.jpg')),
        type: 'image/jpeg',
        sizes: '640x1385',
        form_factor: 'narrow',
        label: 'Resume',
      },
      {
        src: src(require('./images/screenshots/mobile/3.jpg')),
        type: 'image/jpeg',
        sizes: '640x1385',
        form_factor: 'narrow',
        label: 'Portfolio',
      },
      {
        src: src(require('./images/screenshots/mobile/4.jpg')),
        type: 'image/jpeg',
        sizes: '640x1385',
        form_factor: 'narrow',
        label: 'Blog',
      },
    ]),
  };
}
