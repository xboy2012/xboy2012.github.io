import type { CompanyData } from './types';
import { Microsoft } from '../components/Company/Microsoft';
import { Tencent } from '../components/Company/Tencent';
import { Nio } from '../components/Company/Nio';
import { LeetCode } from '../components/Company/LeetCode';
import { Temu } from '../components/Company/Temu';
import { Pdd } from '../components/Company/Pdd';
import { MyShell } from '../components/Company/MyShell';
import { Wacai } from '../components/Company/Wacai';

export const companies: CompanyData[] = [
  {
    name: 'Microsoft',
    link: 'https://www.microsoft.com',
    Logo: Microsoft,
  },
  {
    name: 'Tecent',
    link: 'https://www.tencent.com',
    Logo: Tencent,
  },
  {
    name: 'NIO',
    link: 'https://www.nio.com',
    Logo: Nio,
  },
  {
    name: 'LeetCode',
    link: 'https://leetcode.com',
    Logo: LeetCode,
  },
  {
    name: 'Temu',
    link: 'https://www.temu.com',
    Logo: Temu,
  },
  {
    name: 'Pinduoduo',
    link: 'https://m.pinduoduo.com',
    Logo: Pdd,
  },
  {
    name: 'MyShell.ai',
    link: 'https://myshell.ai',
    Logo: MyShell,
  },
  {
    name: 'Wacai',
    link: 'https://www.wacai.com',
    Logo: Wacai,
  },
];
