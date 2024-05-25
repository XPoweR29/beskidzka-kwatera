import styles from './RegisterInfo.module.scss';
import {useContext} from 'react';
import contact_icon from '../../assets/icons/contact_icon.svg';
import checkin_icon from '../../assets/icons/check-in_icon.svg';
import checkout_icon from '../../assets/icons/check-out_icon.svg';
import money_icon from '../../assets/icons/payment_icon.svg';
import info_icon from '../../assets/icons/info_icon.svg';
import { AppContext } from '../../context/AppContext';

export const RegisterInfo = () => {
	const {setShowAccount} = useContext(AppContext)!

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.title}>
					<img src={contact_icon} className={styles.icon} alt='ikona'/>
					<h4>rezerwacja</h4>
				</div>
				<p className={styles.text}>
					Masz pytania lub chcesz złożyć rezerwację? <br />
					<a href='/kontakt'>Skontaktuj się z nami</a> aby doasować pobyt do Twoich
					oczekiwań.
				</p>
			</div>

			<div className={styles.info__time}>
				<div className={styles.info}>
					<div className={styles.title}>
						<img src={checkin_icon} className={styles.icon} alt='ikona'/>
						<h4>zameldowanie</h4>
					</div>
					<p className={`${styles.text} ${styles.hours}`}>14:00 - 20:00</p>
				</div>

				<div className={styles.info}>
					<div className={styles.title}>
						<img src={checkout_icon} className={styles.icon} alt='ikona'/>
						<h4>wymeldowanie</h4>
						
					</div>
					<p className={`${styles.text} ${styles.hours}`}>10:00 - 11:00</p>
				</div>
			</div>

			<div className={styles.info}>
				<div className={styles.title}>
					<img src={money_icon} className={`${styles.icon} ${styles['icon--money']}`} alt='ikona'/>
					<h4>płatność</h4>
				</div>
				<p className={styles.text}>
					Wybierz wygodę - zapłać na miejscu lub skorzystaj z opcji{' '}
					<span onClick={() => setShowAccount(true)}>przelewu bankowego</span>
				</p>
			</div>

			<div className={styles.info}>
				<div className={styles.title}>
					<img src={info_icon} className={`${styles.icon} ${styles['icon--info']}`} alt='ikona'/>
					<h4>informacja</h4>
				</div>
				<p className={styles.text}>
					Prosimy o wcześniejsze poinformowanie o planowanych godzinach
					przybycia.
				</p>
			</div>
		</div>
	);
};
