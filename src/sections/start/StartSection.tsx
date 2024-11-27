import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';

import { Wrapper } from '../../components/Wrapper/Wrapper';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import { ScrollBtn } from '../../components/ScrollBtn/ScrollBtn';
import { ScrollSpySection } from '../../components/ScrollSpySection/ScrollSpySection';

import * as styles from './StartSection.module.scss';

import vector_small from '../../assets/img/homeVector_small.webp';
import vector_large from '../../assets/img/homeVector_large.webp';
import flowers from '../../assets/img/flowers.webp';
import { Link } from 'gatsby';

export const StartSection = () => {
	const { breakpoint } = useBreakpoints();
	const { setVisibleSection } = useContext(AppContext)!;

	return (
		<ScrollSpySection
			className={styles.home}
			id='home'
			onVisible={() => setVisibleSection('start')}>
			<img src={flowers} className={styles.flowers_img} alt='' />
			<img
				src={breakpoint.lg ? vector_large : vector_small}
				className={styles.home_img}
				alt=''
			/>

			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>
					Twoje miejsce w <span>Beskidach</span>{' '}
				</h1>
				<p className={styles.text}>
					Witaj w Kwaterach u Zosi — Twoim miejscu z dala od domu. Odkryj
					przestrzeń stworzoną dla Twojego komfortu i relaksu. Poczuj harmonię z
					otaczającą naturą i ciesz się naszą gościnnością przez cały rok.
				</p>

				<Link
					to='#cennik'
					className={styles.ctaBtn}
					aria-label='Zarezeruj teraz! Przejdź do sekcji Cennik'>
					Zarezerwuj teraz!
				</Link>

				<ScrollBtn />
			</Wrapper>
		</ScrollSpySection>
	);
};
