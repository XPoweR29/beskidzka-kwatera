'use client'

import React, { useEffect } from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { ScrollSpySection } from '@/components/ScrollSpySection/ScrollSpySection';
import { useAppContext } from '@/hooks/useAppContext';
import { ScrollBtn } from '@/components/ScrollBtn/ScrollBtn';
import Link from 'next/link';
import Image from 'next/image';
import styles from './StartSection.module.scss';

import flowers from '../../assets/images/flowers.webp';
import vector_large from '../../assets/images/homeVector_large.webp';
import vector_small from '../../assets/images/homeVector_small.webp';

export const StartSection = () => {
	const { setVisibleSection } = useAppContext();
	const { breakpoint } = useBreakpoints();

	return (
		<ScrollSpySection
			className={styles.start}
			id='start'
			onVisible={() => setVisibleSection('start')}>
			<Image src={flowers} className={styles.flowers_img} alt='' aria-hidden />
			<Image
				src={breakpoint.lg ? vector_large : vector_small}
				className={styles.home_img}
				alt=''
			/>
			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>
					Twoje miejsce w <span>Beskidach</span>{' '}
				</h1>
				<p className={styles.text}>
					Witaj w Kwaterach u Zosi — Twoim miejscu na nocleg w Beskidach. Odkryj
					przestrzeń stworzoną dla Twojego komfortu i relaksu. Poczuj harmonię z
					otaczającą naturą i ciesz się naszą gościnnością przez cały rok.
				</p>

				<Link
					href='/cennik'
					className={styles.ctaBtn}
					aria-label='Zobacz nasz cennik i zarezerwuj nocleg'>
					Zarezerwuj teraz!
				</Link>

				<ScrollBtn />
			</Wrapper>
		</ScrollSpySection>
	);
};
