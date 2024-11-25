import React from 'react';
import * as styles from './ScrollBtn.module.scss';
import {Icon} from '@iconify/react';

export const ScrollBtn = () => {
    return (
			<button className={styles.btn} aria-label='Przewiń w dół'>
				<Icon className={styles.arrow} icon='mingcute:down-line' />
				<Icon className={styles.arrow} icon='mingcute:down-line' />
				<Icon className={styles.arrow} icon='mingcute:down-line' />
			</button>
		);
}