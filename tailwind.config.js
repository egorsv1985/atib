/** @type {import('tailwindcss').Config} */
export default {
	content: ['./**/*.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['SF UI Text', 'ui-sans-serif', 'system-ui'],
				display: ['SF UI Display', 'ui-sans-serif', 'system-ui'],
			},
		},

		colors: {
			gray_500: '#0b0b0c',
			gray_light: '#1e1e1e',
			gray_border: '#323232',
			txt: '#bdbdc0',
			white: '#fff',
			purple_500: '#7053ff',
			purple_light: '#7f65ff',
			purple_border: '#917aff',
			pink_500: '#ff2c60',
			pink_light: '#ff547e',
			pink_border: '#ff7194',
			blue_500: '#3f94ff',
			blue_border: '#72b0ff',
			blue_light: '#58a2ff',
			green_500: '#31b970',
			green_light: '#31b970',
			green_border: '#31b970',
			yellow_500: '#fbbf0d',
			yellow_light: '#ffca2e',
			yellow_border: '#ffd65e',
			red_500: '#f24822',
			red_light: '#fb6240',
			red_border: '#ff7050',
		},

		container: {
			center: true,
		},
	},
	plugins: [
		require('flowbite/plugin'),
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1126px',
					},
					'@screen xl': {
						maxWidth: '1126px',
					},
				},
			})
		},
	],
}
