/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue-violet': {
					'50': '#f3f0ff',
					'100': '#ebe4ff',
					'200': '#d8cdff',
					'300': '#bea5ff',
					'400': '#9f72ff',
					'500': '#843aff',
					'600': '#7912ff',
					'700': '#6c01ff',
					'800': '#6200ea',
					'900': '#4b02b0',
					'950': '#2c0078',
				},
				'ebony-clay': {
					'50': '#f3f6fb',
					'100': '#e4e9f5',
					'200': '#d0d9ed',
					'300': '#afc1e1',
					'400': '#89a0d1',
					'500': '#6d83c4',
					'600': '#5a6cb6',
					'700': '#4f5ba6',
					'800': '#444b89',
					'900': '#252841',
					'950': '#161827',
				},		
			}
		},
	},
	plugins: [],
}
