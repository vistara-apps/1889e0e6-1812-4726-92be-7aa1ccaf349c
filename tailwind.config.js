/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(220, 20%, 15%)',
        accent: 'hsl(150, 60%, 45%)',
        primary: 'hsl(200, 80%, 50%)',
        surface: 'hsl(220, 20%, 20%)',
        'text-primary': 'hsl(0, 0%, 95%)',
        'text-secondary': 'hsl(0, 0%, 70%)',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      spacing: {
        lg: '24px',
        md: '16px',
        sm: '8px',
      },
      boxShadow: {
        card: '0 4px 12px hsla(0, 0%, 0%, 0.1)',
      },
    },
  },
  plugins: [],
}
