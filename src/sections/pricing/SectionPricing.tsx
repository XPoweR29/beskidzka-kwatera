import React, { useContext } from 'react';
import * as styles from './SectionPricing.module.scss';
import flowers from '../../assets/img/flowers_3.webp';
import { AppContext } from '../../contexts/app.context';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import { ScrollSpySection } from '../../components/ScrollSpySection/ScrollSpySection';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PricingSwiper } from '../../components/PricingSwiper/PricingSwiper';
import { PricingCards } from '../../components/PricingCards/PricingCards';
import { RegisterInfo } from '../../components/RegisterInfo/RegisterInfo';

export const SectionPricing = () => {
	const { setVisibleSection } = useContext(AppContext)!;
	const { breakpoint } = useBreakpoints();

	return (
		<ScrollSpySection
			id='cennik'
			className={styles.pricing}
			onVisible={() => setVisibleSection('cennik')}>
			<Wrapper className={styles.wrapper}>
				<img src={flowers} className={styles.flowersImg} alt='' />
				<h2 className={styles.heading}>Cennik</h2>
				<p className={styles.text}>
					Zapraszamy do skorzystania z naszej wyjątkowej oferty pobytu w sercu
					malowniczych Beskidów, gdzie każdy dzień to nowa historia i
					niezapomniane wspomnienia. Nasze ceny zostały skrojone tak, aby
					zapewnić najwyższą jakość wypoczynku przy jednoczesnym zachowaniu
					atrakcyjności oferty.
				</p>

				{breakpoint.md ? <PricingCards /> : <PricingSwiper />}

				<div className={styles.details}>
					<p className={styles.title}>
						Przytulne Rabaty dla Najmłodszych Gości:
					</p>
					<ul>
						<li>
							Dla maluchów do 2 lat - pobyt bez opłat, pełen uśmiechów i troski.
						</li>
						<li>Dzieci w wieku od 2 do 4 lat zapraszamy z 50% rabatem.</li>
						<li>
							Goście od 5 lat wzwyż są pełnoprawnymi eksploratorami naszych
							beskidzkich uroków
						</li>
					</ul>
				</div>

				<p className={styles.footer}>
					<strong className={styles.notice}>Uwaga:</strong> Wszystkie podane
					ceny dotyczą pobytu za <strong>jedną dobę</strong>. Cennik jest
					orientacyjny i może podlegać <strong>indywidualnym ustaleniom</strong>
					. Prosimy o kontakt w celu uzyskania dokładnej oferty.
				</p>

				<section className={styles.checkIn_info}>
					<h3 className={styles.heading}>
						<span>Informacje</span>
						<span>meldunkowe</span>
					</h3>
					<RegisterInfo />
				</section>
			</Wrapper>
		</ScrollSpySection>
	);
};
