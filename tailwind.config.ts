import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '450px',
      'md': '580px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1250px',
    },
    fontSize: {
      '1': '24px',
      '2': '18px',
      '3': '17px',
      '4': '16px',
      '5': '15px',
      '6': '14px',
      '7': '13px',
      '8': '11px',
    },
    fontWeight: {
      '200': '300',
      '400': '400',
      '500': '500',
      '600': '600',
    },
    colors: {
      'jet': 'hsl(0, 0%, 22%)',
      'onyx': 'hsl(240, 1%, 17%)',
      'eerieBlack1': 'hsl(240, 2%, 13%)',
      'eerieBlack2': 'hsl(240, 2%, 12%)',
      'smokyBlack': 'hsl(0, 0%, 7%)',
      'white1': 'hsl(0, 0%, 100%)',
      'white2': 'hsl(0, 0%, 98%)',
      'orangeYellowCrayola': 'hsl(45, 100%, 72%)',
      'vegasGold': 'hsl(45, 54%, 58%)',
      'lightGray': 'hsl(0, 0%, 84%)',
      'lightGray70': 'hsla(0, 0%, 84%, 0.7)',
      'bittersweetShimmer': 'hsl(0, 43%, 51%)',

      'navbarBg': 'hsla(240, 1%, 17%, 0.75)',
    },
    extend: {
      spacing: {
        '7.5': '30px'
      },
      borderRadius: {
        '2.5xl': '20px'
      },
      boxShadow: {
        '1': '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
        '1xl': '-4px 8px 24px hsla(0, 0%, 0%, 0.125)',
        '2': '0 16px 30px hsla(0, 0%, 0%, 0.25)',
        '2xl': '0 16px 30px hsla(0, 0%, 0%, 0.125)',
        '3': '0 16px 40px hsla(0, 0%, 0%, 0.25)',
        '3xl': '0 16px 40px hsla(0, 0%, 0%, 0.125)',
        '4': '0 25px 50px hsla(0, 0%, 0%, 0.15)',
        '5': '0 24px 80px hsla(0, 0%, 0%, 0.25)',
      },
      zIndex: {
        '5': '5',
      }
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
