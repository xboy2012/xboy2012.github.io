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
      from: "", // 2007
      to: "", // 2008
      school: "East China University of Science & Technology",
      desc: "Bachelor's Degree of Computer Science & Technology",
    },
  ],

  workExperiences: [
    {
      from: "2023",
      to: "2024",
      position: "Staff Software Engineer at NIO",
      desc: [
        "• Designed and developed the supply chain system, increasing business capacity",
        "• Rewrite the core low-code rendering engine, gaining better performance, reducing bugs and improving building\n" +
          "process",
        "• Lead the i18n end to end solution, for developing and operating",
        "• Enhanced code standards and reduce maintenance cost by 20%",
        "• Introduced unit tests and e2e tests using Jest and Puppeteer",
      ],
    },
    {
      from: "2022",
      to: "2023",
      position: "Senior Software Engineer (Level 64) at Microsoft",
      desc: [
        "• Contributed to the daily iteration of Bing.com, increased key metrics for revenue by 1%",
        "• Conducted A/B tests on experimental features to determine the most revenue-generating option, diving deep to identify the best-performing variant",
        "• Conducted internal experiments to explore the integration of ChatGPT into Bing",
        "• Brainstormed innovative ideas to improve user experience, consistently delivering weekly releases of fast-paced features",
      ],
    },
    {
      from: "2018",
      to: "2022",
      position: "Front-end Lead at Temu",
      desc: [
        "• Led the full-stack system design for low-code platform, with standard SDKs and detailed documents",
        "• Built a SSR framework, implementing stream rendering, benchmarking 30% higher than Next.js",
        "• Implemented a unified coding standard, and led benchmark platform to enforce best practices among 10 different legacy projects",
        "• Leveraged CI/CD best practices, and documented every action evolving repeatable actions into automation",
        "• Conducted over 80 technical interviews, with 5 senior engineers and 10 junior engineers recruited",
        "• Led weekly internal technical forum for over 20 times in 4 years",
      ],
    },
    {
      from: "2012",
      to: "2018",
      position: "Senior Full-stack Developer at Tencent",
      desc: [
        "• Engineered distributed web applications, employing Database sharding, integrating Cache Layer",
        "• Refactored and migrated multiple projects into using latest tech-stacks, improving maintenance",
        "• Led hybrid app solutions using Weex and React-Native for browsers, WebView and Microapps in WeChat",
        "• Conducted peer code reviews and collaborate with intelligent engineers to improve overall code quality",
        "• Optimize web performance for multiple projects, with noticeable results",
        "• Invented an protocol to merge multiple requests (prior to GraphQL)",
        "• Invented a front-end MVVM framework (prior to React)",
        "• Created an app framework inspired by Laravel and Nova, streamlining business logic and resolving compatibility issues across various PHP versions",
      ],
    },
  ],

  skills: [
    { skill: "Front-end Development", percent: 90 },
    { skill: "Full-stack Development", percent: 80 },
    { skill: "Back-end Development", percent: 70 },
    { skill: "DevOps", percent: 70 },
    { skill: "Team Management", percent: 60 },
    { skill: "Recruitment", percent: 60 },
  ],
};
