/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
	mode: "jit",
	theme: {
		extend: {
			fontFamily: {
				"catamaran": ["Catamaran"],
				"days-one": ["Days One"],
			},
		},
	},
  plugins: [],
}

