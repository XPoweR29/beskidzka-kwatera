import React from 'react';
import styles from './Brief.module.scss';
import { Icon } from '@iconify/react';
import emblem from '../../assets/images/emblem.png';
import { useInView } from 'react-intersection-observer';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import Image from 'next/image';
import Link from 'next/link';

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
				<Link href='/atrakcje'>
					Czytaj więcej
					<Icon icon='tdesign:arrow-right' className={styles.arrow} />
				</Link>
				<Image
					src={emblem}
					className={styles.emblem}
					alt='Herb Węgierskiej Górki'
					draggable='false'
				/>
			</div>
		</aside>
	);
};
