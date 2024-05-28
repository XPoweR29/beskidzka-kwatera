import { PricingCard } from '../PricingCard/PricingCard';
import styles from './PricingCards.module.scss';
import bouelvard from '../../assets/photos/boulevard.avif';
import path from '../../assets/photos/path_sign.avif';
import biking from '../../assets/photos/biking.avif';
import bunker from '../../assets/photos/bunker.avif';

interface Props {
	className?: string;
}

export const PricingCards = ({ className }: Props) => {
	return (
		<div className={`${styles.cardsBox} ${className}`}>
			<PricingCard
				className={styles.card}
				image={bouelvard}
				period='1 doba'
				price={100}
				brief='Idealnie na szybki odpoczynek.'
			/>

			<PricingCard
				className={styles.card}
				image={biking}
				period='2 doby'
				price={80}
				brief='Poświęć więcej czasu na relaks.'
			/>

			<PricingCard
				className={styles.card}
				image={path}
				period='3 doby'
				price={90}
				brief='Ciesz się górami jeszcze dłużej.'
			/>

			<PricingCard
				className={styles.card}
				image={bunker}
				period='4 doby'
				price={70}
				brief='Najlepsza opcja na pełne baterie!'
			/>
		</div>
	);
};
