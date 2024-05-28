import { Wrapper } from '../Wrapper/Wrapper';
import styles from './HomeSection.module.scss'; 
import vector_small from '../../assets/img/homeVector_small.webp';
import vector_large from '../../assets/img/homeVector_large.webp';
import flowers from '../../assets/img/flowers.webp';
import { ScrollBtn } from '../ScrollBtn/ScrollBtn';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ScrollSpySection } from '../ScrollSpySection/ScrollSpySection';

export const SectionHome = () => {
	const {breakpoint, setVisibleSection} = useContext(AppContext)!;

	return (

		<ScrollSpySection className={styles.home} id='home' onVisible={()=>setVisibleSection('start')}>
			<img src={flowers} className={styles.flowers_img} alt=''/>
			<img src={breakpoint.lg ? vector_large : vector_small} className={styles.home_img}  alt=''/>

			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>
					Twoje miejsce w <span>Beskidach</span>{' '}
				</h1>
				<p className={styles.text}>
					Witaj w Kwaterach u Zosi — Twoim mijescu z dala od domu. Odkryj przestrzeń stowrzoną dla Twojego komfortu i relaksu. Poczuj harmonię z otaczającą naturą i ciesz się naszą gościnnością przez cały rok.
				</p>

				<a href='#cennik' className={styles.ctaBtn}>
					Zarezerwuj teraz!
				</a>

				<ScrollBtn/>
			</Wrapper>
		</ScrollSpySection>
	);
};
