import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './Review.module.scss';
import { Rating } from '../Rating/Rating';
import bird_small from '../../assets/img/bird_small.png';

interface Props {
	className?: string;
}

export const Review = ({ className }: Props) => {
	return (
		<div className={`${styles.reviewContainer} ${className}`}>
			<img src={bird_small} className={styles.birdImg}/>
			<div className={styles.contentBox}>
				<Icon icon='bi:quote' className={styles.quote1} />
				<Icon icon='bi:quote' className={styles.quote2} />
				<Rating rate={5} className={styles.rating} />
				<p className={styles.comment}>
					Wspaniała okolica. Niewielka miejscowość o bardzo bogatej historii.
					Najbliższa okolica tj. w granicach miejscowości zapewnia wiele
					ciekawych miejsc do zwiedzenia. Idelane mijesce na odpocznek w
					Beskidach.
				</p>
			</div>

			<div className={styles.userBox}>
				<Icon icon='mingcute:user-4-fill' className={styles.icon} />
				<p className={styles.username}>Paulina Sternat</p>
			</div>
		</div>
	);
};
