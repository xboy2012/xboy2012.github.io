import type { MetadataRoute } from 'next';
import { colors } from '../src/config/colors';
import { userData } from '../src/data';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: userData.name,
    short_name: userData.name,
    description: userData.intro.join(''),
    start_url: '/',
    display: 'standalone',
    background_color: colors.smokyBlack,
    theme_color: colors.smokyBlack,
    icons: [
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  };
}
