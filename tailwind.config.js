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
			gray: '#0b0b0c',
			gray_light: '#1e1e1e',
			gray_border: '#323232',
			txt: '#bdbdc0',
			white: '#fff',
			purple: '#7053ff',
			purple_light: '#7f65ff',
			purple_border: '#917aff',
			pink: '#ff2c60',
			pink_light: '#ff547e',
			pink_border: '#ff7194',
			blue: '#3f94ff',
			blue_border: '#72b0ff',
			blue_light: '#58a2ff',
			green: '#31b970',
			green_light: '#31b970',
			green_border: '#31b970',
			yellow: '#fbbf0d',
			yellow_light: '#ffca2e',
			yellow_border: '#ffd65e',
			red: '#f24822',
			red_light: '#fb6240',
			red_border: '#ff7050',
		},

		container: {
			center: true,
		},
	},
	plugins: [require('flowbite/plugin')],
}
