module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				mono: ['Roboto Mono'],
				serif: ['Inter'],
				roboto: ['Roboto'],
			},
			colors: {
				background: '#1b263b',
				highlight: '#CCF5AC',
				font: '#e0e1dd',
				'font-secondary': '#778da9',
			},
			height: {
				95: '95vh',
			},
			minHeight: {
				custom: '400px',
			},
		},
	},
	variants: {
		extend: {
			textColor: ['group-hover'],
		},
	},
	plugins: [],
};
