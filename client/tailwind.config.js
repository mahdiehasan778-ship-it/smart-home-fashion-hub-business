/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Dark navy — used for navbar, footer, hero overlays
        navy: {
          50: '#e8edf5',
          100: '#c7d3e6',
          200: '#9fb0d1',
          300: '#728db9',
          400: '#4a6da3',
          500: '#2c5289',
          600: '#1e3f70',
          700: '#152f57',
          800: '#0d1f3f',   // primary navbar/footer bg
          900: '#081428',
          950: '#040a17'
        },
        // Warm accent — used for CTAs, badges, deal prices
        accent: {
          50: '#fff4ed',
          100: '#ffe6d5',
          200: '#ffc9aa',
          300: '#ffa374',
          400: '#ff7a3c',
          500: '#ff5a1f',   // primary CTA (SHOP NOW)
          600: '#f04206',
          700: '#c73207',
          800: '#9e290e',
          900: '#7f250f'
        },
        gold: {
          400: '#facc15',
          500: '#eab308'   // star ratings
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 2px 10px rgba(13, 31, 63, 0.08)',
        'card-hover': '0 8px 24px rgba(13, 31, 63, 0.16)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
};