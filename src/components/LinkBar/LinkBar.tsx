import React from 'react';

import { useContext, useEffect } from 'react';
import * as styles from './LinkBar.module.scss';
import { Link } from 'gatsby';
import { AppContext } from '../../contexts/app.context';
import { useLocation } from '@reach/router';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

interface menuLink {
	name: string;
	href: string;
	id?: string;
	sectionLink: boolean;
}

export const menuLinks: menuLink[] = [
	{ name: 'Start', href: '/#home', id: 'start', sectionLink: true },
	{ name: 'Oferta', href: '/#oferta', id: 'oferta', sectionLink: true },
	{
		name: 'Udogodnienia',
		href: '/#udogodnienia',
		id: 'udogodnienia',
		sectionLink: true,
	},
	{ name: 'Cennik', href: '/#cennik', id: 'cennik', sectionLink: true },
	{ name: 'Galeria', href: '/galeria', id: 'galeria', sectionLink: false },
	{ name: 'Atrakcje', href: '/atrakcje', id: 'atrakcje', sectionLink: false },
	{ name: 'Kontakt', href: '/kontakt', id: 'kontakt', sectionLink: false },
];

export const LinkBar = () => {
	const { setMobileMenuShown, visibleSection } = useContext(AppContext)!;
	const location = useLocation();
	
	useEffect(() => {
		if (location.hash && location.pathname === '/') {
			const id = location.hash.replace('#', '');
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
		if (location.pathname === '/' && !location.hash) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [location]);

	const handleClick = () => {
		setTimeout(() => {
			setMobileMenuShown(false);
		}, 10);
	};

	return (
		<div className={styles.linkbar}>
			{menuLinks.map((link, index) => {
				return link.sectionLink ? (
					<AnchorLink
						className={`${styles.link} ${
							visibleSection === link.id ? styles['linkActive'] : ''
						}`}
						to={link.href}
						key={index}
						onAnchorLinkClick={handleClick}>
						{link.name}
					</AnchorLink>
				) : (
					<Link
						className={`${styles.link} ${
							visibleSection === link.id ? styles['linkActive'] : ''
						}`}
						to={link.href}
						key={index}
						onClick={handleClick}>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
};
