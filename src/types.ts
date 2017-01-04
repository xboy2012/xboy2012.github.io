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
  educations: { from: string; to: string; school: string; desc: string }[];
  workExperiences: {
    from: string;
    to: string;
    position: string;
    desc: string;
  }[]
  skills: { skill: string; percent: number }[]
}
