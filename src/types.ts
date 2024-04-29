import type { ReactNode } from 'react';

export interface TimelineItem {
  from: string;
  to: string;
  title: string;
  desc: string | string[];
}

export interface UserData {
  avatar: string;
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

export interface BlogData {
  id: string;
  link?: string;
  title: string;
  desc: string;
  image: string;
  datetime: `${string}-${string}-${string}`;
  category: string;
}

export type ProjectCategory = 'Web design' | 'Applications' | 'Web development';

export interface ProjectData {
  id: number;
  category: ProjectCategory;
  link: string;
  title: string;
  image: string;
}

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
