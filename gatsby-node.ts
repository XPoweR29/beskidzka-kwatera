import { GatsbyNode } from "gatsby";
import * as path from "path";
require('dotenv').config();

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
	const { createPage } = actions;
	createPage({
		path: '/kontakt',
		component: path.resolve('src/pages/contact/index.tsx'),
		context: {},
	});

	createPage({
		path: '/galeria',
		component: path.resolve('src/pages/gallery/index.tsx'),
		context: {},
	});

	createPage({
		path: '/atrakcje',
		component: path.resolve('src/pages/attractions/index.tsx'),
		context: {},
	});

	createPage({
		path: '/polityka-prywatnosci',
		component: path.resolve('src/pages/privacy-policy/index.tsx'),
		context: {},
	});

	createPage({
		path: '/regulamin',
		component: path.resolve('src/pages/regulations/index.tsx'),
		context: {},
	});
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@/components": path.resolve(__dirname, "src/components"),
				"@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
			},
		},
	});
};
