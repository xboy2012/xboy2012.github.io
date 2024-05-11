import type { ReactNode } from 'react';

export type PathString = `/${string}`;

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

export interface TestimonialData {
  name: string;
  avatar: string;
  datetime: `${string}-${string}-${string}`;
  text: string;
}

export interface CompanyData {
  name: string;
  link: string;
  Logo: () => ReactNode;
}
