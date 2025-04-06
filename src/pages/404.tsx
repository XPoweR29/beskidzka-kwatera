import React from 'react';
import * as styles from './404.module.scss';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useBreakpoints } from '../hooks/useBreakpoint';
import wave__small from '../assets/img/blackWave_small.svg';
import wave__large from '../assets/img/blackWave.svg';
import { Link } from 'gatsby';
import { SEO } from '../components/SEO/SEO';

const NotFoundPage = () => {
	const { breakpoint } = useBreakpoints();

	return (
		<div className={styles.notFound}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.container}>
					<h1>
						<span>Oops...</span>
						<span>Chyba zabłądziłeś w Beskidach.</span>
					</h1>
				</div>

				<p className={styles.text}>
					Wygląda na to, że ta ścieżka prowadzi donikąd. Wróć na{' '}
					<Link to='/' className={styles.backLink}>
						stronę główną
					</Link>{' '}
					i znajdź to, czego szukasz!
				</p>
			</Wrapper>

			<img
				src={breakpoint.md ? wave__large : wave__small}
				className={styles.wave}
				alt=''
			/>
		</div>
	);
};

export default NotFoundPage;

export const Head = () => (
	<SEO
		title='Strona nie znaleziona | Kwatery u Zosi'
		description='Ups! Strona, której szukasz, nie istnieje. Wróć na stronę główną, aby znaleźć interesujące informacje.'
		canonical='https://kwteryuzosi.pl/404'>
		<meta name='robots' content='noindex, follow' />
	</SEO>
);
