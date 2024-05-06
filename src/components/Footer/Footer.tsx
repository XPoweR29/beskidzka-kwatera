import { Wrapper } from '../Wrapper/Wrapper';
import {useContext} from 'react';
import styles from './Footer.module.scss';
import blackWave_small from '../../assets/img/blackWave_small.png';
import blackWave_large from '../../assets/img/blackWave.svg';
import logo from '../../assets/img/logo_white.svg';
import dev_logo from '../../assets/img/dev_logo.svg';
import { AppContext } from '../../context/AppContext';

export const Footer = () => {
    const {breakpoint} = useContext(AppContext)!;
    const currentYear = new Date().getFullYear();

	return (
		<section id='footer' className={styles.footer}>
			<img src={breakpoint.sm?blackWave_large:blackWave_small} className={styles.wave}  draggable='false'/>
			<Wrapper className={styles.wrapper}>
				<img src={logo} alt='logotyp' className={styles.logo} />

				<div className={`${styles.item} ${styles['item--address']}`}>
					<h4 className={styles.title}>Beskidzka Kwatera</h4>
					<a href='https://www.google.pl/maps/place/Zielona+136,+34-350+W%C4%99gierska+G%C3%B3rka/@49.6111857,19.1192718,17z/data=!4m6!3m5!1s0x4714256d2a44caa1:0x2a68da1afa9e819b!8m2!3d49.6116897!4d19.1208489!16s%2Fg%2F11f5dgc8j4?entry=ttu'>
						ul. Zielona 136, 34-350 Węgierska Górka
					</a>
					<a href='mailto:kontakt@beskidzkakwatera.pl'>Email: kontak@beskidzkakwatera.pl</a>
					<a href='tel:+48123456789'>Tel: +48 123 456 789</a>
				</div>

				<div className={`${styles.item} ${styles['item--links']}`}>
					<h4 className={styles.title}>Zobacz również</h4>
					<a href='#'>galeria obiektu</a>
					<a href='#'>lokalne atrakcje</a>
					<a href='#'>informacje kontaktowe</a>
				</div>

				<div className={`${styles.item} ${styles['item--info']}`}>
					<p>© {currentYear} Beskidzka Kwatera</p>
                    <p>Wszelkie prawa zastrzeżone</p>
                    <span>
                        <a href="#">Polilstyka prywatności</a> | <a href="#">Regulamin</a>
                    </span>
				</div>

                <div className={styles.footer__signature}>
					<p>Designed & Developed by</p>
					<a href='https://webcraft-studio.pl/' target='_blank' rel='noopener noreferrer'>
						<img src={dev_logo} />
					</a>
				</div>
			</Wrapper>
		</section>
	);
};
