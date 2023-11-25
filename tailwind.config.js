/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      yllw: '#F6BD60',
      whte: '#EEEEEE',
      rd: '#E76F51',
      cyn: '#CBF3F0',
      blgrn: '#2EC4B6',
      blck: '#1A1A1A',
      gry: '#999999',
      drkgry: '#636363',
    },
  },
  plugins: [],
};
