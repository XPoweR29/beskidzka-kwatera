import React from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import * as styles from './Footer.module.scss';
import logo from '../../assets/img/logo_white.svg';
import dev_logo from '../../assets/img/dev_logo.svg';
import { Link } from 'gatsby';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

	return (
		<section id='footer' className={styles.footer}>
			<Wrapper className={styles.wrapper}>
				<img src={logo} alt='kwatery u zosi - logo' className={styles.logo} />

				<div className={`${styles.item}`}>
					<h3 className={styles.title}>Kwatery u Zosi</h3>
					<a href='https://www.google.com/maps/?q=Węgierska+Górka+ul+Zielona+136'>
						ul. Zielona 136, 34-350 Węgierska Górka
					</a>
					<a href='mailto:kontakt@kwateryuzosi.pl'>
						Email: kontakt@kwateryuzosi.pl
					</a>
					<a href='tel:+48607262643'>Tel: +48 607 262 643</a>
				</div>

				<div className={`${styles.item} ${styles['itemLinks']}`}>
					<h3 className={styles.title}>Zobacz również</h3>
					<Link to='/galeria'>galeria obiektu</Link>
					<Link to='/atrakcje'>lokalne atrakcje</Link>
					<Link to='/kontakt'>informacje kontaktowe</Link>
				</div>

				<div className={`${styles.item} ${styles['itemInfo']}`}>
					<p>© {currentYear} Kwtery u Zosi</p>
					<p>Wszelkie prawa zastrzeżone</p>
					<span>
						<Link to='/polityka-prywatnosci'>Polilstyka prywatności</Link> | <Link to='/regulamin'>Regulamin</Link>
					</span>
				</div>

				<div className={styles.footer__signature}>
					<p>Designed & Developed by</p>
					<a
						href='https://webcraft-studio.pl/'
						target='_blank'
						aria-label='strona webcraft-studio'
						title='Zamów własną stronę internetową!'
						rel='noopener noreferrer'>
						<img src={dev_logo} alt='webcraft studio logo '/>
					</a>
				</div>
			</Wrapper>
		</section>
	);
};
