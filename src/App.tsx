import { useEffect, useState } from 'react';
import './index.scss';
import { AppContext } from './context/AppContext';
import { SectionHome } from './components/SectionHome/HomeSection';
import { Nav } from './components/Nav/Nav';
import { SectionOffer } from './components/SectionOffer/SectionOffer';
import { SectionFacilities } from './components/SectionFacilities/SectionFacilities';
import { SectionReview } from './components/SectionReview/SectionReview';
import { SectionPricing } from './components/SectionPricing/SectionPricing';
import { ReachUs } from './components/ReachUs/ReachUs';
import { Footer } from './components/Footer/Footer';


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
			<SectionFacilities/>
			<SectionReview/>
			<SectionPricing/>
			<ReachUs/>
			<Footer/>
		</AppContext.Provider>
	);
};
