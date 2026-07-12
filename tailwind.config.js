/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      colors: {
        base: '#0c0a09',
        surface: '#161311',
        card: '#1c1917',
        elevated: '#292524',
        line: '#e7e5e417',
        text: '#fafaf9',
        muted: '#a8a29e',
        faint: '#78716c',
        accent: '#f59e0b',
        'accent-bright': '#fbbf24',
      },
      fontSize: {
        display: ['clamp(2.75rem, 5vw + 1rem, 5rem)', { lineHeight: '1.05' }],
        h2: ['clamp(2rem, 2.5vw + 1rem, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h3: ['clamp(1.25rem, 1vw + 1rem, 1.5rem)', { lineHeight: '1.25' }],
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
}
