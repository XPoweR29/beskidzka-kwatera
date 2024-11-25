import { SetStateAction } from "react";

interface AppContextType {
	breakpoint: Breakpoints;

	mobileMenuShown: boolean;
	setMobileMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
	visibleSection: string;
	setVisibleSection: React.Dispatch<React.SetStateAction<string>>;
	setShowAccount: React.Dispatch<React.SetStateAction<boolean>>;
	showAccount: boolean;
}
