import React, { useEffect, useState } from 'react';
import {Swiper as SwiperType} from 'swiper';
import styles from './SwiperButtons.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
//NOTE: Opisanie tworzenia customowych przycisków swipera. 

interface Props {
    swiperRef: React.MutableRefObject<SwiperType|null>;
    className?: string;
}
// otrzymywanie w propsie referencji swipera który ma być obsługiwany przez przyciski
export const SwiperButtons = ({swiperRef, className}: Props) => {
	//OBSŁUGA AKTYWNYCH PRZYCISKÓW SWIPERA 
	//zmienne dla stanów początku i końca swipera
	const [slideStart, setSlideStart] = useState(true);
	const [slideEnd, setSlideEnd] = useState(false);

	useEffect(() => {
		//funckcja monitorująca stan swipera
		const checkSlideState = () => {
			if(swiperRef.current) {
				setSlideStart(swiperRef.current.isBeginning);
				setSlideEnd(swiperRef.current.isEnd);
			};
		};
		//nasłuchowanie na zmianę slajdu
		swiperRef.current?.on('slideChange', checkSlideState);
		
		//czyszczenie eventlistenera po odmontowaniu komponentu
		return () => {
			swiperRef.current?.off('slideChange', checkSlideState);
		};
	}, [swiperRef]);

	return (
		<div className={`${styles.swiperBtns} ${className}`}>
			<button
				//nadanie klasy disabled w zależności od stanu swipera
				className={`${styles.prev} ${slideStart?styles.disabled:''}`} 
				// zdarzenie na klinięcie - zmiana slajdu dla referencji swipera. 
				onClick={() => swiperRef.current?.slidePrev()}> 
				<Icon icon='raphael:arrowleft' />
			</button>
			<button
				className={`${styles.next} ${slideEnd?styles.disabled:''}`}
				onClick={() => swiperRef.current?.slideNext()}>
				<Icon icon='raphael:arrowright' />
			</button>
		</div>
	);
};
