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
};

export const AppContext = createContext<AppContextType | null>(null);
