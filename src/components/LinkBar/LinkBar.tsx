import { useContext} from 'react';
import styles from './LinkBar.module.scss';
import { AppContext } from '../../context/AppContext';

interface menuLink {
	name: string;
	href?: string;
	id?: string;
	onClick?: (val: any) => void;
}

export const menuLinks: menuLink[] = [
	{ name: 'Start', href: '#', id: 'home' },
	{ name: 'Oferta', href: '#oferta', id: 'offer' },
	{ name: 'Atrakcje', href: '#atrakcje', id: 'attractions' },
	{ name: 'Udogodnienia', href: '#udogodnienia', id: 'facilities' },
	{ name: 'Kontakt', href: '#kontakt', id: 'contact' },
];

export const LinkBar = () => {
	const { setMobileMenuShown, visibleSection } = useContext(AppContext)!;

	return (
		<div className={styles.linkbar}>
			{menuLinks.map((link, index) => (
				<a
					className={`${styles.link} ${visibleSection === link.id ? styles['link--active'] : ''}`}
					href={link.href}
					key={index}
					onClick={()=>setMobileMenuShown(false)}>
					{link.name}
				</a>
			))}
		</div>
	);
};
