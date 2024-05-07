import { Icon } from '@iconify/react/dist/iconify.js';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './PageContact.module.scss';
import { Form } from '../Form/Form';
import wave__small from '../../assets/img/blackWave_small.svg';
import wave__large from '../../assets/img/blackWave.svg';
import { Footer } from '../Footer/Footer';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import bg_wave from '../../assets/img/bg_wave.svg';

export const PageContact = () => {
	const { breakpoint } = useContext(AppContext)!;

	return (
		<>
			<section id='kontakt' className={styles.contact}>
				<Wrapper className={styles.wrapper}>
					<img src={bg_wave} className={styles.background_wave} />
					<h1 className={styles.heading}>Skontaktuj się z nami</h1>
					<p className={styles.text}>
						Masz pytania lub chcesz dowiedzieć się więcej o pobycie w
						Beskidzkiej Kwaterze? Jesteśmy tutaj, aby pomóc. Skorzystaj z
						poniższego formularza kontaktowego lub skontaktuj się z nami
						bezpośrednio poprzez e-mail lub telefon. Odpowiemy na wszystkie
						Twoje zapytania, pomagając zaplanować niezapomniany pobyt.
					</p>

					<div className={styles['info-map_container']}>
						<div className={styles.info}>
							<div className={styles.info__item}>
								<Icon icon='mdi:location' className={styles.icon} />
								<a href='https://www.google.com/maps/?q=Węgierska+Górka+ul+Zielona+136'>
									ul. Zielona 136, 34-350 Węgierska Górka
								</a>
							</div>

							<div className={styles.info__item}>
								<Icon icon='ic:round-phone' className={styles.icon} />
								<a href='tel: +48 123 456 798'>+48 123 456 789</a>
							</div>

							<div className={styles.info__item}>
								<Icon icon='clarity:envelope-solid' className={styles.icon} />
								<a href='mailto:kontakt@kwateryuzosi.pl'>
									kontak@kwateryuzosi.pl
								</a>
							</div>

							{breakpoint.lg && (
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1008399403804!2d19.11912054508449!3d49.61182165740256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714256d2a44caa1%3A0x2a68da1afa9e819b!2sZielona%20136%2C%2034-350%20W%C4%99gierska%20G%C3%B3rka!5e0!3m2!1spl!2spl!4v1714637025922!5m2!1spl!2spl'
									width='600'
									height='450'
									className={styles.map}
									loading='lazy'></iframe>
							)}
						</div>

						<Form className={styles.contact__form} />
					</div>
				</Wrapper>

				<img
					src={breakpoint.md ? wave__large : wave__small}
					className={styles.wave}
				/>
			</section>

			<Footer />
		</>
	);
};
