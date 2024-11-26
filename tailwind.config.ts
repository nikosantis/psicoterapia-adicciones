import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
      },
      colors: {
        'u-orange': {
          50: '#ffd57f',
          100: '#ffcb75',
          200: '#ffc16b',
          300: '#ffb761',
          400: '#ffad57',
          500: '#f5a34d',
          600: '#eb9943',
          700: '#e18f39',
          800: '#d7852f',
          900: '#cd7b25',
        },
        'u-orange-primary': {
          50: '#ffa832',
          100: '#ff9e28',
          200: '#ff941e',
          300: '#fe8a14',
          400: '#f4800a',
          500: '#ea7600',
          600: '#e06c00',
          700: '#d66200',
          800: '#cc5800',
          900: '#c24e00',
        },
        'u-orange-secondary': {
          50: '#ce8032',
          100: '#c47628',
          200: '#ba6c1e',
          300: '#b06214',
          400: '#a6580a',
          500: '#9c4e00',
          600: '#924400',
          700: '#883a00',
          800: '#7e3000',
          900: '#742600',
        },
        'u-blue': {
          50: '#32619e',
          100: '#285794',
          200: '#1e4d8a',
          300: '#144380',
          400: '#0a3976',
          500: '#002f6c',
          600: '#002562',
          700: '#001b58',
          800: '#00114e',
          900: '#000744',
        },
        wsp: {
          50: '#57ff98',
          100: '#4dfb8e',
          200: '#43f184',
          300: '#39e77a',
          400: '#2fdd70',
          500: '#25d366',
          600: '#1bc95c',
          700: '#11bf52',
          800: '#07b548',
          900: '#00ab3e',
        },
      },
      keyframes: {
        'slide-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'slide-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.2s ease-out',
        'slide-up': 'slide-up 0.2s ease-out',
      },
    },
  },
  plugins: [forms, typography],
}
export default config
