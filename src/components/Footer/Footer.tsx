import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Footer.module.scss';
import logo from '../../assets/img/logo_white.svg';
import dev_logo from '../../assets/img/dev_logo.svg';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

	return (
		<section id='footer' className={styles.footer}>
			<Wrapper className={styles.wrapper}>
				<img src={logo} alt='kwatery u zosi - logo' className={styles.logo} />

				<div className={`${styles.item} ${styles['item--address']}`}>
					<h4 className={styles.title}>Beskidzka Kwatera</h4>
					<a href='https://www.google.com/maps/?q=Węgierska+Górka+ul+Zielona+136'>
						ul. Zielona 136, 34-350 Węgierska Górka
					</a>
					<a href='mailto:kontakt@beskidzkakwatera.pl'>
						Email: kontak@beskidzkakwatera.pl
					</a>
					<a href='tel:+48123456789'>Tel: +48 123 456 789</a>
				</div>

				<div className={`${styles.item} ${styles['item--links']}`}>
					<h4 className={styles.title}>Zobacz również</h4>
					<a href='/galeria'>galeria obiektu</a>
					<a href='/atrakcje'>lokalne atrakcje</a>
					<a href='/kontakt'>informacje kontaktowe</a>
				</div>

				<div className={`${styles.item} ${styles['item--info']}`}>
					<p>© {currentYear} Beskidzka Kwatera</p>
					<p>Wszelkie prawa zastrzeżone</p>
					<span>
						<a href='/'>Polilstyka prywatności</a> | <a href='/'>Regulamin</a>
					</span>
				</div>

				<div className={styles.footer__signature}>
					<p>Designed & Developed by</p>
					<a
						href='https://webcraft-studio.pl/'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={dev_logo} alt='webcraft studio logo '/>
					</a>
				</div>
			</Wrapper>
		</section>
	);
};
