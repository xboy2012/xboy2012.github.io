export type WithLooseDefault<T> = T | { default: T };

export type UrlOrSrc =
  | WithLooseDefault<ImportedImage>
  | Promise<WithLooseDefault<ImportedImage>>
  | (() =>
      | WithLooseDefault<ImportedImage>
      | Promise<WithLooseDefault<ImportedImage>>);

export type ImageDefinition<
  K extends string,
  T extends { [P in K]: string },
> = Omit<T, K> & {
  [P in K]: UrlOrSrc;
};

export type JsonSerializable =
  | string
  | number
  | boolean
  | undefined
  | null
  | JsonSerializable[]
  | { [key: string]: JsonSerializable };

export type ImportedImage = { src: string } | string;

export type PathString = `/${string}`;

export type PageHashInfo = [PathString, string, string];
export type AssetHashInfo = [PathString, string];

export type HashInfo = [PageHashInfo[], AssetHashInfo[]];

export interface EducationItem {
  from: string;
  to: string;
  title: string;
  desc: string;
}

export interface WorkExperienceItem {
  from: string;
  to: string;
  title: string;
  desc: string[];
  location: string;
  company: string;
}

export interface UserData {
  name: string;
  title: string;
  email: string;
  phoneCA: string;
  location: {
    city: string;
    province: string;
    country: string;
  };
  facebook: string;
  twitter: string;
  github: string;
  npm: string;
  linkedin: string;
  intro: string[];
  services: ServiceData[];
  educations: EducationItem[];
  workExperiences: WorkExperienceItem[];
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

export type ServiceId = 'frontend' | 'fullstack' | 'devops' | 'arch';

export interface ServiceData {
  id: ServiceId;
  name: string;
  desc: string;
}

export type ProjectCategory =
  | 'Applications'
  | 'Web development'
  | 'Game'
  | 'AI'
  | 'Business';

export interface ProjectData {
  id: string;
  category: ProjectCategory;
  link: string;
  title: string;
  image: string;
}
