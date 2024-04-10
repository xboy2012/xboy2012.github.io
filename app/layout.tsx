import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nex Liu',
  description:
    'I am a seasoned software engineer, with a solid foundation in Computer Science & Technology. My expertise, honed through roles at many well-known companies, such as NIO, Microsoft, LeetCode, Temu, and Tencent, encompasses a diverse tech stack. Notable achievements include refactoring legacy codebases, leading internationalization efforts, and optimizing web performance. I am eager to bring my skills and commitment to excellence to contribute effectively to challenging projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
