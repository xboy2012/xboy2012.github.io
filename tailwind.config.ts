import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '580px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1250px',
    },
    extend: {
      animation: {
        fade: 'fade 0.5s ease backwards',
        scaleUp: 'scaleUp 0.25s ease forwards',
      },
      colors: {
        jet: 'hsl(0, 0%, 22%)',
        onyx: 'hsl(240, 1%, 17%)',
        overlay: 'hsl(0, 0%, 5%)',
        overlay2: 'hsla(0, 0%, 0%, 0.5)',
        eerieBlack1: 'hsl(240, 2%, 13%)',
        eerieBlack2: 'hsl(240, 2%, 12%)',
        eerieBlack3: 'hsl(240, 2%, 20%)',
        // hsla(0, 0%, 0%, 0.5)
        smokyBlack: 'hsl(0, 0%, 7%)',
        white1: 'hsl(0, 0%, 100%)',
        white2: 'hsl(0, 0%, 98%)',
        orangeYellowCrayola: 'hsl(45, 100%, 72%)',
        vegasGold: 'hsl(45, 54%, 58%)',
        lightGray: 'hsl(0, 0%, 84%)',
        lightGray70: 'hsla(0, 0%, 84%, 0.7)',
        bittersweetShimmer: 'hsl(0, 43%, 51%)',

        navbarBg: 'hsla(240, 1%, 17%, 0.75)',
      },
      gridTemplateColumns: {
        '1fr': '1fr',
        '1fr1fr': '1fr 1fr',
        r3_1fr: 'repeat(3, 1fr)',
      },
      spacing: {
        '7.5': '30px',
        contact: 'calc(100% - 46px)',
        contact2: 'calc(100% - 64px)',
      },
      backgroundImage: {
        bgGradientOnyx:
          'linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)',
        bgGradientJet:
          'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%)',
        borderGradientOnyx:
          'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
        textGradientYellow:
          'linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))',
      },
      borderRadius: {
        '2.5xl': '20px',
        inherit: 'inherit',
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
      fontSize: {
        '1': 'var(--fs-1)',
        '2': 'var(--fs-2)',
        '3': 'var(--fs-3)',
        '4': 'var(--fs-4)',
        '5': 'var(--fs-5)',
        '6': 'var(--fs-6)',
        '7': 'var(--fs-7)',
        '8': 'var(--fs-8)',
      },
      fontWeight: {
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
      },
      minWidth: {
        test_xl: 'calc(50% - 15px)',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '5': '5',
      },
      scale: {
        '80': '0.8',
      },
      transitionTimingFunction: {
        default: 'ease',
      },
      transitionDuration: {
        '250': '250ms',
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('webkit-scrollbar', '&::-webkit-scrollbar');
      addVariant('webkit-scrollbar-track', '&::-webkit-scrollbar-track');
      addVariant('webkit-scrollbar-thumb', '&::-webkit-scrollbar-thumb');
      addVariant('webkit-scrollbar-button', '&::-webkit-scrollbar-button');
    }),
  ],
};
export default config;
