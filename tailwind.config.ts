import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF8F2',
          50: '#FDFCF8',
          100: '#FAF8F2',
          200: '#EDE8DC',
          300: '#DDD5C4',
        },
        sage: {
          DEFAULT: '#7B9E87',
          100: '#D4E4D8',
          200: '#A8C4A2',
          300: '#7B9E87',
          400: '#5A7D65',
          500: '#4E6B58',
          900: '#2D4035',
        },
        charcoal: {
          DEFAULT: '#1A1D1B',
          50: '#F5F5F4',
          100: '#E8E9E7',
          200: '#C8CBCA',
          300: '#9A9E9C',
          400: '#6B716E',
          500: '#3D4440',
          600: '#2A2E2B',
          700: '#1A1D1B',
        },
        teal: {
          DEFAULT: '#2B5F5F',
          100: '#C5DADA',
          200: '#8BB8B8',
          300: '#4A8585',
          400: '#2B5F5F',
          500: '#1A3F3F',
        },
        brass: {
          DEFAULT: '#B8944A',
          100: '#EDE0C4',
          200: '#D4AE6A',
          300: '#B8944A',
          400: '#8A6E35',
          500: '#5E4A22',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
