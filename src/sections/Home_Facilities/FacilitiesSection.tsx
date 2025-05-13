'use client'
import React from 'react';
import styles from './FacilitiesSection.module.scss';
import { useContext, useEffect } from 'react';
import folk_sign from '../../assets/images/folkSign_small.svg';
import { useInView } from 'react-intersection-observer';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import { AppContext } from '../../contexts/app.context';
import { ScrollSpySection } from '../../components/ScrollSpySection/ScrollSpySection';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { FacilityItem } from '../../components/FacilityItem/FacilityItem';
import Image from 'next/image';
import { WaveDivider } from '@/components/WaveDivider/WaveDivider';

interface FacilityItem {
	icon: string;
	title: string;
}

const facilities: FacilityItem[] = [
	{ title: 'Prywatne łazienki', icon: 'material-symbols:shower' },
	{ title: 'Każdy pokój posiada balkon', icon: 'material-symbols:balcony' },
	{ title: 'Wiata grillowa', icon: 'mdi:grill' },
	{ title: 'Aneks kuchenny z wyposażeniem', icon: 'mdi:kitchen-counter' },
	{ title: 'Jadalnia', icon: 'wpf:diningroom' },
	{ title: 'Pomieszczenie gospodarcze', icon: 'vaadin:storage' },
	{ title: 'Wi-Fi', icon: 'material-symbols:wifi' },
	{ title: 'Parking samochodowy', icon: 'ri:parking-box-fill' },
];

export const FacilitiesSection = () => {
	const { breakpoint } = useBreakpoints();
	const { setVisibleSection } = useContext(AppContext)!;
	const {ref, inView} = useInView({triggerOnce: true, threshold: 0.5});
	
	useEffect(() => {
	}, [inView]);

	return (
		<ScrollSpySection
			className={styles.facilities}
			id='udogodnienia'
			onVisible={() => setVisibleSection('udogodnienia')}>
			<WaveDivider positionTop color='#dfdfdf' />
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>Udogodnienia</h2>
				<div className={styles.divider}>
					<span className={styles.line}></span>
					<Image src={folk_sign} alt='' aria-hidden draggable={false} />

					<span className={styles.line}></span>
				</div>

				<div className={styles.itemsBox} ref={ref}>
					{facilities.map((item, index) => (
						<FacilityItem
							icon={item.icon}
							title={item.title}
							key={index}
							isVisible={inView}
							style={{ animationDelay: `${index * 0.2}s` }}
						/>
					))}
				</div>
			</Wrapper>
			<WaveDivider />
		</ScrollSpySection>
	);
};
