import type { GatsbyConfig } from 'gatsby';
require('dotenv').config();

const config: GatsbyConfig = {
	graphqlTypegen: true,
	siteMetadata: {
		siteUrl: 'https://www.kwateryuzosi.pl',
	},
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
		'gatsby-plugin-anchor-links',
		`gatsby-plugin-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.kwateryuzosi.pl',
				sitemap: 'https://www.kwateryuzosi.pl/sitemap-index.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		{
			resolve: 'gatsby-plugin-htaccess',
			options: {
				https: true,
				www: false,
				ErrorDocument: '404.html', 
			},
		},
	],
};

export default config;
