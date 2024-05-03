import { useContext } from 'react';
import { ScrollSpySection } from '../ScrollSpySection/ScrollSpySection';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './ReachUs.module.scss';
import { AppContext } from '../../context/AppContext';
import road_small from '../../assets/img/road_small.png';
import road_large from '../../assets/img/road_large.png';

export const ReachUs = () => {
	const { breakpoint, setVisibleSection } = useContext(AppContext)!;

	return (
		<ScrollSpySection
			id='dojazd'
			className={styles.reachUs}
			onVisible={() => setVisibleSection('dojazd')}>
			<Wrapper className={styles.wrapper}>
				<img
					src={breakpoint.md ? road_large : road_small}
					className={styles.roadImg}
				/>

				<h2 className={styles.heading}>Jak nas znaleźć?</h2>
				<p className={styles.text}>
					Znajdź nas łatwo dzięki dołączonej mapie. Poniżej znajdziesz
					informacje, które ułatwią Ci dotarcie do nas bez względu na to, skąd
					wyruszasz.
				</p>

				<div className={styles['map-address_container']}>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1008399403804!2d19.11912054508449!3d49.61182165740256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714256d2a44caa1%3A0x2a68da1afa9e819b!2sZielona%20136%2C%2034-350%20W%C4%99gierska%20G%C3%B3rka!5e0!3m2!1spl!2spl!4v1714637025922!5m2!1spl!2spl'
						width='600'
						height='450'
						className={styles.map}
						loading='lazy'></iframe>

					<div className={styles.address}>
						<p className={styles.name}>Beskidzka Kwatera</p>
						<p className={styles.road}>ul. Zielona 136</p>
						<p className={styles.zipCode}>34-350 Węgierska Górka</p>
					</div>
				</div>

				<p className={styles.info}>
					Potrezebujesz dotakowej pomocy? <a href='#'>Skontaktuj się z nami</a>,
					a chętnie odpowiemy na wszystkie Twoje pytania dotyczące dojazdu i nie
					tylko.
				</p>
			</Wrapper>
		</ScrollSpySection>
	);
};
