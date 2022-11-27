const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#10141A',
				secondary: '#212936',
				accent: '#1C4F9C',
				comp: '#9C711C',
			},
		},
	},

	plugins: [],
};

module.exports = config;
