import React from 'react';

//FIXME: Deploy this and make commit this code version on remote repository.
export const SEO = ({
	children,
	og_type = 'website',
	og_sitename = 'Kwatery u Zosi',
	og_image = 'https://www.kwateryuzosi.pl/og_image.webp',
	schema,
	title = 'Kwatery u Zosi - Komfortowe Noclegi w Węgierskiej Górce, Beskid Żywiecki',
	description = 'Przytulne i przystępne pokoje w Węgierskiej Górce, idealne na relaks i górskie wędrówki. Zarezerwuj nocleg w Beskidzie Żywieckim!',
	canonical = 'https://kwateryuzosi.pl',
}: SEOHeader) => {
	return (
		<>
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='canonical' href={canonical}/>
			{}

			<meta property='og:site_name' content={og_sitename}/>
			<meta property='og:image' content={og_image}/>
			<meta property='og:locale' content='pl_PL' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={canonical} />
			<meta property='og:type' content={og_type} />
			{schema && (
				<script type='application/ld+json'>{JSON.stringify(schema)}</script>
			)}
			{children}
		</>
	);
};
