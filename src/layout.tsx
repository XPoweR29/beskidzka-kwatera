import React, { useContext } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './css/global.scss';
import { AppContext, ContextProvider } from './contexts/app.context';
import { AccountPopup } from './components/AccountPopup/AccountPopup';
import { Toaster } from 'react-hot-toast';

interface Props {
	children: React.ReactNode;
	className?: string;
}

const Layout = ({ className, children }: Props) => {
	const { showAccount } = useContext(AppContext)!;

	return (
		<>
			<Header />
			{showAccount && <AccountPopup />}
			<main className={className} style={{ flexGrow: 1 }}>
				{children}
			</main>
			<Toaster toastOptions={{className: 'toaster'}}/>
			<Footer />
		</>
	);
};

export default Layout;
