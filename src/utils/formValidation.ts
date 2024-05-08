import { FormState } from "../components/Form/Form";

export const validateForm = (inputs: FormState, setErrors: (val: Partial<FormState>) => void) => {
    const newErrors: { [key in keyof FormState]?: string } = {};
    const regName = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s']+$/;

    //check-name 
    if(inputs.name.trim().length < 3) {
        newErrors.name = 'Imię musi składać się z conajmniej 3 znaków.'
    }

	if (!inputs.name.trim()) {
		newErrors.name = 'Musisz podać swoje imię.';
	}

	if (!regName.test(inputs.name)) {
		newErrors.name = 'Imię nie może zawierać cyfr i znaków specjalnych. ';
	}

    //checkMail
	if (!inputs.email.trim()) {
		newErrors.email = 'Podaj swój adres email.';
	} 
	if (!/\S+@\S+\.\S+/.test(inputs.email)) {
		newErrors.email = 'Podany adres email jest nieprawidłowy.';
	}

    //checkMessage
	if (!inputs.message.trim()) {
		newErrors.message = 'Pole "Wiadomość" jest wymagane.';
	}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
}