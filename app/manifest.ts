import type { MetadataRoute } from 'next';
import { colors } from '../src/config/colors';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Liu's Personal Website",
    short_name: 'Nex Liu',
    description:
      'I am a seasoned software engineer, with a solid foundation in Computer Science & Technology. My expertise, honed through roles at many well-known companies, such as NIO, Microsoft, LeetCode, Temu, and Tencent, encompasses a diverse tech stack. Notable achievements include refactoring legacy codebases, leading internationalization efforts, and optimizing web performance. I am eager to bring my skills and commitment to excellence to contribute effectively to challenging projects.',
    start_url: '/',
    display: 'standalone',
    background_color: colors.smokyBlack,
    theme_color: colors.smokyBlack,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
