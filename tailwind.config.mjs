/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#27272a',
				secondary: 'rgba(113, 113, 122, 0.3)',
				tertiary: '#fbbf24'
			},
		},
	},
	plugins: [],
}
