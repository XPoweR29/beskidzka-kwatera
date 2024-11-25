import React, { useContext, useState } from 'react';
import * as styles from './gallery.module.scss';
import folk_sign from '../../assets/img/folk_sign_gray.svg';
import butterfly from '../../assets/img/butterfly.webp';
import bg_wave from '../../assets/img/bg_wave.svg';
import wave_small from '../../assets/img/blackWave_small.svg';
import wave_large from '../../assets/img/blackWave.svg';
import { AppContext } from '../../contexts/app.context';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import { ScrollSpySection } from '../../components/ScrollSpySection/ScrollSpySection';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PhotoPreview } from '../../components/PhotoPreview/PhotoPreview';
import { useGallery } from '../../hooks/useGallery';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { SEO } from '../../components/SEO/SEO';

export const PageGallery = () => {
	const { setVisibleSection } = useContext(AppContext)!;
	const { breakpoint } = useBreakpoints();
	const [clickedImg, setClickedImg] = useState<IGatsbyImageData|null>(null);
	const [previewShown, setPreviewShown] = useState<boolean>(false);
	const {photos} = useGallery();

	console.log(photos)

	const previewHandler = (photoSrc: IGatsbyImageData) => {
		setClickedImg(photoSrc);
		setPreviewShown(true);
	};

	return (
		<>
			<ScrollSpySection
				className={styles.gallery}
				id='gallery'
				onVisible={() => setVisibleSection('galeria')}>
				<Wrapper className={styles.wrapper}>
					<img src={butterfly} alt='' className={styles.butterflyImg}/>
					<img src={bg_wave} className={styles.background_wave} alt=''/>

					<h2 className={styles.heading}>Galeria</h2>
					<div className={styles.divider}>
						<span className={styles.line}></span>
						<img src={folk_sign} alt=''/>
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
								<div className={styles.thumbnail} key={i} onClick={()=>previewHandler(photo)}>
									<GatsbyImage image={photo} alt='Pokój na wynajem, nocleg' className={styles.image}/>
								</div>
							);
						})}
					</div>
				</Wrapper>

				{previewShown&&clickedImg&& <PhotoPreview photos={photos} isPreviewShown={setPreviewShown} clickedImg={clickedImg}/>}
				<img src={breakpoint.lg?wave_large:wave_small} className={styles.wave} alt=''/>
			</ScrollSpySection>
		</>
	);
};

export default PageGallery;

export const Head = () => <SEO/>
