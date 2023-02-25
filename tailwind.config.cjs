/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': '#1a120b',
				'primary-light': '#2d3748',
				'primary-dark': '#171923',
				'secondary': '#3c2a21',
				'secondary-light': '#d5cea3',
			},
		
		},
		plugins: [],
	}
}
