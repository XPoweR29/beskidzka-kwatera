import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './FacilityItem.module.scss';
import { CSSProperties } from 'react';

interface Props {
	icon: string;
	title: string;
	isVisible: boolean;
	style: CSSProperties | undefined;
}

export const FacilityItem = ({ icon, title, isVisible, style }: Props) => {
	return (
		<div className={`${styles.item} ${isVisible&&styles['item--anime']}`} style={style}>
			<Icon icon={icon} className={styles.icon}/>
			<p className={styles.title}>{title}</p>
		</div>
	);
};
