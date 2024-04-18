import { useEffect, useState } from 'react';
import './index.scss';
import { AppContext } from './context/AppContext';
import { SectionHome } from './components/SectionHome/HomeSection';
import { Nav } from './components/Nav/Nav';
import { SectionOffer } from './components/SectionOffer/SectionOffer';


export const App = () => {
	const [visibleSection, setVisibleSection] = useState<string>('');
	const [mobileMenuShown, setMobileMenuShown] = useState(false);
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
		mobileMenuShown, setMobileMenuShown,
		visibleSection, setVisibleSection,
	};

	return (
		<AppContext.Provider value={contextValues}>
			<Nav />
			<SectionHome />
			<SectionOffer/>
		</AppContext.Provider>
	);
};
