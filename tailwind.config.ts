import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		container: {
  			padding: {
  				DEFAULT: '20px',
  				lg: '80px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	darkMode: 'class',
  	keyframes: {
  		typewriter: {
  			'0%': {
  				width: '0'
  			},
  			'70%': {
  				width: '100%'
  			},
  			'100%': {
  				width: '100%'
  			}
  		},
  		blinkTextCursor: {
  			'0%, 100%': {
  				visibility: 'visible'
  			},
  			'50%': {
  				visibility: 'hidden'
  			}
  		},
  		slideIn: {
  			'0%': {
  				transform: 'translateY(10%)',
  				opacity: '0'
  			},
  			'100%': {
  				transform: 'translateY(0)',
  				opacity: '1'
  			}
  		}
  	},
  	animation: {
  		typewriter: 'typewriter 6s steps(44) 1s normal both',
  		blinkTextCursor: 'blinkTextCursor 1s steps(5, start) infinite'
  	}
  },
  plugins: [nextui(), require("tailwindcss-animate")],
};

export default config;
