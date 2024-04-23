import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './FacilityItem.module.scss';

interface Props {
	icon: string;
	title: string;
}

export const FacilityItem = ({ icon, title }: Props) => {
	return (
		<div className={styles.item}>
			<Icon icon={icon} className={styles.icon}/>
			<p className={styles.title}>{title}</p>
		</div>
	);
};
