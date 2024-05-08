import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './Form.module.scss';
import { useRef, useState } from 'react';
import { validateForm } from '../../utils/formValidation';
import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast';

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

//TODO: Nowe konto gmail jako 'nadawca' dla formularza lub uzycie Firebase&Nodemailer 

export const Form = ({ className }: Props) => {
	const [formState, setFormState] = useState<FormState>(initialFormState);
	const [errors, setErrors] = useState<{ [key in keyof FormState]?: string }>({});
	const formRef = useRef<HTMLFormElement|null>(null);
	const checkboxRef = useRef<HTMLInputElement|null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));

		setErrors((prev)=>({...prev, [e.target.name]: null}));
	};

	const sendForm = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm(formState, setErrors)) {
			emailjs.sendForm(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				formRef.current!,
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			).then(() => {
					console.log('Form has been sent successfully');
				}, (error) => {
					console.error(error);
				}
			)

			toast.success('Dziękujemy! Twoja wiadomość została wysłana.', {
				duration: 3000,
				position: 'bottom-center',
			});
			setFormState(initialFormState);
			checkboxRef.current!.checked = false;

		} else {
			console.error('Validation error occured.');
		}
	};

	return (
		<form className={`${styles.form} ${className}`} onSubmit={sendForm} ref={formRef}>

			<div className={styles.input_container}>
				<input
					type='text'
					className={`${styles.form__input} ${styles['form__input--name']}`}
					placeholder='Imię'
					name='name'
					value={formState.name}
					onChange={handleChange}
					required
				/>
				<p className={`${styles.error} ${errors.name&&styles['error--active']}`}>{errors.name}</p>
			</div>

			<div className={styles.input_container}>
				<input
					type='email'
					className={`${styles.form__input} ${styles['form__input--email']}`}
					placeholder='Email'
					name='email'
					value={formState.email}
					onChange={handleChange}
					required
				/>
				<p className={`${styles.error} ${errors.email&&styles['error--active']}`}>{errors.email}</p>
			</div>

			<div className={styles.input_container}>
				<textarea
					className={`${styles.form__input} ${styles['form__input--message']}`}
					placeholder='Wiadomość'
					name='message'
					value={formState.message}
					onChange={handleChange}
					required
				/>
				<p className={`${styles.error} ${errors.message&&styles['error--active']}`}>{errors.message}</p>
			</div>

			<div className={styles.form__rules}>
				<input type='checkbox' required ref={checkboxRef}/>
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
