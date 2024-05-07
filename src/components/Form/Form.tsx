import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './Form.module.scss';
import { useState } from 'react';

interface Props {
	className: string;
}

export interface FormState {
	name: string;
	email: string;
	message: string;
}

const initialFormState: FormState = {
	name: '',
	email: '',
	message: '',
};

export const Form = ({ className }: Props) => {
	const [formState, setFormState] = useState<FormState>(initialFormState);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<form className={`${styles.form} ${className}`}>
			<input
				type='text'
				className={`${styles.form__input} ${styles['form__input--name']}`}
				placeholder='Imię'
				name='name'
				value={formState.name}
				onChange={handleChange}
				required
			/>
			<input
				type='email'
				className={`${styles.form__input} ${styles['form__input--email']}`}
				placeholder='Email'
				name='email'
				value={formState.email}
				onChange={handleChange}
				required
			/>
			<textarea
				className={`${styles.form__input} ${styles['form__input--message']}`}
				placeholder='Wiadomość'
				name='message'
				value={formState.message}
				onChange={handleChange}
				required
			/>

			<div className={styles.form__rules}>
				<input type='checkbox' required />
				<p>
					Zapoznałem(-am) się i akceptuję {''}{' '}
					<a href='#'>politykę prywatności</a> oraz {''}{' '}
					<a href='#'>regulamin</a>.
				</p>
			</div>

			<button className={styles.form__btn}>
				<p>Wyślij</p>
				<Icon icon='mingcute:send-fill' className={styles.icon} />
			</button>
		</form>
	);
};
