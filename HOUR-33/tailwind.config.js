/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	purge: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				"catamaran": ["Catamaran"],
				"days-one": ["Days One"],
			},
		},
	},
	plugins: [],
};
