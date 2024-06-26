import { useEffect, useState } from 'react';
import './index.scss';
import { AppContext } from './context/AppContext';
import { Toaster } from 'react-hot-toast';
import { Nav } from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './helpers/ScrollToTop';
import { AccountPopup } from './components/AccountPopup/AccountPopup';

export const App = () => {
	const [visibleSection, setVisibleSection] = useState<string>('');
	const [mobileMenuShown, setMobileMenuShown] = useState(false);
	const [showAccount, setShowAccount] = useState(false);
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
		window.history.scrollRestoration = 'manual';

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const contextValues = {
		breakpoint,
		mobileMenuShown,
		setMobileMenuShown,
		visibleSection,
		setVisibleSection,
		setShowAccount,
	};

	return (
		<AppContext.Provider value={contextValues}>
				{showAccount && <AccountPopup/>}
				<Nav />
				<ScrollToTop/>
				<Outlet/>
			<Toaster toastOptions={{ className: 'toaster' }} />
		</AppContext.Provider>
	);
};
