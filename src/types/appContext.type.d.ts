import React, { SetStateAction } from "react";

interface AppContextType {
	breakpoint: Breakpoints;

	mobileMenuShown: boolean;
	setMobileMenuShown: React.Dispatch<React.SetStateAction<boolean>>;

	visibleSection: string;
	setVisibleSection: React.Dispatch<React.SetStateAction<string>>
}
