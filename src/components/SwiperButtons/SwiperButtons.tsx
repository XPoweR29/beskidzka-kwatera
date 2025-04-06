import React, { useEffect, useState } from 'react';
import {Swiper as SwiperType} from 'swiper';
import * as styles from './SwiperButtons.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
    swiperRef: React.MutableRefObject<SwiperType|null>;
    className?: string;
	disableControl?: boolean;
}
export const SwiperButtons = ({swiperRef, className, disableControl = true}: Props) => {
	const [slideStart, setSlideStart] = useState(true);
	const [slideEnd, setSlideEnd] = useState(false);

	useEffect(() => {
		const checkSlideState = () => {
			if(swiperRef.current) {
				setSlideStart(swiperRef.current.isBeginning);
				setSlideEnd(swiperRef.current.isEnd);
			};
		};
		swiperRef.current?.on('slideChange', checkSlideState);
		
		return () => {
			swiperRef.current?.off('slideChange', checkSlideState);
		};
	}, [swiperRef]);

	return (
		<div className={`${styles.swiperBtns} ${className}`}>
			<button
				className={`${styles.prev} ${disableControl&&slideStart?styles.disabled:''}`} 
				onClick={() => swiperRef.current?.slidePrev()}
				aria-label='Poprzedni slajd'> 
				<Icon icon='raphael:arrowleft' />
			</button>
			<button
				className={`${styles.next} ${disableControl&&slideEnd?styles.disabled:''}`}
				onClick={() => swiperRef.current?.slideNext()}
				aria-label='Następny slajd'>
				<Icon icon='raphael:arrowright' />
			</button>
		</div>
	);
};
