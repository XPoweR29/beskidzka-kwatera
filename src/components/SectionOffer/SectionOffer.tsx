import { useContext } from 'react';
import { ScrollSpySection } from '../ScrollSpySection/ScrollSpySection';
import styles from './SectionOffer.module.scss';
import { AppContext } from '../../context/AppContext';
import { Wrapper } from '../Wrapper/Wrapper';
import offer_photots from '../../assets/img/offer_photos.png';
import flowers from '../../assets/img/flowers_2.png';
import folk_sign from '../../assets/img/folk_sign.svg';
import { Icon } from '@iconify/react';
import { Brief } from '../Brief/Brief';

export const SectionOffer = () => {
	const { setVisibleSection } = useContext(AppContext)!;

	return (
		<ScrollSpySection
			className={styles.offer}
			id='oferta'
			onVisible={() => setVisibleSection('oferta')}>
			<Wrapper className={styles.wrapper}>

				<img src={folk_sign} className={styles.folk_sign} draggable='false' />
				

				<Brief className={styles.attractions_brief}/>	
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
					<a href='/galeria' className={styles.link}>
						galerii
					</a>
					.
				</p>
				<div className={styles.sectionImg}>
					<a href='/galeria' className={styles.link}>
						Zobacz więcej
						<Icon icon='tdesign:arrow-right' className={styles.arrow}/>
					</a>
					<img src={flowers} className={styles.flowers} draggable='false' />
					<img
						src={offer_photots}
						className={styles.photos_img}
						draggable='false'
					/>
				</div>
			</Wrapper>
		</ScrollSpySection>
	);
};
