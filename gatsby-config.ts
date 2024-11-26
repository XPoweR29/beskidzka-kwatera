import type { GatsbyConfig } from "gatsby";
require('dotenv').config();

const config: GatsbyConfig = {
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'photos',
				path: `${__dirname}/src/assets/photos/gallery`,
			},
		},
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: { lang: 'pl-PL' },
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-image',
	],
};

export default config;
