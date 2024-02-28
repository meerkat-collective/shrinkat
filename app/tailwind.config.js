/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				brand1: "#65460c",
				kat: {
					50: "#E8AE40",
					100: "#E6A62E",
					200: "#D29219",
					300: "#AE7915",
					400: "#895F10",
					500: "#65460C",
					600: "#332306",
					700: "#010000",
					800: "#000000",
					900: "#000000",
					950: "#000000"
				}
			}
		}
	},
	plugins: []
};
