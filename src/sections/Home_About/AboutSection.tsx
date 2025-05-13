'use client'
import React from 'react';
import styles from './AboutSection.module.scss';
import offer_photots from '../../assets/images/offer_photos.webp';
import flowers from '../../assets/images/flowers_2.webp';
import folk_sign from '../../assets/images/folk_sign.svg';
import { Icon } from '@iconify/react';
import { ScrollSpySection } from '../../components/ScrollSpySection/ScrollSpySection';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Brief } from '../../components/Brief/Brief';
import { useAppContext } from '@/hooks/useAppContext';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection = () => {
	const { setVisibleSection } = useAppContext();

	return (
		<ScrollSpySection
			className={styles.offer}
			id='o-nas'
			onVisible={() => setVisibleSection('o-nas')}>
			<Wrapper className={styles.wrapper}>
				<Image
					src={folk_sign}
					className={styles.folk_sign}
					draggable='false'
					alt=''
				/>

				<Brief className={styles.attractions_brief} />
				<h2 className={styles.heading}>Nasza Oferta</h2>
				<p className={styles.text}>
					Odkryj idealne miejsce na wypoczynek w Beskidach, gdzie czekają na
					Ciebie przytulne 2- i 3-osobowe pokoje, zapewniające komfort i
					prywatność. Nasza agroturystyka, położona w spokojnej okolicy
					Węgierskiej Górki, jest doskonałym punktem startowym do pieszych
					wędrówek i rowerowych wypraw. Lokalne karczmy obiecują kulinarne
					odkrycia, a dla miłośników białego szaleństwa – wyciąg narciarski
					znajduje się tylko 10 minut jazdy samochodem. Zaplanuj swój pobyt w
					sercu beskidzkiej natury już dziś, a więcej naszych przestrzeni
					znajdziesz w{' '}
					<Link
						href='/galeria'
						aria-label='Zobacz nasze pokoje'
						className={styles.link}>
						galerii
					</Link>
					.
				</p>
				<div className={styles.sectionImg}>
					<Link href='/galeria' aria-label='Zobacz nasze pokoje' className={styles.link}>
						Zobacz więcej
						<Icon icon='tdesign:arrow-right' className={styles.arrow} />
					</Link>
					<Image
						src={flowers}
						className={styles.flowers}
						draggable='false'
						alt=''
						aria-hidden
					/>
					<Image
						src={offer_photots}
						className={styles.photos_img}
						draggable='false'
						alt='Przytulne pokoje na wynajem'
						aria-hidden
					/>
				</div>
			</Wrapper>
		</ScrollSpySection>
	);
};
