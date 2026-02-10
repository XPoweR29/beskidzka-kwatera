import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import * as styles from './Form.module.scss';
import {toast} from 'react-hot-toast';
import { Link } from 'gatsby';

interface Props {
	className: string;
}

export interface FormState {
	name: string;
	email: string;
	message: string;
	phone?: string;
}

const initialFormState: FormState = {
	name: '',
	email: '',
	message: '',
};

export const Form = ({ className }: Props) => {
	const [formState, setFormState] = useState<FormState>(initialFormState);
	const [errors, setErrors] = useState<{ [key in keyof FormState]?: string }>({});
	const formRef = useRef<HTMLFormElement|null>(null);
	const checkboxRef = useRef<HTMLInputElement|null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));

		setErrors((prev)=>({...prev, [e.target.name]: null}));
	};

	const sendForm = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			formData.append('name', formState.name);
			formData.append('email', formState.email);
			if (formState.phone) formData.append('phone', `+48${formState.phone}`);
			formData.append('message', formState.message);
			formData.append('sender', 'KLIENT@kwateryuzosi.pl');
			formData.append('recipient', 'kontakt@kwateryuzosi.pl');

			const response = await fetch(
				'https://backendapp-gamma.vercel.app/api/send-mail',
					{
						method: 'POST',
						body: formData,
					}
			);

			if(response.ok) {
				toast.success('Dziękujemy! Twoja wiadomość została wysłana.', {
					duration: 3000,
					position: 'bottom-center',
				});
				setFormState(initialFormState);
				checkboxRef.current!.checked = false;
			}
		} catch(err) {
			toast.error('Błąd podczas wysyłania wiadomośći. Spróbuj ponownie później.', {
				duration: 3000,
				position: 'bottom-center',
			});
			console.error(err);
		}
		

	};



	return (
		<form className={`${styles.form} ${className}`} onSubmit={sendForm} ref={formRef}>

			<div className={styles.input_container}>
				<input
					type='text'
					className={`${styles.form__input} ${styles['form__input_name']}`}
					placeholder='Imię'
					name='name'
					value={formState.name}
					onChange={handleChange}
					required
				/>
				<p className={`${styles.error} ${errors.name&&styles['error_active']}`}>{errors.name}</p>
			</div>

			<div className={styles.input_container}>
				<input
					type='email'
					className={`${styles.form__input} ${styles['form__input_email']}`}
					placeholder='Email'
					name='email'
					value={formState.email}
					onChange={handleChange}
					required
				/>
				<p className={`${styles.error} ${errors.email&&styles['error_active']}`}>{errors.email}</p>
			</div>

			<div className={styles.input_container}>
				<textarea
					className={`${styles.form__input} ${styles['form__input_message']}`}
					placeholder='Wiadomość'
					name='message'
					value={formState.message}
					onChange={handleChange}
					required
				/>
				<p className={`${styles.error} ${errors.message&&styles['error_active']}`}>{errors.message}</p>
			</div>

			<div className={styles.form__rules}>
				<input type='checkbox' required ref={checkboxRef}/>
				<p>
					Zapoznałem(-am) się i akceptuję {''}{' '}
					<Link to='/polityka-prywatnosci'>politykę prywatności</Link> oraz {''}{' '}
					<Link to='/regulamin'>regulamin</Link>.
				</p>
			</div>

			<button className={styles.form__btn}>
				<p>Wyślij</p>
				<Icon icon='mingcute:send-fill' className={styles.icon} />
			</button>
		</form>
	);
};
