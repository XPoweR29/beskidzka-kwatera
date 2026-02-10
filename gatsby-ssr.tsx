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

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link
			key='googleapis'
			rel='preconnect'
			href='https://fonts.googleapis.com'
		/>,
		<link
			key='gstatic'
			rel='preconnect'
			href='https://fonts.gstatic.com'
			crossOrigin=''
		/>,
		<link
			key='preconnect-gstatic'
			rel='preconnect'
			href='https://fonts.gstatic.com'
			crossOrigin='anonymous'
		/>,
		<link
			key='googlefonts'
			href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
			rel='stylesheet'></link>,
		<link key='favicon' rel='icon' type='image/svg+xml' href='/favicon.svg' />,
	]);
};
