import type { MetadataRoute } from 'next';
import { colors } from '../src/config/colors';
import { APP_DEFAULT_TITLE, APP_DESCRIPTION } from '../src/config/app';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_DEFAULT_TITLE,
    short_name: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: colors.smokyBlack,
    theme_color: colors.smokyBlack,
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  };
}
