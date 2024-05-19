import toast from "react-hot-toast";

export const copyToClipboard = async (text: string) => {
	const txtArea = document.createElement('textarea');
	txtArea.value = text;
	document.body.appendChild(txtArea);
	txtArea.style.opacity = '0';
	txtArea.select();
	try {
		const success = document.execCommand('copy');
		if (success) {
			toast.success('Skopiowano do schowka.', {
				duration: 3000,
				position: 'top-center',
			});
		}
		document.body.removeChild(txtArea);
	} catch (err) {
		console.log(err);
	}
};
