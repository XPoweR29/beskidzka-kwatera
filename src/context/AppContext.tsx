import { createContext } from 'react';

interface Breakpoints {
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
	xxl: boolean;
}

type AppContextType = {
	breakpoint: Breakpoints;
	mobileMenuShown: boolean;
	setMobileMenuShown: (shown: boolean) => void;
	visibleSection: string;
	setVisibleSection: (sectionId: string) => void;
	setShowAccount: (show: boolean) => void;
};

export const AppContext = createContext<AppContextType | null>(null);
