// gatsby-browser.tsx
import React from 'react';
import Layout from './src/layout';
import type { GatsbyBrowser } from 'gatsby';

import './src/css/global.scss';
import { ContextProvider } from './src/contexts/app.context';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
	element,
	props,
}) => {
	return (
		<ContextProvider>
			<Layout {...props}>{element}</Layout>
		</ContextProvider>
	);
};
