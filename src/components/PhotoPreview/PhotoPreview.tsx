import React from 'react';
import {Swiper} from 'swiper/react';
import * as styles from './PhotoPreview.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { SwiperSlide } from 'swiper/react';
import { HashNavigation, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Wrapper } from '../Wrapper/Wrapper';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
	photos: IGatsbyImageData[];
	clickedImg: IGatsbyImageData;
	isPreviewShown: (shown: boolean) => void;
}

export const PhotoPreview = ({ clickedImg, isPreviewShown, photos }: Props) => {
	return (
		<div className={styles.preview}>
			<Wrapper className={styles.wrapper}>
				<button
					className={styles.closeBtn}
					onClick={() => isPreviewShown(false)}>
					<Icon icon='carbon:close-outline' />
				</button>

				<Swiper
					className={styles.photoSwiper}
                    slidesPerView={1}
					spaceBetween={30}
					pagination={{ clickable: false }}
					navigation={true}
					initialSlide={photos.indexOf(clickedImg)}
					modules={[Pagination, Navigation, HashNavigation]}>
					{photos.map((photo, index) => (
						<SwiperSlide className={styles.slide} key={index}>
							<GatsbyImage image={photo} alt='preview' className={styles.image}/>
						</SwiperSlide>
					))}
				</Swiper>
			</Wrapper>
		</div>
	);
};
