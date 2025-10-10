![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/xboy2012/xboy2012.github.io/nextjs.yml?branch=master&logo=github)
![TypeScript](https://img.shields.io/badge/typescript-%5E5.9.3-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/node.js-%3E=22.20.0-green?logo=nodedotjs)
![Prettier](https://img.shields.io/badge/prettier-^3.6.2-ff69b4.svg?logo=prettier)
![ESLint](https://img.shields.io/badge/eslint-^9.37.0-341bab.svg?logo=eslint)

![Next.js](https://img.shields.io/badge/next.js-15.5.4-20232a.svg?logo=next.js)
![React](https://img.shields.io/badge/react-^19.2.0-20232a.svg?logo=react)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-^4.1.14-38b2ac.svg?logo=tailwind-css)
![Yarn](https://img.shields.io/badge/yarn-1.22.22-2c8ebb.svg?logo=yarn)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?logo=markdown&logoColor=white)

[![Follow us on X](https://img.shields.io/twitter/follow/XBOY2012?label=Follow&style=social)](https://twitter.com/intent/user?screen_name=XBOY2012)

Welcome, I'm Nex Liu.

This is my personal website.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TypeScript

The whole project is embracing the TypeScript ecosystem, with over 95% coverage of TypeScript.
See the `Languages` section of the GitHub repository page for more details.

# CSS & Styles

The project is deeply integrated with Tailwind, which just makes the css rules more atomic and modular,
thus generating smaller CSS bundles for most pages.

As for the limitation of Tailwind, some complicated CSS rules still require manually implement.
In this case, CSS Modules are used, to avoid globally pollution.
But keep in mind that Tailwind is still the first choice if possible.

# Optimizations

The website is powered by [Next.js](https://nextjs.org/), from whom most common optimizations are already there.

Besides, the project follows some best practices to get better readability and maintenance:

- As modular as possible, which makes it easy to understand every part of the huge project
- Test-driven, making developers more confident, and getting a reliable product.
- follows the KISS principle. I know that for some special cases there are some tricky or magic algorithms
  to gain a better performance, as the cost of sacrificing the code readability.
  I'll do most of the trade-offs to gain a better performance while also keeps the code simple,
  at least from the caller's perspective.

# Code Standard

I try my best to enforce the best practices from the open-source community and some opinionated rules might apply.
There's no perfect or top 1 code standard around the world, but I'll do my best to find the appropriate rulesets,
that best suits the need of most general projects, and insist on the rules to gain more benefits from them.

Code standard covers more than just ESLint:

- Code formats are mostly ensured by Prettier.
- Static analyze of the JavaScript and TypeScript Code, using ESLint.
- Prebuild check by TypeScript Compiling.
- Best practices are enforced by Stylelint. (TODO)
- Some conventions and project-specific rules are implemented by custom rules and scripts.
- Git commit should follow the conventional commits standard.

## Test

The whole project has a 100% test coverage, with detailed tests.
I totally understand the importance of complementary test coverage, and enforce it in my project.

## Accessibility

The website has the following features aiming at a better experience for accessibility:

- Reading-Mode friendly.
- Supports browsing without JavasScript enabled.
- Supports browsing without CSS or Styles enabled.
- Semantic HTML5 tags, which makes screen reader better understand the page.

## PWA

The website has implemented features for PWA, it's still under construction and need improvements:

- I make use of Service Worker, to achieve goals such as prefetching, consistent caching and offline browsing.
- The website can be easily saved to the home screen of mobile devices, which will behave quite like a native app.
- More adaptations and optimizations are on the road.

## SEO

The website has already been optimized for SEO purpose:

- Provides a [sitemap.xml](https://xboy2012.github.io/sitemap.xml) file
- Provides a [robots.txt](https://xboy2012.github.io/robots.txt) file
- Semantic HTML5 tags, which makes it easier for search engines to grab contents.
- Already registered at
  [Google Search Console](https://search.google.com/search-console/index?resource_id=https%3A%2F%2Fxboy2012.github.io%2F) and
  [Bing Webmaster](https://www.bing.com/webmasters/home?siteUrl=https://xboy2012.github.io)
- There's no support for browsing or searching the website in China, due the Internet restriction there.
  The website is not optimized for Baidu, and there will never be any plan to do that. Thanks for your understanding.

## Deployment

The website is deployed to GitHub Pages.
I know that there is other options such as [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme),
but I see no need for it, especially for the backend-side (databases, backend servers, etc.) at least for now.

I'd like to keep it simple for now, and all pages are prebuilt powered by Next.js, and statically served via GitHub Pages.

The deployment is automatically triggered when new commits comes into the `master` branch.
Alongside the deployment, there are also pipelines for linting or testing to make the CI/CD more reliable.
