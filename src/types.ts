import type { ReactNode } from 'react';

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
  educations: { from: string; to: string; school: string; desc: string }[];
  workExperiences: {
    from: string;
    to: string;
    position: string;
    desc: string | string[];
  }[];
  skills: { skill: string; percent: number }[];
}

export interface BlogData {
  link: string;
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
