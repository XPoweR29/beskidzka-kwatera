import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import * as styles from './Brief.module.scss';
import emblem from '../../assets/img/emblem.png';
import { useInView } from 'react-intersection-observer';
import { useBreakpoints } from '../../hooks/useBreakpoint';

interface Props {
	className?: string;
}

export const Brief = ({ className }: Props) => {
	const { breakpoint } = useBreakpoints();
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<aside className={className}>
			<div
				className={`${styles.brief} ${inView ? styles.briefActive : ''}`}
				ref={ref}>
				<h2 className={styles.heading}>
					Węgierska Górka w Beskidzie Żywieckim
				</h2>
				{!breakpoint.lg ? (
					<p className={styles.text}>
						Odkryj klimatyczne karczmy, i ścieżki beskidzkie tuż przy naszym
						progu.
						<br />
						Ta miejscowość skrywa atrakcje, które czekają by je odkryć...
					</p>
				) : 
                (
					<p className={styles.text}>
						Jest miejscem, gdzie każdy zakręt drogi i ścieżka prowadzą do nowych
						odkryć. Przytulne kawiarnie, regionalne restauracje, a także ścieżki
						prowadzące przez zielone wzgórza i lasy, to tylko część tego, co
						sprawia, że odwiedzający wracają tu sezon za sezonem. Ta miejscowość
						skrywa atrakcje, które czekają, by je odkryć...
					</p>
				)}
				<a href='/atrakcje'>
					Czytaj więcej
					<Icon icon='tdesign:arrow-right' className={styles.arrow} />
				</a>
				<img
					src={emblem}
					className={styles.emblem}
					alt='herb miejscowośći'
					draggable='false'
				/>
			</div>
		</aside>
	);
};
