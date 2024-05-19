import { useContext, useEffect } from 'react';
import { ScrollSpySection } from '../ScrollSpySection/ScrollSpySection';
import styles from './SectionFacilities.module.scss';
import { AppContext } from '../../context/AppContext';
import { Wrapper } from '../Wrapper/Wrapper';
import grayWave_small from '../../assets/img/grayWave_small.svg';
import whiteWave_small from '../../assets/img/whiteWave_small.svg';
import grayWave_big from '../../assets/img/grayWave.svg';
import whiteWave_big from '../../assets/img/whiteWave.svg';
import folk_sign from '../../assets/img/folkSign_small.svg';
import { FacilityItem } from '../FacilityItem/FacilityItem';
import { useInView } from 'react-intersection-observer';

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

export const SectionFacilities = () => {
	const { setVisibleSection, breakpoint } = useContext(AppContext)!;
	const {ref, inView} = useInView({triggerOnce: true, threshold: 0.5});
	
	useEffect(() => {
	}, [inView]);

	return (
		<ScrollSpySection
			className={styles.facilities}
			id='udogodnienia'
			onVisible={() => setVisibleSection('udogodnienia')}>
			<img src={breakpoint.lg?grayWave_big:grayWave_small} className={styles.wave_gray} draggable='false'/>

			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>Udogodnienia</h2>
				<div className={styles.divider}>
					<span className={styles.line}></span>
					<img src={folk_sign} />

					<span className={styles.line}></span>
				</div>

				<div className={styles.itemsBox} ref={ref}>
					{facilities.map((item, index) => (
						<FacilityItem icon={item.icon} title={item.title} key={index} isVisible={inView} style={{animationDelay: `${index*0.2}s`}}/>
					))}
				</div>
			</Wrapper>
			<img src={breakpoint.lg?whiteWave_big:whiteWave_small} className={styles.wave_white} draggable='false'/>
		</ScrollSpySection>
	);
};
