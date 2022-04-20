module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
	],
	theme: {
		extend: {
			height: {
				fit: 'fit-content',
			},
			width: {
				fit: 'fit-content',
			},
			borderRadius: {},
			colors: {},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1200px',
			'2xl': '1536px',
			'sm-only': { min: '640px', max: '767px' },
			'md-only': { min: '768px', max: '1023px' },
			'lg-only': { min: '1024px', max: '1279px' },
			'xl-only': { min: '1200px', max: '1535px' },
			'md-down': { max: '767px' },
			'lg-down': { max: '1023px' },
			'xl-down': { max: '1199px' },
			'2xl-down': { max: '1535px' },
		},
		zIndex: {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			6: 6,
			7: 7,
			8: 8,
			9: 9,
			10: 10,
			11: 11,
			12: 12,
			13: 13,
			14: 14,
			15: 15,
			16: 16,
			17: 17,
			18: 18,
			19: 19,
			20: 20,
			99: 99,
			100: 100,
			auto: 'auto',
		},
	},
	plugins: [],
};
