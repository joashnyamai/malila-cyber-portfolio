import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        cyber: {
          primary: '#5c4adc',
          secondary: '#7a5cdc',
          accent: '#4a5cdc',
          dark: '#1a1f2c',
          light: '#8e7adc',
          muted: '#6b5adc',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(124, 58, 237, 0.7), 0 0 40px rgba(124, 58, 237, 0.5)' 
          },
        },
        'text-glitch': {
          '0%, 100%': { 
            textShadow: '0 0 2px rgba(124, 58, 237, 0.8), 0 0 5px rgba(124, 58, 237, 0.4)' 
          },
          '50%': { 
            textShadow: '0 0 5px rgba(124, 58, 237, 1), 0 0 10px rgba(124, 58, 237, 0.6)' 
          },
        },
        'typing': {
          from: { width: '0' },
          to: { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#7C3AED' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite',
        'text-glitch': 'text-glitch 1.5s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret .75s step-end infinite'
      },
      backgroundImage: {
        'cyber-grid': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h100v1H0zM0 10h100v1H0zM0 20h100v1H0zM0 30h100v1H0zM0 40h100v1H0zM0 50h100v1H0zM0 60h100v1H0zM0 70h100v1H0zM0 80h100v1H0zM0 90h100v1H0z' fill='rgba(124, 58, 237, 0.1)'/%3E%3Cpath d='M0 0h1v100H0zM10 0h1v100h-1zM20 0h1v100h-1zM30 0h1v100h-1zM40 0h1v100h-1zM50 0h1v100h-1zM60 0h1v100h-1zM70 0h1v100h-1zM80 0h1v100h-1zM90 0h1v100h-1z' fill='rgba(124, 58, 237, 0.1)'/%3E%3C/svg%3E\")",
      },
      textShadow: {
        sm: '0 0 2px rgba(124, 58, 237, 0.8)',
        DEFAULT: '0 0 5px rgba(124, 58, 237, 0.7), 0 0 10px rgba(124, 58, 237, 0.4)',
        lg: '0 0 10px rgba(124, 58, 237, 1), 0 0 20px rgba(124, 58, 237, 0.6)',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities, theme, config }) {
      const textShadow = theme('textShadow');
      const utilities = {};
      
      Object.entries(textShadow).forEach(([key, value]) => {
        utilities[`.text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`] = {
          textShadow: value,
        };
      });
      
      addUtilities(utilities);
    },
  ],
} satisfies Config;
