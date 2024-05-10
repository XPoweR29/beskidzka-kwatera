import styles from './PageGallery.module.scss';
import { useContext, useEffect, useState } from 'react';
import { ScrollSpySection } from '../ScrollSpySection/ScrollSpySection';
import { AppContext } from '../../context/AppContext';
import { Wrapper } from '../Wrapper/Wrapper';
import folk_sign from '../../assets/img/folk_sign_gray.svg';
import butterfly from '../../assets/img/butterfly.png';
import bg_wave from '../../assets/img/bg_wave.svg';
import wave_small from '../../assets/img/blackWave_small.svg';
import wave_large from '../../assets/img/blackWave.svg';
import { Footer } from '../Footer/Footer';

export const PageGallery = () => {
	const { setVisibleSection, breakpoint } = useContext(AppContext)!;
	const [photos, setPhotos] = useState<string[]>([]);

	useEffect(() => {
		const loadPhotos = async () => {
			const importFns = import.meta.glob(
				'../../../src/assets/photos/gallery/*.webp'
			);
			const srcs = await Promise.all(
				Object.values(importFns).map(async (importFns) => {
					const module: any = await importFns();
					return module.default;
				})
			);
			setPhotos(srcs);
		};
		loadPhotos();
	}, []);

	return (
		<>
			<ScrollSpySection
				className={styles.gallery}
				id='gallery'
				onVisible={() => setVisibleSection('galeria')}>
				<Wrapper className={styles.wrapper}>
					<img src={butterfly} alt='motyl' className={styles.butterflyImg} />
					<img src={bg_wave} className={styles.background_wave} />

					<h2 className={styles.heading}>Galeria</h2>
					<div className={styles.divider}>
						<span className={styles.line}></span>
						<img src={folk_sign} />
						<span className={styles.line}></span>
					</div>

					<p className={styles.text}>
						Przejrzyj naszą galerię zdjęć i zrób wirtualny spacer po naszym
						obiekcie. Pokażemy Ci nasze pokoje, przestrzenie do wspólnego
						spędzania czasu i cudowne krajobrazy, jakie możesz podziwiać tuż za
						progiem.
					</p>

					<div className={styles.container}>
						{photos.map((photo, i) => {
							return (
								<div className={styles.thumbnail} key={i}>
									<img src={photo} alt='Zdjęcie obiektu' />
								</div>
							);
						})}
					</div>
				</Wrapper>
				<img src={breakpoint.lg?wave_large:wave_small} className={styles.wave} />
			</ScrollSpySection>
            <Footer/>
		</>
	);
};
