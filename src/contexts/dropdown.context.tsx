'use client';
import { createContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface DropdownContextType {
	isSubmenuOpen: boolean;
	openMenu: () => void;
	closeMenu: () => void;
}

export const DropdownContext = createContext<DropdownContextType | undefined>(
	undefined
);

export const DropdownProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isSubmenuOpen, setIsOpenSubmenu] = useState(false);
	const pathname = usePathname();
	let hideTimeout: NodeJS.Timeout | null = null;

	const openMenu = () => {
		if (hideTimeout) clearTimeout(hideTimeout);
		setIsOpenSubmenu(true);
	};

	const closeMenu = () => {
		hideTimeout = setTimeout(() => {
			setIsOpenSubmenu(false);
		}, 300);
	};

	useEffect(() => {
		setIsOpenSubmenu(false);
		if (hideTimeout) clearTimeout(hideTimeout);
	}, [pathname]);

	return (
		<DropdownContext.Provider value={{ isSubmenuOpen, openMenu, closeMenu }}>
			{children}
		</DropdownContext.Provider>
	);
};
