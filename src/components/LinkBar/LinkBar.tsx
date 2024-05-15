import { useContext, useEffect} from 'react';
import styles from './LinkBar.module.scss';
import { AppContext } from '../../context/AppContext';
import { Link, To, useLocation } from 'react-router-dom';

interface menuLink {
	name: string;
	href: To;
	id?: string;
	onClick?: (val: any) => void;
}

export const menuLinks: menuLink[] = [
	{ name: 'Start', href: '/#', id: 'start' },
	{ name: 'Oferta', href: '/#oferta', id: 'oferta' },
	{ name: 'Udogodnienia', href: '/#udogodnienia', id: 'udogodnienia' },
	{ name: 'Galeria', href: '/galeria', id: 'galeria' },
	{ name: 'Atrakcje', href: '/atrakcje', id: 'atrakcje' },
	{ name: 'Cennik', href: '/#cennik', id: 'cennik' },
	{ name: 'Kontakt', href: '/kontakt', id: 'kontakt' },
];

export const LinkBar = () => {
	const { setMobileMenuShown, visibleSection } = useContext(AppContext)!;
	const location = useLocation();

	//wtf? How does it work?
	useEffect(() => {
		if(location.hash && location.pathname === '/') {
			const id = location.hash.replace('#', '');
			const element = document.getElementById(id);
			if(element) {
				element.scrollIntoView({behavior: 'smooth'});
			}
		}
	}, [location]);

	return (
		<div className={styles.linkbar}>
			{menuLinks.map((link, index) => (
				<Link
					className={`${styles.link} ${visibleSection === link.id ? styles['link--active'] : ''}`}
					to={link.href}
					key={index}
					onClick={()=>setMobileMenuShown(false)}>
					{link.name}
				</Link>
			))}
		</div>
	);
};
