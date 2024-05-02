import styles from './PricingSwiper.module.scss';
import { Swiper as SwiperType } from 'swiper';
import { PricingCard } from '../PricingCard/PricingCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import bouelvard from '../../assets/photos/boulevard.jpg';
import path from '../../assets/photos/path_sign.jpg';
import biking from '../../assets/photos/biking.jpg';
import bunker from '../../assets/photos/bunker.jpg';
import 'swiper/css/effect-cards';
import { useRef } from 'react';
import { SwiperButtons } from '../SwiperButtons/SwiperButtons';

export const PricingSwiper = () => {
	const swiperRef = useRef<SwiperType|null>(null);

	return (
		<div className={styles.container}>
			<Swiper
				className={styles.swiper}
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				onSwiper={(swiper) => (swiperRef.current = swiper)}>
				<SwiperSlide className={styles.swiper__card}>
					<PricingCard
						image={bouelvard}
						period='1 doba'
						price={100}
						brief='Idealnie na szybki odpoczynek.'
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.swiper__card}>
					<PricingCard
						image={biking}
						period='2 doby'
						price={80}
						brief='Poświęć więcej czasu na relaks.'
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.swiper__card}>
					<PricingCard
						image={path}
						period='3 doby'
						price={90}
						brief='Ciesz się górami jeszcze dłużej.'
					/>
				</SwiperSlide>

				<SwiperSlide className={styles.swiper__card}>
					<PricingCard
						image={bunker}
						period='4 doby'
						price={70}
						brief='Najlepsza opcja na pełne baterie!'
					/>
				</SwiperSlide>
			</Swiper>

			<SwiperButtons className={styles.swiperButtons} swiperRef={swiperRef}/>
		</div>
	);
};
