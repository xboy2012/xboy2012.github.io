import type { ReactNode } from 'react';

export type PathString = `/${string}`;

export type PageHashInfo = [PathString, string, string];
export type AssetHashInfo = [PathString, string];

export type HashInfo = [PageHashInfo[], AssetHashInfo[]];

export interface TimelineItem {
  from: string;
  to: string;
  title: string;
  desc: string | string[];
}

export interface UserData {
  name: string;
  title: string;
  email: string;
  phoneCA: string;
  location: string;
  facebook: string;
  twitter: string;
  github: string;
  npm: string;
  linkedin: string;
  intro: string[];
  educations: TimelineItem[];
  workExperiences: TimelineItem[];
  skills: { skill: string; percent: number }[];
}

export type BlogData = Readonly<{
  id: string;
  link?: string;
  title: string;
  desc: string;
  image: string;
  datetime: `${string}-${string}-${string}`;
  category: string;
}>;

export type ServiceData = Readonly<{
  name: string;
  image: string;
  desc: string;
}>;

export type ProjectCategory =
  | 'Applications'
  | 'Web development'
  | 'Game'
  | 'AI'
  | 'Business';

export type ProjectData = Readonly<{
  id: string;
  category: ProjectCategory;
  link: string;
  title: string;
  image: string;
}>;

export interface CompanyData {
  name: string;
  link: string;
  Logo: () => ReactNode;
}
