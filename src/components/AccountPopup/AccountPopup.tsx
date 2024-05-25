import { Wrapper } from '../Wrapper/Wrapper';
import React, { useContext } from 'react';
import styles from './AccountPopup.module.scss';
import { AppContext } from '../../context/AppContext';
import { copyToClipboard } from '../../utils/copyToClipboard';
import { Icon } from '@iconify/react/dist/iconify.js';

export const AccountPopup = () => {
	const { setShowAccount } = useContext(AppContext)!;

	const handleCopy =  (e: React.MouseEvent<HTMLButtonElement>) => {
		const btn = e.target as HTMLElement;
		const information: string = btn.previousElementSibling!.innerHTML;
		copyToClipboard(information);
	};

	return (
		<div className={styles.popup}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.popup__container}>
					<p className={styles.popup__text}>
						Dziękujemy za wybór naszej oferty! Aby dokonać płatności, prosimy o
						przelanie wcześniej uzgodnionej kwoty na ponższe konto bankowe:
					</p>

					<div className={styles.information}>
						<div className={styles.information__item}>
							<h2 className={styles.information__heading}>
								Numer konta bankowego:
							</h2>
							<p className={styles.information__info}>
								<span>ING Bank Śląski</span>
								<span>
									<span>72 9834 0093 8912 7842 0923</span>
									<button onClick={handleCopy} className={styles.copyBtn}><Icon icon='bi:copy'/></button>
								</span>
							</p>
						</div>

						<div className={styles.information__item}>
							<h2 className={styles.information__heading}>
								Nazwa i adres odbiorcy:
							</h2>
							<p className={styles.information__info}>
								<span>Kwatery u Zosi</span>
								<span>ul. Zielona 136</span>
								<span>34-350 Węgierska Górka</span>
							</p>
						</div>

						<div className={styles.information__item}>
							<h2 className={styles.information__heading}>Tytuł przelewu:</h2>
							<p className={styles.information__info}>
								<span>
									W tytule przelewu prosimy zawrzeć swoje imię i nazwisko np:
								</span>
								<span className={styles.information__example}>
									"Płatność - Jan Kowalski"
								</span>
							</p>
						</div>
					</div>

					<button
						className={styles.popup__button}
						onClick={() => setShowAccount(false)}>
						Zamknij
					</button>
				</div>
			</Wrapper>
		</div>
	);
};
