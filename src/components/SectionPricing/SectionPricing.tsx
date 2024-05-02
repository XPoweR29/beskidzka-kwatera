import { useContext } from 'react';
import { ScrollSpySection } from '../ScrollSpySection/ScrollSpySection';
import styles from './SectionPricing.module.scss';
import { AppContext } from '../../context/AppContext';
import { Wrapper } from '../Wrapper/Wrapper';
import { PricingSwiper } from '../PricingSwiper/PricingSwiper';
import { PricingCards } from '../PricingCards/PricingCards';
import { RegisterInfo } from '../RegisterInfo/RegisterInfo';

export const SectionPricing = () => {
	const { setVisibleSection, breakpoint } = useContext(AppContext)!;

	return (
		<ScrollSpySection
			id='cennik'
			className={styles.pricing}
			onVisible={() => setVisibleSection('cennik')}>
			<Wrapper className={styles.wrapper}>
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
							Goście od 5 lat wzwyż są pełnoprawnymi ekploratorami naszych
							beskidzkich uroków
						</li>
					</ul>
				</div>

				<section className={styles.checkIn_info}>
					<h3 className={styles.heading}><span>Informacje</span><span>meldunkowe</span></h3>
					<RegisterInfo/>
				</section>
			</Wrapper>
		</ScrollSpySection>
	);
};
