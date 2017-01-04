import type { UserData } from "./types";

export const userData: UserData = {
  avatar: "/assets/my-avatar.png",
  name: "Nex Liu",
  title: "Staff Software Engineer",
  email: "xboy2008@live.cn",
  phoneCA: "+12369657673",
  location: "Richmond, BC, Canada",
  facebook: "xboy2012",
  twitter: "xboy2012",
  github: "xboy2012",
  linkedin: "xboy2012",

  educations: [
    {
      from: "2007",
      to: "2008",
      school: "University school of the arts",
      desc: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      from: "2006",
      to: "2007",
      school: "New york academy of art",
      desc: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      from: "2002",
      to: "2004",
      school: "High school of art and design",
      desc: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
  ],

  workExperiences: [
    {
      from: "2015",
      to: "present",
      position: "Creative Director",
      desc: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
    },
    {
      from: "2013",
      to: "2015",
      position: "Art Director",
      desc: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
    },
    {
      from: "2010",
      to: "2013",
      position: "Web Designer",
      desc: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
    },
  ],

  skills: [
    { skill: "Web design", percent: 80 },
    { skill: "Graphic design", percent: 70 },
    { skill: "Branding", percent: 90 },
    { skill: "WordPress", percent: 50 },
  ],
};
