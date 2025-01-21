/** @type {import('tailwindcss').Config} */
export default {
	theme: {
	  extend: {
		colors: {
		  primary: {
			50: "#ecfdf5",
			100: "#d1fae5",
			200: "#a7f3d0",
			300: "#6ee7b7",
			400: "#34d399",
			500: "#10b981",
			600: "#059669",
			700: "#047857",
			800: "#065f46",
			900: "#064e3b",
			950: "#022c22",
		  },
		},
		fontFamily: {
		  sans: [
			"Inter",
			"ui-sans-serif",
			"-apple-system",
			"Segoe UI",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"Noto Sans",
			"sans-serif",
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
			"Noto Color Emoji",
		  ],
		  body: [
			"Inter",
			"ui-sans-serif",
			"-apple-system",
			"Segoe UI",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"Noto Sans",
			"sans-serif",
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
			"Noto Color Emoji",
		  ],
		},
	  },
	},
	plugins: [
	  require('flowbite/plugin'),
	  require('@tailwindcss/typography'), // Add the typography plugin
	],
	content: [
	  './node_modules/flowbite/**/*.js',
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
	],
  };
  