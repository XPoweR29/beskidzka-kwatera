import React from 'react';
import Layout from './src/layout';
import type { GatsbySSR } from 'gatsby';
import { ContextProvider } from './src/contexts/app.context';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
	element,
	props,
}) => {
	return (
		<ContextProvider>
			<Layout {...props}>{element}</Layout>
		</ContextProvider>
	);
};
