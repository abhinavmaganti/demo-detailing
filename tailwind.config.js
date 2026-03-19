/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        obsidian: '#080C10',
        navy: {
          950: '#03071A',
          900: '#060D24',
          800: '#0A1535',
          700: '#0F2050',
        },
        silver: {
          300: '#D0D8E4',
          400: '#A8B4C4',
          500: '#7A8799',
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
          electric: '#0EA5E9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic': 'linear-gradient(135deg, #1a1f2e 0%, #0d1117 50%, #1a2035 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(8,12,16,0) 0%, rgba(8,12,16,0.7) 60%, rgba(8,12,16,1) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'slide-in-left': 'slideInLeft 0.7s ease forwards',
        'slide-in-right': 'slideInRight 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.2)',
        'card': '0 4px 40px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 60px rgba(59, 130, 246, 0.15)',
      },
    },
  },
  plugins: [],
};
