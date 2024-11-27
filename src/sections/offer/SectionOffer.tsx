import React, { useContext } from 'react';
import * as styles from './SectionOffer.module.scss';
import offer_photots from '../../assets/img/offer_photos.webp';
import flowers from '../../assets/img/flowers_2.webp';
import folk_sign from '../../assets/img/folk_sign.svg';
import { Icon } from '@iconify/react';
import { ScrollSpySection } from '../../components/ScrollSpySection/ScrollSpySection';
import { AppContext } from '../../contexts/app.context';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Brief } from '../../components/Brief/Brief';
import { Link } from 'gatsby';

export const SectionOffer = () => {
	const { setVisibleSection } = useContext(AppContext)!;

	return (
		<ScrollSpySection
			className={styles.offer}
			id='oferta'
			onVisible={() => setVisibleSection('oferta')}>
			<Wrapper className={styles.wrapper}>
				<img
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
						to='/galeria'
						aria-label='Zobacz nasze pokoje'
						className={styles.link}>
						galerii
					</Link>
					.
				</p>
				<div className={styles.sectionImg}>
					<Link to='/galeria' aria-label='Zobacz nasze pokoje' className={styles.link}>
						Zobacz więcej
						<Icon icon='tdesign:arrow-right' className={styles.arrow} />
					</Link>
					<img
						src={flowers}
						className={styles.flowers}
						draggable='false'
						alt=''
					/>
					<img
						src={offer_photots}
						className={styles.photos_img}
						draggable='false'
						alt='Przytulne pokoje na wynajem'
					/>
				</div>
			</Wrapper>
		</ScrollSpySection>
	);
};
