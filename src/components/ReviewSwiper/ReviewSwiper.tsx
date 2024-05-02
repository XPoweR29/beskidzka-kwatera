import styles from './ReviewSwiper.module.scss';
import { Swiper } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import reviewData from '../../assets/reviews_mockup.json';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Rating } from '../Rating/Rating';
import bird_small from '../../assets/img/bird_small.png';
import bird_big from '../../assets/img/bird_big.png';
import { useContext, useRef } from 'react';
import { AppContext } from '../../context/AppContext';

interface Props {
	className?: string;
}

export interface UserReview {
	username: string;
	review: string;
}

const reviews: UserReview[] = reviewData;

export const ReviewSwiper = ({ className }: Props) => {
	const {breakpoint} = useContext(AppContext)!;
	const swiperRef = useRef<SwiperClass | null>(null);

	return (
		<Swiper
			className={`${styles.swiperContainer} ${className}`}
			modules={[Autoplay, Navigation]}
			spaceBetween={65} 
			slidesPerView={breakpoint.xxl? 3: (breakpoint.lg?2:1)}
			slidesPerGroup={1}
			loop={true}
			autoplay={{ delay: 3000, disableOnInteraction: false }}
			onSwiper={(swiper) => (swiperRef.current = swiper)}>
			<img src={breakpoint.md?bird_big:bird_small} className={styles.birdImg} draggable='false'/>

			{reviews.map((rev, index) => (
				<SwiperSlide key={index} className={styles.card}>
					<div className={styles.container}>
						<div className={styles.contentBox}>
							<Icon icon='bi:quote' className={styles.quote1} />
							<Icon icon='bi:quote' className={styles.quote2} />
							<Rating rate={5} className={styles.rating} />
							<p className={styles.comment}>{rev.review}</p>
						</div>

						<div className={styles.userBox}>
							<Icon icon='mingcute:user-4-fill' className={styles.icon} />
							<p className={styles.username}>{rev.username}</p>
						</div>
					</div>
				</SwiperSlide>
			))}

			{/* //IMPROVE: utowrzyć komponent uniwersalny który przyjmuje referencje swipera.  */}

			<div className={styles.swiperBtns}>
				<div
					className={styles.prev}
					onClick={() => swiperRef.current?.slidePrev()}>
					<Icon icon='raphael:arrowleft' />
				</div>
				<div
					className={styles.next}
					onClick={() => swiperRef.current?.slideNext()}>
					<Icon icon='raphael:arrowright' />
				</div>
			</div>
		</Swiper>
	);
};
 
