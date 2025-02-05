import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': {
          800: '#1A1A1A',
          900: '#0A0A0A',
          950: '#050505',
        },
        'silver': {
          100: '#F5F5F7',
          200: '#E8E8EA',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
        },
        'accent': {
          gold: '#B8995C',
          pearl: '#F5F5F7',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'pinstripe': 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.02) 4px, rgba(255,255,255,0.02) 5px)',
        'diagonal-texture': 'linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.02) 75%, rgba(255,255,255,0.02)), linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.02) 75%, rgba(255,255,255,0.02))',
        'gradient-radial': 'radial-gradient(circle at center, var(--gradient-start, rgba(10, 26, 47, 0.5)), var(--gradient-end, transparent))',
        'shirt-texture': `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 1px,
          rgba(10, 26, 47, 0.01) 1px,
          rgba(10, 26, 47, 0.01) 2px
        )`,
      }
    },
  },
  plugins: [],
};

export default config;
