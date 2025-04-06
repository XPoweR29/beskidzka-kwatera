import React, { useEffect, useState } from 'react';

export const Loader = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const showLoader = () => setIsVisible(true);
		const hideLoader = () => setIsVisible(false);

		window.addEventListener('show-loader', showLoader);
		window.addEventListener('hide-loader', hideLoader);

		return () => {
			window.removeEventListener('show-loader', showLoader);
			window.removeEventListener('hide-loader', hideLoader);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<div className={`loaderContainer ${!isVisible ? 'hidden' : ''}`}>
			<div className='loader'></div>
		</div>
	);
};
