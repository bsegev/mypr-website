import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Display & Hero text
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 72px
        'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 60px
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 48px
        
        // Headings
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 40px
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 32px
        'h3': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 24px
        'h4': ['1.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 20px
        
        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.5' }], // 18px
        'body': ['1rem', { lineHeight: '1.5' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        
        // Special cases
        'caption': ['0.75rem', { lineHeight: '1.5' }], // 12px
        'overline': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.1em' }], // 14px
      },
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
        'gradient-radial': 'radial-gradient(circle at center, var(--gradient-start, rgba(10, 10, 10, 0.5)), var(--gradient-end, transparent))',
        'shirt-texture': `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 1px,
          rgba(10, 10, 10, 0.01) 1px,
          rgba(10, 10, 10, 0.01) 2px
        )`,
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
