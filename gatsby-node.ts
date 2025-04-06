import { GatsbyNode } from "gatsby";
import * as path from "path";
require('dotenv').config();

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
