/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  animation: {
			'infinite-scroll': 'infinite-scroll 25s linear infinite',
		  },
		  keyframes: {
			'infinite-scroll': {
			  from: { transform: 'translateX(0)' },
			  to: { transform: 'translateX(-100%)' },
			},
		  },
		},
	  },
	// add my own theme colors to daisyui
	daisyui: {
		themes: [
		{mytheme: {
			"primary": "#041e42",	
			"secondary": "#9067c6",
			"accent": "#c0c0c0",
			"neutral": "#36454f",
			"base-100": "#e6e6fa",
			"info": "#38bdf8",
			"success": "#4ade80",
			"warning": "#fbbf24",
			"error": "#f87171",
		},},
		],
	},
	plugins: [
		require("daisyui"),
	],
}
