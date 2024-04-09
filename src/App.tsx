import { useEffect, useState } from 'react';
import { Wrapper } from './components/Wrapper/Wrapper';
import './index.scss';
import { AppContext } from './context/AppContext';

export const App = () => {
	const [breakpoint, setBreakpoint] = useState({
		sm: window.innerWidth >= 576,
		md: window.innerWidth >= 768,
		lg: window.innerWidth >= 992,
		xl: window.innerWidth >= 1200,
		xxl: window.innerWidth >= 1400,
	});

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint({
				sm: window.innerWidth >= 576,
				md: window.innerWidth >= 768,
				lg: window.innerWidth >= 992,
				xl: window.innerWidth >= 1200,
				xxl: window.innerWidth >= 1400,
			});
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const contextValues = {
		breakpoint,
	};

	return (
		<AppContext.Provider value={contextValues}>
			<Wrapper className='custom'>
				<h3>Hello World!</h3>
			</Wrapper>
		</AppContext.Provider>
	);
};

