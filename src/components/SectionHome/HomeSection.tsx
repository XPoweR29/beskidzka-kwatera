import { Wrapper } from '../Wrapper/Wrapper';
import styles from './HomeSection.module.scss';
import vector_small from '../../assets/img/homeVector_small.svg';
import flowers from '../../assets/img/flowers.png';
import { ScrollBtn } from '../ScrollBtn/ScrollBtn';

export const SectionHome = () => {
	return (
		<section className={styles.home} id='home'>
			<img src={flowers} className={styles.flowers_img} />
			<img src={vector_small} className={styles.home_img} />

			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>
					Twoje miejsce w <span>Beskidach</span>{' '}
				</h1>
				<p className={styles.text}>
					Witaj w Beskidzkiej Kwaterze — Twoim mijescu z dala od domu. Odkryj przestrzeń stowrzoną dla Twojego komfortu i relaksu. Poczuj harmonię z otaczającą naturą i ciesz się naszą gościnnością przez cały rok.
				</p>

				<a href='#pricing' className={styles.ctaBtn}>
					Zarezerwuj teraz!
				</a>

				<ScrollBtn/>
			</Wrapper>
		</section>
	);
};
