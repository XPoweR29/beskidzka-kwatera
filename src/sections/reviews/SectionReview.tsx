import React from 'react';
import * as styles from './SectionReview.module.scss';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { ReviewSwiper } from '../../components/ReviewSwiper/ReviewSwiper';

export const SectionReview = () => {

    return (
			<section className={styles.review}>
				<Wrapper className={styles.wrapper}>

					<h2 className={styles.heading}>Opinie naszych klientów</h2>
					<p className={styles.text}>
						Poznaj doświadczenia naszych gości, którzy podzielili się swoimi
						wspomnieniami. Ich historie to najlepsze świadectwo niezapomnianych
						chwil spędzonych pod naszym dachem.
					</p>

					<ReviewSwiper className={styles.reviewSwiper}/>
				</Wrapper>
			</section>
		);
}