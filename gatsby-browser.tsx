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


	window.onload = () => {
		const loader: HTMLDivElement | null = document.querySelector('.loaderContainer');
		
		if(loader) {
			loader.classList.add('hidden');
			loader.addEventListener('transitionend', (e) => {
				if(e.propertyName === "opacity") {
					loader.remove();
				}
			});
		}
	}