import styles from './ScrollBtn.module.scss';
import {Icon} from '@iconify/react';

export const ScrollBtn = () => {
    return (
			<button className={styles.btn}>
				<Icon className={styles.arrow} icon='mingcute:down-line' />
				<Icon className={styles.arrow} icon='mingcute:down-line' />
				<Icon className={styles.arrow} icon='mingcute:down-line' />
			</button>
		);
}