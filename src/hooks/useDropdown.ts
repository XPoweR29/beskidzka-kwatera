import { DropdownContext } from '@/contexts/dropdown.context';
import { useContext } from 'react';

export const useDropdown = () => {
	const context = useContext(DropdownContext);
	if (!context)
		throw new Error('useMegaMenu must be used within MegaMenuProvider');
	return context;
};
