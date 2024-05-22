import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './PricingCard.module.scss';
import corner from '../../assets/img/corner_wavy.png';

interface Props {
    period: string;
    price: number;
    brief: string;
    image: string;
	className?: string;
}

export const PricingCard = ({period, price, brief, image, className}: Props) => {
	return (
		<div className={`${styles.card} ${className}`}>
            <img src={image} className={styles.card__image} alt='Sposób na spędzanie czas w beskidach'/>
			<div className={styles.card__content}>
				<p className={styles.card__period}>{period}</p>
				<div className={styles.card__price}>
					<span>{price} zł</span> / <Icon icon='mdi:user' className={styles.icon}/>
				</div>
				<div className={styles.card__brief}>{brief}</div>
			</div>
            <img src={corner} className={styles.cornerImg} draggable='false' alt=''/>
		</div>
	);
};
