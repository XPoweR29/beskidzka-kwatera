import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './Rating.module.scss';

interface Props {
    className?: string;
    rate: number;
}

export const Rating = ({rate, className}: Props) => {
    return (
			<div className={`${styles.rating} ${className}`}>
				{[...Array(rate)].map((_, index) => (
					<Icon icon='solar:star-bold-duotone' key={index} className={styles.star}/>
				))}
			</div>
		);
}